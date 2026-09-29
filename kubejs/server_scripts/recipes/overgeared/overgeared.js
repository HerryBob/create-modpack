// === Overgeared 加热锭冷却配方 ===
// 1. overgeared:cooling    → JEI 显示 + 右键水方块冷却
// 2. create:splashing      → 鼓风机水洗（水洗途径）
// 3. create_dragons_plus:freezing → 鼓风机冷冻（冷冻途径，速度更快）

ServerEvents.recipes(event => {
    const create = event.recipes.create
    //去除铸造内容
    event.remove({id:'overgeared:alloy_furnace'})
    event.remove({id:'overgeared:casting_furnace'})
    event.remove({id:'overgeared:nether_alloy_furnace'})
    event.remove({input:'overgeared:clay_tool_cast'})
    event.remove({output:'overgeared:clay_tool_cast'})
    event.remove({input:'overgeared:nether_tool_cast'})
    event.remove({output:'overgeared:nether_tool_cast'})
    event.remove({id:'overgeared:copper_smithing_hammer'})

    // === 铜锻造锤 ===
    event.shaped('overgeared:copper_smithing_hammer', [
        ' CS',
        ' SC',
        'S  '
    ], {
        C: 'minecraft:copper_ingot',
        S: 'minecraft:stick'
    })
    event.shapeless('overgeared:copper_hammer_head', ['overgeared:copper_smithing_hammer'])

    // ============================
    // 钳子 (Tongs)
    // ============================

    // 木钳
    event.shaped('overgeared:wooden_tongs', [' # ', '###', ' # '], {
        '#': 'minecraft:stick'
    })

    // 铁钳 — 铁砧锻造
    event.custom({
        type: 'overgeared:forging',
        hammering: 2,
        has_polishing: false,
        has_quality: false,
        need_quenching: false,
        show_notification: false,
        key: { '#': { item: 'overgeared:heated_iron_ingot' } },
        pattern: [' ##', '## ', '   '],
        result: { count: 1, id: 'overgeared:iron_tong' }
    })
    // 铁钳 → 1对
    event.shapeless('overgeared:iron_tongs', ['overgeared:iron_tong', 'overgeared:iron_tong'])

    // 钢钳 — 铁砧锻造
    event.custom({
        type: 'overgeared:forging',
        hammering: 2,
        has_polishing: false,
        has_quality: false,
        need_quenching: false,
        show_notification: false,
        key: { '#': { item: 'overgeared:heated_steel_ingot' } },
        pattern: [' ##', '## ', '   '],
        result: { count: 1, id: 'overgeared:steel_tong' }
    })
    // 钢钳 → 1对
    event.shapeless('overgeared:steel_tongs', ['overgeared:steel_tong', 'overgeared:steel_tong'])

    // ============================
    // 锻造锤 (Smithing Hammer)
    // ============================

    // 钢锤头 — 铁砧锻造
    event.custom({
        type: 'overgeared:forging',
        hammering: 8,
        has_polishing: false,
        has_quality: false,
        need_quenching: false,
        show_notification: false,
        key: { 
            '#': { item: 'overgeared:heated_steel_ingot' },
            'S': { item: 'overgeared:copper_hammer_head' }
    },
        pattern: ['###', '#S#', '###'],
        result: { count: 1, id: 'overgeared:steel_hammer_head' }
    })
    // 钢锤头 + 木棍 → 钢锻造锤
    event.custom({
        type: 'overgeared:crafting_shapeless',
        ingredients: [
            { item: 'overgeared:steel_hammer_head' },
            { item: 'minecraft:stick' }
        ],
        result: { id: 'overgeared:smithing_hammer' }
    })

    // ============================
    // 蓝图
    // ============================

    // 空蓝图 — 3纸 + 1蓝色染料
    event.shapeless('overgeared:empty_blueprint', [
        'minecraft:paper', 'minecraft:paper', 'minecraft:paper',
        'minecraft:blue_dye'
    ])

    // 蓝图台 — 工作台 + 空蓝图
    event.shapeless('overgeared:drafting_table', [
        'minecraft:crafting_table',
        'overgeared:empty_blueprint'
    ])

    // ============================
    // 制箭台 (Fletching Station)
    // ============================

    // — 钻石碎片 — 砂纸打磨
    create.sandpaper_polishing('2x overgeared:diamond_shard', 'minecraft:diamond')

    // — 箭镞锻造 —
    event.custom({
        type: 'overgeared:forging',
        hammering: 2,
        has_polishing: false,
        has_quality: false,
        need_quenching: false,
        show_notification: false,
        key: { '#': { item: 'minecraft:iron_nugget' } },
        pattern: ['###', ' ##', '# #'],
        result: { count: 1, id: 'overgeared:iron_arrow_head' }
    })

    event.custom({
        type: 'overgeared:forging',
        hammering: 3,
        has_polishing: false,
        has_quality: false,
        need_quenching: false,
        show_notification: false,
        key: { '#': { item: 'overgeared:steel_nugget' } },
        pattern: ['###', ' ##', '# #'],
        result: { count: 1, id: 'overgeared:steel_arrow_head' }
    })

    // — 制箭台合成 — （feather + shaft + tip → 4x）
    const fletchArrow = (tipItem, resultItem) => event.custom({
        type: 'overgeared:fletching',
        feather: { item: 'minecraft:feather' },
        shaft: { item: 'minecraft:stick' },
        tip: { item: tipItem },
        result: { count: 4, id: resultItem },
        result_lingering: { count: 4, id: resultItem },
        result_tipped: { count: 4, id: resultItem }
    })

    fletchArrow('overgeared:iron_arrow_head', 'overgeared:iron_arrow')
    fletchArrow('overgeared:steel_arrow_head', 'overgeared:steel_arrow')
    fletchArrow('overgeared:diamond_shard', 'overgeared:diamond_arrow')

    // — 光灵箭（制箭台：原版箭 + 荧石粉） —
    event.custom({
        type: 'overgeared:fletching',
        shaft: { item: 'minecraft:arrow' },
        tip: { item: 'minecraft:glowstone_dust' },
        result: { count: 1, id: 'minecraft:spectral_arrow' }
    })

    // — 钻石箭工作台备用配方 —
    event.shaped('4x overgeared:diamond_arrow', ['X', 'S', 'A'], {
        X: 'overgeared:diamond_shard',
        S: 'minecraft:stick',
        A: 'minecraft:feather'
    })

    // — 箭镞回收 —
    event.smelting('2x minecraft:iron_nugget', 'overgeared:iron_arrow_head')
    event.blasting('2x minecraft:iron_nugget', 'overgeared:iron_arrow_head')
    event.smelting('2x overgeared:steel_nugget', 'overgeared:steel_arrow_head')
    event.blasting('2x overgeared:steel_nugget', 'overgeared:steel_arrow_head')

    // — 工具头回收（熔炉/高炉→锭） —
    const headRecycle = (headItem, ingotItem) => {
        event.smelting(ingotItem, headItem)
        event.blasting(ingotItem, headItem)
    }

    const ironHeads = ['sword_blade', 'pickaxe_head', 'axe_head', 'shovel_head', 'hoe_head']
    const goldHeads = ['sword_blade', 'pickaxe_head', 'axe_head', 'shovel_head', 'hoe_head']

    ironHeads.forEach(h => headRecycle('overgeared:iron_' + h, 'overgeared:heated_iron_ingot'))
    goldHeads.forEach(h => headRecycle('overgeared:golden_' + h, 'createae2:heated_gold_ingot'))
})