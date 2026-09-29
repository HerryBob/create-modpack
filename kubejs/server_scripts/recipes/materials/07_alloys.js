ServerEvents.recipes(event => {
    // === 安山合金块 / 工业铁块（Create 原配方重建，被清理脚本删除；EE 等模组引用）===
    // 安山合金块：9 安山合金 → 1（原配方复刻）+ 反向拆解
    event.shaped('create:andesite_alloy_block', ['CCC', 'CCC', 'CCC'], { C: 'create:andesite_alloy' })
    event.shapeless('9x create:andesite_alloy', ['create:andesite_alloy_block'])
    // 工业铁块：铁锭石切 → 2（原配方复刻）
    event.stonecutting('2x create:industrial_iron_block', '#c:ingots/iron')
})