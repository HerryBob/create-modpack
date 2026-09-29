
ServerEvents.recipes(event=>{
    const create = event.recipes.create
    const vintageimprovements = event.recipes.vintageimprovements

//咸面团更多配方
create.mixing('ratatouille:salty_dough',['create:dough','ratatouille:salt'])
//盐的统一

// //堆肥茶的制作
create.mixing(Fluid.of('ratatouille:compost_tea',100),[Fluid.of('minecraft:water',100),'minecraft:bone_meal','ratatouille:compost_mass']).heated()
//麦粒
event.custom({
  "type": "ratatouille:threshing",
  "ingredients": [
    {
      "item": "minecraft:wheat"
    }
  ],
  "processing_time": 200,
  "results": [
    {
      "count": 2,
      "id": "ratatouille:wheat_kernels"
    },
    {
      "chance": 0.5,
      "id": "ratatouille:wheat_kernels"
    }
  ]
})

//脱粒机
create.item_application('ratatouille:thresher',['create:mechanical_plough','create:mechanical_harvester'])

// 压榨盆：动力合成（铜锭+铜板）
create.mechanical_crafting('ratatouille:squeeze_basin', [
    'YZY',
    'Y Y',
    'YYY',
    'BBB'
], {
    Y: 'minecraft:copper_ingot',
    Z: 'create:copper_sheet',
    B: 'createaddition:copper_rod'
})

// 堆肥塔：Overgeared 锻造（木桶+锌锭）
event.custom({
    type: 'overgeared:forging',
    hammering: 2,
    has_polishing: false,
    has_quality: false,
    need_quenching: false,
    show_notification: true,
    key: {
        'Y': { item: 'minecraft:barrel' },
        'Z': { item: 'create:zinc_ingot' }
    },
    pattern: ['Y','Z','Y'],
    result: { count: 1, id: 'ratatouille:compost_tower' }
})

// 烤箱：Overgeared 锻造（木桶+安山合金）
event.custom({
    type: 'overgeared:forging',
    hammering: 2,
    has_polishing: false,
    has_quality: false,
    need_quenching: false,
    show_notification: true,
    key: {
        'Y': { item: 'minecraft:barrel' },
        'A': { item: 'create:andesite_alloy' }
    },
    pattern: ['A','Y','A'],
    result: { count: 1, id: 'ratatouille:oven' }
})

// 脱模机：动力合成（机壳+安山合金+粘液球）
create.mechanical_crafting('ratatouille:mechanical_demolder', [
    ' Z ',
    ' Y ',
    ' W ',
    ' X '
], {
    X: 'minecraft:slime_ball',
    Y: 'create:andesite_casing',
    Z: 'create:andesite_alloy',
    W:'create:shaft'
})

// 灌溉塔：动力合成（流体储罐+铜板+流体管）
create.mechanical_crafting('ratatouille:irrigation_tower', [
    'YYY',
    'YZY',
    'YXY',
    'YXY'
], {
    X: 'create:fluid_pipe',
    Y: 'create:copper_sheet',
    Z: 'create:fluid_tank'
})

// === 撒布器（料理鼠王）===
create.item_application('ratatouille:spreader',['create:encased_fan','create:tree_fertilizer'])

// === 小麦粉加工延后到食物阶段 ===
//小麦粉
    //麦粒
create.milling([CreateItem.of('2x create:wheat_flour'),CreateItem.of('create:wheat_flour',0.5)],'ratatouille:wheat_kernels')
create.crushing([CreateItem.of('3x create:wheat_flour'),CreateItem.of('create:wheat_flour',0.99)],'ratatouille:wheat_kernels')
    //小麦
create.milling([CreateItem.of('create:wheat_flour'),CreateItem.of('create:wheat_flour',0.5)],'minecraft:wheat')
create.crushing([CreateItem.of('create:wheat_flour'),CreateItem.of('create:wheat_flour',0.99)],'minecraft:wheat')
})
