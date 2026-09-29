// // ============================================
// // 雷暴灾难系统 (Storm Disaster System)
// // ============================================
// // KubeJS 控制闪电生成，Thunderhead 负责客户端特效
// //
// // 设计思路：
// //   1. 检测雷暴天气开始（从非雷暴变为雷暴）
// //   2. 随机取周期持续时间（范围内）
// //   3. 根据已经过的时间计算生命周期
// //      - 发展阶段：闪电频率逐渐增加
// //      - 成熟阶段：闪电频率峰值
// //      - 消散阶段：闪电频率逐渐减少
// //   4. 周期结束后等待下一次雷暴开始
// //
// // 整合包时间：一个昼夜 = 2小时（24000刻）
// // ============================================

// // === 配置 ===
// const CHECK_INTERVAL = 20          // 每 1 秒检查一次
// const BASE_LIGHTNING_CHANCE = 0.3  // 峰值时每次检查生成闪电的概率（0-1）

// // 闪电距离分段配置（可调整）
// // 每个分段：min=最小距离, max=最大距离, weight=相对概率权重
// // 生成时先按权重选择分段，再在分段内均匀随机距离
// // weight=0 表示该分段不生成闪电
// // 可以添加更多分段，如 { min: 0, max: 50, weight: 0 }, { min: 50, max: 100, weight: 0.2 }
// const DISTANCE_ZONES = [
//     { min: 0,   max: 150, weight: 0 },   // 0-100 格：安全区，不生成
//     { min: 150, max: 256, weight: 1 }    // 100-256 格：正常生成
// ]

// // 周期持续时间范围（刻）
// // 24000刻 = 2小时（一个昼夜）
// // 12000刻 = 1小时
// const MIN_DURATION = 3000         
// const MAX_DURATION = 9000         

// // 生命周期阶段比例
// const GROWTH_RATIO = 0.2           // 发展阶段占 20%
// const MATURE_RATIO = 0.6           // 成熟阶段占 60%
// const DECAY_RATIO = 0.2            // 消散阶段占 20%

// // === 云层与闪电类型配置 ===
// const CLOUD_HEIGHT = 470            // 整合包统一云层高度

// // 闪电类型（用 y 坐标编码，客户端根据高度判断类型）
// // CG=对地(Cloud-to-Ground), CC=云间(Cloud-to-Cloud), IC=云内(Intra-Cloud), CA=云对空(Cloud-to-Air)
// const LIGHTNING_TYPES = {
//     CG: { name: '对地', weight: { growth: 20, mature: 50, decay: 15 } },
//     CC: { name: '云间', weight: { growth: 30, mature: 25, decay: 35 } },
//     IC: { name: '云内', weight: { growth: 40, mature: 15, decay: 45 } },
//     CA: { name: '云对空', weight: { growth: 10, mature: 10, decay: 5 } }
// }

// // 根据周期阶段选择闪电类型
// function selectLightningType(progress) {
//     let stage = 'growth'
//     if (progress >= GROWTH_RATIO && progress < GROWTH_RATIO + MATURE_RATIO) {
//         stage = 'mature'
//     } else if (progress >= GROWTH_RATIO + MATURE_RATIO) {
//         stage = 'decay'
//     }

//     // 计算总权重
//     let totalWeight = 0
//     for (let key in LIGHTNING_TYPES) {
//         totalWeight += LIGHTNING_TYPES[key].weight[stage]
//     }

//     // 随机选择
//     let rand = Math.random() * totalWeight
//     let cumulative = 0
//     for (let key in LIGHTNING_TYPES) {
//         cumulative += LIGHTNING_TYPES[key].weight[stage]
//         if (rand < cumulative) return key
//     }
//     return 'CG'
// }

// // === 模块级状态 ===
// let stormState = {
//     active: false,      // 当前是否在雷暴周期中
//     duration: 0,        // 当前周期总时长（刻）
//     startTime: 0        // 周期开始时间（游戏刻）
// }

