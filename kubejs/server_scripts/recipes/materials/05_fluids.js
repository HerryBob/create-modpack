ServerEvents.recipes(event => {
    const create = event.recipes.create
    const vintage = event.recipes.createvintageneoforged
    // === 硫酸制备（接触法：燃烧 → 氧化 → 吸收 → 真空浓缩）===
    // 硫粉燃烧 → 二氧化硫（加热搅拌，对应现实 S+O₂→SO₂）
    create.mixing(['electrodynamics:oxidedisulfur'], ['electrodynamics:dustsulfur']).heated()

    // 二氧化硫催化氧化 → 三氧化硫（加热搅拌，对应现实接触法 V₂O₅ 催化氧化）
    //    钒粉作催化剂：98% 概率回收（循环使用），10% 损耗（催化剂失活，需补充）
    create.mixing(['4x electrodynamics:oxidetrisulfur', CreateItem.of('electrodynamics:dustvanadium',0.98)], ['4x electrodynamics:oxidedisulfur', 'electrodynamics:dustvanadium']).heated()

    // 三氧化硫 + 水 → 稀硫酸（吸收反应，对应现实 SO₃+H₂O→H₂SO₄，水吸收产稀酸）
    create.mixing([Fluid.of('createae2:diluted_sulfuric_acid', 500)], ['electrodynamics:oxidetrisulfur', Fluid.of('minecraft:water', 500)])

    // 稀硫酸 → 浓硫酸（Vintage 真空室浓缩，对应现实真空蒸发浓缩；蒸发损耗，500→250）
    vintage.vacuumizing([Fluid.of('electrodynamics:fluidsulfuricacid', 250)], [Fluid.of('createae2:diluted_sulfuric_acid', 500)]).processingTime(200)

    // === 种子油（大豆压榨）===
    event.remove({ id: 'createaddition:compacting/seed_oil' })
    create.compacting(Fluid.of('createaddition:seed_oil', 10), 'vegandelight:soybean')
})