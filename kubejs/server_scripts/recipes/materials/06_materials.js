ServerEvents.recipes(event => {
    const create = event.recipes.create
    const vintage = event.recipes.createvintageneoforged
    // === 绝缘材料（ED insulation；羊毛/皮革/兔皮 → 绝缘材料，EE 绝缘导线用）===
    event.shapeless('electrodynamics:insulation', '#minecraft:wool')
    event.shapeless('6x electrodynamics:insulation', '#c:leathers')
    event.shapeless('3x electrodynamics:insulation', 'minecraft:rabbit_hide')

    // === 陶瓷体系（EE 高压绝缘导线用，中期门槛=高炉）===
    create.mixing('4x electrodynamics:ceramicwet',['4x minecraft:sand','4x minecraft:clay_ball',Fluid.of('minecraft:water',500)])
    // 陶瓷：湿陶瓷 → 高炉烧制
    event.blasting('createae2:heated_ceramiccooked', 'electrodynamics:ceramicwet').cookingTime(300).xp(0.1)
    //陶瓷的回温
    event.smelting('createae2:heated_ceramiccooked', 'electrodynamics:ceramiccooked')
    event.blasting('createae2:heated_ceramiccooked', 'electrodynamics:ceramiccooked')
    // 陶瓷板：3 陶瓷 → 1
    event.shaped('electrodynamics:ceramicplate', ['CCC'], { C: 'electrodynamics:ceramiccooked' })
    // 陶瓷绝缘材料：8 陶瓷板 + 铁栅 → 6
    event.shaped('6x electrodynamics:insulationceramic', ['P P', 'PBP', 'P P'], { P: 'electrodynamics:ceramicplate', B: 'minecraft:iron_bars' })
})