// // === 开始新的雷暴周期 ===
// function startStormCycle(level) {
//     let duration = Math.floor(Math.random() * (MAX_DURATION - MIN_DURATION + 1)) + MIN_DURATION
//     stormState.active = true
//     stormState.duration = duration
//     stormState.startTime = level.time

//     console.log(`[雷暴灾难] 新周期开始，持续 ${duration} 刻 (${(duration / 12000).toFixed(1)} 小时)`)
// }

// // === 结束雷暴周期 ===
// function endStormCycle() {
//     stormState.active = false
//     stormState.duration = 0
//     stormState.startTime = 0
//     console.log('[雷暴灾难] 周期结束')
// }

// // === 计算当前生命周期进度（0.0 - 1.0）===
// function getCycleProgress(level) {
//     if (!stormState.active) return 0
//     let elapsed = level.time - stormState.startTime
//     return Math.min(1.0, elapsed / stormState.duration)
// }

// // === 计算当前生命周期的闪电频率系数 ===
// // 使用正弦函数：发展阶段上升，成熟阶段峰值，消散阶段下降
// // 返回 0.0 - 1.0
// function getLifeCycleFactor(progress) {
//     // 将进度映射到 0-PI
//     // progress=0 -> 0（开始，频率0）
//     // progress=0.5 -> PI/2（中期，频率峰值）
//     // progress=1 -> PI（结束，频率0）
//     let angle = progress * Math.PI
//     return Math.sin(angle)
// }

// // === 获取当前生命周期阶段名称 ===
// function getLifeCycleStage(progress) {
//     if (progress < GROWTH_RATIO) return '发展阶段'
//     if (progress < GROWTH_RATIO + MATURE_RATIO) return '成熟阶段'
//     return '消散阶段'
// }

// // === 根据距离分段配置随机生成距离 ===
// function randomLightningDistance() {
//     // 计算总权重
//     let totalWeight = 0
//     for (let zone of DISTANCE_ZONES) {
//         totalWeight += zone.weight
//     }
//     if (totalWeight <= 0) return -1  // 所有分段权重都为 0，不生成

//     // 按权重选择分段
//     let rand = Math.random() * totalWeight
//     let cumulative = 0
//     let selectedZone = DISTANCE_ZONES[DISTANCE_ZONES.length - 1]
//     for (let zone of DISTANCE_ZONES) {
//         cumulative += zone.weight
//         if (rand < cumulative) {
//             selectedZone = zone
//             break
//         }
//     }

//     // 在分段内均匀随机距离
//     return selectedZone.min + Math.random() * (selectedZone.max - selectedZone.min)
// }

// // === 在玩家周围生成闪电 ===
// // 根据周期阶段选择闪电类型，用 y 坐标编码类型（客户端根据高度判断）
// // 距离分布：按 DISTANCE_ZONES 分段权重选择
// function spawnLightningNearPlayer(level, player, progress) {
//     // 按距离分段配置随机生成距离
//     let distance = randomLightningDistance()
//     if (distance < 0) return  // 不生成

//     let angle = Math.random() * Math.PI * 2
//     let x = player.x + distance * Math.cos(angle)
//     let z = player.z + distance * Math.sin(angle)
//     let groundY = level.getHeight('world_surface', Math.floor(x), Math.floor(z))

//     // 选择闪电类型
//     let type = selectLightningType(progress)

//     // 根据类型设置 y 坐标（客户端根据高度判断类型）
//     let y
//     switch (type) {
//         case 'CG':  // 对地：y = 地面
//             y = groundY
//             break
//         case 'CC':  // 云间：y = 云层高度
//             y = CLOUD_HEIGHT
//             break
//         case 'IC':  // 云内：y = 云层高度 ± 10
//             y = CLOUD_HEIGHT + Math.floor(Math.random() * 21) - 10
//             break
//         case 'CA':  // 云对空：y = 云层上方 30-80
//             y = CLOUD_HEIGHT + 30 + Math.floor(Math.random() * 51)
//             break
//         default:
//             y = groundY
//     }

