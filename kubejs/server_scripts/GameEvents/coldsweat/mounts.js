// 1 = 完全隔温, 0 = 没有隔温
ColdSweatEvents.registries(event => {
    // 坐骑隔温设定
    // 适合把“骑在生物上时获得的保温/隔热”单独维护在这里

    const addMountInsulation = (entityId, cold, heat) => {
        event.addInsulatingMount(mount =>
            mount
                .entities(entityId)
                .coldInsulation(cold)
                .heatInsulation(heat)
        )
    }

    // 炽足兽天然适合高热环境, 骑乘时提供明显抗热
    addMountInsulation("minecraft:strider", 0.0, 0.8)
    //炽岩龙
    addMountInsulation("alexsmobs:laviathan", 0.0, 1.0)
    //骆驼
    addMountInsulation("minecraft:camel", 0.3, 0.3)
    //马
    addMountInsulation("minecraft:horse", 0.2, 0.2)
    //大象
    addMountInsulation("alexsmobs:elephant", 0.0, 0.5)
})
