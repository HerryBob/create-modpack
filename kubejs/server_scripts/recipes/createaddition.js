ServerEvents.recipes(event=>{

    const create = event.recipes.create
    // event.remove({id:"createaddition:pressing/zinc_ingot"})
    event.remove({id:"createaddition:mixing/bioethanol"})
    event.remove({id:"createaddition:mechanical_crafting/alternator"})   

    // create.mixing('minecraft:enchanted_golden_apple', ['minecraft:golden_apple', Fluid.of('create_enchantment_industry:flowing_hyper_experience')])

    // === 轧机（Create Addition 机器，原配方被删重建；现实轧钢机）===
    // 铁板 + 传动轴 + 安山合金 + 安山机壳

    // === 钻石粉碎（粉碎轮）===
    // 钻石 → 粉碎轮 → 钻石粉（用于砂纸）
    create.crushing([CreateItem.of('minecraft:diamond',0.8),'createaddition:diamond_grit'],'minecraft:diamond')

    // === 生物质颗粒（混合器）===
    // 生物质 + 水 → 混合 → 生物质颗粒
    create.mixing(
        'createaddition:biomass_pellet',
        ['createaddition:biomass', Fluid.of('minecraft:water', 50)]
    )

    // === 生物质颗粒块（工作台 9x9 压缩）===
    event.shaped('createaddition:biomass_pellet_block', ['###', '###', '###'], {
        '#': 'createaddition:biomass_pellet'
    })

    // === 生物质颗粒块拆解（工作台）===
    event.shapeless('9x createaddition:biomass_pellet', ['createaddition:biomass_pellet_block'])

    // === 生物质（混合器加热）===
    // 植物材料 + 植物油 → 加热混合 → 生物质
    // 叶子路线
    event.custom({
        type: 'create:mixing',
        heat_requirement: 'heated',
        ingredients: [
            { tag: 'minecraft:leaves' },
            { tag: 'minecraft:leaves' },
            { tag: 'minecraft:leaves' },
            {   
                type: "neoforge:single",
                fluid: 'createaddition:seed_oil', 
                amount: 100 
            }
        ],
        results: [
            { id: 'createaddition:biomass', count: 1 }
        ]
    })
    // 树苗路线
    event.custom({
        type: 'create:mixing',
        heat_requirement: 'heated',
        ingredients: [
            { tag: 'minecraft:saplings' },
            { tag: 'minecraft:saplings' },
            { tag: 'minecraft:saplings' },
            {   
                type: "neoforge:single",
                fluid: 'createaddition:seed_oil', 
                amount: 100 
            }
        ],
        results: [
            { id: 'createaddition:biomass', count: 1 }
        ]
    })
    // 作物路线
    event.custom({
        type: 'create:mixing',
        heat_requirement: 'heated',
        ingredients: [
            { tag: 'c:crops' },
            { tag: 'c:crops' },
            {   
                type: "neoforge:single",
                fluid: 'createaddition:seed_oil', 
                amount: 100 
            }
        ],
        results: [
            { id: 'createaddition:biomass', count: 1 }
        ]
    })
    // 花路线
    event.custom({
        type: 'create:mixing',
        heat_requirement: 'heated',
        ingredients: [
            { tag: 'minecraft:small_flowers' },
            { tag: 'minecraft:small_flowers' },
            { tag: 'minecraft:small_flowers' },
            {   
                type: "neoforge:single",
                fluid: 'createaddition:seed_oil', 
                amount: 100 
            }
        ],
        results: [
            { id: 'createaddition:biomass', count: 1 }
        ]
    })
//线轴
    event.shaped(
        'createaddition:spool',
        [
            ' S ',
            ' C ',
            ' S '
        ], 
        {
            C:'createaddition:iron_rod',
            S:'#minecraft:wooden_slabs'
        }
    )
//金属轴
    event.shaped(
        'createaddition:copper_spool',
        [
            ' S ',
            'SCS',
            ' S '
        ], 
        {
            C:'createaddition:spool',
            S:'createaddition:copper_wire'
        }
    )

        event.shaped(
        'createaddition:gold_spool',
        [
            ' S ',
            'SCS',
            ' S '
        ], 
        {
            C:'createaddition:spool',
            S:'createaddition:gold_wire'
        }
    )

        event.shaped(
        'createaddition:electrum_spool',
        [
            ' S ',
            'SCS',
            ' S '
        ], 
        {
            C:'createaddition:spool',
            S:'createaddition:electrum_wire'
        }
    )

        event.shaped(
        'createaddition:festive_spool',
        [
            'ASA',
            'SCS',
            'ASA'
        ],
        {
            C:'createaddition:spool',
            S:'createaddition:copper_wire',
            A:'#minecraft:leaves'
        }
    )

    // ============================================================
    // 连接器系列 — 锻造台（原模组无序/有序合成改为锻压成型）
    // ============================================================

    // === 连接器：铜棒 + 安山合金 + 粘液球 → 3 ===
    event.custom({
        type: 'overgeared:forging',
        hammering: 3,
        has_polishing: false,
        has_quality: false,
        need_quenching: false,
        show_notification: true,
        key: {
            'C': { item: 'createaddition:copper_rod' },
            'A': { item: 'create:andesite_alloy' },
            'S': { item: 'minecraft:slime_ball' }
        },
        pattern: [' S ', ' C ', ' A '],
        result: { count: 3, id: 'createaddition:connector' }
    }).id('kubejs:ca/forging/connector')

    // === 大型连接器：琥珀金棒 + 安山合金×2 + 粘液球 → 2 ===
    event.custom({
        type: 'overgeared:forging',
        hammering: 4,
        has_polishing: false,
        has_quality: false,
        need_quenching: false,
        show_notification: true,
        key: {
            'E': { item: 'createaddition:electrum_rod' },
            'A': { item: 'create:andesite_alloy' },
            'S': { item: 'minecraft:slime_ball' }
        },
        pattern: [' S ', ' E ', ' A '],
        result: { count: 2, id: 'createaddition:large_connector' }
    }).id('kubejs:ca/forging/large_connector')

    // === 小型灯光连接器：铁线 + 玻璃 + 连接器 → 1 ===
    event.custom({
        type: 'overgeared:forging',
        hammering: 2,
        has_polishing: false,
        has_quality: false,
        need_quenching: false,
        show_notification: true,
        key: {
            'W': { item: 'createaddition:iron_wire' },
            'G': { item: 'minecraft:glass' },
            'C': { item: 'createaddition:connector' }
        },
        pattern: [' G ', ' W ', ' C '],
        result: { count: 1, id: 'createaddition:small_light_connector' }
    }).id('kubejs:ca/forging/small_light_connector')

    // === 红石继电器：红石 + 连接器×2 + 电子管 + 石头底座 → 1 ===
    event.custom({
        type: 'overgeared:forging',
        hammering: 3,
        has_polishing: false,
        has_quality: false,
        need_quenching: false,
        show_notification: true,
        key: {
            'R': { item: 'minecraft:redstone' },
            'C': { item: 'createaddition:connector' },
            'E': { item: 'create:electron_tube' },
            'S': { item: 'minecraft:stone' }
        },
        pattern: [' R ', 'CEC', 'SSS'],
        result: { count: 1, id: 'createaddition:redstone_relay' }
    }).id('kubejs:ca/forging/redstone_relay')

    // ============================================================
    // 防御 / 蓄电 / 线圈 — 锻造台 & 动力合成器
    // ============================================================

    // === 带刺铁丝网：4 铁线交叉锻出尖刺 → 2（锻造台）===
    event.custom({
        type: 'overgeared:forging',
        hammering: 2,
        has_polishing: false,
        has_quality: false,
        need_quenching: false,
        show_notification: true,
        key: {
            'W': { item: 'createaddition:iron_wire' }
        },
        pattern: ['WWW', 'WWW', '   '],
        result: { count: 2, id: 'createaddition:barbed_wire' }
    })

    // === 模块化蓄电盒：铜棒 + 电容器×2 + 黄铜机壳 + 琥珀金线（锻造台）===
    event.custom({
        type: 'overgeared:forging',
        hammering: 3,
        has_polishing: false,
        has_quality: false,
        need_quenching: false,
        show_notification: true,
        key: {
            'B': { item: 'create:brass_casing' },
            'C': { item: 'electroenergetics:capacitor' },
            'R': { item: 'createaddition:copper_rod' },
            'W': { item: 'createaddition:electrum_wire' }
        },
        pattern: [' R ', 'CBC', ' W '],
        result: { count: 1, id: 'createaddition:modular_accumulator' }
    }).id('kubejs:ca/forging/modular_accumulator')

    // === 特斯拉线圈：铜线轴×3 + 安山合金 + 电容器/黄铜机壳 + 黄铜板/电子管（动力合成器）===
    create.mechanical_crafting('createaddition:tesla_coil', [
        'SSS',
        ' A ',
        'CBC',
        'PEP'
    ], {
        A: 'create:andesite_alloy',
        B: 'create:brass_casing',
        C: 'electroenergetics:capacitor',
        E: 'create:electron_tube',
        P: 'create:brass_sheet',
        S: 'createaddition:copper_spool'
    })

    // === 数字适配器：有线调制解调器 + 红石火把 + 黄铜板（锻造台，对接 CC 电脑）===
    event.custom({
        type: 'overgeared:forging',
        hammering: 2,
        has_polishing: false,
        has_quality: false,
        need_quenching: false,
        show_notification: true,
        key: {
            'M': { item: 'computercraft:wired_modem' },
            'R': { item: 'minecraft:redstone_torch' },
            'B': { item: 'create:brass_sheet' }
        },
        pattern: [' M ', ' R ', ' B '],
        result: { count: 1, id: 'createaddition:digital_adapter' }
    }).id('kubejs:ca/forging/digital_adapter')

})