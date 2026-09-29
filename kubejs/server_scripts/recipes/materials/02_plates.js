ServerEvents.recipes(event => {
    const create = event.recipes.create
    const vintage = event.recipes.createvintageneoforged
    const dieselgenerators = event.recipes.createdieselgenerators
    // === 铅板（EE 引用 #c:plates/lead）===
    create.pressing('electrodynamics:platelead', 'electrodynamics:ingotlead')
    // 锻造台手搓（overgeared 锻造，示例格式：软金属，铁锻台 2 锤）
    event.custom({
        type: 'overgeared:forging',
        hammering: 2,
        has_polishing: false,
        has_quality: false,
        need_quenching: false,
        show_notification: false,
        key: { '#': { item: 'electrodynamics:ingotlead' } },
        pattern: ['#'],
        result: { count: 1, id: 'electrodynamics:platelead' }
    })

    // === 铝板（EE 引用 #c:plates/aluminum）===
    create.pressing('electrodynamics:platealuminum', 'electrodynamics:ingotaluminum')
    // 锻造台手搓（overgeared 锻造：软金属，铁锻台 2 锤）
    event.custom({
        type: 'overgeared:forging',
        hammering: 2,
        has_polishing: false,
        has_quality: false,
        need_quenching: false,
        show_notification: false,
        key: { '#': { item: 'electrodynamics:ingotaluminum' } },
        pattern: ['#'],
        result: { count: 1, id: 'electrodynamics:platealuminum' }
    })

    // === 基础金属板锻造（overgeared 锻造体系，板→护甲原料）===
// ============================
// 金属板锻造 (板 → 护甲原料)
// ============================

const forgePlate = (ingot, plate, tier, hammering, count) => event.custom({
    type: 'overgeared:forging',
    tier: tier,
    hammering: hammering,
    has_polishing: false,
    has_quality: false,
    need_quenching: false,
    show_notification: false,
    key: { '#': { item: ingot } },
    pattern: ['#'],
    result: { count: count, id: plate }
})

forgePlate('minecraft:copper_ingot', 'create:copper_sheet', 'stone', 2, 1)
forgePlate('minecraft:iron_ingot',   'create:iron_sheet',   'stone', 3, 1)
forgePlate('minecraft:gold_ingot',   'create:golden_sheet', 'stone', 2, 1)
forgePlate('overgeared:steel_ingot', 'overgeared:steel_plate', null, 4, 1)
forgePlate('create:zinc_ingot','createaddition:zinc_sheet',null,2,1)
forgePlate('createaddition:electrum_ingot','createaddition:electrum_sheet', null, 2, 1)

// === CDG 锤子（hammering）：锭→板，锻造替代路线 ===
// 现实：热金属锭反复锤打展成薄板；手持 CDG 锤子加工
dieselgenerators.hammering('create:copper_sheet', 'minecraft:copper_ingot')
dieselgenerators.hammering('create:iron_sheet', 'minecraft:iron_ingot')
dieselgenerators.hammering('create:golden_sheet', 'minecraft:gold_ingot')
dieselgenerators.hammering('create:brass_sheet', 'create:brass_ingot')
dieselgenerators.hammering('overgeared:steel_plate', 'overgeared:steel_ingot')
dieselgenerators.hammering('electrodynamics:platelead', 'electrodynamics:ingotlead')
dieselgenerators.hammering('electrodynamics:platealuminum', 'electrodynamics:ingotaluminum')
dieselgenerators.hammering('createaddition:zinc_sheet', 'create:zinc_ingot')
dieselgenerators.hammering('createaddition:electrum_sheet', 'createaddition:electrum_ingot')
})