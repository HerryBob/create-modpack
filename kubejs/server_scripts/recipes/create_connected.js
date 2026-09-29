ServerEvents.recipes(event=>{

    const create = event.recipes.create
    const vintage = event.recipes.createvintageneoforged

    //曲柄轮
    create.item_application('create_connected:crank_wheel',['create:cogwheel','create:hand_crank'])
    create.item_application('create_connected:large_crank_wheel',['create:large_cogwheel','create:hand_crank'])
    //黄铜十字齿轮箱
    create.item_application('create_connected:brass_gearbox',['create:gearbox','create:brass_ingot'])
    create.item_application('create_connected:vertical_brass_gearbox',['create:vertical_gearbox','create:brass_ingot'])
    event.shapeless('create_connected:vertical_brass_gearbox','create_connected:brass_gearbox')
    event.shapeless('create_connected:brass_gearbox','create_connected:vertical_brass_gearbox')

    //六向齿轮箱
    event.shapeless('create_connected:six_way_gearbox',['create:gearbox','create_connected:cross_connector'])
    event.shapeless('create_connected:six_way_gearbox','create_connected:vertical_six_way_gearbox')
    event.shapeless('create_connected:vertical_six_way_gearbox','create_connected:six_way_gearbox')
    //平行齿轮箱
    event.shapeless('create_connected:parallel_gearbox',['create:gearbox','create_connected:cross_connector'])
    event.shapeless('create_connected:vertical_parallel_gearbox',['create:vertical_gearbox','create_connected:cross_connector'])
    event.shapeless('create_connected:vertical_parallel_gearbox','create_connected:parallel_gearbox')
    event.shapeless('create_connected:parallel_gearbox','create_connected:vertical_parallel_gearbox')
    //反向
    create.item_application('create_connected:inverted_gearshift',['create:gearshift','create_connected:control_chip'])
    create.item_application('create_connected:inverted_clutch',['create:clutch','create_connected:control_chip'])
    //各种离合器
    event.shapeless('create_connected:overstress_clutch',['create:clutch','create_connected:shear_pin'])
    //剪切销
    event.smelting('create_connected:shear_pin','create:shaft')
    event.blasting('create_connected:shear_pin','create:shaft')

    //制动器：加固板摩擦片夹住传动轴，红石电控触发，将动能转为热
    event.shapeless('create_connected:brake', ['create:andesite_casing', 'create:shaft', 'minecraft:redstone', 'create:sturdy_sheet'])
    //离心离合器：铁板离心块随转速甩出接合，测速仪感知转速阈值
    event.shapeless('create_connected:centrifugal_clutch', ['create:andesite_casing', 'create:shaft', 'create:iron_sheet', 'create:speedometer'])
    //单向离合器：齿轮棘轮结构只允许单方向传力
    event.shapeless('create_connected:freewheel_clutch', ['create:andesite_casing', 'create:shaft', 'create:iron_sheet', 'create:cogwheel'])
    //动能桥：黄铜机壳封装，两侧轴端输入/输出，中部离合器阵列耦合两条独立传动网络
    create.mechanical_crafting('create_connected:kinetic_bridge', [
        'BBBBB',
        'BCSCB',
        'BBBBB',

    ], {
        B: 'create:brass_casing',
        S: 'create:shaft',
        C: 'create:clutch'
    })
    //动能电池：黄铜机壳+铁板储能+精密机件控制+红石信号
    event.shaped('create_connected:kinetic_battery', [
        ' P ',
        ' B ',
        'IRI'
    ], {
        B: 'create:brass_casing',
        P: 'create:precision_mechanism',
        I: 'create:iron_sheet',
        R: 'minecraft:redstone'
    })
    //仪表盘：显示板+黄铜机壳，向玩家HUD推送4行信息
    event.shaped('create_connected:dashboard', [
        'B',
        'C'
    ], {
        B: 'create:display_board',
        C: 'create:brass_casing'
    })
    //黄铜溜槽：手持黄铜锭右键普通溜槽升级（高吞吐，一次64个物品）
    create.item_application('create_connected:brass_chute', ['create:chute', 'create:brass_ingot'])
    //库存接入端口：黄铜机壳+溜槽+电子管，扩展储物访问
    event.shaped('2x create_connected:inventory_access_port', [
        'B',
        'C',
        'E'
    ], {
        B: 'create:brass_casing',
        C: 'create:chute',
        E: 'create:electron_tube'
    })
    //库存桥：两个接入端口组成桥，同时访问两个储物
    event.shapeless('create_connected:inventory_bridge', ['create_connected:inventory_access_port', 'create_connected:inventory_access_port'])
    //流体容器/物品筒仓：与机械动力本体对应物互相转化（水平流体罐/垂直物品库）
    event.shapeless('create_connected:fluid_vessel', 'create:fluid_tank')
    event.shapeless('create:fluid_tank', 'create_connected:fluid_vessel')
    event.shapeless('create_connected:item_silo', 'create:item_vault')
    event.shapeless('create:item_vault', 'create_connected:item_silo')
    event.shapeless('create_connected:creative_fluid_vessel', 'create:creative_fluid_tank')
    event.shapeless('create:creative_fluid_tank', 'create_connected:creative_fluid_vessel')

    //无线红石通配符：发射器+合成器槽盖（工作台无序）
    event.shapeless('create_connected:redstone_link_wildcard', ['create:transmitter', 'create:crafter_slot_cover'])
    //链接发射器：与本体无线红石链接互相转化（工作台无序）
    event.shapeless('create_connected:linked_transmitter', 'create:redstone_link')
    event.shapeless('create:redstone_link', 'create_connected:linked_transmitter')
    //序列脉冲发生器：黄铜板+控制芯片+电子管+红石火把+石头（工作台有序，原版结构）
    event.shaped('create_connected:sequenced_pulse_generator', [
        'EC ',
        'EBT',
        'SSS'
    ], {
        E: 'create:electron_tube',
        C: 'create_connected:control_chip',
        B: 'create:brass_sheet',
        T: 'minecraft:redstone_torch',
        S: 'minecraft:stone'
    })
    //控制芯片：序列组装（金板 → 部署电子管 → 部署红石 → 压片，3轮）
    create.sequenced_assembly('create_connected:control_chip', 'create:golden_sheet', [
        create.deploying('create_connected:incomplete_control_chip', ['create_connected:incomplete_control_chip', 'create:electron_tube']),
        create.deploying('create_connected:incomplete_control_chip', ['create_connected:incomplete_control_chip', 'minecraft:redstone']),
        create.pressing('create_connected:incomplete_control_chip', ['create_connected:incomplete_control_chip'])
    ]).transitionalItem('create_connected:incomplete_control_chip').loops(3)

    //空触媒：黄铜锭+铁栏杆框架（工作台有序，原版配方）
    event.shaped('create_connected:empty_fan_catalyst', [
        'bib',
        'i i',
        'bib'
    ], {
        b: 'create:brass_ingot',
        i: 'minecraft:iron_bars'
    })
    //触媒填充（锻造台，原版材料）
    create.item_application('create_connected:fan_blasting_catalyst', ['create_connected:empty_fan_catalyst', 'minecraft:lava_bucket'])
    create.item_application('create_connected:fan_ending_catalyst_dragon_head', ['create_connected:empty_fan_catalyst', 'minecraft:dragon_head'])
    create.item_application('create_connected:fan_ending_catalyst_dragons_breath', ['create_connected:empty_fan_catalyst', 'create_dragons_plus:dragon_breath_bucket'])
    create.item_application('create_connected:fan_freezing_catalyst', ['create_connected:empty_fan_catalyst', 'minecraft:powder_snow_bucket'])
    create.item_application('create_connected:fan_haunting_catalyst', ['create_connected:empty_fan_catalyst', 'minecraft:soul_sand'])
    create.item_application('create_connected:fan_sanding_catalyst', ['create_connected:empty_fan_catalyst', 'minecraft:sand'])
    create.item_application('create_connected:fan_smoking_catalyst', ['create_connected:empty_fan_catalyst', 'minecraft:netherrack'])
    create.item_application('create_connected:fan_splashing_catalyst', ['create_connected:empty_fan_catalyst', 'minecraft:water_bucket'])

    //触媒返还：已填充触媒 → 空触媒（工作台无序，方便换类型）
    event.shapeless('create_connected:empty_fan_catalyst', 'create_connected:fan_blasting_catalyst')
    event.shapeless('create_connected:empty_fan_catalyst', 'create_connected:fan_chocolate_coating_catalyst')
    event.shapeless('create_connected:empty_fan_catalyst', 'create_connected:fan_ending_catalyst_dragon_head')
    event.shapeless('create_connected:empty_fan_catalyst', 'create_connected:fan_ending_catalyst_dragons_breath')
    event.shapeless('create_connected:empty_fan_catalyst', 'create_connected:fan_enriched_catalyst')
    event.shapeless('create_connected:empty_fan_catalyst', 'create_connected:fan_exploding_catalyst')
    event.shapeless('create_connected:empty_fan_catalyst', 'create_connected:fan_freezing_catalyst')
    event.shapeless('create_connected:empty_fan_catalyst', 'create_connected:fan_glooming_catalyst')
    event.shapeless('create_connected:empty_fan_catalyst', 'create_connected:fan_haunting_catalyst')
    event.shapeless('create_connected:empty_fan_catalyst', 'create_connected:fan_honey_coating_catalyst')
    event.shapeless('create_connected:empty_fan_catalyst', 'create_connected:fan_purifying_catalyst')
    event.shapeless('create_connected:empty_fan_catalyst', 'create_connected:fan_resonance_catalyst')
    event.shapeless('create_connected:empty_fan_catalyst', 'create_connected:fan_sanding_catalyst')
    event.shapeless('create_connected:empty_fan_catalyst', 'create_connected:fan_sculking_catalyst')
    event.shapeless('create_connected:empty_fan_catalyst', 'create_connected:fan_seething_catalyst')
    event.shapeless('create_connected:empty_fan_catalyst', 'create_connected:fan_smoking_catalyst')
    event.shapeless('create_connected:empty_fan_catalyst', 'create_connected:fan_soul_stripping_catalyst')
    event.shapeless('create_connected:empty_fan_catalyst', 'create_connected:fan_splashing_catalyst')
    event.shapeless('create_connected:empty_fan_catalyst', 'create_connected:fan_transmutation_catalyst')
    event.shapeless('create_connected:empty_fan_catalyst', 'create_connected:fan_withering_catalyst')

})  
