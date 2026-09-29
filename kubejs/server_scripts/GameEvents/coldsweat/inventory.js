//1 'mc' = 24 摄氏度
ColdSweatEvents.registries(event=>{})
//手持(背包)物品温度设定
// 背包/手持物品温度配置
// - 格式：[ ["item_id", temperature, "slotRange", "trait", *"{nbt}", *maxEffect, *tempLimit], ... ]
// - item_id：物品ID（如 "minecraft:lava_bucket"）
// - temperature：该物品对实体施加的温度变化（核心温度为每 tick 应用）
// - slotRange："inventory" / "hotbar" / "hand"（背包含快捷栏）
// - trait：作用温度类型（如 "core" 体温、"world" 环境温度）
// - nbt（可选）：需要的 NBT 数据
// - maxEffect（可选）：该物品可施加的最大温度效果
// - tempLimit（可选）：该物品温度生效的世界温度阈值（基于 trait；负值表示下限）

// //雨伞的防止身体淋湿的效果
//     event.addItemTemperature(itemtemp=>itemtemp.items('artifacts:umbrella').slotsInRange(0, 8).equipmentSlots("hand").temperature(1).maxEffect(1).immuneToModifier("cold_sweat:water", 1.0))})

//各种流体桶在快捷栏时的温度效果
    
