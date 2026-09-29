// === 琥珀金护身符：缓降效果 ===

// 配置
const CONFIG = {
    AMULET_ID: 'createaddition:electrum_amulet',
    EFFECT: 'alexsmobs:sunbird_blessing',  // 缓降效果
    EFFECT_DURATION: 20 * 10,         // 持续 10 秒（20 tick = 1秒）
    EFFECT_AMPLIFIER: 0               // 效果等级 0（I 级）
}

// 定时给有护身符的玩家加缓降效果
ServerEvents.tick(event => {
    if (event.server.tickCount % 100 !== 0) return  // 每 5 秒检查一次

    const amulet = Item.of(CONFIG.AMULET_ID)

    event.server.players.forEach(player => {
        // 检查背包里有没有护身符
        if (!player.inventory.contains(amulet)) return

        // 加缓降效果
        player.potionEffects.add(CONFIG.EFFECT, CONFIG.EFFECT_DURATION, CONFIG.EFFECT_AMPLIFIER)
    })
})
