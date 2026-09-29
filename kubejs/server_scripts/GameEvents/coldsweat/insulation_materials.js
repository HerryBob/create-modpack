// 隔温材料
ColdSweatEvents.registries(event => {
    const addStaticMaterial = (itemId, cold, heat, fillSlots, hintText) => {
        event.addInsulator(item =>
            item.items(itemId)
                .insulation(cold, heat)
                .slot("item")
                .fillSlots(fillSlots)
                .hintText(hintText)
        )
    }

    const addAdaptiveMaterial = (itemId, amount, adaptSpeed, fillSlots, hintText) => {
        event.addInsulator(item =>
            item.items(itemId)
                .adaptiveInsulation(amount, adaptSpeed)
                .slot("item")
                .fillSlots(fillSlots)
                .hintText(hintText)
        )
    }

    // 基础双向材料
    addStaticMaterial("minecraft:leather", 1, 1, true, "基础双向隔温材料")
    addStaticMaterial("vegandelight:leather_substitute", 1, 1, true, "替代皮革双向隔温材料")
    addStaticMaterial("farmersdelight:canvas", 1, 1, true, "基础布质双向隔温材料")

    // 早期抗寒材料
    addStaticMaterial("rusticdelight:cotton_boll", 1, 0, true, "轻型纤维保暖材料")
    addStaticMaterial("minecraft:rabbit_hide", 2, 0, true, "轻型抗寒隔温材料")
    addStaticMaterial("minecraft:white_wool", 3, 0, true, "基础保暖填充材料")
    addStaticMaterial("alexsmobs:emu_feather", 1, 0, true, "轻型羽绒保暖材料")
    addStaticMaterial("alexsmobs:roadrunner_feather", 1, 0, true, "轻型羽毛保暖材料")
    addStaticMaterial("alexsmobs:bison_fur", 3, 0, true, "厚实抗寒隔温材料")
    addStaticMaterial("cold_sweat:goat_fur", 4, 0, true, "优质抗寒隔温材料")
    addStaticMaterial("alexsmobs:bear_fur", 4, 0, true, "优质重型保暖材料")
    addStaticMaterial("minecraft:paper", 0.1, 0, true, "简易应急保温材料")

    // 高热环境材料
    addStaticMaterial("alexsmobs:kangaroo_hide", 1, 2, true, "轻型抗热隔温材料")
    addStaticMaterial("cold_sweat:hoglin_hide", 0, 4, true, "优质抗热隔温材料")

    // 自适应材料
    addAdaptiveMaterial("cold_sweat:chameleon_molt", 2, 0.1, true, "自适应隔温材料")

})
