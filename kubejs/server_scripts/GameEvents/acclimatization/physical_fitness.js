// ============================================
// 体能系统 (Physical Fitness)
// ============================================
// 追踪玩家活动并累积三项体能属性:
//   肺活量  — 水下活动 → OXYGEN_BONUS
//   脚力    — 疾跑      → MOVEMENT_SPEED
// 力量    — 近战攻击 → ATTACK_DAMAGE + BLOCK_BREAK_SPEED + ATTACK_KNOCKBACK
// 每 5 秒检测一次, 只增不减, 死亡不丢失.
// ============================================

// === 配置 ===
const FITNESS_CHECK = 100          // 每 5 秒检测
const FITNESS_MAX = 100            // 等级上限
const GAIN_PER_CHECK = 0.8         // 每次检测增长量 (满级 ≈ 10 分钟持续活动)
const DECAY_PER_CHECK = 0.25       // 每次检测衰退量 (满级 → 0 ≈ 34 分钟荒废)
const DEBUG_LOG = false            // 调试日志开关, 稳定后改为 false

function log(player, msg) {
    if (!DEBUG_LOG) return
    let name = player.getName().getString()
    console.log(`[Fitness] ${name}: ${msg}`)
}

// 属性 modifier ID
const ID_LUNGS = 'fitness:lungs'
const ID_LEGS = 'fitness:legs'
const ID_STRENGTH_ATK = 'fitness:strength_atk'
const ID_STRENGTH_MINE = 'fitness:strength_mine'
const ID_STRENGTH_KB = 'fitness:strength_kb'

// 持久化 key
const KEY_LUNGS = 'fit_lungs'
const KEY_LEGS = 'fit_legs'
const KEY_STRENGTH = 'fit_strength'

// === 等级 → 效果换算 (二次曲线, 以人类极限为上限) ===

function scale(level, maxBonus) {
    // level/100 的平方, 50级=25%, 80级=64%, 100级=100%
    let t = level / 100
    return t * t * maxBonus
}

function getLungBonus(level) {
    // 久经训练的潜水者 vs 普通人: 憋气 8x (15s → 2min)
    return scale(level, 8.0)
}

function getLegBonus(level) {
    // 职业跑者 vs 久坐者: 疾跑 +25% (5.6 → 7.0 m/s)
    return scale(level, 0.025)
}

function getStrengthAtkBonus(level) {
    // 训练有素的战士 vs 普通人: 打击力 +30%
    return scale(level, 0.3)
}

function getStrengthMineBonus(level) {
    // 熟练矿工 vs 新手: 挖掘效率 +30%
    return scale(level, 0.3)
}

function getStrengthKbBonus(level) {
    // 训练有素的战士 vs 普通人: 击退 +30%
    return scale(level, 0.3)
}

// === 等级显示 ===

function getLevelTag(value) {
    if (value >= 90) return '§6V'
    if (value >= 75) return '§5IV'
    if (value >= 55) return '§dIII'
    if (value >= 35) return '§bII'
    if (value >= 15) return '§aI'
    return '§7-'
}

function getLevelColor(value) {
    if (value >= 75) return '§6'
    if (value >= 50) return '§e'
    if (value >= 25) return '§a'
    return '§7'
}

// ============================================
// 体能累积 + 属性应用
// ============================================
ServerEvents.tick(event => {
    if (event.server.tickCount % FITNESS_CHECK !== 0) return

    event.server.players.forEach(player => {
        let pData = player.persistentData

        // 读取等级
        let lungs = pData.getDouble(KEY_LUNGS)
        let legs = pData.getDouble(KEY_LEGS)
        let strength = pData.getDouble(KEY_STRENGTH)

        // === 检测当前活动 ===
        let training_lungs = player.isUnderWater() || (player.isInWater() && player.isSwimming())
        let training_legs = player.isSprinting()
        let training_strength = false  // 由近战攻击事件设定

        // === 累积 (只增不减) ===
        if (training_lungs) {
            lungs = Math.min(FITNESS_MAX, lungs + GAIN_PER_CHECK)
        }

        if (training_legs) {
            legs = Math.min(FITNESS_MAX, legs + GAIN_PER_CHECK)
        }

        if (training_strength) {
            strength = Math.min(FITNESS_MAX, strength + GAIN_PER_CHECK)
        }

        // 写入持久化
        pData.putDouble(KEY_LUNGS, lungs)
        pData.putDouble(KEY_LEGS, legs)
        pData.putDouble(KEY_STRENGTH, strength)

        // === 应用属性 modifier ===
        try {
            let lungBonus = getLungBonus(lungs)
            if (lungBonus > 0) {
                // OXYGEN_BONUS 基础值 0, 必须用加法 (multiply 永远是 0)
                player.modifyAttribute('minecraft:generic.oxygen_bonus', ID_LUNGS, lungBonus, 'add_value')
            } else {
                player.removeAttribute('minecraft:generic.oxygen_bonus', ID_LUNGS)
            }

            let legBonus = getLegBonus(legs)
            if (legBonus > 0 && player.isSprinting()) {
                player.modifyAttribute('minecraft:generic.movement_speed', ID_LEGS, legBonus, 'add_value')
            } else {
                player.removeAttribute('minecraft:generic.movement_speed', ID_LEGS)
            }

            let strAtk = getStrengthAtkBonus(strength)
            if (strAtk > 0) {
                player.modifyAttribute('minecraft:generic.attack_damage', ID_STRENGTH_ATK, strAtk, 'add_value')
            } else {
                player.removeAttribute('minecraft:generic.attack_damage', ID_STRENGTH_ATK)
            }

            let strMine = getStrengthMineBonus(strength)
            if (strMine > 0) {
                player.modifyAttribute('minecraft:generic.block_break_speed', ID_STRENGTH_MINE, strMine, 'add_value')
            } else {
                player.removeAttribute('minecraft:generic.block_break_speed', ID_STRENGTH_MINE)
            }

            let strKb = getStrengthKbBonus(strength)
            if (strKb > 0) {
                player.modifyAttribute('minecraft:generic.attack_knockback', ID_STRENGTH_KB, strKb, 'add_value')
            } else {
                player.removeAttribute('minecraft:generic.attack_knockback', ID_STRENGTH_KB)
            }
        } catch (e) {
            log(player, `属性应用失败! ${e}`)
        }
    })
})

