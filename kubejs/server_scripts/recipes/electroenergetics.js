ServerEvents.recipes(event=>{

    const create = event.recipes.create
    const vintage = event.recipes.createvintageneoforged
    // ============================================================
    // EE 原版配方底稿（转写自 mod jar，统一在此修改；不想要的直接删行）
    // ============================================================

    // ========== 发电机三件套（批2 核心：应力→电） ==========

    // stator
    // stator：序列装配（多工序，现实手搓不可一步完成）
    // stator：锻造台手搓（铁芯 + 磁铁 + 端盖锻压成型）
    event.custom({ type: 'overgeared:forging', hammering: 2, has_polishing: false, has_quality: false, need_quenching: false, show_notification: true, key: { 'A': { item: 'create:andesite_alloy' }, 'M': { item: 'electroenergetics:magnet' }, 'S': { tag: 'c:plates/iron' } }, pattern: [" AS"," MS"," AS"], result: { count: 1, id: 'electroenergetics:stator' } }).id('electroenergetics:stator')

    // alternator_rotor
    // alternator_rotor：序列装配（多工序，现实手搓不可一步完成）
    // alternator_rotor：动力合成（大型工件）
    event.custom({ type: 'create:mechanical_crafting', accept_mirrored: false, category: 'misc', show_notification: false, key: { 'A': { item: 'create:andesite_alloy' }, 'W': { item: 'electroenergetics:copper_wire_spool' }, 'S': { item: 'create:shaft' } }, pattern: ['AWSWA','WWSWW','SSSSS','WWSWW','AWSWA'], result: { count: 1, id: 'electroenergetics:alternator_rotor' } }).id('kubejs:ee_rotor_craft')

    // alternator_brushes
    // alternator_brushes：序列装配（多工序，现实手搓不可一步完成）
    // alternator_brushes：动力合成（大型工件）
    // alternator_brushes：动力合成（机械台装配）
    event.custom({ type: 'overgeared:forging', hammering: 2, has_polishing: false, has_quality: false, need_quenching: false, show_notification: true, key: { 'B': { item: 'minecraft:iron_bars' }, 'C': { item: 'electroenergetics:connector' }, 'M': { item: 'electroenergetics:commutator' }, 'S': { item: 'create:shaft' } }, pattern: ["BMB","BSB","CBC"], result: { count: 1, id: 'electroenergetics:alternator_brushes' } }).id('electroenergetics:alternator_brushes')
    // three_phase_alternator_brushes：序列组装（3 组单相刷架压装成三相刷架）
    event.recipes.create.sequenced_assembly(
        ['electroenergetics:three_phase_alternator_brushes'],
        'electroenergetics:alternator_brushes',
        [
            event.recipes.create.deploying(['electroenergetics:alternator_brushes'], ['electroenergetics:alternator_brushes', 'electroenergetics:alternator_brushes']),
            event.recipes.create.deploying(['electroenergetics:alternator_brushes'], ['electroenergetics:alternator_brushes', 'electroenergetics:alternator_brushes']),
            event.recipes.create.pressing(['electroenergetics:alternator_brushes'], 'electroenergetics:alternator_brushes'),
        ]
    ).transitionalItem('electroenergetics:alternator_brushes').id('kubejs:ee_three_phase_brushes_assembly')


    // ========== 磁铁（发电机前置） ==========

    // magnet_block
    event.custom({ type: 'overgeared:forging', hammering: 1, has_polishing: false, has_quality: false, need_quenching: false, show_notification: true, key: { 'I': { item: 'create:industrial_iron_block' }, 'A': { item: 'create:andesite_alloy' } }, pattern: [" I ","IAI"," I "], result: { count: 4, id: 'electroenergetics:magnet' } }).id('electroenergetics:magnet_block')

    // ========== 马达（16 色 + 染色） ==========

    // black_electric_motor
    event.custom({ type: 'create:mechanical_crafting', accept_mirrored: false, category: 'misc', show_notification: false, key: { 'A':{item:'electroenergetics:magnet'},'S':{item: 'create:iron_sheet'}, 'C': { item: 'electroenergetics:connector' }, 'D': { item: 'minecraft:black_dye' }, 'M': { item: 'create:shaft' }, 'R': { item: 'electroenergetics:commutator' }, 'c': { item: 'electroenergetics:copper_wire_spool' } }, pattern: ['CcccS','RAMDS','CcccS'], result: { count: 1, id: 'electroenergetics:black_electric_motor' } }).id('kubejs:ee_black_motor_craft')

    // blue_electric_motor
    event.custom({ type: 'create:mechanical_crafting', accept_mirrored: false, category: 'misc', show_notification: false, key: { 'A':{item:'electroenergetics:magnet'},'S':{item: 'create:iron_sheet'}, 'C': { item: 'electroenergetics:connector' }, 'D': { item: 'minecraft:blue_dye' }, 'M': { item: 'create:shaft' }, 'R': { item: 'electroenergetics:commutator' }, 'c': { item: 'electroenergetics:copper_wire_spool' } }, pattern: ['CcccS','RAMDS','CcccS'], result: { count: 1, id: 'electroenergetics:blue_electric_motor' } }).id('kubejs:ee_blue_motor_craft')

    // brown_electric_motor
    event.custom({ type: 'create:mechanical_crafting', accept_mirrored: false, category: 'misc', show_notification: false, key: { 'A':{item:'electroenergetics:magnet'},'S':{item: 'create:iron_sheet'}, 'C': { item: 'electroenergetics:connector' }, 'D': { item: 'minecraft:brown_dye' }, 'M': { item: 'create:shaft' }, 'R': { item: 'electroenergetics:commutator' }, 'c': { item: 'electroenergetics:copper_wire_spool' } }, pattern: ['CcccS','RAMDS','CcccS'], result: { count: 1, id: 'electroenergetics:brown_electric_motor' } }).id('kubejs:ee_brown_motor_craft')

    // cyan_electric_motor
    event.custom({ type: 'create:mechanical_crafting', accept_mirrored: false, category: 'misc', show_notification: false, key: { 'A':{item:'electroenergetics:magnet'},'S':{item: 'create:iron_sheet'}, 'C': { item: 'electroenergetics:connector' }, 'D': { item: 'minecraft:cyan_dye' }, 'M': { item: 'create:shaft' }, 'R': { item: 'electroenergetics:commutator' }, 'c': { item: 'electroenergetics:copper_wire_spool' } }, pattern: ['CcccS','RAMDS','CcccS'], result: { count: 1, id: 'electroenergetics:cyan_electric_motor' } }).id('kubejs:ee_cyan_motor_craft')

    // gray_electric_motor
    event.custom({ type: 'create:mechanical_crafting', accept_mirrored: false, category: 'misc', show_notification: false, key: { 'A':{item:'electroenergetics:magnet'},'S':{item: 'create:iron_sheet'}, 'C': { item: 'electroenergetics:connector' }, 'D': { item: 'minecraft:gray_dye' }, 'M': { item: 'create:shaft' }, 'R': { item: 'electroenergetics:commutator' }, 'c': { item: 'electroenergetics:copper_wire_spool' } }, pattern: ['CcccS','RAMDS','CcccS'], result: { count: 1, id: 'electroenergetics:gray_electric_motor' } }).id('kubejs:ee_gray_motor_craft')

    // green_electric_motor
    event.custom({ type: 'create:mechanical_crafting', accept_mirrored: false, category: 'misc', show_notification: false, key: { 'A':{item:'electroenergetics:magnet'},'S':{item: 'create:iron_sheet'}, 'C': { item: 'electroenergetics:connector' }, 'D': { item: 'minecraft:green_dye' }, 'M': { item: 'create:shaft' }, 'R': { item: 'electroenergetics:commutator' }, 'c': { item: 'electroenergetics:copper_wire_spool' } }, pattern: ['CcccS','RAMDS','CcccS'], result: { count: 1, id: 'electroenergetics:green_electric_motor' } }).id('kubejs:ee_green_motor_craft')

    // light_blue_electric_motor
    event.custom({ type: 'create:mechanical_crafting', accept_mirrored: false, category: 'misc', show_notification: false, key: { 'A':{item:'electroenergetics:magnet'},'S':{item: 'create:iron_sheet'}, 'C': { item: 'electroenergetics:connector' }, 'D': { item: 'minecraft:light_blue_dye' }, 'M': { item: 'create:shaft' }, 'R': { item: 'electroenergetics:commutator' }, 'c': { item: 'electroenergetics:copper_wire_spool' } }, pattern: ['CcccS','RAMDS','CcccS'], result: { count: 1, id: 'electroenergetics:light_blue_electric_motor' } }).id('kubejs:ee_light_blue_motor_craft')

    // light_gray_electric_motor
    event.custom({ type: 'create:mechanical_crafting', accept_mirrored: false, category: 'misc', show_notification: false, key: { 'A':{item:'electroenergetics:magnet'},'S':{item: 'create:iron_sheet'}, 'C': { item: 'electroenergetics:connector' }, 'D': { item: 'minecraft:light_gray_dye' }, 'M': { item: 'create:shaft' }, 'R': { item: 'electroenergetics:commutator' }, 'c': { item: 'electroenergetics:copper_wire_spool' } }, pattern: ['CcccS','RAMDS','CcccS'], result: { count: 1, id: 'electroenergetics:light_gray_electric_motor' } }).id('kubejs:ee_light_gray_motor_craft')

    // lime_electric_motor
    event.custom({ type: 'create:mechanical_crafting', accept_mirrored: false, category: 'misc', show_notification: false, key: { 'A':{item:'electroenergetics:magnet'},'S':{item: 'create:iron_sheet'}, 'C': { item: 'electroenergetics:connector' }, 'D': { item: 'minecraft:lime_dye' }, 'M': { item: 'create:shaft' }, 'R': { item: 'electroenergetics:commutator' }, 'c': { item: 'electroenergetics:copper_wire_spool' } }, pattern: ['CcccS','RAMDS','CcccS'], result: { count: 1, id: 'electroenergetics:lime_electric_motor' } }).id('kubejs:ee_lime_motor_craft')

    // magenta_electric_motor
    event.custom({ type: 'create:mechanical_crafting', accept_mirrored: false, category: 'misc', show_notification: false, key: { 'A':{item:'electroenergetics:magnet'},'S':{item: 'create:iron_sheet'}, 'C': { item: 'electroenergetics:connector' }, 'D': { item: 'minecraft:magenta_dye' }, 'M': { item: 'create:shaft' }, 'R': { item: 'electroenergetics:commutator' }, 'c': { item: 'electroenergetics:copper_wire_spool' } }, pattern: ['CcccS','RAMDS','CcccS'], result: { count: 1, id: 'electroenergetics:magenta_electric_motor' } }).id('kubejs:ee_magenta_motor_craft')

    // orange_electric_motor
    event.custom({ type: 'create:mechanical_crafting', accept_mirrored: false, category: 'misc', show_notification: false, key: { 'A':{item:'electroenergetics:magnet'},'S':{item: 'create:iron_sheet'}, 'C': { item: 'electroenergetics:connector' }, 'D': { item: 'minecraft:orange_dye' }, 'M': { item: 'create:shaft' }, 'R': { item: 'electroenergetics:commutator' }, 'c': { item: 'electroenergetics:copper_wire_spool' } }, pattern: ['CcccS','RAMDS','CcccS'], result: { count: 1, id: 'electroenergetics:orange_electric_motor' } }).id('kubejs:ee_orange_motor_craft')

    // pink_electric_motor
    event.custom({ type: 'create:mechanical_crafting', accept_mirrored: false, category: 'misc', show_notification: false, key: { 'A':{item:'electroenergetics:magnet'},'S':{item: 'create:iron_sheet'}, 'C': { item: 'electroenergetics:connector' }, 'D': { item: 'minecraft:pink_dye' }, 'M': { item: 'create:shaft' }, 'R': { item: 'electroenergetics:commutator' }, 'c': { item: 'electroenergetics:copper_wire_spool' } }, pattern: ['CcccS','RAMDS','CcccS'], result: { count: 1, id: 'electroenergetics:pink_electric_motor' } }).id('kubejs:ee_pink_motor_craft')

    // purple_electric_motor
    event.custom({ type: 'create:mechanical_crafting', accept_mirrored: false, category: 'misc', show_notification: false, key: { 'A':{item:'electroenergetics:magnet'},'S':{item: 'create:iron_sheet'}, 'C': { item: 'electroenergetics:connector' }, 'D': { item: 'minecraft:purple_dye' }, 'M': { item: 'create:shaft' }, 'R': { item: 'electroenergetics:commutator' }, 'c': { item: 'electroenergetics:copper_wire_spool' } }, pattern: ['CcccS','RAMDS','CcccS'], result: { count: 1, id: 'electroenergetics:purple_electric_motor' } }).id('kubejs:ee_purple_motor_craft')

    // red_electric_motor
    event.custom({ type: 'create:mechanical_crafting', accept_mirrored: false, category: 'misc', show_notification: false, key: { 'A':{item:'electroenergetics:magnet'},'S':{item: 'create:iron_sheet'}, 'C': { item: 'electroenergetics:connector' }, 'D': { item: 'minecraft:red_dye' }, 'M': { item: 'create:shaft' }, 'R': { item: 'electroenergetics:commutator' }, 'c': { item: 'electroenergetics:copper_wire_spool' } }, pattern: ['CcccS','RAMDS','CcccS'], result: { count: 1, id: 'electroenergetics:red_electric_motor' } }).id('kubejs:ee_red_motor_craft')

    // white_electric_motor
    event.custom({ type: 'create:mechanical_crafting', accept_mirrored: false, category: 'misc', show_notification: false, key: { 'A':{item:'electroenergetics:magnet'},'S':{item: 'create:iron_sheet'}, 'C': { item: 'electroenergetics:connector' }, 'D': { item: 'minecraft:white_dye' }, 'M': { item: 'create:shaft' }, 'R': { item: 'electroenergetics:commutator' }, 'c': { item: 'electroenergetics:copper_wire_spool' } }, pattern: ['CcccS','RAMDS','CcccS'], result: { count: 1, id: 'electroenergetics:white_electric_motor' } }).id('kubejs:ee_white_motor_craft')

    // yellow_electric_motor
    event.custom({ type: 'create:mechanical_crafting', accept_mirrored: false, category: 'misc', show_notification: false, key: { 'A':{item:'electroenergetics:magnet'},'S':{item: 'create:iron_sheet'}, 'C': { item: 'electroenergetics:connector' }, 'D': { item: 'minecraft:yellow_dye' }, 'M': { item: 'create:shaft' }, 'R': { item: 'electroenergetics:commutator' }, 'c': { item: 'electroenergetics:copper_wire_spool' } }, pattern: ['CcccS','RAMDS','CcccS'], result: { count: 1, id: 'electroenergetics:yellow_electric_motor' } }).id('kubejs:ee_yellow_motor_craft')

    // ========== 变压器 / 电源（AC 进阶） ==========

    // transformer
    event.custom({ type: 'create:mechanical_crafting', accept_mirrored: false, category: 'misc', show_notification: false, key: { 'I': { tag: 'c:plates/iron' }, 'C': { item: 'electroenergetics:double_connector' }, 'W': { item: 'electroenergetics:copper_wire_spool' }, 'O': { item: 'electroenergetics:transformer_oil_bucket' }, 'T': { item: 'electroenergetics:transformer_core' } }, pattern: ["IIIII","IC CI","IWOWI","IT TI","IIIII"], result: { count: 1, id: 'electroenergetics:transformer' } }).id('electroenergetics:transformer')

    // transformer_core
    // transformer_core：动力合成（叠片矩阵 + 绕组）
    event.custom({ type: 'create:mechanical_crafting', accept_mirrored: false, category: 'misc', show_notification: false, key: { 'L': { item: 'electroenergetics:transformer_core_lamination' }, 'W': { item: 'electroenergetics:copper_wire_spool' } }, pattern: ['LLLLL','WWLWW','LLLLL'], result: { count: 1, id: 'electroenergetics:transformer_core' } }).id('kubejs:ee_transformer_core_craft')

    // transformer_core_lamination
    event.custom({ type: 'overgeared:forging', hammering: 1, has_polishing: false, has_quality: false, need_quenching: false, show_notification: true, key: { 'I': { tag: 'c:plates/iron' } }, pattern: [" I ","   ","   "], result: { count: 1, id: 'electroenergetics:transformer_core_lamination' } }).id('electroenergetics:transformer_core_lamination')

    // transformer_oil
    event.custom({"type":"create:mixing","heat_requirement":"heated","ingredients":[{"type":"neoforge:tag","amount":250,"tag":"c:plantoil"},{"type":"neoforge:single","amount":250,"fluid":"minecraft:water"}],"results":[{"amount":125,"id":"electroenergetics:transformer_oil"}]}).id('electroenergetics:transformer_oil')

    // current_transformer
    // current_transformer：动力合成（大型工件）
    // current_transformer：动力合成（机械台装配）
    event.custom({ type: 'create:mechanical_crafting', accept_mirrored: false, category: 'misc', show_notification: false, key: { 'C': { item: 'electroenergetics:connector' }, 'T': { tag: 'minecraft:terracotta' }, 'w': { item: 'createaddition:copper_wire' }, 'A': { item: 'create:andesite_alloy_block' }, 'S': { item: 'electroenergetics:wire_spool' } }, pattern: ['CAC','TwT','TwT','CSC'], result: { count: 1, id: 'electroenergetics:current_transformer' } }).id('kubejs:ee_current_transformer_craft')

    // voltage_regulator：动力合成（机械台装配）
    event.custom({ type: 'create:mechanical_crafting', accept_mirrored: false, category: 'misc', show_notification: false, key: { 'W': { item: 'electroenergetics:copper_wire_spool' }, 'T': { item: 'electroenergetics:transformer_core' }, 'P': { item: 'create:precision_mechanism' }, 'O': { item: 'electroenergetics:transformer_oil_bucket' },'A':{item:'createdeco:andesite_sheet'},'S':{item:'electroenergetics:connector'}}, pattern: [' S S ','AWTWA','APOPA','AWTWA'], result: { count: 1, id: 'electroenergetics:voltage_regulator' } }).id('kubejs:ee_voltage_regulator_craft')

    // variac
    event.custom({ type: 'overgeared:forging', hammering: 1, has_polishing: false, has_quality: false, need_quenching: false, show_notification: true, key: { 'C': { tag: 'c:nuggets/copper' }, 'S': { item: 'create:shaft' }, 'T': { tag: 'minecraft:terracotta' }, 'W': { item: 'electroenergetics:wire_spool' } }, pattern: [" S ","WTW","CCC"], result: { count: 1, id: 'electroenergetics:variac' } }).id('electroenergetics:variac')

    // redstone_variac
    create.item_application('electroenergetics:redstone_variac',['electroenergetics:variac','minecraft:redstone'])

    // inductor
    event.custom({ type: 'overgeared:forging', hammering: 1, has_polishing: false, has_quality: false, need_quenching: false, show_notification: true, key: { 'C': { item: 'electroenergetics:connector' }, 'S': { tag: 'c:plates/iron' }, 'c': { item: 'electroenergetics:copper_wire_spool' } }, pattern: [" S ","CcC"," S "], result: { count: 1, id: 'electroenergetics:inductor' } }).id('electroenergetics:inductor')

    // converter
    event.custom({ type: 'create:mechanical_crafting', accept_mirrored: false, category: 'misc', show_notification: false, key: { 'S': { tag: 'c:plates/iron' }, 'C': { item: 'electroenergetics:connector' }, 'W': { item: 'electroenergetics:wire_spool' }, 'A': { item: 'create:andesite_alloy_block' } }, pattern: ["SSSSS","SC CS","SWAWS","S C S","SSSSS"], result: { count: 1, id: 'electroenergetics:converter' } }).id('electroenergetics:converter')

    // commutator：序列组装
    create.sequenced_assembly(
        ['electroenergetics:commutator'],
        'create:shaft',
        [
            create.deploying(['createae2:incompleted_commutator'], ['createae2:incompleted_commutator', 'create:copper_sheet']),
            create.deploying(['createae2:incompleted_commutator'], ['createae2:incompleted_commutator', 'electrodynamics:ceramicplate']),
            create.deploying(['createae2:incompleted_commutator'], ['createae2:incompleted_commutator', 'create:copper_sheet']),
            create.deploying(['createae2:incompleted_commutator'], ['createae2:incompleted_commutator', 'electrodynamics:ceramicplate']),
            create.deploying(['createae2:incompleted_commutator'], ['createae2:incompleted_commutator', 'create:copper_sheet']),
            create.pressing(['createae2:incompleted_commutator'], 'createae2:incompleted_commutator'),
        ]
    ).transitionalItem('createae2:incompleted_commutator').loops(1)

    // ========== 蓄电 / 电容 ==========

    // accumulator
    // accumulator：铅酸电池（铅极板×2 + 铜连接片×2 + 端子 + 硫酸电解液 + 安山合金外壳），序列组装
    create.sequenced_assembly(
        ['electroenergetics:accumulator'],
        'electrodynamics:platelead',
        [
            create.deploying(['electroenergetics:accumulator'], ['electroenergetics:accumulator', 'electrodynamics:platelead']),
            create.deploying(['electroenergetics:accumulator'], ['electroenergetics:accumulator', 'create:copper_sheet']),
            create.deploying(['electroenergetics:accumulator'], ['electroenergetics:accumulator', 'create:copper_sheet']),
            create.deploying(['electroenergetics:accumulator'], ['electroenergetics:accumulator', 'electroenergetics:connector']),
            create.filling(['electroenergetics:accumulator'], ['electroenergetics:accumulator', Fluid.of('electrodynamics:fluidsulfuricacid', 500)]),
            create.deploying(['electroenergetics:accumulator'], ['electroenergetics:accumulator', 'create:andesite_alloy']),
        ]
    ).transitionalItem('electroenergetics:accumulator').loops(1)

    // capacitor
    event.custom({ type: 'overgeared:forging', hammering: 1, has_polishing: false, has_quality: false, need_quenching: false, show_notification: true, key: { 'C': { item: 'electroenergetics:connector' }, 'S': { tag: 'c:plates/iron' }, 'Z': { tag: 'c:plates/aluminum' }, 'c': { tag: 'c:plates/copper' } }, pattern: ["ScS","SZS","C C"], result: { count: 1, id: 'electroenergetics:capacitor' } }).id('electroenergetics:capacitor')

    // high_voltage_capacitor
    event.custom({ type: 'create:mechanical_crafting', accept_mirrored: false, category: 'misc', show_notification: false, key: { 'C': { item: 'electroenergetics:connector' }, 'S': { tag: 'c:plates/iron' }, 'c': { item: 'electroenergetics:capacitor' } }, pattern: ['CSC','ccc','ccc','ccc'], result: { count: 1, id: 'electroenergetics:high_voltage_capacitor' } }).id('kubejs:ee_hv_capacitor_craft')

    // ========== 保护 / 开关 ==========

    // fuse
    // fuse：动力合成（大型工件）
    // fuse：动力合成（机械台装配）
    event.custom({ type: 'overgeared:forging', hammering: 1, has_polishing: false, has_quality: false, need_quenching: false, show_notification: true, key: { 'A': { item: 'create:andesite_alloy' }, 'C': { item: 'electroenergetics:connector' }, 'g': { item: 'minecraft:glass' }, 'w': { item: 'createaddition:copper_wire' } }, pattern: ["AgA","CwC","AgA"], result: { count: 1, id: 'electroenergetics:fuse' } }).id('electroenergetics:fuse')

    // fuse_holder
    event.custom({ type: 'overgeared:forging', hammering: 1, has_polishing: false, has_quality: false, need_quenching: false, show_notification: true, key: { 'A': { item: 'create:andesite_alloy' }, 'C': { item: 'electroenergetics:connector' }, 'S': { tag: 'c:plates/iron' } }, pattern: ["C C","ASA","C C"], result: { count: 1, id: 'electroenergetics:fuse_holder' } }).id('electroenergetics:fuse_holder')

    // miniature_circuit_breaker
    create.sequenced_assembly(
        ['electroenergetics:miniature_circuit_breaker'],
        { tag: 'minecraft:terracotta' },
        [
            create.deploying(['electroenergetics:incomplete_miniature_circuit_breaker'], ['electroenergetics:incomplete_miniature_circuit_breaker', 'create:precision_mechanism']),
            create.deploying(['electroenergetics:incomplete_miniature_circuit_breaker'], ['electroenergetics:incomplete_miniature_circuit_breaker', 'create:copper_nugget' ]),
            create.deploying(['electroenergetics:incomplete_miniature_circuit_breaker'], ['electroenergetics:incomplete_miniature_circuit_breaker', 'createaddition:copper_wire' ]),
            create.deploying(['electroenergetics:incomplete_miniature_circuit_breaker'], ['electroenergetics:incomplete_miniature_circuit_breaker', 'electroenergetics:copper_wire_spool']),
            create.pressing(['electroenergetics:incomplete_miniature_circuit_breaker'], 'electroenergetics:incomplete_miniature_circuit_breaker')
        ]
    ).transitionalItem('electroenergetics:incomplete_miniature_circuit_breaker')

// sulfur_hexafluoride_breaker
    create.mechanical_crafting(
        "electroenergetics:sulfur_hexafluoride_breaker",
        [
            "sCs",
            " I ",
            " S ",
            " P ",
            "sCs"
        ],{
            I:"electroenergetics:insulator",
            P:"create:precision_mechanism",
            S:"electroenergetics:transformer_oil_bucket",
            s:"create:iron_sheet",
            C:"electroenergetics:connector"
        }
    )


    // cut_off_switch
    event.custom({ type: 'overgeared:forging', hammering: 1, has_polishing: false, has_quality: false, need_quenching: false, show_notification: true, key: { 'A': { item: 'create:andesite_alloy' }, 'C': { item: 'electroenergetics:connector' }, 'S': { tag: 'c:plates/copper' }, 'k': { item: 'electrodynamics:insulation' } }, pattern: [" k "," S ","CAC"], result: { count: 1, id: 'electroenergetics:cut_off_switch' } }).id('electroenergetics:cut_off_switch')

    // double_switch
    event.custom({ type: 'overgeared:forging', hammering: 1, has_polishing: false, has_quality: false, need_quenching: false, show_notification: true, key: { 'A': { item: 'create:andesite_alloy' }, 'S': { item: 'electroenergetics:cut_off_switch' } }, pattern: ["SAS","   ","   "], result: { count: 1, id: 'electroenergetics:double_switch' } }).id('electroenergetics:double_switch')

    // hv_switch
    event.custom({ type: 'overgeared:forging', hammering: 1, has_polishing: false, has_quality: false, need_quenching: false, show_notification: true, key: { 'A': { item: 'create:andesite_alloy' }, 'C': { item: 'electroenergetics:connector' }, 'S': { item: 'create:shaft' }, 'n': { tag: 'c:nuggets/copper' } }, pattern: ["Sn ","CAS","CC "], result: { count: 1, id: 'electroenergetics:high_voltage_switch' } }).id('electroenergetics:hv_switch')

    // relay
    event.custom({ type: 'overgeared:forging', hammering: 1, has_polishing: false, has_quality: false, need_quenching: false, show_notification: true, key: { 'A': { item: 'create:andesite_alloy' }, 'S': { item: 'electroenergetics:cut_off_switch' }, 'W': { item: 'electroenergetics:wire_spool' } }, pattern: [" W ","ASA","   "], result: { count: 1, id: 'electroenergetics:relay' } }).id('electroenergetics:relay')

    // redstone_relay
    event.custom({ type: 'overgeared:forging', hammering: 1, has_polishing: false, has_quality: false, need_quenching: false, show_notification: true, key: { 'A': { item: 'create:andesite_alloy' }, 'R': { item: 'minecraft:redstone_torch' }, 'S': { item: 'electroenergetics:cut_off_switch' } }, pattern: [" R ","ASA","   "], result: { count: 1, id: 'electroenergetics:redstone_relay' } }).id('electroenergetics:redstone_relay')

    // resistor
    event.custom({ type: 'overgeared:forging', hammering: 1, has_polishing: false, has_quality: false, need_quenching: false, show_notification: true, key: { 'C': { item: 'electroenergetics:connector' }, 'S': { tag: 'c:plates/iron' }, 'c': { item: 'minecraft:coal' } }, pattern: [" S ","CcC"," S "], result: { count: 1, id: 'electroenergetics:resistor' } }).id('electroenergetics:resistor')

    // potentiometer
    event.custom({ type: 'overgeared:forging', hammering: 1, has_polishing: false, has_quality: false, need_quenching: false, show_notification: true, key: { 'C': { tag: 'c:nuggets/copper' }, 'S': { item: 'create:shaft' }, 'T': { tag: 'minecraft:terracotta' }, 'c': { item: 'minecraft:coal' } }, pattern: [" S ","TcT","CCC"], result: { count: 1, id: 'electroenergetics:potentiometer' } }).id('electroenergetics:potentiometer')

    // redstone_potentiometer
    event.custom({ type: 'overgeared:forging', hammering: 1, has_polishing: false, has_quality: false, need_quenching: false, show_notification: true, key: { 'P': { item: 'electroenergetics:potentiometer' }, 'R': { item: 'minecraft:redstone_torch' } }, pattern: [" P "," R ","   "], result: { count: 1, id: 'electroenergetics:redstone_potentiometer' } }).id('electroenergetics:redstone_potentiometer')

    // diode
    event.custom({ type: 'overgeared:forging', hammering: 1, has_polishing: false, has_quality: false, need_quenching: false, show_notification: true, key: { 'C': { item: 'electroenergetics:connector' }, 'Q': { item: 'minecraft:quartz' }, 'S': { tag: 'c:plates/iron' } }, pattern: [" S ","CQC"," S "], result: { count: 1, id: 'electroenergetics:diode' } }).id('electroenergetics:diode')

    // emergency_stop_button
    event.custom({ type: 'overgeared:forging', hammering: 1, has_polishing: false, has_quality: false, need_quenching: false, show_notification: true, key: { 'A': { item: 'create:andesite_alloy' }, 'B': { tag: 'minecraft:buttons' }, 'C': { item: 'electroenergetics:connector' }, 'R': { item: 'minecraft:red_concrete' } }, pattern: [" R "," B ","CAC"], result: { count: 1, id: 'electroenergetics:emergency_stop_button' } }).id('electroenergetics:emergency_stop_button')

    // momentary_switch
    event.custom({ type: 'overgeared:forging', hammering: 1, has_polishing: false, has_quality: false, need_quenching: false, show_notification: true, key: { 'A': { item: 'create:andesite_alloy' }, 'B': { tag: 'minecraft:buttons' }, 'C': { item: 'electroenergetics:connector' }, 'K': { item: 'minecraft:dried_kelp' } }, pattern: [" K "," B ","CAC"], result: { count: 1, id: 'electroenergetics:momentary_switch' } }).id('electroenergetics:momentary_switch')

    // wire_damper：序列组装
    create.sequenced_assembly(
        ['electroenergetics:wire_damper'],
        'create:andesite_alloy',
        [
            create.deploying(['createae2:incompleted_wire_damper'], ['createae2:incompleted_wire_damper', 'minecraft:chain']),
            create.deploying(['createae2:incompleted_wire_damper'], ['createae2:incompleted_wire_damper', 'create:iron_sheet']),
            create.deploying(['createae2:incompleted_wire_damper'], ['createae2:incompleted_wire_damper', 'create:andesite_alloy']),
            create.pressing(['createae2:incompleted_wire_damper'], 'createae2:incompleted_wire_damper'),
        ]
    ).transitionalItem('createae2:incompleted_wire_damper').loops(1)

    // ========== 仪表 ==========

    // synchroscope：锻造台（铁壳+端子+表头+检测绕组）
    event.custom({ type: 'overgeared:forging', hammering: 1, has_polishing: false, has_quality: false, need_quenching: false, show_notification: true, key: { 'S': { item: 'create:iron_sheet' }, 'C': { item: 'electroenergetics:connector' }, 'c': { item: 'electroenergetics:copper_wire_spool' }, 'g': { item: 'minecraft:compass' } }, pattern: ["cS ","CgC","cS "], result: { count: 1, id: 'electroenergetics:synchroscope' } }).id('electroenergetics:synchroscope')
    // frequency_meter：锻造台（铁壳+端子+表头+检测绕组）
    event.custom({ type: 'overgeared:forging', hammering: 1, has_polishing: false, has_quality: false, need_quenching: false, show_notification: true, key: { 'S': { item: 'create:iron_sheet' }, 'C': { item: 'electroenergetics:connector' }, 'c': { item: 'electroenergetics:copper_wire_spool' }, 'g': { item: 'minecraft:clock' } }, pattern: ["cS ","CgC","cS "], result: { count: 1, id: 'electroenergetics:frequency_meter' } }).id('electroenergetics:frequency_meter')

    // voltmeter
    event.custom({ type: 'overgeared:forging', hammering: 1, has_polishing: false, has_quality: false, need_quenching: false, show_notification: true, key: { 'A': { item: 'create:andesite_alloy_block' }, 'C': { item: 'electroenergetics:connector' }, 'c': { item: 'minecraft:compass' } }, pattern: [" c ","CAC","   "], result: { count: 1, id: 'electroenergetics:voltmeter' } }).id('electroenergetics:voltmeter')

    // ammeter
    event.custom({ type: 'overgeared:forging', hammering: 1, has_polishing: false, has_quality: false, need_quenching: false, show_notification: true, key: { 'A': { item: 'create:andesite_alloy_block' }, 'C': { item: 'electroenergetics:connector' }, 'c': { item: 'minecraft:clock' } }, pattern: [" c ","CAC","   "], result: { count: 1, id: 'electroenergetics:ammeter' } }).id('electroenergetics:ammeter')

    // clamp_meter
    event.custom({ type: 'overgeared:forging', hammering: 1, has_polishing: false, has_quality: false, need_quenching: false, show_notification: true, key: { 'A': { item: 'create:andesite_alloy' }, 'P': { item: 'create:precision_mechanism' }, 'S': { item: 'create:sturdy_sheet' }, 'W': { item: 'electroenergetics:wire_spool' } }, pattern: [' WW', 'SPS', 'A A'], result: { count: 1, id: 'electroenergetics:clamp_meter' } }).id('electroenergetics:clamp_meter')

    // energy_meter
    event.custom({ type: 'create:mechanical_crafting', accept_mirrored: false, category: 'misc', show_notification: false, key: { 'S': { tag: 'c:plates/iron' }, 'C': { item: 'electroenergetics:double_connector' }, 'v': { item: 'electroenergetics:voltmeter' }, 'P': { item: 'create:precision_mechanism' }, 'a': { item: 'electroenergetics:ammeter' } }, pattern: ["SSSSS","SC CS","SvPaS","S S S","SSSSS"], result: { count: 1, id: 'electroenergetics:energy_meter' } }).id('electroenergetics:energy_meter')

    // tri_polar_energy_meter
    event.custom({ type: 'create:mechanical_crafting', accept_mirrored: false, category: 'misc', show_notification: false, key: { 'S': { tag: 'c:plates/iron' }, 'C': { item: 'electroenergetics:triple_connector' }, 'v': { item: 'electroenergetics:voltmeter' }, 'P': { item: 'create:precision_mechanism' }, 'a': { item: 'electroenergetics:ammeter' } }, pattern: ["SSSSS","SC CS","SvPaS","S S S","SSSSS"], result: { count: 1, id: 'electroenergetics:tri_polar_energy_meter' } }).id('electroenergetics:tri_polar_energy_meter')

    // ammeter_from_voltmeter
    // ammeter_from_voltmeter：电压表改造为电流表（工作台单格互换）
    event.shaped('electroenergetics:ammeter', ['G'], { G: 'electroenergetics:voltmeter' }).id('electroenergetics:ammeter_from_voltmeter')

    // voltmeter_from_ammeter
    // voltmeter_from_ammeter：电流表改造为电压表（工作台单格互换）
    event.shaped('electroenergetics:voltmeter', ['G'], { G: 'electroenergetics:ammeter' }).id('electroenergetics:voltmeter_from_ammeter')

    // ========== 用电设备 ==========

    // electric_pump
    event.custom({ type: 'create:mechanical_crafting', accept_mirrored: false, category: 'misc', show_notification: false, key: { 'S': { tag: 'c:plates/iron' }, 'M': { item: 'electroenergetics:magnet' }, 'C': { item: 'electroenergetics:connector' }, 'A': { item: 'create:andesite_alloy' }, 'P': { item: 'create:mechanical_pump' }, 'W': { item: 'electroenergetics:wire_spool' } }, pattern: ["SSSSS","S MCS","SAPAS","SCW S","SSSSS"], result: { count: 1, id: 'electroenergetics:electric_pump' } }).id('electroenergetics:electric_pump')

    // resistive_heater
    event.custom({ type: 'create:mechanical_crafting', accept_mirrored: false, category: 'misc', show_notification: false, key: { 'S': { tag: 'c:plates/iron' }, 'c': { item: 'minecraft:coal_block' }, 'C': { item: 'electroenergetics:connector' }, 'A': { item: 'create:andesite_alloy' } }, pattern: ["SSSSS","ScccS","SCACS","SASAS","SSSSS"], result: { count: 1, id: 'electroenergetics:resistive_heater' } }).id('electroenergetics:resistive_heater')

    // radiator_panel
    event.custom({ type: 'overgeared:forging', hammering: 1, has_polishing: false, has_quality: false, need_quenching: false, show_notification: true, key: { 'A': { item: 'create:andesite_alloy' }, 'S': { tag: 'c:plates/iron' } }, pattern: ["ASA","ASA","ASA"], result: { count: 4, id: 'electroenergetics:radiator_panel' } }).id('electroenergetics:radiator_panel')

    // bulb
    event.custom({ type: 'overgeared:forging', hammering: 1, has_polishing: false, has_quality: false, need_quenching: false, show_notification: true, key: { 'A': { item: 'create:andesite_alloy' }, 'C': { item: 'electroenergetics:connector' }, 'g': { item: 'minecraft:glass' }, 'w': { item: 'createaddition:copper_wire' } }, pattern: [" g "," w ","CAC"], result: { count: 1, id: 'electroenergetics:bulb' } }).id('electroenergetics:bulb')

    // indicator_bulb
    event.custom({ type: 'overgeared:forging', hammering: 1, has_polishing: false, has_quality: false, need_quenching: false, show_notification: true, key: { 'C': { item: 'electroenergetics:connector' }, 'E': { item: 'create:electron_tube' } }, pattern: ["CEC","   ","   "], result: { count: 1, id: 'electroenergetics:indicator_bulb' } }).id('electroenergetics:indicator_bulb')

    // buzzer
    event.custom({ type: 'overgeared:forging', hammering: 1, has_polishing: false, has_quality: false, need_quenching: false, show_notification: true, key: { 'A': { item: 'create:andesite_alloy' }, 'C': { item: 'electroenergetics:connector' }, 'S': { tag: 'c:plates/iron' }, 'W': { item: 'electroenergetics:wire_spool' } }, pattern: [" S ","CWC"," A "], result: { count: 1, id: 'electroenergetics:buzzer' } }).id('electroenergetics:buzzer')

    // ========== 配电面板（16 色） ==========

    // black_electrical_panel
    event.shapeless('electroenergetics:black_electrical_panel', ['electroenergetics:electrical_panel', 'minecraft:black_dye']).id('electroenergetics:black_electrical_panel')

    // blue_electrical_panel
    event.shapeless('electroenergetics:blue_electrical_panel', ['electroenergetics:electrical_panel', 'minecraft:blue_dye']).id('electroenergetics:blue_electrical_panel')

    // brown_electrical_panel
    event.shapeless('electroenergetics:brown_electrical_panel', ['electroenergetics:electrical_panel', 'minecraft:brown_dye']).id('electroenergetics:brown_electrical_panel')

    // cyan_electrical_panel
    event.shapeless('electroenergetics:cyan_electrical_panel', ['electroenergetics:electrical_panel', 'minecraft:cyan_dye']).id('electroenergetics:cyan_electrical_panel')

    // electrical_panel
    event.custom({ type: 'overgeared:forging', hammering: 1, has_polishing: false, has_quality: false, need_quenching: false, show_notification: true, key: { 'A': { item: 'create:andesite_alloy' }, 'S': { tag: 'c:plates/iron' } }, pattern: ["A A","ASA","A A"], result: { count: 2, id: 'electroenergetics:electrical_panel' } }).id('electroenergetics:electrical_panel')

    // electrical_panel_undye
    event.shapeless('electroenergetics:electrical_panel', ['#electroenergetics:dyed_electrical_panels']).id('electroenergetics:electrical_panel_undye')

    // gray_electrical_panel
    event.shapeless('electroenergetics:gray_electrical_panel', ['electroenergetics:electrical_panel', 'minecraft:gray_dye']).id('electroenergetics:gray_electrical_panel')

    // green_electrical_panel
    event.shapeless('electroenergetics:green_electrical_panel', ['electroenergetics:electrical_panel', 'minecraft:green_dye']).id('electroenergetics:green_electrical_panel')

    // light_blue_electrical_panel
    event.shapeless('electroenergetics:light_blue_electrical_panel', ['electroenergetics:electrical_panel', 'minecraft:light_blue_dye']).id('electroenergetics:light_blue_electrical_panel')

    // light_gray_electrical_panel
    event.shapeless('electroenergetics:light_gray_electrical_panel', ['electroenergetics:electrical_panel', 'minecraft:light_gray_dye']).id('electroenergetics:light_gray_electrical_panel')

    // lime_electrical_panel
    event.shapeless('electroenergetics:lime_electrical_panel', ['electroenergetics:electrical_panel', 'minecraft:lime_dye']).id('electroenergetics:lime_electrical_panel')

    // magenta_electrical_panel
    event.shapeless('electroenergetics:magenta_electrical_panel', ['electroenergetics:electrical_panel', 'minecraft:magenta_dye']).id('electroenergetics:magenta_electrical_panel')

    // orange_electrical_panel
    event.shapeless('electroenergetics:orange_electrical_panel', ['electroenergetics:electrical_panel', 'minecraft:orange_dye']).id('electroenergetics:orange_electrical_panel')

    // pink_electrical_panel
    event.shapeless('electroenergetics:pink_electrical_panel', ['electroenergetics:electrical_panel', 'minecraft:pink_dye']).id('electroenergetics:pink_electrical_panel')

    // purple_electrical_panel
    event.shapeless('electroenergetics:purple_electrical_panel', ['electroenergetics:electrical_panel', 'minecraft:purple_dye']).id('electroenergetics:purple_electrical_panel')

    // red_electrical_panel
    event.shapeless('electroenergetics:red_electrical_panel', ['electroenergetics:electrical_panel', 'minecraft:red_dye']).id('electroenergetics:red_electrical_panel')

    // white_electrical_panel
    event.shapeless('electroenergetics:white_electrical_panel', ['electroenergetics:electrical_panel', 'minecraft:white_dye']).id('electroenergetics:white_electrical_panel')

    // yellow_electrical_panel
    event.shapeless('electroenergetics:yellow_electrical_panel', ['electroenergetics:electrical_panel', 'minecraft:yellow_dye']).id('electroenergetics:yellow_electrical_panel')

    // ========== 铁路 / 输电（AC 电气化） ==========

    // pantograph
    event.custom({ type: 'overgeared:forging', hammering: 2, has_polishing: false, has_quality: false, need_quenching: false, show_notification: true, key: { 'A': { item: 'create:andesite_alloy' }, 'C': { item: 'electroenergetics:connector' }, 'K': { item: 'electrodynamics:insulation' }, 'S': { item: 'create:shaft' } }, pattern: ["KK ","CAS","CC "], result: { count: 1, id: 'electroenergetics:pantograph' } }).id('electroenergetics:pantograph')

    // catenary_holder
    event.custom({ type: 'overgeared:forging', hammering: 1, has_polishing: false, has_quality: false, need_quenching: false, show_notification: true, key: { 'I': { tag: 'c:ingots/iron' }, 'N': { tag: 'c:nuggets/iron' } }, pattern: ["III"," N ","III"], result: { count: 4, id: 'electroenergetics:catenary_holder' } }).id('electroenergetics:catenary_holder')

    // hanging_glass_insulator
    event.custom({ type: 'overgeared:forging', hammering: 1, has_polishing: false, has_quality: false, need_quenching: false, show_notification: true, key: { 'S': { item: 'electroenergetics:glass_insulator_segment' } }, pattern: ["SS ","SS ","   "], result: { count: 1, id: 'electroenergetics:hanging_glass_insulator' } }).id('electroenergetics:hanging_glass_insulator')

    // rail_contact_shoe
    event.custom({ type: 'overgeared:forging', hammering: 1, has_polishing: false, has_quality: false, need_quenching: false, show_notification: true, key: { 'A': { item: 'create:andesite_alloy' }, 'C': { item: 'electroenergetics:connector' }, 'K': { item: 'electrodynamics:insulation' }, 'S': { item: 'create:shaft' } }, pattern: ["CKA","ASA"," A "], result: { count: 1, id: 'electroenergetics:rail_contact_shoe' } }).id('electroenergetics:rail_contact_shoe')

    // pole_mount
    event.custom({ type: 'overgeared:forging', hammering: 1, has_polishing: false, has_quality: false, need_quenching: false, show_notification: true, key: { 'A': { item: 'create:andesite_alloy' }, 's': { tag: 'c:plates/iron' } }, pattern: ["ss ","AAA"," A "], result: { count: 3, id: 'electroenergetics:pole_mount' } }).id('electroenergetics:pole_mount')

    // concrete_pole
    event.custom({ type: 'overgeared:forging', hammering: 1, has_polishing: false, has_quality: false, need_quenching: false, show_notification: true, key: { 'C': { item: 'minecraft:light_gray_concrete' }, 'W': { item: 'electroenergetics:wire_spool' } }, pattern: ["CCC","CWC","CCC"], result: { count: 8, id: 'electroenergetics:concrete_pole' } }).id('electroenergetics:concrete_pole')

    // linemans_stick
    event.custom({"type":"create:mechanical_crafting","accept_mirrored":false,"category":"misc","key":{"D":{"item":"minecraft:red_dye"},"H":{"item":"create:brass_hand"},"N":{"tag":"c:nuggets/iron"},"R":{"item":"create:precision_mechanism"},"S":{"tag":"c:rods/wooden"}},"pattern":["NRH"," S "," S "," S "," D "],"result":{"count":1,"id":"electroenergetics:linemans_stick"},"show_notification":false}).id('electroenergetics:linemans_stick')

    // ========== 杂项 ==========

    // black_electric_motor_dye
    event.shapeless('electroenergetics:black_electric_motor', ['#electroenergetics:electric_motors', 'minecraft:black_dye']).id('electroenergetics:black_electric_motor_dye')

    // blue_electric_motor_dye
    event.shapeless('electroenergetics:blue_electric_motor', ['#electroenergetics:electric_motors', 'minecraft:blue_dye']).id('electroenergetics:blue_electric_motor_dye')

    // brown_electric_motor_dye
    event.shapeless('electroenergetics:brown_electric_motor', ['#electroenergetics:electric_motors', 'minecraft:brown_dye']).id('electroenergetics:brown_electric_motor_dye')

    // cyan_electric_motor_dye
    event.shapeless('electroenergetics:cyan_electric_motor', ['#electroenergetics:electric_motors', 'minecraft:cyan_dye']).id('electroenergetics:cyan_electric_motor_dye')

    // electric_shock_sign
    event.custom({"type":"minecraft:stonecutting","ingredient":{"tag":"c:plates/iron"},"result":{"count":2,"id":"electroenergetics:electric_shock_sign"}}).id('electroenergetics:electric_shock_sign')

    // gray_electric_motor_dye
    event.shapeless('electroenergetics:gray_electric_motor', ['#electroenergetics:electric_motors', 'minecraft:gray_dye']).id('electroenergetics:gray_electric_motor_dye')

    // green_electric_motor_dye
    event.shapeless('electroenergetics:green_electric_motor', ['#electroenergetics:electric_motors', 'minecraft:green_dye']).id('electroenergetics:green_electric_motor_dye')

    // ground_rod
    event.custom({ type: 'overgeared:forging', hammering: 1, has_polishing: false, has_quality: false, need_quenching: false, show_notification: true, key: { 'C': { item: 'electroenergetics:connector' }, 'I': { tag: 'c:ingots/copper' } }, pattern: [" C "," I "," I "], result: { count: 1, id: 'electroenergetics:ground_rod' } }).id('electroenergetics:ground_rod')

    // grounding_sign
    event.custom({"type":"minecraft:stonecutting","ingredient":{"tag":"c:plates/iron"},"result":{"count":2,"id":"electroenergetics:grounding_sign"}}).id('electroenergetics:grounding_sign')

    // high_voltage_sign
    event.custom({"type":"minecraft:stonecutting","ingredient":{"tag":"c:plates/iron"},"result":{"count":2,"id":"electroenergetics:high_voltage_sign"}}).id('electroenergetics:high_voltage_sign')

    // insulator
    event.custom({ type: 'overgeared:forging', hammering: 1, has_polishing: false, has_quality: false, need_quenching: false, show_notification: true, key: { 'A': { item: 'create:andesite_alloy' }, 'T': { tag: 'minecraft:terracotta' } }, pattern: [" T "," A "," T "], result: { count: 6, id: 'electroenergetics:insulator' } }).id('electroenergetics:insulator')

    // light_blue_electric_motor_dye
    event.shapeless('electroenergetics:light_blue_electric_motor', ['#electroenergetics:electric_motors', 'minecraft:light_blue_dye']).id('electroenergetics:light_blue_electric_motor_dye')

    // light_gray_electric_motor_dye
    event.shapeless('electroenergetics:light_gray_electric_motor', ['#electroenergetics:electric_motors', 'minecraft:light_gray_dye']).id('electroenergetics:light_gray_electric_motor_dye')

    // lime_electric_motor_dye
    event.shapeless('electroenergetics:lime_electric_motor', ['#electroenergetics:electric_motors', 'minecraft:lime_dye']).id('electroenergetics:lime_electric_motor_dye')

    // magenta_electric_motor_dye
    event.shapeless('electroenergetics:magenta_electric_motor', ['#electroenergetics:electric_motors', 'minecraft:magenta_dye']).id('electroenergetics:magenta_electric_motor_dye')

    // orange_electric_motor_dye
    event.shapeless('electroenergetics:orange_electric_motor', ['#electroenergetics:electric_motors', 'minecraft:orange_dye']).id('electroenergetics:orange_electric_motor_dye')

    // pink_electric_motor_dye
    event.shapeless('electroenergetics:pink_electric_motor', ['#electroenergetics:electric_motors', 'minecraft:pink_dye']).id('electroenergetics:pink_electric_motor_dye')

    // plant_oil
    event.custom({"type":"create:compacting","ingredients":[{"tag":"c:seeds"}],"results":[{"amount":100,"id":"electroenergetics:plant_oil"}]}).id('electroenergetics:plant_oil')

    // purple_electric_motor_dye
    event.shapeless('electroenergetics:purple_electric_motor', ['#electroenergetics:electric_motors', 'minecraft:purple_dye']).id('electroenergetics:purple_electric_motor_dye')

    // red_electric_motor_dye
    event.shapeless('electroenergetics:red_electric_motor', ['#electroenergetics:electric_motors', 'minecraft:red_dye']).id('electroenergetics:red_electric_motor_dye')

    // white_electric_motor_dye
    event.shapeless('electroenergetics:white_electric_motor', ['#electroenergetics:electric_motors', 'minecraft:white_dye']).id('electroenergetics:white_electric_motor_dye')

    // yellow_electric_motor_dye
    event.shapeless('electroenergetics:yellow_electric_motor', ['#electroenergetics:electric_motors', 'minecraft:yellow_dye']).id('electroenergetics:yellow_electric_motor_dye')

    // ============================================================
    // Electro Energetics（EE 拟真电力）配方
    // 原则：合理性优先——手搓合理的锻造台，组装/拆解用 shapeless，
    //       需要工序的动力合成/序列装配，暂不强制双轨
    // 原版配方已被 00_remove_all_mod_recipes.js 统一删除，这里全部重建
    // ============================================================

    // === 接线端子（EE 电网基础连接件）===
    // 单端子：锻造台 — 铜粒 + 安山合金 + 陶瓦 → 4 个（原版工作台 3x1 竖排，改为锻造台加工）
    event.custom({
        type: 'overgeared:forging',
        hammering: 1,
        has_polishing: false,
        has_quality: false,
        need_quenching: false,
        show_notification: true,
        key: {
            'n': { tag: 'c:nuggets/copper' },
            'A': { item: 'create:andesite_alloy' },
            'T': { tag: 'minecraft:terracotta' }
        },
        pattern: [' n ', ' A ', ' T '],
        result: { count: 4, id: 'electroenergetics:connector' }
    })

    // 组合端子：组装（shapeless，无需锻造）— 2/3/4 个单端子合 1 个多端子
    event.shapeless('electroenergetics:double_connector', ['electroenergetics:connector', 'electroenergetics:connector'])
    event.shapeless('electroenergetics:triple_connector', ['electroenergetics:connector', 'electroenergetics:connector', 'electroenergetics:connector'])
    event.shapeless('electroenergetics:quad_connector', ['electroenergetics:connector', 'electroenergetics:connector', 'electroenergetics:connector', 'electroenergetics:connector'])
    // 四重端子也可由两个双重端子组成
    event.shapeless('electroenergetics:quad_connector', ['electroenergetics:double_connector', 'electroenergetics:double_connector'])

    // 拆解还原（无损耗）
    event.shapeless('2x electroenergetics:connector', ['electroenergetics:double_connector'])
    event.shapeless('3x electroenergetics:connector', ['electroenergetics:triple_connector'])
    event.shapeless('4x electroenergetics:connector', ['electroenergetics:quad_connector'])

    // === 导线（线材，粒→线 = 拉丝锻打，锻造台）===
    // 铜线：3 铜粒 → 1 根（原版工作台竖排，改为锻造台） //铜线统一改用C&A的铜线
    // 铁线：3 铁粒 → 1 根                            //铁线统一改用C&A的铁线
    // 琥珀线：3 琥珀粒 → 1 根（琥珀由 createaddition 提供）//琥珀金线统一改用C&A的琥珀金线

    // === 导线（绞合 / 包裹 / 卷绕 = 工作台组装）===
    // 绝缘导线：8 铜线 + 绝缘材料（ED 羊毛/皮革制）包裹 → 8 根
    event.custom({ type: 'overgeared:forging', hammering: 1, has_polishing: false, has_quality: false, need_quenching: false, show_notification: true, key: { 'w': { item: 'createaddition:copper_wire' }, 'k': { item: 'electrodynamics:insulation' } }, pattern: ["www","wkw","www"], result: { count: 8, id: 'electroenergetics:insulated_wire' } }).id('electroenergetics:insulated_wire')
    // 高压绝缘导线：4 绝缘线 + 4 陶瓷绝缘材料 + 纸 → 4 根（20kV 级，陶瓷绝缘 = 中期门槛）
    event.custom({ type: 'overgeared:forging', hammering: 1, has_polishing: false, has_quality: false, need_quenching: false, show_notification: true, key: { 'p': { item: 'electrodynamics:insulationceramic' }, 'w': { item: 'electroenergetics:insulated_wire' }, 'k': { item: 'minecraft:paper' } }, pattern: ["pwp","wkw","pwp"], result: { count: 4, id: 'electroenergetics:heavily_insulated_wire' } }).id('electroenergetics:heavily_insulated_wire')
    // 玻璃绝缘子线：安山合金 + 铁线 + 玻璃 → 4 个
    event.custom({ type: 'overgeared:forging', hammering: 1, has_polishing: false, has_quality: false, need_quenching: false, show_notification: true, key: { 'A': { item: 'create:andesite_alloy' }, 'W': { item: 'createaddition:iron_wire' }, 'G': { tag: 'c:glass_blocks' } }, pattern: [" A "," W "," G "], result: { count: 4, id: 'electroenergetics:glass_insulator_segment' } }).id('electroenergetics:glass_insulator_segment')
    // === 线轴（空线轴 = 木工组装；卷线 = 空线轴 + 4 线材）===
    // 空线轴：木台阶 + 木棍 → 8 个
    event.shaped('8x electroenergetics:empty_spool', [' S ', ' s ', ' S '], { S: '#minecraft:wooden_slabs', s: '#c:rods/wooden' })
    // 铜线轴
    event.shaped('electroenergetics:copper_wire_spool', [' w ', 'wsw', ' w '], { w: 'createaddition:copper_wire', s: 'electroenergetics:empty_spool' })
    // 铁线轴（铁丝线卷）
    event.shaped('electroenergetics:iron_wire_spool', [' w ', 'wsw', ' w '], { w: 'electroenergetics:iron_wire_strand', s: 'electroenergetics:empty_spool' })
    // 琥珀线轴
    event.shaped('electroenergetics:electrum_wire_spool', [' w ', 'wsw', ' w '], { w: 'createaddition:electrum_wire', s: 'electroenergetics:empty_spool' })
    // 绝缘线轴
    event.shaped('electroenergetics:wire_spool', [' w ', 'wsw', ' w '], { w: 'electroenergetics:insulated_wire', s: 'electroenergetics:empty_spool' })
    // 高压绝缘线轴
    event.shaped('electroenergetics:heavily_insulated_wire_spool', [' w ', 'wsw', ' w '], { w: 'electroenergetics:heavily_insulated_wire', s: 'electroenergetics:empty_spool' })
    // 粗铁线轴（母线，铁锭卷 — tag 指向 #c:ingots/iron）
    event.shaped('electroenergetics:iron_bus_spool', [' w ', 'wsw', ' w '], { w: '#electroenergetics:iron_bus_component', s: 'electroenergetics:empty_spool' })
    // 铁轨卷筒（铁活板门卷 — tag 指向铁活板门）
    event.shaped('electroenergetics:iron_rail_spool', [' w ', 'wsw', ' w '], { w: '#electroenergetics:iron_rail_component', s: 'electroenergetics:empty_spool' })
    // 玻璃绝缘子卷
    event.shaped('electroenergetics:glass_insulator_spool', [' w ', 'wsw', ' w '], { w: 'electroenergetics:glass_insulator_segment', s: 'electroenergetics:empty_spool' })
    // iron_wire_strand（铁丝股：4 铁线绞合锻打成股，原工作台 2x2 改锻造台）
    event.custom({ type: 'overgeared:forging', hammering: 1, has_polishing: false, has_quality: false, need_quenching: false, show_notification: true, key: { 'w': { item: 'createaddition:iron_wire' } }, pattern: [" w ","w w"," w "], result: { count: 1, id: 'electroenergetics:iron_wire_strand' } }).id('electroenergetics:iron_wire_strand')

})
