// 隔温装备
ColdSweatEvents.registries(event => {
    const addArmorInsulation = (itemId, cold, heat) => {
        event.addInsulator(item =>
            item.items(itemId)
                .insulation(cold, heat)
                .slot("armor")
                .fillSlots(false)
        )
    }
    // 自适应隔温装备
    const addAdaptiveArmorInsulation = (itemId, amount, adaptSpeed) => {
        event.addInsulator(item =>
            item.items(itemId)
                .adaptiveInsulation(amount, adaptSpeed)
                .slot("armor")
                .fillSlots(false)
        )
    }
    // 按套装前缀一次性注册四件护甲的隔温 奇幻甲胄专用
    const addArmorSetInsulation = (prefix, helmet, chestplate, leggings, boots) => {
        addArmorInsulation(`fantasy_armor:${prefix}_helmet`, helmet[0], helmet[1])
        addArmorInsulation(`fantasy_armor:${prefix}_chestplate`, chestplate[0], chestplate[1])
        addArmorInsulation(`fantasy_armor:${prefix}_leggings`, leggings[0], leggings[1])
        addArmorInsulation(`fantasy_armor:${prefix}_boots`, boots[0], boots[1])
    }

    // 皮革是基础双向隔温, 适合作为玩家前期通用保暖层
    addArmorInsulation("minecraft:leather_helmet", 4, 4)
    addArmorInsulation("minecraft:leather_boots", 4, 4)
    addArmorInsulation("minecraft:leather_chestplate", 6, 6)
    addArmorInsulation("minecraft:leather_leggings", 5, 5)

    // 猪灵皮偏抗热, 适合下界或高热环境
    addArmorInsulation("cold_sweat:hoglin_helmet", 0, 8)
    addArmorInsulation("cold_sweat:hoglin_boots", 0, 8)
    addArmorInsulation("cold_sweat:hoglin_chestplate", 0, 14)
    addArmorInsulation("cold_sweat:hoglin_leggings", 0, 10)

    // 山羊毛偏抗寒, 适合寒冷环境和前期保暖需求
    addArmorInsulation("cold_sweat:goat_fur_helmet", 8, 0)
    addArmorInsulation("cold_sweat:goat_fur_boots", 8, 0)
    addArmorInsulation("cold_sweat:goat_fur_chestplate", 14, 0)
    addArmorInsulation("cold_sweat:goat_fur_leggings", 10, 0)

    // 变色龙鳞片套装更适合做自适应隔温, 在冷热环境之间动态调整
    addAdaptiveArmorInsulation("cold_sweat:chameleon_helmet", 10, 0.1)
    addAdaptiveArmorInsulation("cold_sweat:chameleon_boots", 10, 0.1)
    addAdaptiveArmorInsulation("cold_sweat:chameleon_chestplate", 14, 0.1)
    addAdaptiveArmorInsulation("cold_sweat:chameleon_leggings", 12, 0.1)

    // 特殊防护服提供更均衡的高阶双向隔温
    addArmorInsulation("spore:inf_up_helmet", 6, 6)
    addArmorInsulation("spore:inf_up_chest", 10, 10)
    addArmorInsulation("spore:inf_up_boots", 6, 6)
    addArmorInsulation("spore:inf_up_pants", 8, 8)

    // 厨师帽更多是轻微保暖, 不作为强力环境护具
    addArmorInsulation("ratatouille:chef_hat", 3, 0)
    addArmorInsulation("ratatouille:chef_hat_with_goggles", 3, 0)

    //奇幻甲胄
    const fantasyArmorDefaultSet = [
        [4, 6],
        [6, 10],
        [5, 7],
        [4, 6]
    ]

    const addFantasyDefaultSet = prefix => addArmorSetInsulation(
        prefix,
        fantasyArmorDefaultSet[0],
        fantasyArmorDefaultSet[1],
        fantasyArmorDefaultSet[2],
        fantasyArmorDefaultSet[3]
    )

    ;[
        "eclipse_soldier",
        "golden_horns",
        "dragonslayer",
        "hero",
        "thief",
        "wandering_wizard",
        "sunset_wings",
        "chess_board_knight",
        "dark_lord",
        "fog_guard",
        "dark_cover",
        "spark_of_dawn",
        "golden_execution",
        "forgotten_trace",
        "redeemer",
        "twinned",
        "gilded_hunt",
        "lady_maria",
        "crucible_knight",
        "evening_ghost",
        "ronin",
        "malenia",
        "old_knight",
        "silver_knight",
        "dead_gladiator",
        "flesh_of_the_feaster",
        "wind_worshipper",
        "grave_sentinel",
        "ornstein"
    ].forEach(addFantasyDefaultSet)

})