// ============================================
// 力量 — 近战攻击检测
// ============================================
EntityEvents.afterHurt(event => {
    let player = event.source.player
    if (!player) return
    // 近战攻击 (非弹射物/非间接伤害) → 力量训练
    if (!event.source.isIndirect()) {
        let pData = player.persistentData
        let strength = pData.getDouble(KEY_STRENGTH)
        pData.putDouble(KEY_STRENGTH, Math.min(FITNESS_MAX, strength + 2.0))
    }
})

// ============================================
// 玩家上线/复活 — 初始化数据
// ============================================
PlayerEvents.loggedIn(event => {
    let pData = event.player.persistentData
    let isNew = false
    if (!pData.contains(KEY_LUNGS)) { pData.putDouble(KEY_LUNGS, 0); isNew = true }
    if (!pData.contains(KEY_LEGS)) { pData.putDouble(KEY_LEGS, 0); isNew = true }
    if (!pData.contains(KEY_STRENGTH)) { pData.putDouble(KEY_STRENGTH, 0); isNew = true }
    if (isNew) log(event.player, `新玩家, 体能数据已初始化`)
})

PlayerEvents.respawned(event => {
    let pData = event.player.persistentData
    if (!pData.contains(KEY_LUNGS)) pData.putDouble(KEY_LUNGS, 0)
    if (!pData.contains(KEY_LEGS)) pData.putDouble(KEY_LEGS, 0)
    if (!pData.contains(KEY_STRENGTH)) pData.putDouble(KEY_STRENGTH, 0)
    log(event.player, `复活, 体能数据已保留`)
})

// ============================================
// 调试命令: /fitness
// ============================================
ServerEvents.commandRegistry(event => {
    const { commands: Commands, arguments: Arguments } = event

    event.register(
        Commands.literal('fitness')
            .executes(ctx => {
                let player = ctx.source.player
                if (!player) return 0
                showFitness(player)
                return 1
            })
            .then(Commands.literal('set')
                .then(Commands.argument('target', Arguments.PLAYER.create(event))
                    .then(Commands.argument('stat', Arguments.STRING.create(event))
                        .suggests((context, builder) => {
                            builder.suggest('lungs')
                            builder.suggest('legs')
                            builder.suggest('strength')
                            return builder.buildFuture()
                        })
                        .then(Commands.argument('value', Arguments.DOUBLE.create(event))
                            .executes(ctx => {
                                let target = Arguments.PLAYER.getResult(ctx, 'target')
                                let stat = Arguments.STRING.getResult(ctx, 'stat').toLowerCase()
                                let value = Arguments.DOUBLE.getResult(ctx, 'value')
                                let source = ctx.source.player

                                let keyMap = {
                                    lungs: KEY_LUNGS, legs: KEY_LEGS,
                                    strength: KEY_STRENGTH
                                }
                                let nameMap = {
                                    lungs: '肺活量', legs: '脚力',
                                    strength: '力量'
                                }

                                let key = keyMap[stat]
                                if (!key) {
                                    if (source) source.tell('§c类型: lungs / legs / strength')
                                    return 0
                                }
                                value = Math.max(0, Math.min(100, value))
                                target.persistentData.putDouble(key, value)

                                if (source) {
                                    source.tell(`§a已将 §e${target.getName().getString()} §a的${nameMap[stat]}设为 §f${value.toFixed(1)}`)
                                }
                                return 1
                            })
                        )
                    )
                )
            )
    )
})

function showFitness(player) {
    let pData = player.persistentData
    let lungs = pData.getDouble(KEY_LUNGS)
    let legs = pData.getDouble(KEY_LEGS)
    let strength = pData.getDouble(KEY_STRENGTH)

    let lungBar = makeBar(lungs)
    let legBar = makeBar(legs)
    let strBar = makeBar(strength)

    player.tell(`§b=== 体能状态 ===`)
    player.tell(`§3肺活量: ${getLevelColor(lungs)}${lungs.toFixed(1)} ${getLevelTag(lungs)} §8${lungBar}`)
    player.tell(`§e脚力:   ${getLevelColor(legs)}${legs.toFixed(1)} ${getLevelTag(legs)} §8${legBar}`)
    player.tell(`§c力量:   ${getLevelColor(strength)}${strength.toFixed(1)} ${getLevelTag(strength)} §8${strBar}`)
}

function makeBar(value) {
    let filled = Math.floor(value / 10)
    let empty = 10 - filled
    let bar = ''
    for (let i = 0; i < filled; i++) bar += '§a|'
    for (let i = 0; i < empty; i++) bar += '§7|'
    return bar
}