//     // 召唤原版闪电（y 坐标编码类型，客户端拦截后重新渲染）
//     level.server.runCommandSilent(`summon lightning_bolt ${x} ${y} ${z}`)
// }

// // === 主循环 ===
// ServerEvents.tick(event => {
//     if (event.server.tickCount % CHECK_INTERVAL !== 0) return

//     let level = event.server.overworld()
//     if (!level) return

//     let isThundering = level.isThundering()

//     // 检测雷暴开始：从非雷暴变为雷暴
//     if (isThundering && !stormState.active) {
//         startStormCycle(level)
//     }

//     // 检测雷暴结束：从雷暴变为非雷暴
//     if (!isThundering && stormState.active) {
//         endStormCycle()
//         return
//     }

//     // 非雷暴天气，不处理
//     if (!isThundering) return

//     // 计算周期进度
//     let progress = getCycleProgress(level)

//     // 周期结束
//     if (progress >= 1.0) {
//         endStormCycle()
//         return
//     }

//     // 计算生命周期系数
//     let factor = getLifeCycleFactor(progress)
//     if (factor <= 0) return

//     // 计算本次检查生成闪电的概率
//     let chance = BASE_LIGHTNING_CHANCE * factor

//     // 在玩家周围生成闪电
//     let players = level.players
//     if (players.length === 0) return

//     players.forEach(player => {
//         if (Math.random() < chance) {
//             spawnLightningNearPlayer(level, player, progress)
//         }
//     })
// })

// // ============================================
// // 调试命令: /storm_disaster
// // ============================================
// ServerEvents.commandRegistry(event => {
//     const { commands: Commands } = event

//     event.register(
//         Commands.literal('storm_disaster')
//             .executes(ctx => {
//                 let player = ctx.source.player
//                 if (!player) return 0
//                 let level = ctx.source.level

//                 let isThundering = level.isThundering()
//                 let active = stormState.active

//                 player.tell('§b=== 雷暴灾难系统 ===')
//                 player.tell(`§7当前雷暴天气: §f${isThundering}`)
//                 player.tell(`§7灾难周期激活: §f${active}`)

//                 if (active) {
//                     let progress = getCycleProgress(level)
//                     let factor = getLifeCycleFactor(progress)
//                     let chance = BASE_LIGHTNING_CHANCE * factor
//                     let elapsed = level.time - stormState.startTime
//                     let remaining = stormState.duration - elapsed

//                     player.tell(`§7周期进度: §f${(progress * 100).toFixed(1)}% (${getLifeCycleStage(progress)})`)
//                     player.tell(`§7已持续: §f${(elapsed / 12000).toFixed(2)} 小时`)
//                     player.tell(`§7剩余时间: §f${(remaining / 12000).toFixed(2)} 小时`)
//                     player.tell(`§7总周期: §f${(stormState.duration / 12000).toFixed(2)} 小时`)
//                     player.tell(`§7生命周期系数: §f${(factor * 100).toFixed(1)}%`)
//                     player.tell(`§7闪电概率: §f${(chance * 100).toFixed(1)}%/秒`)
//                 } else if (isThundering) {
//                     player.tell('§e雷暴天气已开始，周期即将启动...')
//                 } else {
//                     player.tell('§7当前非雷暴天气，等待下一次雷暴')
//                 }

//                 return 1
//             })
//             // /storm_disaster test - 在玩家周围生成5道闪电测试
//             .then(Commands.literal('test')
//                 .executes(ctx => {
//                     let player = ctx.source.player
//                     if (!player) return 0
//                     let level = ctx.source.level

//                     for (let i = 0; i < 5; i++) {
//                         spawnLightningNearPlayer(level, player)
//                     }
//                     player.tell('§a已生成5道测试闪电')
//                     return 1
//                 })
//             )
//             // /storm_disaster reset - 重置当前周期（调试用）
//             .then(Commands.literal('reset')
//                 .executes(ctx => {
//                     let player = ctx.source.player
//                     if (!player) return 0
//                     endStormCycle()
//                     player.tell('§a已重置雷暴周期')
//                     return 1
//                 })
//             )
//     )
// })
