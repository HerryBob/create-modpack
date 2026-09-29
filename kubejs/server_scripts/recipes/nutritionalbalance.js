// === 营养均衡 午餐盒 ===
ServerEvents.recipes(event => {
    event.shaped('nutritionalbalance:lunchbox', [
        ' t ',
        'nsn',
        ' c '
    ], {
        t: '#minecraft:trapdoors',
        n: 'minecraft:iron_nugget',
        s: 'minecraft:black_dye',
        c: '#c:chests'
    })
})
