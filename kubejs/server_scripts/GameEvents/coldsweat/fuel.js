// 1 'mc' = 24 摄氏度
ColdSweatEvents.registries(event => {
    const addFuelEntries = (methodName, entries) => {
        entries.forEach(entry => {
            event[methodName](fuel =>
                fuel.items(entry[0]).fuel(entry[1])
            )
        })
    }

    // 壁炉是核心系统, 负责给据点提供稳定的舒适环境
    // 正值燃料用于供暖, 负值燃料用于制冷
    const hearthFuelEntries = [
        ["#minecraft:planks", 10],
        ["#minecraft:logs_that_burn", 37],
        ["#minecraft:coals", 37],
        ["minecraft:dried_kelp_block", 92],
        ["minecraft:coal_block", 333],
        ["minecraft:magma_block", 333],
        ["minecraft:lava_bucket", 500],
        ["createdieselgenerators:ethanol_bucket", 300],
        ["createdieselgenerators:gasoline_bucket", 800],
        ["createdieselgenerators:diesel_bucket", 800],
        ["createdieselgenerators:biodiesel_bucket", 900],
        ["createdieselgenerators:crude_oil_bucket", 1000],
        ["minecraft:snowball", -10],
        ["minecraft:snow_block", -100],
        ["minecraft:powder_snow_bucket", -100],
        ["minecraft:ice", -250],
        ["minecraft:packed_ice", -500]
    ]

    // 锅炉只负责加热水袋, 保持与壁炉热源兼容即可
    const boilerFuelEntries = [
        ["#minecraft:planks", 10],
        ["#minecraft:logs_that_burn", 37],
        ["#minecraft:coals", 37],
        ["minecraft:dried_kelp_block", 92],
        ["minecraft:coal_block", 333],
        ["minecraft:magma_block", 333],
        ["minecraft:lava_bucket", 500],
        ["createdieselgenerators:ethanol_bucket", 300],
        ["createdieselgenerators:gasoline_bucket", 800],
        ["createdieselgenerators:diesel_bucket", 800],
        ["createdieselgenerators:biodiesel_bucket", 900],
        ["createdieselgenerators:crude_oil_bucket", 1000]
    ]

    // 冰箱只负责给水袋降温, 保持基础冷源兼容即可
    const iceboxFuelEntries = [
        ["minecraft:snowball", 10],
        ["minecraft:snow_block", 100],
        ["minecraft:powder_snow_bucket", 100],
        ["minecraft:ice", 250],
        ["minecraft:packed_ice", 500]
    ]

    // 壁炉核心燃料
    addFuelEntries("addHearthFuel", hearthFuelEntries)

    // 锅炉兼容燃料
    addFuelEntries("addBoilerFuel", boilerFuelEntries)

    // 冰箱兼容燃料
    addFuelEntries("addIceboxFuel", iceboxFuelEntries)

    // 灵魂灯燃料保持极简即可
    event.addSoulspringLampFuel(soullamp =>
        soullamp.items("cold_sweat:soul_sprout").fuel(10)
    )
})
