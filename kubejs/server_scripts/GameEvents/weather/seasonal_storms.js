// ============================================
// 季节雷暴系统 (Seasonal Storm System)
// ============================================
// 夏季和冬季持续雷暴, 中间穿插短暂晴天.
// SereneSeasons 的 change_weather_frequency 已关闭,
// 天气调度完全由此脚本接管.
//
// 日程表模式: 每个夏/冬季节用种子算 24 天雷暴表,
// 每 30 秒查表纠正天气. 重启后种子不变, 结果一致.
// ============================================

// === 日程表配置 ===
const STORM_MIN_DAYS = 5       // 一次雷暴最短天数
const STORM_MAX_DAYS = 10      // 一次雷暴最长天数
const CLEAR_MIN_DAYS = 1       // 一次晴天最短天数
const CLEAR_MAX_DAYS = 3       // 一次晴天最长天数
const CLEAR_MAX_TOTAL = 7      // 24天中晴天总数上限 (≈29%)
const SEASON_DAYS = 24         // 大季节总天数
const WEATHER_CHECK_INTERVAL = 200   // 每10秒检查一次

// SereneSeasons 季节 API
let SeasonHelper

function loadAPI() {
    if (SeasonHelper) return
    SeasonHelper = Java.loadClass('sereneseasons.api.season.SeasonHelper')
}

// ============================================
// 真随机数生成器
// ============================================
// 每次调用返回不可预测的值, 无确定性

// function SeededRandom(seed) {
//     return {
//         next() {
//             return Math.random()  // 0 ~ 1
//         },
//         nextInt(min, max) {
//             return Math.floor(Math.random() * (max - min + 1)) + min
//         }
//     }
// }

//改为种子随机数 
function SeededRandom(seed) {
    // 只保留 32 位无符号, 防止负数/浮点传入导致状态异常
    let state = (seed >>> 0)

    function next() {
        // mulberry32 核心
        state = (state + 0x6D2B79F5) >>> 0
        let t = state
        t = Math.imul(t ^ (t >>> 15), t | 1)
        t ^= t + Math.imul(t ^ (t >>> 7), t | 61)
        return ((t ^ (t >>> 14)) >>> 0) / 4294967296
    }

    return {
        next() {
            return next()
        },
        nextInt(min, max) {
            // [min, max] 闭区间整数
            return Math.floor(next() * (max - min + 1)) + min
        }
    }
}

// ============================================
// 日程表生成
// ============================================

/**
 * 生成 24 天雷暴日程表: true=雷暴, false=晴天
 *
 * 规则:
 *  - 雷暴段 5~10 天
 *  - 晴天段 1~3 天
 *  - 晴天总数 ≤ 7
 */
function generateSchedule(seed) {
    let rng = SeededRandom(seed)
    let schedule = []
    let total = 0
    let clearTotal = 0
    let isStorm = true

    while (total < SEASON_DAYS) {
        let len
        if (isStorm) {
            len = rng.nextInt(STORM_MIN_DAYS, STORM_MAX_DAYS)
        } else {
            let maxClear = Math.min(CLEAR_MAX_DAYS, CLEAR_MAX_TOTAL - clearTotal)
            if (maxClear < CLEAR_MIN_DAYS) {
                // 晴天配额用完, 剩余天数全雷暴
                for (let i = 0; i < SEASON_DAYS - total; i++) {
                    schedule.push(true)
                }
                break
            }
            len = rng.nextInt(CLEAR_MIN_DAYS, maxClear)
            clearTotal += len
        }

        // 最后一段可能超出 24 天, 截断
        if (total + len > SEASON_DAYS) {
            len = SEASON_DAYS - total
        }
        for (let i = 0; i < len; i++) {
            schedule.push(isStorm)
        }
        total += len
        isStorm = !isStorm
    }

    return schedule
}

// ============================================
// 季节数据获取
// ============================================

function getCurrentSubSeason(level) {
    loadAPI()
    try {
        let state = SeasonHelper.getSeasonState(level)
        let subSeasonEnum = state.getSubSeason()
        return subSeasonEnum.ordinal() + 1  // 1-12
    } catch (e) {
        let totalDays = Math.floor(level.time / 24000)
        let subIndex = (Math.floor(totalDays / 8) + 8) % 12
        return subIndex + 1
    }
}

function getSeasonalDay(level) {
    loadAPI()
    let state = SeasonHelper.getSeasonState(level)
    let seasonOffset = state.getSeason().ordinal() * 24
    let day = (state.getDay() - seasonOffset) % 24
    if (day < 0) day += 24
    return day  // 0-23
}

function getSeasonKey(level) {
    loadAPI()
    try {
        let state = SeasonHelper.getSeasonState(level)
        return '' + state.getSeason().name()  // "SPRING" / "SUMMER" / "AUTUMN" / "WINTER"
    } catch (e) {
        return 'default_FALLBACK'
    }
}

function getSeasonName(subSeason) {
    if (subSeason >= 4 && subSeason <= 6) return 'summer'
    if (subSeason >= 10 && subSeason <= 12) return 'winter'
    if (subSeason >= 7 && subSeason <= 9) return 'autumn'
    return 'spring'
}

