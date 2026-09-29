ServerEvents.recipes(event=>{
    const create = event.recipes.create
    const vintage = event.recipes.createvintageneoforged

    create.item_application('createvintageneoforged:belt_grinder',['create:andesite_casing','createvintageneoforged:grinder_belt'])
    create.item_application('createvintageneoforged:spring_coiling_machine',['create:andesite_casing','createvintageneoforged:spring_coiling_machine_wheel'])

    // 真空室：动力合成 4x3
    create.mechanical_crafting('createvintageneoforged:vacuum_chamber', [
        'CCC',
        'GWG',
        'GPG',
        'CBC'
    ], {
        G: 'minecraft:glass',
        P: 'create:precision_mechanism',
        C: 'create:copper_casing',
        B: 'create:fluid_pipe',
        W: 'create:cogwheel'
    })

    // 振动台：动力合成 4x3
    create.mechanical_crafting('createvintageneoforged:vibrating_table', [
        'TTT',
        'SPS',
        'SAS',
        'TTT'
    ], {
        S: 'createvintageneoforged:iron_spring',
        T: '#minecraft:wooden_slabs',
        P: 'create:mechanical_piston',
        A: 'create:precision_mechanism'
    })

    // 离心机：动力合成 4x3
    create.mechanical_crafting('createvintageneoforged:centrifuge', [
        'CLC',
        'CWC',
        'CSC',
        'CDC'
    ], {
        S: 'createvintageneoforged:iron_spring',
        L: '#minecraft:logs',
        C: 'create:andesite_casing',
        D: 'create:whisk',  
        W: 'create:cogwheel'
    })

    // 激光：动力合成 4x3
    create.mechanical_crafting('createvintageneoforged:laser', [
        'BRB',
        'BPB',
        'BQB',
        'BLB'
    ], {
        R: '#c:storage_blocks/redstone',
        P: 'create:precision_mechanism',
        B: 'create:brass_casing',
        Q: '#c:gems/quartz',
        L: 'createvintageneoforged:laser_item'
    })

    // 车床：动力合成 5x3
    create.mechanical_crafting('createvintageneoforged:lathe', [
        ' PSA ',
        'sCCBs',
        '  SA '
    ], {
        P: 'create:precision_mechanism',
        S: 'createvintageneoforged:iron_spring',
        A: 'create:andesite_alloy',
        s: 'create:shaft',
        C: 'create:andesite_casing',
        B: 'overgeared:steel_block'
    })

    // 落锤：动力合成 5x3
    create.mechanical_crafting('createvintageneoforged:helve_hammer', [
        ' B SS',
        'BLLLC',
        'BB  s'
    ], {
        B: 'overgeared:steel_block',
        L: '#minecraft:logs',
        S: 'createvintageneoforged:iron_spring',
        C: 'create:andesite_casing',
        s: 'create:shaft'
    })

    // ===== 零件配方 =====

    // 铁棒：轧机（铁锭 → vintage 铁棒×1），删除原卷簧机配方
    event.remove({ output: 'createvintageneoforged:iron_rod' })
    event.custom({
        type: 'createaddition:rolling',
        ingredients: [{ item: 'minecraft:iron_ingot' }],
        results: [{ id: 'createvintageneoforged:iron_rod', count: 1 }]
    }).id('kubejs:vintage/rolling/iron_rod')

    // 卷簧机轮：序列组装（安山合金×4 + 铁块，压制）
    event.remove({ output: 'createvintageneoforged:spring_coiling_machine_wheel' })
    create.sequenced_assembly(
        ['createvintageneoforged:spring_coiling_machine_wheel'],
        'create:andesite_alloy',
        [
            create.deploying(['create:andesite_alloy'], ['create:andesite_alloy', 'create:andesite_alloy']),
            create.deploying(['create:andesite_alloy'], ['create:andesite_alloy', 'create:andesite_alloy']),
            create.deploying(['create:andesite_alloy'], ['create:andesite_alloy', 'create:andesite_alloy']),
            create.deploying(['create:andesite_alloy'], ['create:andesite_alloy', 'overgeared:steel_block']),
            create.pressing(['create:andesite_alloy'], ['create:andesite_alloy'])
        ]
    ).transitionalItem('create:andesite_alloy').loops(1)

    // 激光头：序列组装（铁锭 + 石英×2 + 红石×2，压制）
    event.remove({ output: 'createvintageneoforged:laser_item' })
    create.sequenced_assembly(
        ['createvintageneoforged:laser_item'],
        'minecraft:iron_ingot',
        [
            create.deploying(['minecraft:iron_ingot'], ['minecraft:iron_ingot', 'minecraft:quartz']),
            create.deploying(['minecraft:iron_ingot'], ['minecraft:iron_ingot', 'minecraft:quartz']),
            create.deploying(['minecraft:iron_ingot'], ['minecraft:iron_ingot', 'minecraft:redstone']),
            create.deploying(['minecraft:iron_ingot'], ['minecraft:iron_ingot', 'minecraft:redstone']),
            create.pressing(['minecraft:iron_ingot'], ['minecraft:iron_ingot'])
        ]
    ).transitionalItem('minecraft:iron_ingot').loops(1)

    // 落锤槽盖：序列组装（黄铜粒×3，压制）
    event.remove({ output: 'createvintageneoforged:helve_hammer_slot_cover' })
    create.sequenced_assembly(
        ['createvintageneoforged:helve_hammer_slot_cover'],
        'create:brass_nugget',
        [
            create.deploying(['create:brass_nugget'], ['create:brass_nugget', 'create:brass_nugget']),
            create.deploying(['create:brass_nugget'], ['create:brass_nugget', 'create:brass_nugget']),
            create.pressing(['create:brass_nugget'], ['create:brass_nugget'])
        ]
    ).transitionalItem('create:brass_nugget').loops(1)

    // 配方卡：序列组装（黄铜板，循环3次：部署红石→压制→抛光）
    event.remove({ output: 'createvintageneoforged:recipe_card' })
    create.sequenced_assembly(
        ['createvintageneoforged:recipe_card'],
        '#c:plates/brass',
        [
            create.deploying(['createvintageneoforged:incomplete_recipe_card'], ['createvintageneoforged:incomplete_recipe_card', 'minecraft:redstone']),
            create.pressing(['createvintageneoforged:incomplete_recipe_card'], ['createvintageneoforged:incomplete_recipe_card']),
            vintage.polishing(['createvintageneoforged:incomplete_recipe_card'], ['createvintageneoforged:incomplete_recipe_card'])
        ]
    ).transitionalItem('createvintageneoforged:incomplete_recipe_card').loops(3)
})
