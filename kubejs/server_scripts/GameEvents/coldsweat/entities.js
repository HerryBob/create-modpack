// 1 mc = 24 摄氏度
ColdSweatEvents.registries(event => {
// 实体温度设定
// 实体温度发散配置
// - 格式：[ ["entity_id", temperature, range, *units, *tempLimit], ... ]
// - [* = 可选]
// - temperature：实体发散的温度
// - range：影响范围（方块）
// - units（可选）：温度单位（MC/F/C），默认 MC
// - tempLimit（可选）：在该世界温度上限内生效（温度为负时表示下限）

    // 寒冷实体：只保留少量具有明显寒意的代表生物
    event.addEntityTemperature(coldentity =>
        coldentity
            .entities("alexsmobs:froststalker")
            .temperature(-1.0)
            .maxEffect(2)
            .range(3)
            .units("mc")
    )

    event.addEntityTemperature(coldentity =>
        coldentity
            .entities("minecraft:stray")
            .temperature(-0.6)
            .maxEffect(1.5)
            .range(2.5)
            .units("mc")
    )


    event.addEntityTemperature(coldentity =>
        coldentity
            .entities("minecraft:wither_skeleton")
            .temperature(-0.4)
            .maxEffect(1.2)
            .range(2)
            .units("mc")
    )

    // 炎热实体：强调下界热源和高热环境的生物辨识
    event.addEntityTemperature(hotentity =>
        hotentity
            .entities("minecraft:blaze")
            .temperature(1.0)
            .maxEffect(2.5)
            .range(3)
            .units("mc")
    )

    event.addEntityTemperature(hotentity =>
        hotentity
            .entities("minecraft:magma_cube")
            .temperature(0.7)
            .maxEffect(2)
            .range(2.5)
            .units("mc")
    )

    event.addEntityTemperature(hotentity =>
        hotentity
            .entities("alexsmobs:straddler")
            .temperature(0.9)
            .maxEffect(2.4)
            .range(3)
            .units("mc")
    )

    event.addEntityTemperature(hotentity =>
        hotentity
            .entities("alexsmobs:laviathan")
            .temperature(1.2)
            .maxEffect(3)
            .range(4)
            .units("mc")
    )
})