function isStormSeason(subSeason) {
    let name = getSeasonName(subSeason)
    return name === 'summer' || name === 'winter'
}

function getSubSeasonName(subSeason) {
    let seasonCN = { spring: '春', summer: '夏', autumn: '秋', winter: '冬' }
    let stageCN = { 1: '初', 2: '中', 3: '晚' }
    let season = getSeasonName(subSeason)
    let stageIndex = ((subSeason - 1) % 3) + 1
    return stageCN[stageIndex] + seasonCN[season]
}

// ============================================
// 天气调度
// ============================================

// 缓存: { seasonIndex, schedule } — 同一季节只算一次
let cachedSeasonKey = ""
let cachedSchedule = null

ServerEvents.tick(event => {
    if (event.server.tickCount % WEATHER_CHECK_INTERVAL !== 0) return

    let level = event.server.overworld()
    if (!level) return

    let subSeason = getCurrentSubSeason(level) //得到 1-12数字 季节字符
    // 非夏/冬 → 清缓存, 放手给原版
    if (!isStormSeason(subSeason)) {
        cachedSeasonKey = ""
        cachedSchedule = null
        return
    }

    let seasonKey = getSeasonKey(level)

    // 季节变了 → 重新生成日程表
    if (seasonKey !== cachedSeasonKey) {
        let seed = (level.seed ^ seasonKey.split('').reduce((h, c) => h * 31 + c.charCodeAt(0), 0)) & 0x7FFFFFFF
        cachedSchedule = generateSchedule(seed)
        cachedSeasonKey = seasonKey
    }
console.log('key =', seasonKey, '| type =', typeof seasonKey, '| len =', seasonKey.length, '| splitLen =', seasonKey.split('').length)
    let day = getSeasonalDay(level)
    if (day < 0 || day >= SEASON_DAYS) return

    let shouldStorm = cachedSchedule[day]
    let isThundering = level.thundering

    // 查表纠正
    if (shouldStorm && !isThundering) {
        event.server.runCommandSilent(`weather thunder`)
    } else if (!shouldStorm && (level.raining || isThundering)) {
        event.server.runCommandSilent(`weather clear`)
    }
})

// ============================================
// 调试命令: /season_weather
// ============================================

ServerEvents.commandRegistry(event => {
    const { commands: Commands } = event

    event.register(
        Commands.literal('season_weather')
            .executes(ctx => {
                let player = ctx.source.player
                if (!player) return 0
                let level = ctx.source.level
                let subSeason = getCurrentSubSeason(level) //得到 1-12数字 季节字符
                let day = getSeasonalDay(level) //得到季节内具体天数 0-23数字 
                let year = getSeasonKey(level)

                player.tell(`§b=== 季节天气系统 ===`)
                player.tell(`§7当前年份: §f${year}/年`)
                player.tell(`§7当前季节: §f${getSubSeasonName(subSeason)} §7(子季节索引 ${subSeason})`)
                player.tell(`§7季节内第: §f${day + 1}/24 天`)
                player.tell(`§7当前下雨: §f${level.raining} §7| 雷暴: §f${level.thundering}`)

                if (isStormSeason(subSeason)) {
                    let seasonKey = getSeasonKey(level)
                    let schedule

                    // 优先用缓存(同一季节)
                    if (seasonKey === cachedSeasonKey && cachedSchedule) {
                        schedule = cachedSchedule
                    } else {
                        let seed = (level.seed ^ seasonKey.split('').reduce((h, c) => h * 31 + c.charCodeAt(0), 0)) & 0x7FFFFFFF
                        schedule = generateSchedule(seed)
                    }

                    let bar = ''
                    for (let i = 0; i < SEASON_DAYS; i++) {
                        if (i === day) {
                            bar += schedule[i] ? '§4§lX§r' : '§a§lO§r'
                        } else {
                            bar += schedule[i] ? '§8x' : '§7o'
                        }
                    }
                    let stormCount = schedule.filter(s => s).length
                    let clearCount = SEASON_DAYS - stormCount
                    player.tell(`§7日程表: §f${bar}`)
                    player.tell(`§8x=雷暴 §7o=晴天 §4§lX§r§8=今天`)
                    player.tell(`§7雷暴: §f${stormCount}天 §7| 晴天: §f${clearCount}天`)
                } else {
                    player.tell(`§7当前非夏/冬季, 天气由原版控制.`)
                }
                return 1
            })
            // /season_weather force_storm — 手动切雷暴
            .then(Commands.literal('force_storm')
                .executes(ctx => {
                    let player = ctx.source.player
                    if (!player) return 0
                    let level = ctx.source.level
                    let subSeason = getCurrentSubSeason(level)
                    if (!isStormSeason(subSeason)) {
                        player.tell('§c当前不在夏/冬季节, 无法强制雷暴.')
                        return 0
                    }
                    ctx.source.server.runCommandSilent('weather thunder 999999')
                    player.tell('§a已强制开启雷暴.')
                    return 1
                })
            )
    )
})
