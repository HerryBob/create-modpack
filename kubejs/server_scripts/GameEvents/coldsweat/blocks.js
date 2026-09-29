// 1 mc = 24 摄氏度
ColdSweatEvents.registries(event => {
    const maxEffectFromTemp = temp => Math.abs(temp) * 8

// 方块温度设定
// 方块温度发散配置
// - 格式：[ ["block_id", temperature, range, *units, *maxEffect, *"predicates", *"{nbt}", *tempLimit], ... ]
// - block_id：方块ID（如 "minecraft:lava"）
// - temperature：方块温度（MC）
// - range：作用半径（方块）
// - units（可选）：温度单位（F/C/MC，默认 MC）
// - maxEffect（可选）：该方块对玩家累计温度影响的上限
// - predicates（可选）：方块状态要求（如 "lit=true"，多个用逗号分隔）
// - nbt（可选）：方块 NBT 要求
// - tempLimit（可选）：世界温度阈值（温度为负时表示下限）

// // First two parameters are block temperature and units
// event.addBlockTemperature(25.0, "f",
//     // Third parameter is a builder-style block temperature definition
//     blockTemp =>
//     // Registers the block temperature to these blocks
//     blockTemp.blocks("minecraft:bee_nest", "minecraft:bee_hive", "#minecraft:logs")
//              // Same as maxEffect from the configs.
//              .maxEffect(50)
//              // Max environment temperature in which the block will be effective
//              .maxTemperature(200)
//              // Range of the block
//              .range(3)
//              // The block must have this state to be valid. Can be a boolean, integer, or string
//              .state("lit", true)
//              // Causes the block temperature to not fade depending on the player's distance
//              .fades(false)

//第一章内容
    // ===== 冷源 =====
    // event.addBlockTemperature(-5, "c", b => b.blocks("ratatouille:frozen_block").maxEffect(maxEffectFromTemp(-5)).range(2).minTemperature(8))
    event.addBlockTemperature(-8, "c", b => b.blocks("brewinandchewin:ice_crate").maxEffect(maxEffectFromTemp(-8)).range(2).minTemperature(-10))
    event.addBlockTemperature(-6, "c", b => b.blocks("minecraft:powder_snow").maxEffect(maxEffectFromTemp(-6)).range(1).minTemperature(-5))
    event.addBlockTemperature(-1, "c", b => b.blocks("minecraft:snow_block").maxEffect(maxEffectFromTemp(-1)).range(1.5).minTemperature(-5))
    event.addBlockTemperature(-3, "c", b => b.blocks("minecraft:ice").maxEffect(maxEffectFromTemp(-3)).range(2).minTemperature(-5))
    event.addBlockTemperature(-5, "c", b => b.blocks("minecraft:packed_ice").maxEffect(maxEffectFromTemp(-5)).range(2.5).minTemperature(-10))
    event.addBlockTemperature(-7, "c", b => b.blocks("minecraft:blue_ice").maxEffect(maxEffectFromTemp(-7)).range(3).minTemperature(-20))

    // ===== 生活热源 =====
    event.addBlockTemperature(8, "c", b => b.blocks("brewinandchewin:heating_cask").maxEffect(maxEffectFromTemp(8)).range(5).maxTemperature(120))
    event.addBlockTemperature(14, "c", b => b.blocks("farmersdelight:stove").maxEffect(maxEffectFromTemp(14)).range(8).maxTemperature(140))
    event.addBlockTemperature(8, "c", b => b.blocks("minecraft:fire").maxEffect(maxEffectFromTemp(8)).range(10).maxTemperature(140))
    event.addBlockTemperature(-6, "c", b => b.blocks("minecraft:soul_fire").maxEffect(maxEffectFromTemp(-6)).range(10).minTemperature(-5))
    event.addBlockTemperature(7, "c", b => b.blocks("minecraft:magma_block").maxEffect(maxEffectFromTemp(7)).range(5).maxTemperature(160))

    // ===== 工业/机械散热 =====
    event.addBlockTemperature(5, "c", b => b.blocks("refurbished_furniture:dark_electricity_generator").maxEffect(maxEffectFromTemp(5)).range(1.5).maxTemperature(120))
    event.addBlockTemperature(5, "c", b => b.blocks("refurbished_furniture:light_electricity_generator").maxEffect(maxEffectFromTemp(5)).range(1.5).maxTemperature(120))
    event.addBlockTemperature(6, "c", b => b.blocks("createaddition:electric_motor").maxEffect(maxEffectFromTemp(6)).range(1.5).maxTemperature(100))
    event.addBlockTemperature(8, "c", b => b.blocks("createdieselgenerators:diesel_engine").maxEffect(maxEffectFromTemp(8)).range(2).maxTemperature(120))
    event.addBlockTemperature(12, "c", b => b.blocks("createdieselgenerators:large_diesel_engine").maxEffect(maxEffectFromTemp(12)).range(2.5).maxTemperature(140))
    event.addBlockTemperature(16, "c", b => b.blocks("createdieselgenerators:huge_diesel_engine").maxEffect(maxEffectFromTemp(16)).range(3).maxTemperature(160))

    // ===== 有额外状态的方块 =====
    event.addBlockTemperature(6, "c", b => b.blocks("cold_sweat:boiler").maxEffect(maxEffectFromTemp(6)).range(3.5).state("lit", true).maxTemperature(120))
    event.addBlockTemperature(-5, "c", b => b.blocks("cold_sweat:icebox").maxEffect(maxEffectFromTemp(-5)).range(3).state("frosted", true).minTemperature(-10))
    event.addBlockTemperature(35, "c", b => b.blocks("minecraft:campfire").maxEffect(maxEffectFromTemp(35)).range(8).state("lit", true).maxTemperature(140))
    event.addBlockTemperature(-35, "c", b => b.blocks("minecraft:soul_campfire").maxEffect(maxEffectFromTemp(-35)).range(8).state("lit", true).minTemperature(-10))
    event.addBlockTemperature(6, "c", b => b.blocks("minecraft:furnace").maxEffect(maxEffectFromTemp(6)).range(1.5).state("lit", true).maxTemperature(100))
    event.addBlockTemperature(8, "c", b => b.blocks("minecraft:smoker").maxEffect(maxEffectFromTemp(8)).range(1.5).state("lit", true).maxTemperature(120))
    event.addBlockTemperature(10, "c", b => b.blocks("minecraft:blast_furnace").maxEffect(maxEffectFromTemp(10)).range(1.5).state("lit", true).maxTemperature(140))
    event.addBlockTemperature(8, "c", b => b.blocks("createdieselgenerators:burner").maxEffect(maxEffectFromTemp(8)).range(2).state("lit", true).maxTemperature(160))

    // ===== 极强热源 =====
    event.addBlockTemperature(70, "c", b => b.blocks("minecraft:lava").maxEffect(maxEffectFromTemp(70)).range(3).maxTemperature(300))
    event.addBlockTemperature(90, "c", b => b.blocks("minecraft:lava_cauldron").maxEffect(maxEffectFromTemp(90)).range(2.5).maxTemperature(300))
})
