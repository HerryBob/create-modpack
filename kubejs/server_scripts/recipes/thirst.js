//配方未写完
ServerEvents.recipes(event => {
    // === 黏土碗 — 黏土球烧制 ===
    event.shaped('thirst:clay_bowl', [
        'w w',
        ' w ',
        '   '
    ], {
        w: 'minecraft:clay_ball'
    })

    // === 陶碗 — 黏土碗二次烧制 ===
    event.smelting('thirst:terracotta_bowl', 'thirst:clay_bowl')
    event.blasting('thirst:terracotta_bowl', 'thirst:clay_bowl')

    // === 滤砂器 — 水质净化设备 ===
})
