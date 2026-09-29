// ============================================
// 适应力系统 (Acclimatization)
// ============================================
// 基于玩家所在环境温度动态累积耐寒/耐热能力.
// 通过 Cold Sweat 的 Attribute (cold_dampening / heat_dampening)
// 减缓核心体温变化速率.
// dampening=0 无抵抗, dampening=1 完全阻止温度变化.
// ============================================

// === 配置 ===
const CHECK_INTERVAL_TICKS = 20
const ACCLIMATION_PER_CHECK = 0.1
const ACCLIMATION_MAX = 100
const HEAT_DECAY_RATE = 0.05
const COLD_DECAY_RATE = 0.01
const CROSS_DECAY_RATE = 0.03

const COLD_STRESS_START = 0
const COLD_STRESS_MAX = -0.4
const HEAT_STRESS_START = 1.0
const HEAT_STRESS_MAX = 1.4

function getResistancePercent(value) {
    if (value >= 90) return 0.32
    if (value >= 75) return 0.26
    if (value >= 55) return 0.19
    if (value >= 35) return 0.13
    if (value >= 18) return 0.06
    if (value >= 6)  return 0.03
    return 0
}

function getAcclimationLevel(value) {
    if (value >= 90) return 'V'
    if (value >= 75) return 'V'
    if (value >= 55) return 'IV'
    if (value >= 35) return 'III'
    if (value >= 18) return 'II'
    if (value >= 6)  return 'I'
    return '-'
}

let lastPlayerTemps = new Map()

// ============================================
// 适应力累积 + 应用 dampening
// ============================================
ServerEvents.tick(event => {
    if (event.server.tickCount % CHECK_INTERVAL_TICKS !== 0) return

    event.server.players.forEach(player => {
        let uuid = player.getUuid().toString()

        let envTemp = coldsweat.getTemperature(player, 'world')
        lastPlayerTemps.set(uuid, envTemp)

        let pData = player.persistentData
        let coldAcc = pData.getDouble('cold_acclimation')
        let heatAcc = pData.getDouble('heat_acclimation')

        // === 适应力累积 ===
        if (envTemp <= COLD_STRESS_START) {
            let severity = Math.min(1.0, Math.abs(envTemp - COLD_STRESS_START) / Math.abs(COLD_STRESS_MAX - COLD_STRESS_START))
            coldAcc = Math.min(ACCLIMATION_MAX, coldAcc + ACCLIMATION_PER_CHECK * Math.max(0.2, severity))
            heatAcc = Math.max(0, heatAcc - CROSS_DECAY_RATE * severity)
        } else if (envTemp >= HEAT_STRESS_START) {
            let severity = Math.min(1.0, (envTemp - HEAT_STRESS_START) / (HEAT_STRESS_MAX - HEAT_STRESS_START))
            heatAcc = Math.min(ACCLIMATION_MAX, heatAcc + ACCLIMATION_PER_CHECK * Math.max(0.2, severity))
            coldAcc = Math.max(0, coldAcc - CROSS_DECAY_RATE * severity)
        } else {
            coldAcc = Math.max(0, coldAcc - COLD_DECAY_RATE)
            heatAcc = Math.max(0, heatAcc - HEAT_DECAY_RATE)
        }

        pData.putDouble('cold_acclimation', coldAcc)
        pData.putDouble('heat_acclimation', heatAcc)

        // === 应用 dampening ===
        let coldRes = getResistancePercent(coldAcc)
        let heatRes = getResistancePercent(heatAcc)

        player.getAttribute('cold_sweat:cold_dampening').setBaseValue(coldRes)
        player.getAttribute('cold_sweat:heat_dampening').setBaseValue(heatRes)
    })
})

// ============================================
// 调试命令: /acclimation
// ============================================
ServerEvents.commandRegistry(event => {
    const { commands: Commands, arguments: Arguments } = event

    event.register(
        Commands.literal('acclimation')
            .executes(ctx => {
                let player = ctx.source.player
                if (!player) return 0
                showAcclimation(player)
                return 1
            })
            .then(Commands.literal('set')
                .then(Commands.argument('target', Arguments.PLAYER.create(event))
                    .then(Commands.argument('type', Arguments.STRING.create(event))
                        .suggests((context, builder) => {
                            builder.suggest('cold')
                            builder.suggest('heat')
                            return builder.buildFuture()
                        })
                        .then(Commands.argument('value', Arguments.DOUBLE.create(event))
                            .executes(ctx => {
                                let target = Arguments.PLAYER.getResult(ctx, 'target')
                                let type = Arguments.STRING.getResult(ctx, 'type').toLowerCase()
                                let value = Arguments.DOUBLE.getResult(ctx, 'value')
                                let source = ctx.source.player

                                if (type !== 'cold' && type !== 'heat') {
                                    if (source) source.tell('§c类型必须是 cold 或 heat')
                                    return 0
                                }
                                value = Math.max(0, Math.min(100, value))

                                let key = type === 'cold' ? 'cold_acclimation' : 'heat_acclimation'
                                target.persistentData.putDouble(key, value)

                                if (source) {
                                    let name = type === 'cold' ? '耐寒' : '耐热'
                                    source.tell(`§a已将 §e${target.getName().getString()} §a的${name}适应力设为 §f${value.toFixed(1)}`)
                                }
                                return 1
                            })
                        )
                    )
                )
            )
    )
})

function showAcclimation(player) {
    let pData = player.persistentData
    let coldAcc = pData.getDouble('cold_acclimation')
    let heatAcc = pData.getDouble('heat_acclimation')
    let bodyTemp = lastPlayerTemps.get(player.getUuid().toString())

    let coldLevel = getAcclimationLevel(coldAcc)
    let heatLevel = getAcclimationLevel(heatAcc)
    let coldRes = (getResistancePercent(coldAcc) * 100).toFixed(1)
    let heatRes = (getResistancePercent(heatAcc) * 100).toFixed(1)

    // 读取实际 dampening 属性值
    let actualCold = player.getAttribute('cold_sweat:cold_dampening').getValue()
    let actualHeat = player.getAttribute('cold_sweat:heat_dampening').getValue()

    player.tell(`§b=== 适应力状态 ===`)
    player.tell(`§3耐寒: §f${coldAcc.toFixed(1)} §7(Lv${coldLevel}) §8抵抗 ${coldRes}% §7| dampening=§f${actualCold.toFixed(3)}`)
    player.tell(`§6耐热: §f${heatAcc.toFixed(1)} §7(Lv${heatLevel}) §8抵抗 ${heatRes}% §7| dampening=§f${actualHeat.toFixed(3)}`)
    if (bodyTemp !== undefined) {
        player.tell(`§7环境温度: §f${bodyTemp.toFixed(2)} MC`)
    }
}
