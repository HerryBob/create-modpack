ServerEvents.recipes(event=>{
    const create = event.recipes.create
    const vintage = event.recipes.createvintageneoforged

    // === 砂纸 — 工作台合成 ===
    event.shapeless('create:sand_paper', ['minecraft:sand', 'minecraft:paper'])
    event.shapeless('create:red_sand_paper', ['minecraft:red_sand', 'minecraft:paper'])
    // 钻石砂纸
    event.shapeless('createaddition:diamond_grit_sandpaper', ['createaddition:diamond_grit', 'minecraft:paper'])

    // === 安山合金 — 打铁锻造（应急手搓，4安山岩+1加热铁锭→锻造→4安山合金） ===
    // 原版配方已被 00_remove_all_mod_recipes.js 统一删除
    event.custom({
        type: 'overgeared:forging',
        hammering: 9,
        has_polishing: false,
        has_quality: false,
        need_quenching: false,
        show_notification: true,
        key: {
            '#': { item: 'minecraft:andesite' },
            'H': { item: 'overgeared:heated_iron_ingot' } 
        },
        pattern: ['###', '#H#', '###'],
        result: { count: 4, id: 'create:andesite_alloy' }
    })

    // === 传动杆 — 打铁锻造 ===
    event.custom({
        type: 'overgeared:forging',
        hammering: 8,
        has_polishing: false,
        has_quality: false,
        need_quenching: false,
        show_notification: false,
        key: { '#': { item: 'create:andesite_alloy' } },
        pattern: ['#','#'],
        result: { count: 8, id: 'create:shaft' }
    })

    // === 交叉传动节 — 4 传动杆摆十字 铁砧锻造 ===
    // 一路输入 → 两路独立输出
    event.custom({
        type: 'overgeared:forging',
        hammering: 4,
        has_polishing: false,
        has_quality: false,
        need_quenching: false,
        show_notification: true,
        key: { '#': { item: 'create:shaft' } },
        pattern: [' # ', '# #', ' # '],
        result: { count: 1, id: 'create_connected:cross_connector' }
    })

    // === 齿轮箱 — 交叉传动节右键安山机壳（机械动力本体齿轮箱） ===
    create.item_application('create:gearbox', ['create:andesite_casing', 'create_connected:cross_connector'])

    // === 齿轮箱 ↔ 竖直齿轮箱 — 工作台 1:1 互换 ===
    event.shapeless('create:vertical_gearbox', ['create:gearbox'])
    event.shapeless('create:gearbox', ['create:vertical_gearbox'])

    // === 离合器/反转齿轮箱 — 已改为 worldcraft 结构配方（kubejs/data/worldcrafting/recipe/） ===

    // === 链式传动箱（create:encased_chain_drive） 使用worldcraft配方===
    // === 可调节链式传动箱 — 电子管右键链式传动箱 ===
    create.item_application('create:adjustable_chain_gearshift', ['create:encased_chain_drive', 'create:electron_tube'])
    // === 链式齿轮箱 — 铁砧锻造（敲一次） ===
    event.custom({
        type: 'overgeared:forging',
        hammering: 1,
        has_polishing: false,
        has_quality: false,
        need_quenching: false,
        show_notification: false,
        key: {
            'D': { item: 'create:encased_chain_drive' },
            'C': { item: 'create:cogwheel' }
        },
        pattern: ['DC'],
        result: { count: 1, id: 'create_connected:encased_chain_cogwheel' }
    })

    // === 传送带 — 工作台合成（6 干海带，原版） ===
    event.shaped('create:belt_connector', ['DDD', 'DDD'], { D: 'minecraft:dried_kelp' })

    // === 分散网（create:nozzle）— 羊毛右键安山机壳 ===
    event.custom({
        type: 'create:item_application',
        ingredients: [
            { item: 'create:andesite_casing' },
            { tag: 'minecraft:wool' }
        ],
        results: [{ id: 'create:nozzle' }]
    })

    // === 转盘（create:turntable）— 木台阶右键传动杆 ===
    event.custom({
        type: 'create:item_application',
        ingredients: [
            { item: 'create:shaft' },
            { tag: 'minecraft:wooden_slabs' }
        ],
        results: [{ id: 'create:turntable' }]
    })

    // === 齿轮齿条轴（create:gantry_shaft）— 红石右键传动杆 ===
    create.item_application('create:gantry_shaft', ['create:shaft', 'minecraft:redstone'])
    // === 手摇曲柄（create:hand_crank）— 锻造台制作 ===
    event.custom({
        type: 'overgeared:forging',
        hammering: 1,
        has_polishing: false,
        has_quality: false,
        need_quenching: false,
        show_notification: false,
        key: {
            'C': { tag: 'minecraft:planks' },
            'A': { item: 'create:andesite_alloy' }
        },
        pattern: ['  A', 'CCC', '   '],
        result: { count: 1, id: 'create:hand_crank' }
    })

    // === 布谷鸟钟（create:cuckoo_clock）— 铁砧锻造：时钟+机壳+合金+红石 ===
    event.custom({
        type: 'overgeared:forging',
        hammering: 1,
        has_polishing: false,
        has_quality: false,
        need_quenching: false,
        show_notification: false,
        key: {
            'A': { item: 'minecraft:clock' },
            'C': { item: 'create:andesite_casing' },
            'S': { item: 'create:andesite_alloy' },
            'R': { item: 'minecraft:redstone' },
            'E': { item: 'create:electron_tube' }
        },
        pattern: [' A ', ' C ', 'ESR'],
        result: { count: 1, id: 'create:cuckoo_clock' }
    })

    // === 矿车装配站（create:cart_assembler）— 铁砧锻造：原木底座 + 安山合金 + 红石 ===
    // 官方工作台配方已被 00_remove_all_mod_recipes.js 统一删除
    event.custom({
        type: 'overgeared:forging',
        hammering: 5,
        has_polishing: false,
        has_quality: false,
        need_quenching: false,
        show_notification: false,
        key: {
            'C': { item: 'create:andesite_alloy' },
            'R': { item: 'minecraft:redstone' },
            'L': { tag: 'minecraft:logs' }
        },
        pattern: ['CRC', 'L L'],
        result: { count: 1, id: 'create:cart_assembler' }
    })

    // === 线性底盘（create:linear_chassis，轴向底盘）— 铁砧锻造：上下安山合金 + 3 原木 ===
    // 官方工作台配方已被 00_remove_all_mod_recipes.js 统一删除
    event.custom({
        type: 'overgeared:forging',
        hammering: 3,
        has_polishing: false,
        has_quality: false,
        need_quenching: false,
        show_notification: false,
        key: {
            'P': { item: 'create:andesite_alloy' },
            'L': { tag: 'minecraft:logs' }
        },
        pattern: [' P ', 'LLL', ' P '],
        result: { count: 3, id: 'create:linear_chassis' }
    })

    // === 线性底盘 ↔ 次级线性底盘 — 工作台 1:1 互换 ===
    event.shapeless('create:secondary_linear_chassis', ['create:linear_chassis'])
    event.shapeless('create:linear_chassis', ['create:secondary_linear_chassis'])

    // === 径向底盘（create:radial_chassis）— 铁砧锻造：左右安山合金 + 3 原木 ===
    // 官方工作台配方已被 00_remove_all_mod_recipes.js 统一删除
    event.custom({
        type: 'overgeared:forging',
        hammering: 3,
        has_polishing: false,
        has_quality: false,
        need_quenching: false,
        show_notification: false,
        key: {
            'P': { item: 'create:andesite_alloy' },
            'L': { tag: 'minecraft:logs' }
        },
        pattern: [' L ', 'PLP', ' L '],
        result: { count: 3, id: 'create:radial_chassis' }
    })

    // === 黏着器（create:sticker）— 粘液块右键原版活塞 ===
    create.item_application('create:sticker', ['minecraft:piston', 'minecraft:slime_block'])

    // === 动态结构控制器（create:contraption_controls）— 电子管右键安山机壳（消耗电子管） ===
    create.item_application('create:contraption_controls', ['create:andesite_casing', 'create:electron_tube'])

    // === 动力钻头（create:mechanical_drill）— 铁砧锻造：钢锭钻头 + 安山合金 + 机壳 ===
    // 官方工作台配方已被 00_remove_all_mod_recipes.js 统一删除
    event.custom({
        type: 'overgeared:forging',
        hammering: 4,
        has_polishing: false,
        has_quality: false,
        need_quenching: false,
        show_notification: false,
        key: {
            'A': { item: 'create:andesite_alloy' },
            'I': { tag: 'c:ingots/steel' },
            'C': { item: 'create:andesite_casing' }
        },
        pattern: [' A ', 'AIA', ' C '],
        result: { count: 1, id: 'create:mechanical_drill' }
    })

    // === 动力锯（create:mechanical_saw）— 铁砧锻造：钢板锯片 + 钢锭 + 机壳 ===
    // 官方工作台配方已被 00_remove_all_mod_recipes.js 统一删除
    event.custom({
        type: 'overgeared:forging',
        hammering: 4,
        has_polishing: false,
        has_quality: false,
        need_quenching: false,
        show_notification: false,
        key: {
            'A': { tag: 'c:plates/steel' },
            'I': { tag: 'c:ingots/steel' },
            'C': { item: 'create:andesite_casing' }
        },
        pattern: [' A ', 'AIA', ' C '],
        result: { count: 1, id: 'create:mechanical_saw' }
    })

    // === 机械手（create:deployer）— 铁砧锻造：黄铜手 + 机壳 + 电子管 ===
    // 黄铜手/电子管为物品（非方块），worldcraft 结构配方无法使用，走铁砧锻造
    event.custom({
        type: 'overgeared:forging',
        hammering: 4,
        has_polishing: false,
        has_quality: false,
        need_quenching: false,
        show_notification: false,
        key: {
            'B': { item: 'create:electron_tube' },
            'C': { item: 'create:andesite_casing' },
            'I': { item: 'create:brass_hand' }
        },
        pattern: ['B', 'C', 'I'],
        result: { count: 1, id: 'create:deployer' }
    })

    // === 转速表（create:speedometer）— 指南针右键安山机壳（消耗指南针） ===
    // 官方工作台配方已被 00_remove_all_mod_recipes.js 统一删除
    create.item_application('create:speedometer', ['create:andesite_casing', 'minecraft:compass'])

    // === 转速表 ↔ 应力表（create:stressometer）— 工作台 1:1 互换 ===
    event.shapeless('create:stressometer', ['create:speedometer'])

    // === 接触式红石信号发生器（create:redstone_contact）— 铁砧锻造：圆石底座 + 钢板 + 红石粉 ===
    // 官方工作台配方已被 00_remove_all_mod_recipes.js 统一删除
    event.custom({
        type: 'overgeared:forging',
        hammering: 3,
        has_polishing: false,
        has_quality: false,
        need_quenching: false,
        show_notification: false,
        key: {
            'S': { tag: 'c:plates/steel' },
            'C': { item: 'minecraft:cobblestone' },
            'W': { tag: 'c:dusts/redstone' }
        },
        pattern: [' S ', 'CWC', 'CCC'],
        result: { count: 2, id: 'create:redstone_contact' }
    })

    // === 动力收割机（create:mechanical_harvester）— 铁砧锻造：钢板刀片 + 安山合金 + 机壳 ===
    // 官方工作台配方已被 00_remove_all_mod_recipes.js 统一删除
    event.custom({
        type: 'overgeared:forging',
        hammering: 4,
        has_polishing: false,
        has_quality: false,
        need_quenching: false,
        show_notification: false,
        key: {
            'A': { item: 'create:andesite_alloy' },
            'I': { tag: 'c:plates/steel' },
            'C': { item: 'create:andesite_casing' }
        },
        pattern: ['AIA', 'AIA', ' C '],
        result: { count: 1, id: 'create:mechanical_harvester' }
    })

    // === 动力犁（create:mechanical_plough）— 铁砧锻造：钢板犁头 + 安山合金 + 机壳 ===
    // 官方工作台配方已被 00_remove_all_mod_recipes.js 统一删除
    event.custom({
        type: 'overgeared:forging',
        hammering: 4,
        has_polishing: false,
        has_quality: false,
        need_quenching: false,
        show_notification: false,
        key: {
            'A': { item: 'create:andesite_alloy' },
            'I': { tag: 'c:plates/steel' },
            'C': { item: 'create:andesite_casing' }
        },
        pattern: ['III', 'AAA', ' C '],
        result: { count: 1, id: 'create:mechanical_plough' }
    })

    // === 动力压路机（create:mechanical_roller）— 粉碎轮右键动态结构控制器（消耗粉碎轮） ===
    create.item_application('create:mechanical_roller', ['create:contraption_controls', 'create:crushing_wheel'])

    // === 风帆框架（create:sail_frame）— 斧子右键木制台阶 ===
    event.custom({
        type: 'create:item_application',
        ingredients: [
            { tag: 'minecraft:wooden_slabs' },
            { tag: 'minecraft:axes' }
        ],
        results: [{ id: 'create:sail_frame' }]
    })

    // === 风帆（create:white_sail）— 地毯右键风帆框架 ===
    event.custom({
        type: 'create:item_application',
        ingredients: [
            { item: 'create:sail_frame' },
            { tag: 'minecraft:wool_carpets' }
        ],
        results: [{ id: 'create:white_sail' }]
    })

    // === 安山机壳 — 原版配方：安山合金右键剥皮原木/木头 ===
    event.custom({
        type: 'create:item_application',
        ingredients: [
            { tag: 'c:stripped_logs' },
            { item: 'create:andesite_alloy' }
        ],
        results: [{ id: 'create:andesite_casing' }]
    })
    event.custom({
        type: 'create:item_application',
        ingredients: [
            { tag: 'c:stripped_woods' },
            { item: 'create:andesite_alloy' }
        ],
        results: [{ id: 'create:andesite_casing' }]
    })

    // === 黄铜机壳 — 黄铜锭右键剥皮原木/木头（官方配方，全标签） ===
    event.custom({
        type: 'create:item_application',
        ingredients: [
            { tag: 'c:stripped_logs' },
            { tag: 'c:ingots/brass' }
        ],
        results: [{ id: 'create:brass_casing' }]
    })
    event.custom({
        type: 'create:item_application',
        ingredients: [
            { tag: 'c:stripped_woods' },
            { tag: 'c:ingots/brass' }
        ],
        results: [{ id: 'create:brass_casing' }]
    })

    // === 铜机壳 — 铜锭右键剥皮原木/木头（官方配方，全标签） ===
    event.custom({
        type: 'create:item_application',
        ingredients: [
            { tag: 'c:stripped_logs' },
            { tag: 'c:ingots/copper' }
        ],
        results: [{ id: 'create:copper_casing' }]
    })
    event.custom({
        type: 'create:item_application',
        ingredients: [
            { tag: 'c:stripped_woods' },
            { tag: 'c:ingots/copper' }
        ],
        results: [{ id: 'create:copper_casing' }]
    })

    // === 加热黄铜锭（createae2:heated_brass_ingot）— 铁砧锻造：加热锌锭 + 加热铜锭 ===
    event.custom({
        type: 'overgeared:forging',
        hammering: 4,
        has_polishing: false,
        has_quality: false,
        need_quenching: false,
        show_notification: false,
        key: {
            'Z': { item: 'createae2:heated_zinc_ingot' },
            'C': { item: 'overgeared:heated_copper_ingot' }
        },
        pattern: ['ZC'],
        result: { count: 1, id: 'createae2:heated_brass_ingot' }
    })
    create.mixing('2x createae2:heated_brass_ingot',['createae2:heated_zinc_ingot','overgeared:heated_copper_ingot']).heated()
    // === 动力合成器（create:mechanical_crafter）— 工作台右键黄铜机壳 ===
    create.item_application('create:mechanical_crafter', ['create:brass_casing', 'minecraft:crafting_table'])

    // === 时序齿轮箱（create:sequenced_gearshift）— 电子管右键齿轮箱 ===
    create.item_application('create:sequenced_gearshift', ['create:gearshift', 'create:electron_tube'])

    // === 精密构件（create:precision_mechanism）— 序列装配：金板 → 装齿轮/大齿轮/铁粒 ×5 轮 ===
    // 官方配方被清理脚本删除，这里重加。装配台：金板进料，机械手依次装 齿轮/大齿轮/铁粒，5 轮出精密构件
    create.sequenced_assembly(
        ['create:precision_mechanism'],
        'create:golden_sheet',   // 原料：金板
        [
            create.deploying(['create:incomplete_precision_mechanism'], ['create:incomplete_precision_mechanism', 'create:cogwheel']),
            create.deploying(['create:incomplete_precision_mechanism'], ['create:incomplete_precision_mechanism', 'create:large_cogwheel']),
            create.deploying(['create:incomplete_precision_mechanism'], ['create:incomplete_precision_mechanism', 'overgeared:steel_nugget']),
        ]
    ).transitionalItem('create:incomplete_precision_mechanism').loops(5)

    // === 转速控制器（create:rotation_speed_controller）— 精密构件右键黄铜机壳 ===
    create.item_application('create:rotation_speed_controller', ['create:brass_casing', 'create:precision_mechanism'])

    // === 动力臂（create:mechanical_arm）— 铁砧锻造：黄铜板+精密构件+机壳 ===
    // 材料多为物品（非方块），worldcraft 结构配方无法使用，走铁砧锻造（官方 3x3 形状）
    event.custom({
        type: 'overgeared:forging',
        hammering: 5,
        has_polishing: false,
        has_quality: false,
        need_quenching: false,
        show_notification: false,
        key: {
            'A': { item: 'create:andesite_alloy' },
            'C': { item: 'create:brass_casing' },
            'I': { item: 'create:precision_mechanism' },
            'L': { tag: 'c:plates/brass' }
        },
        pattern: ['LLA', 'L  ', 'IC '],
        result: { count: 1, id: 'create:mechanical_arm' }
    })

    // === 安山漏斗 / 黄铜漏斗 — 铁砧锻造（干海带+金属，官方竖列形状，一次 2 个） ===
    // 材料全为物品（非方块），worldcraft 结构配方无法使用，走铁砧锻造
    event.custom({
        type: 'overgeared:forging',
        hammering: 3,
        has_polishing: false,
        has_quality: false,
        need_quenching: false,
        show_notification: false,
        key: {
            'A': { item: 'create:andesite_alloy' },
            'K': { item: 'minecraft:dried_kelp' }
        },
        pattern: ['A', 'K'],
        result: { count: 2, id: 'create:andesite_funnel' }
    })
    event.custom({
        type: 'overgeared:forging',
        hammering: 4,
        has_polishing: false,
        has_quality: false,
        need_quenching: false,
        show_notification: false,
        key: {
            'E': { item: 'create:electron_tube' },
            'A': { item: 'create:brass_ingot' },
            'K': { item: 'minecraft:dried_kelp' }
        },
        pattern: ['E', 'A', 'K'],
        result: { count: 2, id: 'create:brass_funnel' }
    })

    // === 安山隧道 / 黄铜隧道 — 漏斗右键对应机壳（在漏斗配方基础上升级） ===
    create.item_application('create:andesite_tunnel', ['create:andesite_casing', 'create:andesite_funnel'])
    create.item_application('create:brass_tunnel', ['create:brass_casing', 'create:brass_funnel'])

    // === 存量探测器（create:content_observer）— 黄铜锭右键侦测器 ===
    create.item_application('create:content_observer', ['minecraft:observer', 'create:brass_ingot'])

    // === 存量转信器（create:stockpile_switch）— 黄铜锭右键比较器 ===
    create.item_application('create:stockpile_switch', ['minecraft:comparator', 'create:brass_ingot'])

    // === 物品保险库（create:item_vault）— 铁砧锻造：钢板+木桶+钢板（官方竖列，钢制路线） ===
    event.custom({
        type: 'overgeared:forging',
        hammering: 3,
        has_polishing: false,
        has_quality: false,
        need_quenching: false,
        show_notification: false,
        key: {
            'B': { item: 'overgeared:steel_plate' },
            'C': { item: 'minecraft:barrel' }
        },
        pattern: ['B', 'C', 'B'],
        result: { count: 1, id: 'create:item_vault' }
    })

    // === 物品舱口（create:item_hatch）— 安山合金右键铁活板门（物品保险库的接口） ===
    create.item_application('create:item_hatch', ['minecraft:iron_trapdoor', 'create:andesite_alloy'])

    // === 扇叶 — 加热钢锭在铁砧锻造（两块钢锭锻成叶片） ===
    // 原版工作台配方已被 00_remove_all_mod_recipes.js 统一删除
    event.custom({
        type: 'overgeared:forging',
        hammering: 6,
        has_polishing: false,
        has_quality: false,
        need_quenching: false,
        show_notification: true,
        key: { '#': { item: 'overgeared:steel_ingot' } },
        pattern: [' # ', '###', ' # '],
        result: { count: 1, id: 'create:propeller' }
    })

    // === 鼓风机 — 扇叶右键安山机壳（叶片装进机壳） ===
    create.item_application('create:encased_fan', ['create:andesite_casing', 'create:propeller'])

    // === 齿轮 — 木板右键传动杆（木板当齿，嵌在轴上） ===
    event.custom({
        type: 'create:item_application',
        ingredients: [
            { item: 'create:shaft' },
            { tag: 'minecraft:planks' }
        ],
        results: [{ id: 'create:cogwheel' }]
    })

    // === 大齿轮 — 木板右键齿轮（加齿放大） ===
    event.custom({
        type: 'create:item_application',
        ingredients: [
            { item: 'create:cogwheel' },
            { tag: 'minecraft:planks' }
        ],
        results: [{ id: 'create:large_cogwheel' }]
    })

    // === 水车 — 原木右键大齿轮（原木作桨叶） ===
    event.custom({
        type: 'create:item_application',
        ingredients: [
            { item: 'create:large_cogwheel' },
            { tag: 'minecraft:logs' }
        ],
        results: [{ id: 'create:water_wheel' }]
    })

    // === 大型水车 — 已改为 worldcraft 结构配方（kubejs/data/worldcrafting/recipe/） ===

    // === 工程师护目镜 — 锻造台组装 ===
    event.custom({
        type: 'overgeared:forging',
        blueprint: ['goggles'],
        hammering: 6,
        has_polishing: false,
        has_quality: true,
        need_quenching: false,
        show_notification: true,
        key: {
            'L': { item: 'minecraft:leather' },
            'G': { tag: 'c:glass_blocks' },
            'P': { item: 'create:golden_sheet' }
        },
        pattern: ['LLL','GPG'],
        result: { count: 1, id: 'create:goggles' }
    })

    // === 扳手 — 锻造台组装 ===
    event.custom({
        type: 'overgeared:forging',
        blueprint: ['wrench'],
        hammering: 4,
        has_polishing: false,
        has_quality: true,
        need_quenching: false,
        show_notification: true,
        key: {
            'G': { item: 'create:cogwheel' },
            'P': { item: 'create:golden_sheet' },
            'S': { item: 'create:shaft' },
            'I': { item: 'minecraft:stick' }
        },
        pattern: ['PG ', ' S ', ' I '],
        result: { count: 1, id: 'create:wrench' }
    })

    // === 动力搅拌器 — 链式传动箱右键安山机壳 ===
    create.item_application('create:mechanical_mixer', ['create_connected:encased_chain_cogwheel', 'create:whisk'])

    // === 工作盆 — 镐子右键安山合金块（挖出盆形） ===
    event.custom({
        type: 'create:item_application',
        ingredients: [
            { item: 'create:andesite_alloy_block' },
            { tag: 'minecraft:pickaxes' }

        ],
        results: [{ id: 'create:basin' }]
    })

    // === 空的烈焰人燃烧室 — 4 钢板铁砧锻造（2x2，呼应原版 4 铁锭） ===
    event.custom({
        type: 'overgeared:forging',
        hammering: 4,
        has_polishing: false,
        has_quality: false,
        need_quenching: false,
        show_notification: true,
        key: { 'P': { item: 'overgeared:steel_plate' } },
        pattern: ['PPP', 'P P','PPP'],
        result: { count: 1, id: 'create:empty_blaze_burner' }
    })

    // === 置物台 — 安山合金右键安山机壳 ===
    create.item_application('create:depot', ['create:andesite_casing', 'create:andesite_alloy'])

    // === 弹射置物台 — 弹簧右键置物台 ===
    create.item_application('create:weighted_ejector', ['create:depot', 'createvintageneoforged:iron_spring'])

    // === 粉碎轮 — 机械动力原版配方（动力装配台 5x5），原版配方被清理脚本删除，这里恢复 ===
    event.recipes.create.mechanical_crafting(
        '2x create:crushing_wheel',
        [' AAA ', 'AAPAA', 'APSPA', 'AAPAA', ' AAA '],
        {
            A: 'create:andesite_alloy',
            P: '#minecraft:planks',
            S: '#c:stones'
        }
    )

    // === 木质支架 — 铁砧锻造（木棍+木板+安山合金，官方工作台 2x3 排布） ===
    event.custom({
        type: 'overgeared:forging',
        hammering: 2,
        has_polishing: false,
        has_quality: false,
        need_quenching: false,
        show_notification: false,
        key: {
            'C': { item: 'create:andesite_alloy' },
            'P': { tag: 'minecraft:planks' },
            'S': { tag: 'c:rods/wooden' }
        },
        pattern: ['SSS', 'PCP'],
        result: { count: 4, id: 'create:wooden_bracket' }
    })

    // === 金属支架 — 铁砧锻造（钢粒+钢锭+安山合金，官方工作台 2x3 排布） ===
    event.custom({
        type: 'overgeared:forging',
        hammering: 2,
        has_polishing: false,
        has_quality: false,
        need_quenching: false,
        show_notification: false,
        key: {
            'C': { item: 'create:andesite_alloy' },
            'P': { tag: 'c:ingots/steel' },
            'S': { tag: 'c:nuggets/steel' }
        },
        pattern: ['SSS', 'PCP'],
        result: { count: 4, id: 'create:metal_bracket' }
    })

    // === 流体管道 — 铁砧锻造（铜板+铜锭+铜板，官方工作台横排） ===
    event.custom({
        type: 'overgeared:forging',
        hammering: 3,
        has_polishing: false,
        has_quality: false,
        need_quenching: false,
        show_notification: false,
        key: {
            'C': { tag: 'c:ingots/copper' },
            'S': { tag: 'c:plates/copper' }
        },
        pattern: ['SCS'],
        result: { count: 4, id: 'create:fluid_pipe' }
    })

    // === 动力泵 — 齿轮右键流体管道（齿轮作为动力输入） ===
    create.item_application('create:mechanical_pump', ['create:fluid_pipe', 'create:cogwheel'])

    // === 智能流体管道 — 电子管右键流体管道 ===
    create.item_application('create:smart_fluid_pipe', ['create:fluid_pipe', 'create:electron_tube'])

    // === 分液池 — 铁丝束右键流体储罐（铁丝作过滤网） ===
    create.item_application('create:item_drain', ['create:fluid_tank', 'electroenergetics:iron_wire_strand'])

    // === 铁丝束 — 钢板铁砧锻造（钢板拉丝成铁丝） ===
    event.custom({
        type: 'overgeared:forging',
        hammering: 3,
        has_polishing: false,
        has_quality: false,
        need_quenching: false,
        show_notification: false,
        key: { '#': { tag: 'c:plates/iron' } },
        pattern: [' # ', ' # ', ' # '],
        result: { count: 4, id: 'electroenergetics:iron_wire_strand' }
    })

    // === 注液器 — 干海带右键流体储罐（海带作吸液管） ===
    create.item_application('create:spout', ['create:fluid_tank', 'minecraft:dried_kelp'])

    // === 粘性动力活塞 — 粘液球右键动力活塞 ===
    create.item_application('create:sticky_mechanical_piston', ['create:mechanical_piston', 'minecraft:slime_ball'])

    // === 活塞延长杆 — 铁砧锻造（木板+安山合金+木板竖排，官方工作台排布） ===
    event.custom({
        type: 'overgeared:forging',
        hammering: 3,
        has_polishing: false,
        has_quality: false,
        need_quenching: false,
        show_notification: false,
        key: {
            'P': { tag: 'minecraft:planks' },
            'A': { item: 'create:andesite_alloy' }
        },
        pattern: ['P', 'A', 'P'],
        result: { count: 8, id: 'create:piston_extension_pole' }
    })

    // === 流体阀门 — 传动杆右键流体管道（传动杆作阀杆） ===
    create.item_application('create:fluid_valve', ['create:fluid_pipe', 'create:shaft'])

    // === 铜制阀门手轮 — 铁砧锻造（铜板+安山合金，官方工作台排布） ===
    event.custom({
        type: 'overgeared:forging',
        hammering: 3,
        has_polishing: false,
        has_quality: false,
        need_quenching: false,
        show_notification: false,
        key: {
            'C': { tag: 'c:plates/copper' },
            'S': { item: 'create:andesite_alloy' }
        },
        pattern: ['CCC', ' S '],
        result: { count: 1, id: 'create:copper_valve_handle' }
    })

    // === 流体储罐 — 铁砧锻造（铜板+木桶+铜板竖排，官方工作台排布） ===
    event.custom({
        type: 'overgeared:forging',
        hammering: 3,
        has_polishing: false,
        has_quality: false,
        need_quenching: false,
        show_notification: false,
        key: {
            'B': { tag: 'c:plates/copper' },
            'C': { tag: 'c:barrels/wooden' }
        },
        pattern: ['B', 'C', 'B'],
        result: { count: 2, id: 'create:fluid_tank' }
    })


    // === 弹簧 — 加热铁锭铁砧锻造 ===
    event.custom({
        type: 'overgeared:forging',
        hammering: 5,
        has_polishing: false,
        has_quality: false,
        need_quenching: false,
        show_notification: true,
        key: { '#': { item: 'overgeared:heated_iron_ingot' } },
        pattern: ['###',' # ','###'],
        result: { count: 1, id: 'createvintageneoforged:iron_spring' }
    })

    // === 溜槽 — 铁砧锻造（钢板+钢锭竖排，呼应官方 2板1锭→4管） ===
    event.custom({
        type: 'overgeared:forging',
        hammering: 4,
        has_polishing: false,
        has_quality: false,
        need_quenching: false,
        show_notification: true,
        key: {
            'A': { tag: 'c:plates/steel' },
            'I': { tag: 'c:ingots/steel' }
        },
        pattern: ['A', 'I', 'A'],
        result: { count: 2, id: 'create:chute' }
    })
    //列车机壳 
    create.item_application('create:railway_casing',['create:brass_casing','create:sturdy_sheet'])
    //打包机
    create.item_application('create:packager',['create:andesite_casing','create:cardboard_block'])
    //理包机
    event.shapeless('create:repackager','create:packager')
    event.shapeless('create:packager','create:repackager')
    //蛙港
    create.item_application('create:package_frogport',['create:andesite_casing','minecraft:slime_ball'])
    //邮箱
    create.item_application('create:light_gray_postbox',['minecraft:barrel','create:andesite_alloy'])
    //白色邮箱
    event.custom({type:'create:item_application',ingredients: [{"tag": "create:postboxes"},{"item": "minecraft:white_dye"}],results: [{"id": "create:white_postbox"}]})
    //黑色邮箱
    event.custom({type:'create:item_application',ingredients: [{"tag": "create:postboxes"},{"item": "minecraft:black_dye"}],results: [{"id": "create:black_postbox"}]})
    //橙色邮箱
    event.custom({type:'create:item_application',ingredients: [{"tag": "create:postboxes"},{"item": "minecraft:orange_dye"}],results: [{"id": "create:orange_postbox"}]})
    //品红色邮箱
    event.custom({type:'create:item_application',ingredients: [{"tag": "create:postboxes"},{"item": "minecraft:magenta_dye"}],results: [{"id": "create:magenta_postbox"}]})
    //淡蓝色邮箱
    event.custom({type:'create:item_application',ingredients: [{"tag": "create:postboxes"},{"item": "minecraft:light_blue_dye"}],results: [{"id": "create:light_blue_postbox"}]})
    //黄色邮箱
    event.custom({type:'create:item_application',ingredients: [{"tag": "create:postboxes"},{"item": "minecraft:yellow_dye"}],results: [{"id": "create:yellow_postbox"}]})
    //黄绿色邮箱
    event.custom({type:'create:item_application',ingredients: [{"tag": "create:postboxes"},{"item": "minecraft:lime_dye"}],results: [{"id": "create:lime_postbox"}]})
    //粉红色邮箱
    event.custom({type:'create:item_application',ingredients: [{"tag": "create:postboxes"},{"item": "minecraft:pink_dye"}],results: [{"id": "create:pink_postbox"}]})
    //灰色邮箱
    event.custom({type:'create:item_application',ingredients: [{"tag": "create:postboxes"},{"item": "minecraft:gray_dye"}],results: [{"id": "create:gray_postbox"}]})
    //青色邮箱
    event.custom({type:'create:item_application',ingredients: [{"tag": "create:postboxes"},{"item": "minecraft:cyan_dye"}],results: [{"id": "create:cyan_postbox"}]})
    //紫色邮箱
    event.custom({type:'create:item_application',ingredients: [{"tag": "create:postboxes"},{"item": "minecraft:purple_dye"}],results: [{"id": "create:purple_postbox"}]})
    //蓝色邮箱
    event.custom({type:'create:item_application',ingredients: [{"tag": "create:postboxes"},{"item": "minecraft:blue_dye"}],results: [{"id": "create:blue_postbox"}]})
    //棕色邮箱
    event.custom({type:'create:item_application',ingredients: [{"tag": "create:postboxes"},{"item": "minecraft:brown_dye"}],results: [{"id": "create:brown_postbox"}]})
    //绿色邮箱
    event.custom({type:'create:item_application',ingredients: [{"tag": "create:postboxes"},{"item": "minecraft:green_dye"}],results: [{"id": "create:green_postbox"}]})
    //红色邮箱
    event.custom({type:'create:item_application',ingredients: [{"tag": "create:postboxes"},{"item": "minecraft:red_dye"}],results: [{"id": "create:red_postbox"}]})
    //仓储链接站
    create.item_application('create:stock_link',['create:item_vault','create:transmitter'])
    //仓储发报机
    create.item_application('create:stock_ticker',['create:stock_link','create:framed_glass'])
    //红石请求器
    create.item_application('create:redstone_requester',['create:item_vault','create:electron_tube'])
    //显示链接器
    create.item_application('create:display_link',['create:brass_casing','create:transmitter'])
    //工厂仪表
    create.item_application('create:factory_gauge',['create:stock_link','create:electron_tube'])

    //白色桌布
    create.item_application('create:white_table_cloth',['minecraft:white_wool','create:andesite_alloy'])
    event.custom({type:'create:item_application',ingredients: [{"tag": "create:table_cloths"},{"item": "minecraft:white_dye"}],results: [{"id": "create:white_table_cloth"}]})
    //红色桌布
    event.custom({type:'create:item_application',ingredients: [{"tag": "create:table_cloths"},{"item": "minecraft:red_dye"}],results: [{"id": "create:red_table_cloth"}]})
    //橙色
    event.custom({type:'create:item_application',ingredients: [{"tag": "create:table_cloths"},{"item": "minecraft:orange_dye"}],results: [{"id": "create:orange_table_cloth"}]})
    //品红色
    event.custom({type:'create:item_application',ingredients: [{"tag": "create:table_cloths"},{"item": "minecraft:magenta_dye"}],results: [{"id": "create:magenta_table_cloth"}]})
    //淡蓝色
    event.custom({type:'create:item_application',ingredients: [{"tag": "create:table_cloths"},{"item": "minecraft:light_blue_dye"}],results: [{"id": "create:light_blue_table_cloth"}]})
    //黄色
    event.custom({type:'create:item_application',ingredients: [{"tag": "create:table_cloths"},{"item": "minecraft:yellow_dye"}],results: [{"id": "create:yellow_table_cloth"}]})
    //黄绿色
    event.custom({type:'create:item_application',ingredients: [{"tag": "create:table_cloths"},{"item": "minecraft:lime_dye"}],results: [{"id": "create:lime_table_cloth"}]})
    //粉红色
    event.custom({type:'create:item_application',ingredients: [{"tag": "create:table_cloths"},{"item": "minecraft:pink_dye"}],results: [{"id": "create:pink_table_cloth"}]})
    //灰色
    event.custom({type:'create:item_application',ingredients: [{"tag": "create:table_cloths"},{"item": "minecraft:gray_dye"}],results: [{"id": "create:gray_table_cloth"}]})
    //淡灰色
    event.custom({type:'create:item_application',ingredients: [{"tag": "create:table_cloths"},{"item": "minecraft:light_gray_dye"}],results: [{"id": "create:light_gray_table_cloth"}]})
    //青色
    event.custom({type:'create:item_application',ingredients: [{"tag": "create:table_cloths"},{"item": "minecraft:cyan_dye"}],results: [{"id": "create:cyan_table_cloth"}]})
    //紫色
    event.custom({type:'create:item_application',ingredients: [{"tag": "create:table_cloths"},{"item": "minecraft:purple_dye"}],results: [{"id": "create:purple_table_cloth"}]})
    //蓝色
    event.custom({type:'create:item_application',ingredients: [{"tag": "create:table_cloths"},{"item": "minecraft:blue_dye"}],results: [{"id": "create:blue_table_cloth"}]})
    //棕色
    event.custom({type:'create:item_application',ingredients: [{"tag": "create:table_cloths"},{"item": "minecraft:brown_dye"}],results: [{"id": "create:brown_table_cloth"}]})
    //绿色
    event.custom({type:'create:item_application',ingredients: [{"tag": "create:table_cloths"},{"item": "minecraft:green_dye"}],results: [{"id": "create:green_table_cloth"}]})
    //黑色
    event.custom({type:'create:item_application',ingredients: [{"tag": "create:table_cloths"},{"item": "minecraft:black_dye"}],results: [{"id": "create:black_table_cloth"}]})
    //安山桌面
        event.custom({
        type: 'overgeared:forging',
        hammering: 4,
        has_polishing: false,
        has_quality: false,
        need_quenching: false,
        show_notification: true,
        key: {
            'A': { tag: 'create:table_cloths' },
            'I': { item: 'create:andesite_casing' }
        },
        pattern: ['A', 'I'],
        result: { count: 2, id: 'create:andesite_table_cloth' }
    })
    //黄铜桌面
     event.custom({
        type: 'overgeared:forging',
        hammering: 4,
        has_polishing: false,
        has_quality: false,
        need_quenching: false,
        show_notification: true,
        key: {
            'A': { tag: 'create:table_cloths' },
            'I': { item: 'create:brass_casing' }
        },
        pattern: ['A', 'I'],
        result: { count: 2, id: 'create:brass_table_cloth' }})
    //铜制桌面
    event.custom({
        type: 'overgeared:forging',
        hammering: 4,
        has_polishing: false,
        has_quality: false,
        need_quenching: false,
        show_notification: true,
        key: {
            'A': { tag: 'create:table_cloths' },
            'I': { item: 'create:copper_casing' }
        },
        pattern: ['A', 'I'],
        result: { count: 2, id: 'create:copper_table_cloth' }})
    //显示器
        event.custom({
        type: 'overgeared:forging',
        hammering: 4,
        has_polishing: false,
        has_quality: false,
        need_quenching: false,
        show_notification: true,
        key: {
            'A': { item: 'create:electron_tube' },
            'I': { item: 'create:andesite_alloy' }
        },
        pattern: ['IAI'],
        result: { count: 2, id: 'create:display_board' }})
    //辉光管
        event.custom({
        type: 'overgeared:forging',
        hammering: 4,
        has_polishing: false,
        has_quality: false,
        need_quenching: false,
        show_notification: true,
        key: {
            'I': { item: 'create:electron_tube' }
        },
        pattern: ['II'],
        result: { count: 1, id: 'create:nixie_tube' }})
    //玫瑰石英灯 
    create.sandpaper_polishing('create:rose_quartz_lamp','create:rose_quartz_block')
    //无线红石信号终端
    create.item_application('create:redstone_link',['create:andesite_casing','create:transmitter'])
    //模拟拉杆
    create.item_application('create:analog_lever',['create:andesite_casing','minecraft:stick'])
    //置物板
        event.custom({
        type: 'overgeared:forging',
        hammering: 4,
        has_polishing: false,
        has_quality: false,
        need_quenching: false,
        show_notification: true,
        key: {
            'I': { item: 'create:brass_sheet' },
            "A": {item:'minecraft:item_frame'}
        },
        pattern: ['IA'],
        result: { count: 1, id: 'create:placard' }})
    //脉冲中继器
    create.item_application('create:pulse_repeater',['minecraft:repeater','create:brass_sheet'])
    //脉冲延长器
    create.item_application('create:pulse_extender' ,['minecraft:repeater','minecraft:redstone_torch'])
    //脉冲计时器
    create.item_application('create:pulse_timer' ,['minecraft:repeater','minecraft:amethyst_shard'])
    //锁存器
    create.item_application('create:powered_latch' ,['minecraft:comparator','minecraft:lever'])
    //转换锁存器
    event.shapeless('create:powered_latch','create:powered_toggle_latch')
    event.shapeless('create:powered_toggle_latch','create:powered_latch')
    //奇异钟
        event.custom({
        type: 'overgeared:forging',
        hammering: 4,
        has_polishing: false,
        has_quality: false,
        need_quenching: false,
        show_notification: true,
        key: {
            'I': { item: 'create:brass_block' },
            "A": { item: 'create:brass_sheet'}
        },
        pattern: [' A ',' I '],
        result: { count: 1, id: 'create:peculiar_bell' }})
    //缠魂钟
        create.haunting('create:haunted_bell','create:peculiar_bell')
    //呼唤铃
        event.custom({
        type: 'overgeared:forging',
        hammering: 4,
        has_polishing: false,
        has_quality: false,
        need_quenching: false,
        show_notification: true,
        key: {
            'I': { item: 'create:andesite_casing' },
            "A": { item: 'create:golden_sheet'}
        },
        pattern: [' A ',' I '],
        result: { count: 1, id: 'create:desk_bell' }})
    //棕色工具箱
        event.custom({
        type: 'overgeared:forging',
        hammering: 4,
        has_polishing: false,
        has_quality: false,
        need_quenching: false,
        show_notification: true,
        key: {
            'I': { item: 'minecraft:chest' },
            "A": { item: 'create:cogwheel'},
            "X": { item: 'create:golden_sheet'},
            "S": { item: 'minecraft:leather'}

        },
        pattern: [' A ','XIX', ' S '],
        result: { count: 1, id: 'create:brown_toolbox' }})
    //剪贴板
        event.custom({
        type: 'overgeared:forging',
        hammering: 4,
        has_polishing: false,
        has_quality: false,
        need_quenching: false,
        show_notification: true,
        key: {
            'I': { item: 'create:andesite_alloy' },
            "A": { item: 'minecraft:paper'},
            "X": { tag: 'minecraft:planks'}

        },
        pattern: [' I ',' A ', ' X '],
        result: { count: 1, id: 'create:clipboard' }})
//面团
event.shapeless('3x create:dough',['minecraft:water_bucket','create:wheat_flour','create:wheat_flour','create:wheat_flour'])
event.shapeless('create:dough',['thirst:terracotta_water_bowl','create:wheat_flour'])
create.filling('create:dough', ['create:wheat_flour',Fluid.of('minecraft:water',100)])
//余烬面粉
create.mixing('2x create:cinder_flour',['create:wheat_flour','minecraft:nether_wart'])
    //玫瑰石英
            event.custom({
        type: 'overgeared:forging',
        hammering: 4,
        has_polishing: false,
        has_quality: false,
        need_quenching: false,
        show_notification: true,
        key: {
            'I': { item: 'minecraft:redstone' },
            "A": { item: 'minecraft:quartz'}
        },
        pattern: ['AI ','II '],
        result: { count: 1, id: 'create:rose_quartz' }})
    //磨制玫瑰石英
    create.sandpaper_polishing('create:polished_rose_quartz','create:rose_quartz')
    //黑曜石粉末
        create.milling([CreateItem.of('create:powdered_obsidian',0.2),CreateItem.of('minecraft:obsidian',0.5)],'minecraft:obsidian')
        create.crushing([CreateItem.of('create:powdered_obsidian'),CreateItem.of('minecraft:obsidian',0.99)],'minecraft:obsidian')
    //坚固板
    //坚固板
    create.sequenced_assembly(
        ['create:sturdy_sheet'],
        'create:powdered_obsidian',
        [
            create.deploying('create:unprocessed_obsidian_sheet',['create:unprocessed_obsidian_sheet','minecraft:slime_ball']),
            create.filling('create:unprocessed_obsidian_sheet',['create:unprocessed_obsidian_sheet',Fluid.of('minecraft:lava',250)]),
            create.pressing('create:unprocessed_obsidian_sheet','create:unprocessed_obsidian_sheet'),
            create.pressing('create:unprocessed_obsidian_sheet','create:unprocessed_obsidian_sheet'),
            create.pressing('create:unprocessed_obsidian_sheet','create:unprocessed_obsidian_sheet')
        ]
    ).transitionalItem('create:unprocessed_obsidian_sheet').loops(1)
        event.custom({
        type: 'overgeared:forging',
        hammering: 4,
        has_polishing: false,
        has_quality: false,
        need_quenching: false,
        show_notification: true,
        key: {
            'I': { item: 'createdeco:andesite_sheet' },
            "A": { item: 'overgeared:steel_ingot'}
        },
        pattern: [' I ','III',' A '],
        result: { count: 1, id: 'create:whisk' }})
    //黄铜手部零件
        event.custom({
        type: 'overgeared:forging',
        hammering: 4,
        has_polishing: false,
        has_quality: false,
        need_quenching: false,
        show_notification: true,
        key: {
            'I': { item: 'create:brass_sheet' },
            "A": { item: 'overgeared:steel_ingot'}
        },
        pattern: [' I ','III',' A '],
        result: { count: 1, id: 'create:brass_hand' }})
    //合成槽盖板
        event.custom({
        type: 'overgeared:forging',
        hammering: 4,
        has_polishing: false,
        has_quality: false,
        need_quenching: false,
        show_notification: true,
        key: {
            'I': { item: 'create:brass_nugget' },
        },
        pattern: ['III'],
        result: { count: 1, id: 'create:brass_hand' }})
    //电子管
        event.custom({
        type: 'overgeared:forging',
        hammering: 4,
        has_polishing: false,
        has_quality: false,
        need_quenching: false,
        show_notification: true,
        key: {
            'I': { item: 'create:framed_glass' },
            'A': { item: 'create:polished_rose_quartz'},
            'X': { item: 'createaddition:copper_wire'},
            'S': { item: 'overgeared:steel_plate'},
        },
        pattern: ['IAI',' X ',' S '],
        result: { count: 1, id: 'create:electron_tube' }})
    //发信线圈
        event.custom({
        type: 'overgeared:forging',
        hammering: 4,
        has_polishing: false,
        has_quality: false,
        need_quenching: false,
        show_notification: true,
        key: {
            'I': { item: 'create:copper_sheet' },
            'A': { item: 'minecraft:redstone'},
            'X': { item: 'createaddition:copper_rod'},
        },
        pattern: [' X ','III',' A '],
        result: { count: 1, id: 'create:transmitter' }})
          //纸浆
        event.custom({
        "type": "create:mixing",
        "heat_requirement": "heated",
        "ingredients": [
          {
            "tag": "create:pulpifiable"
          },
          {
            "tag": "create:pulpifiable"
          },
          {
            "tag": "create:pulpifiable"
          },
          {
            "tag": "create:pulpifiable"
          },
          {
            "type": "neoforge:single",
            "amount": 250,
            "fluid": "minecraft:water"
          }
        ],
        "results": [
          {
            "id": "create:pulp"
          }
        ]})      
        //纸板
        create.sequenced_assembly(
            ['create:cardboard'],
            'create:pulp',
            [
                create.pressing('create:cardboard','create:cardboard'),
                create.pressing('create:cardboard','create:cardboard'),
                vintage.polishing('create:cardboard','create:cardboard')
            ]
        ).transitionalItem('create:cardboard').loops(1)
        //烈焰蛋糕胚
        event.custom({
        "type": "create:compacting",
        "heat_requirement": "heated",
        "ingredients": [
          {
            "tag": "c:eggs"
          },
          {
            "item": "create:cinder_flour"
          },
          {
            "item": "minecraft:sugar"
          },
          {
            "type": "neoforge:single",
            "amount": 100,
            "fluid": "minecraft:water"
          }
        ],
        "results": [
          {
            "id": "create:blaze_cake_base"
          }
        ]})  
        //烈焰蛋糕
        create.filling('create:blaze_cake',['create:blaze_cake_base',Fluid.of('minecraft:lava',500)])
        //纸棍
        event.custom({
        type: 'overgeared:forging',
        hammering: 4,
        has_polishing: false,
        has_quality: false,
        need_quenching: false,
        show_notification: true,
        key: {
            'I': { item: 'create:cardboard' },
        },
        pattern: ['  I',' I ','I  '],
        result: { count: 1, id: 'create:cardboard_sword' }})
        //锌锭和锌粒
        event.shaped('create:zinc_ingot',['CCC','CCC','CCC'],{C:'create:zinc_nugget'})
        event.shapeless('9x create:zinc_nugget','create:zinc_ingot')
        //黄铜
        event.shaped('create:brass_ingot',['CCC','CCC','CCC'],{C:'create:brass_nugget'})
        event.shapeless('9x create:brass_nugget','create:brass_ingot')
        //黄铜板
        event.custom({
        type: 'overgeared:forging',
        hammering: 4,
        has_polishing: false,
        has_quality: false,
        need_quenching: false,
        show_notification: true,
        key: {
            'I': { item: 'create:brass_ingot' },
        },
        pattern: ['I  '],
        result: { count: 1, id: 'create:brass_sheet' }})
        //强力胶
        event.custom({
        type: 'overgeared:forging',
        hammering: 4,
        has_polishing: false,
        has_quality: false,
        need_quenching: false,
        show_notification: true,
        key: {
            'I': { item: 'create:iron_sheet' },
            'S': { item: 'minecraft:iron_nugget' },
            'A': { item: 'minecraft:slime_ball' },
        },
        pattern: ['IS ','AI '],
        result: { count: 1, id: 'create:super_glue' }})
        //矿车连轴器
        event.custom({
        type: 'overgeared:forging',
        hammering: 4,
        has_polishing: false,
        has_quality: false,
        need_quenching: false,
        show_notification: true,
        key: {
            'I': { item: 'create:andesite_alloy' },
            'S': { item: 'overgeared:steel_ingot' },
            'A': { item: 'minecraft:chain' },
        },
        pattern: [' S ','IAI',' S '],
        result: { count: 1, id: 'create:minecart_coupling' }})
        //合成蓝图
        event.shapeless('create:crafting_blueprint',['minecraft:crafting_table','create:empty_schematic'])
        //蓝图
        event.shapeless('create:empty_schematic',['minecraft:paper','minecraft:blue_dye'])
        //铜潜水头盔
        event.custom({
        type: 'overgeared:forging',
        hammering: 4,
        has_polishing: false,
        has_quality: false,
        need_quenching: false,
        show_notification: true,
        key: {
            'I': { item: 'minecraft:dried_kelp' },
            'S': { tag: 'c:glass_blocks' },
            'A': { tag: 'c:plates/copper' },
        },
        pattern: ['AAA','ASA','III'],
        result: { count: 1, id: 'create:copper_diving_helmet' }})
        //下界合金潜水头盔
        event.custom({
        type: 'overgeared:forging',
        hammering: 4,
        has_polishing: false,
        has_quality: false,
        need_quenching: false,
        show_notification: true,
        key: {
            'I': { item: 'minecraft:dried_kelp' },
            'A': { item: 'createvintageneoforged:netherite_sheet' },
            'S': { tag: 'c:glass_blocks' },
            'X': { tag: 'c:plates/copper' },
        },
        pattern: ['AXA','XSX','III'],
        result: { count: 1, id: 'create:netherite_diving_helmet' }})
        //铜潜水靴
        event.custom({
        type: 'overgeared:forging',
        hammering: 4,
        has_polishing: false,
        has_quality: false,
        need_quenching: false,
        show_notification: true,
        key: {
            'I': { tag: 'c:ingots/steel' },
            'X': { tag: 'c:plates/copper' },
        },
        pattern: ['X X','I I'],
        result: { count: 1, id: 'create:copper_diving_boots' }})
        //下界合金潜水靴
        event.custom({
        type: 'overgeared:forging',
        hammering: 4,
        has_polishing: false,
        has_quality: false,
        need_quenching: false,
        show_notification: true,
        key: {
            'I': { tag: 'c:ingots/steel' },
            'X': { item: 'createvintageneoforged:netherite_sheet' },
        },
        pattern: ['X X','I I'],
        result: { count: 1, id: 'create:netherite_diving_boots' }})
        //下界合金板
        event.custom({
        type: 'overgeared:forging',
        hammering: 4,
        has_polishing: false,
        has_quality: false,
        need_quenching: false,
        show_notification: true,
        key: {
            'I': { item: 'minecraft:netherite_ingot' }
        },
        pattern: ['I'],
        result: { count: 1, id: 'createvintageneoforged:netherite_sheet' }})
        //树木肥料
        event.custom({
        "type": "create:mixing",
        "ingredients": [
        {
          "item": "minecraft:bone_meal"
        },
        {
          "tag": "minecraft:corals"
        },
        {
          "tag": "minecraft:small_flowers"
        },
        {
          "tag": "minecraft:small_flowers"
        }
        ],
        "results": [
        {
          "id": "create:tree_fertilizer"
        },
        {
          "id": "create:tree_fertilizer"
        }
    ]})
        //列表过滤器
        event.custom({
        type: 'overgeared:forging',
        hammering: 3,
        has_polishing: false,
        has_quality: false,
        need_quenching: false,
        show_notification: true,
        key: {
            'I': { item: 'minecraft:white_wool' },
            'A': { item: 'overgeared:steel_nugget' }
        },
        pattern: ['AIA'],
        result: { count: 1, id: 'create:filter' }})
        //包裹过滤器
        event.custom({
        type: 'overgeared:forging',
        hammering: 3,
        has_polishing: false,
        has_quality: false,
        need_quenching: false,
        show_notification: true,
        key: {
            'I': { item: 'create:cardboard_block' },
            'A': { item: 'overgeared:steel_nugget' }
        },
        pattern: ['AIA'],
        result: { count: 1, id: 'create:package_filter' }})
        //属性过滤器
        event.custom({
        type: 'overgeared:forging',
        hammering: 3,
        has_polishing: false,
        has_quality: false,
        need_quenching: false,
        show_notification: true,
        key: {
            'I': { item: 'minecraft:white_wool' },
            'A': { item: 'create:brass_nugget' }
        },
        pattern: ['AIA'],
        result: { count: 1, id: 'create:attribute_filter' }})
        //蓝图与笔
        event.shapeless('create:schematic_and_quill',['create:empty_schematic','minecraft:feather'])
        //铜背罐 — 铁砧锻造：安山合金背带 + 铜块罐体 + 铜锭 + 传动杆（原版 3x3 形状）
        event.custom({
        type: 'overgeared:forging',
        hammering: 4,
        has_polishing: false,
        has_quality: false,
        need_quenching: false,
        show_notification: true,
        key: {
            'A': { item: 'create:andesite_alloy' },
            'G': { item: 'create:shaft' },
            'B': { tag: 'c:storage_blocks/copper' },
            'P': { tag: 'c:ingots/copper' }
        },
        pattern: ['AGA', 'PBP', ' P '],
        result: { count: 1, id: 'create:copper_backtank' }})
        //动力合成配方（原版复制进来，防止总删除时被清掉）
        event.custom({
        type: 'create_jetpack:copy_components_mechanical_crafting',
        accept_mirrored: true,
        category: 'misc',
        pattern: [' PSP ', 'PYXYP', 'PCECP', ' C C '],
        key: {
            'E': { item: 'minecraft:elytra' },
            'C': { item: 'create:chute' },
            'X': { item: 'create:netherite_backtank' },
            'S': { item: 'create:shaft' },
            'Y': { item: 'create:precision_mechanism' },
            'P': { tag: 'c:plates/brass' }
        },
        result: { id: 'create_jetpack:netherite_jetpack' }})
        //普通喷气背包 — 铜背罐版，动力合成配方同样复制进来
        event.custom({
        type: 'create_jetpack:copy_components_mechanical_crafting',
        accept_mirrored: true,
        category: 'misc',
        pattern: [' PSP ', 'PYXYP', 'PCECP', ' C C '],
        key: {
            'E': { item: 'minecraft:elytra' },
            'C': { item: 'create:chute' },
            'X': { item: 'create:copper_backtank' },
            'S': { item: 'create:shaft' },
            'Y': { item: 'create:precision_mechanism' },
            'P': { tag: 'c:plates/brass' }
        },
        result: { id: 'create_jetpack:jetpack' }})
        //下界合金背罐
        event.custom({
        type: 'overgeared:forging',
        hammering: 4,
        has_polishing: false,
        has_quality: false,
        need_quenching: false,
        show_notification: true,
        key: {
            'A': { item: 'create:andesite_alloy' },
            'G': { item: 'create:shaft' },
            'B': { tag: 'c:storage_blocks/copper' },
            'P': { item: 'createvintageneoforged:netherite_sheet' }
        },
        pattern: ['AGA', 'PBP', ' P '],
        result: { count: 1, id: 'create:netherite_backtank' }})
        //链接控制器 — 铁砧锻造（原版工作台 3x3：按钮环绕红石信号器）
        event.custom({
        type: 'overgeared:forging',
        hammering: 2,
        has_polishing: false,
        has_quality: false,
        need_quenching: false,
        show_notification: true,
        key: {
            'P': { item: 'create:redstone_link' },
            'S': { tag: 'minecraft:wooden_buttons' }
        },
        pattern: ['SSS', ' P ', 'SSS'],
        result: { count: 1, id: 'create:linked_controller' }})
        //蓝图加农炮 — 已改为世界结构合成（data/worldcrafting/recipe/structure_schematicannon.json），原铁砧锻造配方注释保留
        // event.custom({
        // type: 'overgeared:forging',
        // hammering: 4,
        // has_polishing: false,
        // has_quality: false,
        // need_quenching: false,
        // show_notification: true,
        // key: {
        //     'D': { item: 'minecraft:dispenser' },
        //     'I': { item: 'minecraft:iron_block' },
        //     'L': { tag: 'minecraft:logs' },
        //     'S': { item: 'minecraft:smooth_stone' }
        // },
        // pattern: [' I ', 'LIL', 'SDS'],
        // result: { count: 1, id: 'create:schematicannon' }})
        //制图台 — 铁砧锻造（原版工作台 3x3）
        event.custom({
        type: 'overgeared:forging',
        hammering: 2,
        has_polishing: false,
        has_quality: false,
        need_quenching: false,
        show_notification: true,
        key: {
            'W': { tag: 'minecraft:wooden_slabs' },
            'S': { item: 'minecraft:smooth_stone' }
        },
        pattern: ['WWW', ' S ', ' S '],
        result: { count: 1, id: 'create:schematic_table' }})
        //土豆加农炮 — 动力合成（原样复制）
        event.custom({
        type: 'create:mechanical_crafting',
        accept_mirrored: true,
        category: 'misc',
        key: {
            'C': { tag: 'c:ingots/copper' },
            'L': { item: 'create:andesite_alloy' },
            'R': { item: 'create:precision_mechanism' },
            'S': { item: 'create:fluid_pipe' }
        },
        pattern: ['LRSSS', 'CC   '],
        result: { count: 1, id: 'create:potato_cannon' }})
        //伸缩机械臂 — 动力合成（原样复制）
        event.custom({
        type: 'create:mechanical_crafting',
        accept_mirrored: false,
        category: 'misc',
        key: {
            'H': { item: 'create:brass_hand' },
            'L': { tag: 'c:ingots/brass' },
            'R': { item: 'create:precision_mechanism' },
            'S': { tag: 'c:rods/wooden' }
        },
        pattern: [' L ', ' R ', 'SSS', 'SSS', ' H '],
        result: { count: 1, id: 'create:extendo_grip' },
        show_notification: false})
        //对称魔杖 — 动力合成（原样复制）
        event.custom({
        type: 'create:mechanical_crafting',
        accept_mirrored: true,
        category: 'misc',
        key: {
            'B': { tag: 'c:ingots/brass' },
            'E': { tag: 'c:ender_pearls' },
            'G': { tag: 'c:glass_blocks' },
            'O': { tag: 'c:obsidians' },
            'P': { item: 'create:precision_mechanism' }
        },
        pattern: [' G ', 'GEG', ' P ', ' B ', ' O '],
        result: { count: 1, id: 'create:wand_of_symmetry' }})
        //列车时刻表
        event.custom({
        type: 'overgeared:forging',
        hammering: 2,
        has_polishing: false,
        has_quality: false,
        need_quenching: false,
        show_notification: true,
        key: {
            'I': { item: 'create:sturdy_sheet' },
            'A': { item: 'minecraft:paper' }
        },
        pattern: ['AI'],
        result: { count: 1, id: 'create:schedule' }})
        //列车驾驶台
        create.item_application('create:track_signal',['create:railway_casing','create:electron_tube'])
        //列车侦测器
        event.custom({
          type: "create:item_application",
          ingredients: [
            {
              "item": "create:railway_casing"
            },
            {
              "tag": "minecraft:wooden_pressure_plates"
            }
          ],
          results: [
            {
              "id": "create:track_observer"
            }
          ]
        })
        //列车站点
        create.item_application('create:track_station',['create:railway_casing','minecraft:compass'])
        //列车轨道 — 序列装配原样复制（原版 create:sequenced_assembly，防总删除）
        event.custom({
        type: 'create:sequenced_assembly',
        ingredient: { tag: 'create:sleepers' },
        results: [{ id: 'create:track' }],
        sequence: [
            {
            type: 'create:deploying',
            ingredients: [
                { item: 'create:incomplete_track' },
                [
                    { tag: 'c:nuggets/iron' },
                    { tag: 'c:nuggets/zinc' }
                ]
            ],
            results: [{ id: 'create:incomplete_track' }]
            },
            {
            type: 'create:deploying',
            ingredients: [
                { item: 'create:incomplete_track' },
                [
                    { tag: 'c:nuggets/iron' },
                    { tag: 'c:nuggets/zinc' }
                ]
            ],
            results: [{ id: 'create:incomplete_track' }]
            },
            {
            type: 'create:pressing',
            ingredients: [{ item: 'create:incomplete_track' }],
            results: [{ id: 'create:incomplete_track' }]
            }
        ],
        transitional_item: { id: 'create:incomplete_track' }})
        //合成器槽位盖板 — 铁砧锻造（原版工作台：3 黄铜粒横排）
        event.custom({
        type: 'overgeared:forging',
        hammering: 2,
        has_polishing: false,
        has_quality: false,
        need_quenching: false,
        show_notification: true,
        key: {
            'A': { tag: 'c:nuggets/brass' }
        },
        pattern: ['AAA'],
        result: { count: 1, id: 'create:crafter_slot_cover' }})
        //控制轨道 — 铁砧锻造（原版工作台 3x3：金锭环绕 + 木棍 + 电子管）
        event.custom({
        type: 'overgeared:forging',
        hammering: 2,
        has_polishing: false,
        has_quality: false,
        need_quenching: false,
        show_notification: true,
        key: {
            'A': { tag: 'c:ingots/gold' },
            'E': { item: 'create:electron_tube' },
            'S': { tag: 'c:rods/wooden' }
        },
        pattern: ['A A', 'ASA', 'AEA'],
        result: { count: 6, id: 'create:controller_rail' }})
        //粗锌和锌块
        event.shapeless('9x create:raw_zinc','create:raw_zinc_block')
        event.shapeless('create:raw_zinc_block',[
            'create:raw_zinc','create:raw_zinc','create:raw_zinc',
            'create:raw_zinc','create:raw_zinc','create:raw_zinc',
            'create:raw_zinc','create:raw_zinc','create:raw_zinc'
        ])
        //建筑工茶饮
        create.filling('create:builders_tea',['minecraft:glass_bottle',Fluid.of('create:tea',250)])
        //蜜渍苹果
        create.filling('create:honeyed_apple',['minecraft:apple',Fluid.of('create:honey',250)])
        //甜甜卷
        create.filling('create:sweet_roll',['minecraft:bread',Fluid.of('minecraft:milk',250)])
        //巧克力浆果
        create.filling('create:chocolate_glazed_berries',['minecraft:sweet_berries',Fluid.of('create:chocolate',250)])
        //巧克力棒
        event.custom({
        type: 'overgeared:forging',
        hammering: 2,
        has_polishing: false,
        has_quality: false,
        need_quenching: false,
        show_notification: true,
        key: {
            'I': { item: 'create:iron_sheet' },
        },
        pattern: [' I ','III'," I "],
        result: { count: 2, id: 'ratatouille:chocolate_mold' }})
        create.filling('ratatouille:chocolate_mold_filled',['ratatouille:chocolate_mold',Fluid.of('create:chocolate',250)])
        event.custom({
        type: 'create_dragons_plus:freezing',
        ingredients: [{ item: 'ratatouille:chocolate_mold_filled' }],
        results: [{ id: 'ratatouille:chocolate_mold_solid' }]
        })
        event.custom(
        {
        type: "ratatouille:demolding",
        ingredients: [
          {
            "item": "ratatouille:chocolate_mold_solid"
          }
        ],
        results: [
          {
            "id": "create:bar_of_chocolate"
          },
          {
            "id": "ratatouille:chocolate_mold"
          }
        ]
        })
        //风车轴承 — 铁砧锻造（原版工作台 3x1：木台阶+石头+传动杆；前期主力能源，保持前期材料）
        event.custom({
        type: 'overgeared:forging',
        hammering: 1,
        has_polishing: false,
        has_quality: false,
        need_quenching: false,
        show_notification: true,
        key: {
            'B': { tag: 'minecraft:wooden_slabs' },
            'C': { tag: 'c:stones' },
            'S': { item: 'create:shaft' }
        },
        pattern: [' B ','BCB',' S '],
        result: { count: 1, id: 'create:windmill_bearing' }})
        //蒸汽引擎 — 动力合成（材料靠后：黄铜机壳+精密机制件+电子管+铜块锅炉，产出尽量靠后）
        event.recipes.create.mechanical_crafting(
            '4x create:steam_engine',
            [' BBB ', 'BPTPB', 'BSCSB', 'BPTPB', ' BBB '],
            {
                B: 'create:brass_casing',
                P: 'create:precision_mechanism',
                T: 'create:electron_tube',
                S: 'create:shaft',
                C: '#c:storage_blocks/copper'
            }
        )
        //蒸汽笛 — 铁砧锻造（原版工作台 2x1：金板+铜锭，蒸汽引擎附属件）
        event.custom({
        type: 'overgeared:forging',
        hammering: 1,
        has_polishing: false,
        has_quality: false,
        need_quenching: false,
        show_notification: true,
        key: {
            'P': { tag: 'c:plates/gold' },
            'C': { tag: 'c:ingots/copper' }
        },
        pattern: [' P ',' C ','   '],
        result: { count: 1, id: 'create:steam_whistle' }})
        //安山合金板
        event.custom({
        type: 'overgeared:forging',
        hammering: 2,
        has_polishing: false,
        has_quality: false,
        need_quenching: false,
        show_notification: true,
        key: {
            'P': { item: 'create:andesite_alloy' }
        },
        pattern: [' P '],
        result: { count: 1, id: 'createdeco:andesite_sheet' }})
})