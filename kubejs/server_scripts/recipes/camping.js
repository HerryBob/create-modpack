ServerEvents.recipes(event => {
    // ============================
    // 核心装备
    // ============================

    // 烧烤架 — 营火+铁锭
    event.shaped('camping:grill', [
        'BBB',
        'UAU',
        'U U'
    ], {
        A: 'minecraft:campfire',
        B: 'minecraft:iron_ingot',
        U: 'minecraft:iron_nugget'
    })

    // 手杖 — 3根木棍
    event.shaped('camping:walking_stick', [
        '  S',
        ' S ',
        'S  '
    ], { S: 'minecraft:stick' })

    // 小背包 — 皮革+线+羊毛
    event.shaped('camping:small_backpack', [
        'LSL',
        'LWL',
        'LSL'
    ], {
        L: 'minecraft:leather',
        S: 'minecraft:string',
        W: 'minecraft:white_wool'
    })

    // 大背包 — 小背包升级（铁+皮革+睡袋）
    event.custom({
        type: 'camping:backpack_upgrade',
        pattern: ['LSL', 'LIL', 'LWL'],
        key: {
            L: { item: 'minecraft:leather' },
            S: { tag: 'camping:sleeping_bags' },
            I: { item: 'minecraft:iron_ingot' },
            W: { item: 'camping:small_backpack' }
        },
        result: { id: 'camping:large_backpack' }
    })

    // 多功能工具 — 铁粒+红染料
    event.shaped('camping:multitool', [
        '  I',
        ' R ',
        'I  '
    ], {
        I: 'minecraft:iron_nugget',
        R: 'minecraft:red_dye'
    })

    // 羊皮袋 — 羊毛+皮革+线
    event.shaped('camping:sheepbag', [
        'WSW',
        'WWW',
        'LSL'
    ], {
        W: 'minecraft:white_wool',
        L: 'minecraft:leather',
        S: 'minecraft:string'
    })

    // 捆 — 兔皮+线 → 原版收纳袋
    event.shaped('minecraft:bundle', [
        'S#S',
        '# #',
        '###'
    ], {
        '#': 'minecraft:string',
        S: 'minecraft:rabbit_hide'
    })

    // ============================
    // 棉花糖
    // ============================
    // 棉花糖 — 糖+鸡蛋
    event.shapeless('4x camping:marshmallow', ['minecraft:sugar', 'minecraft:egg'])

    // 棉花糖串 — 棉花糖+木棍
    event.shapeless('camping:marshmallow_on_a_stick', ['camping:marshmallow', 'minecraft:stick'])

    // 烤棉花糖 — 营火烤制
    event.campfireCooking('camping:roasted_marshmallow', 'camping:marshmallow').xp(0.1).cookingTime(600)

    // ============================
    // 16色睡袋 (1x白羊毛 + 2x对应色羊毛)
    // ============================
    const sleepingBagColors = [
        'white', 'black', 'red', 'blue', 'green', 'brown',
        'orange', 'yellow', 'lime', 'cyan', 'purple', 'magenta',
        'pink', 'light_blue', 'light_gray', 'gray'
    ]
    sleepingBagColors.forEach(color => {
        event.shaped('camping:sleeping_bag_' + color, [
            '#  ',
            'B  ',
            'B  '
        ], {
            '#': 'minecraft:white_wool',
            B: 'minecraft:' + color + '_wool'
        })
    })

    // ============================
    // 16色帐篷 (2x木棍 + 6x对应色羊毛)
    // ============================
    sleepingBagColors.forEach(color => {
        event.shaped('camping:tent_' + color, [
            'BAB',
            'A A',
            'B B'
        ], {
            A: 'minecraft:stick',
            B: 'minecraft:' + color + '_wool'
        })
    })
})
