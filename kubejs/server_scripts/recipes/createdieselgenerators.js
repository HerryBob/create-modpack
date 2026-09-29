ServerEvents.recipes(event =>{
  const create = event.recipes.create
  const dieselgenerators = event.recipes.createdieselgenerators
//机械动力柴油动力
create.mixing('2x createdieselgenerators:asphalt_block', [Fluid.of('createae2:heavy_oil', 100), 'minecraft:gravel', 'minecraft:sand'])
event.stonecutting('createdieselgenerators:sheet_metal_panel','create:sturdy_sheet')
//原油配方

    // === 引擎部件（序列组装，现实结构对应；原工作台配方被清理脚本删除）===
    // 活塞：活塞头(安山合金) + 活塞杆(钢棒，现实合金钢) + 活塞环(锌粒×2) → 2 个
    create.sequenced_assembly(
        ['2x createdieselgenerators:engine_piston'],
        'create:andesite_alloy',
        [
            create.deploying(['createae2:incompleted_engine_piston'], ['createae2:incompleted_engine_piston', 'electrodynamics:rodsteel']),
            create.deploying(['createae2:incompleted_engine_piston'], ['createae2:incompleted_engine_piston', 'create:zinc_nugget']),
            create.deploying(['createae2:incompleted_engine_piston'], ['createae2:incompleted_engine_piston', 'create:zinc_nugget'])
        ]
    ).transitionalItem('createae2:incompleted_engine_piston').loops(1)

    // 消音器：外壳(钢板×2) + 吸音材料(羊毛×2) + 排气管(流体管)
    create.sequenced_assembly(
        ['createdieselgenerators:engine_silencer'],
        'overgeared:steel_plate',
        [
            create.deploying(['createae2:incompleted_engine_silencer'], ['createae2:incompleted_engine_silencer', 'overgeared:steel_plate']),
            create.deploying(['createae2:incompleted_engine_silencer'], ['createae2:incompleted_engine_silencer', 'minecraft:white_wool']),
            create.deploying(['createae2:incompleted_engine_silencer'], ['createae2:incompleted_engine_silencer', 'minecraft:white_wool']),
            create.deploying(['createae2:incompleted_engine_silencer'], ['createae2:incompleted_engine_silencer', 'create:fluid_pipe'])
        ]
    ).transitionalItem('createae2:incompleted_engine_silencer').loops(1)

    // 涡轮增压器：涡轮叶轮(螺旋桨) + 壳体(钢板×2) + 进气管(流体管) + 锌合金件(锌锭)
    create.sequenced_assembly(
        ['createdieselgenerators:engine_turbocharger'],
        'create:propeller',
        [
            create.deploying(['createae2:incompleted_engine_turbocharger'], ['createae2:incompleted_engine_turbocharger', 'overgeared:steel_plate']),
            create.deploying(['createae2:incompleted_engine_turbocharger'], ['createae2:incompleted_engine_turbocharger', 'overgeared:steel_plate']),
            create.deploying(['createae2:incompleted_engine_turbocharger'], ['createae2:incompleted_engine_turbocharger', 'create:fluid_pipe']),
            create.deploying(['createae2:incompleted_engine_turbocharger'], ['createae2:incompleted_engine_turbocharger', 'create:zinc_ingot'])
        ]
    ).transitionalItem('createae2:incompleted_engine_turbocharger').loops(1)

    // === 蒸馏控制器（序列组装；原工作台配方被清理脚本删除，原版一次出 4 个）===
    // 铁板底座 → 仪表(时钟) → 进口管 → 框架(安山合金) → 出口管
    create.sequenced_assembly(
        ['4x createdieselgenerators:distillation_controller'],
        'create:iron_sheet',
        [
            create.deploying(['createae2:incompleted_distillation_controller'], ['createae2:incompleted_distillation_controller', 'minecraft:clock']),
            create.deploying(['createae2:incompleted_distillation_controller'], ['createae2:incompleted_distillation_controller', 'create:fluid_pipe']),
            create.deploying(['createae2:incompleted_distillation_controller'], ['createae2:incompleted_distillation_controller', 'create:andesite_alloy']),
            create.deploying(['createae2:incompleted_distillation_controller'], ['createae2:incompleted_distillation_controller', 'create:fluid_pipe'])
        ]
    ).transitionalItem('createae2:incompleted_distillation_controller').loops(1)

    // === 引擎本体（动力合成大件；原工作台配方被清理脚本删除）===
    // 柴油引擎 4x3：点火器 + 活塞×2 + 黄铜缸体 + 曲轴 + 油箱 + 底座
    create.mechanical_crafting('createdieselgenerators:diesel_engine', ['QPBP', ' CTC', 'SSSS'], {
        Q: 'minecraft:flint_and_steel',
        P: 'createdieselgenerators:engine_piston',
        B: 'create:brass_block',
        C: 'create:shaft',
        T: 'create:fluid_tank',
        S: 'minecraft:polished_blackstone_slab'
    })
    // 大型柴油引擎 4x4：双柴油引擎（双缸）+ 活塞×2 + 钢板缸体 + 黄铜曲轴箱 + 底座
    create.mechanical_crafting('createdieselgenerators:large_diesel_engine', [' SPS', 'SDDS', 'SBBS', ' SSS'], {
        S: 'overgeared:steel_plate',
        P: 'createdieselgenerators:engine_piston',
        D: 'createdieselgenerators:diesel_engine',
        B: 'create:brass_block'
    })
    // 巨型柴油引擎 5x5：双蒸汽引擎核心（现实：柴油机替代蒸汽机）+ 双曲轴箱 + 钢板缸体 + 进排气管 + 油箱 + 底座
    create.mechanical_crafting('createdieselgenerators:huge_diesel_engine', ['P S P', 'SE ES', 'SB BS', 'F T F', 'SSSSS'], {
        E: 'create:steam_engine',
        B: 'create:brass_block',
        S: 'overgeared:steel_plate',
        P: 'create:fluid_pipe',
        F: 'minecraft:flint_and_steel',
        T: 'create:fluid_tank'
    })

    // === 工具：锻造锤 / 剪线钳（铁锻台锻造；原工作台配方被清理脚本删除，必须补）===
    // 锻造锤：木柄 + 安山合金锤头 + 铁块（锤头锻打成型的工具）
    event.custom({
        type: 'overgeared:forging',
        hammering: 3,
        has_polishing: false,
        has_quality: false,
        need_quenching: false,
        show_notification: false,
        key: {
            'S': { item: 'minecraft:stick' },
            'A': { item: 'create:andesite_alloy' },
            'I': { item: 'minecraft:iron_ingot' }
        },
        pattern: ['AIA', 'ISI', 'SIA'],
        result: { count: 1, id: 'createdieselgenerators:hammer' }
    })
    // 剪线钳：铁板钳口 + 安山合金转轴 + 木柄
    event.custom({
        type: 'overgeared:forging',
        hammering: 2,
        has_polishing: false,
        has_quality: false,
        need_quenching: false,
        show_notification: false,
        key: {
            'S': { item: 'minecraft:stick' },
            'A': { item: 'create:andesite_alloy' },
            'I': { item: 'create:iron_sheet' }
        },
        pattern: [' I ', 'SAI', ' S '],
        result: { count: 1, id: 'createdieselgenerators:wire_cutters' }
    })

    // === 原油探测：原油扫描仪（序列组装）===
    // 铁板外壳 → 时钟仪表 → 安山合金壳体 → 铁探头
    create.sequenced_assembly(
        ['createdieselgenerators:oil_scanner'],
        'create:iron_sheet',
        [
            create.deploying(['createae2:incompleted_oil_scanner'], ['createae2:incompleted_oil_scanner', 'minecraft:clock']),
            create.deploying(['createae2:incompleted_oil_scanner'], ['createae2:incompleted_oil_scanner', 'create:andesite_alloy']),
            create.deploying(['createae2:incompleted_oil_scanner'], ['createae2:incompleted_oil_scanner', 'minecraft:iron_ingot'])
        ]
    ).transitionalItem('createae2:incompleted_oil_scanner').loops(1)

    // === 抽油机：井口（动力合成）===
    // 铜机壳 + 链条 + 流体管（下井套管）
    create.mechanical_crafting('createdieselgenerators:pumpjack_hole',
        [' P ', 'PcP', 'cCc', ' P '], {
            P: 'create:fluid_pipe',
            c: 'minecraft:chain',
            C: 'create:copper_casing'
        })

    // === 抽油机：曲柄（原版 5x3 动力合成直接搬）===
    create.mechanical_crafting('createdieselgenerators:pumpjack_crank',
        ['AIA', ' S ', 'AIA', 'ZSZ', 'AZA'], {
            A: 'create:andesite_alloy',
            Z: 'create:zinc_ingot',
            I: 'create:iron_sheet',
            S: 'create:shaft'
        })

    // === 抽油机：轴承座（动力合成）===
    // 钢板外壳 + 锌衬套 + 机械轴承 + 铁螺栓
    create.mechanical_crafting('createdieselgenerators:pumpjack_bearing',
        ['ISSI', 'ZBZS', 'ISSI'], {
            I: 'minecraft:iron_ingot',
            S: 'overgeared:steel_plate',
            Z: 'create:zinc_ingot',
            B: 'create:mechanical_bearing'
        })

    // === 抽油机：驴头（动力合成）===
    // 安山合金壳体 + 锌轴衬 + 海带防滑垫 + 铁螺栓
    create.mechanical_crafting('createdieselgenerators:pumpjack_head',
        ['A A', 'ZKZ', 'A A', 'I I'], {
            A: 'create:andesite_alloy',
            Z: 'create:zinc_ingot',
            K: 'minecraft:dried_kelp',
            I: 'minecraft:iron_ingot'
        })

    // === 木屑系列（chip wood）：原木/木制品 → 木屑 → 木屑建材 ===
    // --- 工作台（原版 shape 直接搬）---
    event.shaped('createdieselgenerators:chip_wood_block', ['AA', 'AA'], { A: 'createdieselgenerators:wood_chip' })
    event.shaped('6x createdieselgenerators:chip_wood_slab', ['AAA'], { A: 'createdieselgenerators:chip_wood_block' })
    event.shaped('4x createdieselgenerators:chip_wood_stairs', ['A  ', 'AA ', 'AAA'], { A: 'createdieselgenerators:chip_wood_block' })
    event.shaped('createdieselgenerators:chip_wood_beam', ['C', 'B', 'C'], { C: 'createdieselgenerators:wood_chip', B: 'createdieselgenerators:chip_wood_block' })

    // --- 锯木机 cutting（原版：木棍 → 木屑）---
    event.custom({
        type: 'create:cutting',
        ingredients: [ { tag: 'c:rods/wooden' } ],
        results: [ { count: 1, id: 'createdieselgenerators:wood_chip' } ]
    })

    // --- 石磨 milling（新增，温和产出）：木材 → 木屑 ---
    event.custom({
        type: 'create:milling',
        ingredients: [ { tag: 'material:wood' } ],
        results: [ { count: 8, id: 'createdieselgenerators:wood_chip' } ],
        processingTime: 150
    })

    // --- 粉碎轮 crushing：木材 → 木屑 ---
    event.custom({
        type: 'create:crushing',
        ingredients: [ {
            type: 'neoforge:difference',
            base: { tag: 'material:wood' },
            subtracted: { item: 'createdieselgenerators:chip_wood_block' }
        } ],
        results: [
            { count: 12, id: 'createdieselgenerators:wood_chip' },
            { count: 1, id: 'createdieselgenerators:wood_chip', chance: 0.2 }
        ],
        processingTime: 150
    })

    // === 沥青建材（工作台，原版 shape 直接搬）===
    event.shaped('6x createdieselgenerators:asphalt_slab', ['AAA'], { A: 'createdieselgenerators:asphalt_block' })
    event.shaped('4x createdieselgenerators:asphalt_stairs', ['A  ', 'AA ', 'AAA'], { A: 'createdieselgenerators:asphalt_block' })

    // === 金属/容器类：铁锻台锻造 ===
    // 安山横梁：安山合金夹传动杆（原版一行出 6 个）
    event.custom({
        type: 'overgeared:forging',
        hammering: 1,
        has_polishing: false,
        has_quality: false,
        need_quenching: false,
        show_notification: false,
        key: {
            'A': { item: 'create:andesite_alloy' },
            'S': { item: 'create:shaft' }
        },
        pattern: [' A ', ' S ', ' A '],
        result: { count: 6, id: 'createdieselgenerators:andesite_girder' }
    })
    // 原油桶：铁板包木桶
    event.custom({
        type: 'overgeared:forging',
        hammering: 2,
        has_polishing: false,
        has_quality: false,
        need_quenching: false,
        show_notification: false,
        key: {
            'S': { item: 'create:iron_sheet' },
            'B': { tag: 'c:barrels/wooden' }
        },
        pattern: ['S S', 'SBS'],
        result: { count: 1, id: 'createdieselgenerators:oil_barrel' }
    })
    // 密封储罐：木桶内胆 + 铁板包壳 + 安山合金封边
    event.custom({
        type: 'overgeared:forging',
        hammering: 3,
        has_polishing: false,
        has_quality: false,
        need_quenching: false,
        show_notification: false,
        key: {
            'A': { item: 'create:andesite_alloy' },
            'Z': { item: 'create:iron_sheet' },
            'B': { tag: 'c:barrels/wooden' }
        },
        pattern: ['A A', 'ZBZ', ' Z '],
        result: { count: 1, id: 'createdieselgenerators:canister' }
    })
    // 槽盖：安山合金盖 + 时钟（锁扣仪表）
    event.custom({
        type: 'overgeared:forging',
        hammering: 2,
        has_polishing: false,
        has_quality: false,
        need_quenching: false,
        show_notification: false,
        key: {
            'A': { item: 'create:andesite_alloy' },
            'C': { item: 'minecraft:clock' }
        },
        pattern: [' C ', 'AAA'],
        result: { count: 1, id: 'createdieselgenerators:basin_lid' }
    })
    // 大容量发酵槽：安山合金框架围木桶
    event.custom({
        type: 'overgeared:forging',
        hammering: 3,
        has_polishing: false,
        has_quality: false,
        need_quenching: false,
        show_notification: false,
        key: {
            'A': { item: 'create:andesite_alloy' },
            'B': { tag: 'c:barrels/wooden' }
        },
        pattern: ['A A', 'ABA', 'A A'],
        result: { count: 1, id: 'createdieselgenerators:bulk_fermenter' }
    })

    // === 燃烧器：动力合成（原版材料，放大成型）===
    // 打火石×2 + 黄铜锭 + 传动杆 + 空烈焰人燃烧室 + 安山合金 + 黄铜底座
    create.mechanical_crafting('createdieselgenerators:burner',
        ['FIF', ' S ', 'ABA', 'III'], {
            F: 'minecraft:flint_and_steel',
            I: 'create:brass_ingot',
            S: 'create:shaft',
            A: 'create:andesite_alloy',
            B: 'create:empty_blaze_burner'
        })

    // === 化学工具：铁锻台 ===
    // 海带柄：海带+安山合金柄
    event.custom({
        type: 'overgeared:forging',
        hammering: 1,
        has_polishing: false,
        has_quality: false,
        need_quenching: false,
        show_notification: false,
        key: {
            'K': { item: 'minecraft:dried_kelp' },
            'A': { item: 'create:andesite_alloy' }
        },
        pattern: ['KKK', 'K A'],
        result: { count: 1, id: 'createdieselgenerators:kelp_handle' }
    })
    // 打火机：黄铜壳+打火石+线+安山合金
    event.custom({
        type: 'overgeared:forging',
        hammering: 2,
        has_polishing: false,
        has_quality: false,
        need_quenching: false,
        show_notification: false,
        key: {
            'A': { item: 'create:andesite_alloy' },
            'F': { item: 'minecraft:flint_and_steel' },
            'S': { item: 'create:brass_sheet' },
            'W': { item: 'minecraft:string' }
        },
        pattern: [' SF', 'SWS', 'SAS'],
        result: { count: 1, id: 'createdieselgenerators:lighter' }
    })
    // 喷雾器点火器：喷雾器+打火机（原版为deploying）
    event.custom({
        type: 'overgeared:forging',
        hammering: 1,
        has_polishing: false,
        has_quality: false,
        need_quenching: false,
        show_notification: false,
        key: {
            'S': { item: 'createdieselgenerators:chemical_sprayer' },
            'L': { item: 'createdieselgenerators:lighter' }
        },
        pattern: ['SL'],
        result: { count: 1, id: 'createdieselgenerators:chemical_sprayer_lighter' }
    })
    // 实体过滤器：铜粒包羊毛（过滤芯）
    event.custom({
        type: 'overgeared:forging',
        hammering: 3,
        has_polishing: false,
        has_quality: false,
        need_quenching: false,
        show_notification: false,
        key: {
            'A': { item: 'create:copper_nugget' },
            'S': { item: 'minecraft:white_wool' }
        },
        pattern: ['ASA'],
        result: { count: 1, id: 'createdieselgenerators:entity_filter' }})

    // === 化学机械：动力合成 ===
    // 化学喷雾器：铜壳+流体管+密封储罐
    create.mechanical_crafting('createdieselgenerators:chemical_sprayer',
        ['CCC', 'PBP', 'CCC', 'PPP'], {
            C: 'create:copper_sheet',
            P: 'create:fluid_pipe',
            B: 'createdieselgenerators:canister'
        })
    // 化学炮塔：精密构件+铜片+喷雾器+齿轮+铜机壳（原版3×3放大为3×4）
    create.mechanical_crafting('createdieselgenerators:chemical_turret',
        ['PBS', ' G ', 'BCB', 'CCC'], {
            P: 'create:precision_mechanism',
            B: 'create:copper_sheet',
            S: 'createdieselgenerators:chemical_sprayer',
            G: 'create:cogwheel',
            C: 'create:copper_casing'
        })

    // === 轨道铺装袋：缝纫台制作 ===
    // 皮革×3 + 线 + 安山合金底（原版材料；texture 贴图放 createae2:textures/gui/sewing/track_layers_bag.png）
    event.custom({
        type: 'seamsandstitches:sewing_pattern',
        texture: 'createae2:textures/gui/sewing/track_layers_bag.png',
        output: { id: 'createdieselgenerators:track_layers_bag', count: 1 },
        ingredients: [
            { item: 'minecraft:leather' },
            { item: 'minecraft:leather' },
            { item: 'minecraft:leather' },
            { item: 'minecraft:string' },
            { item: 'create:andesite_alloy' }
        ],
        seams: [
            {
                id: 'hem',
                path: [[2, 6], [3, 7], [4, 8], [5, 9], [6,9],[7,10],[8,10],[9,11],[10,11],[11,10],[12,9],[13,8],[14,7]],
                speed: 1
            }
        ]
    })

    // ==========================================
    // 流体配方（化工线）
    // ==========================================

    // === 1. 原油蒸馏（蒸馏塔）===
    // 加热模式：100mB 原油 → 50mB 柴油 + 50mB 汽油
    dieselgenerators.distillation(
        [Fluid.of('createdieselgenerators:diesel', 50), Fluid.of('createdieselgenerators:gasoline', 50)],
        [Fluid.of('createdieselgenerators:crude_oil', 100)],
        60
    ).heated()

    // 过热模式：100mB 原油 → 75mB 柴油 + 75mB 汽油（效率更高）
    dieselgenerators.distillation(
        [Fluid.of('createdieselgenerators:diesel', 75), Fluid.of('createdieselgenerators:gasoline', 75)],
        [Fluid.of('createdieselgenerators:crude_oil', 100)],
        40
    ).superheated()


    // === 3. 水槽发酵（水槽+槽盖）===
    // 1个可发酵物 + 1个骨粉 → 200mB 乙醇
    dieselgenerators.basin_fermenting(
        [Fluid.of('createdieselgenerators:ethanol', 200)],
        [{ tag: 'createdieselgenerators:fermentable' }, 'minecraft:bone_meal'],
        400
    )

    // === 4. 生物柴油混合（混合器）===
    // 100mB 植物油 + 100mB 乙醇 → 200mB 生物柴油
    create.mixing(Fluid.of('createdieselgenerators:biodiesel', 200), [
        Fluid.of('createdieselgenerators:plant_oil', 100),
        Fluid.of('createdieselgenerators:ethanol', 100)
    ])
})
