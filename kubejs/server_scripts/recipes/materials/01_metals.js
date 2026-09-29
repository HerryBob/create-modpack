ServerEvents.recipes(event => {
    const create = event.recipes.create
    const vintage = event.recipes.createvintageneoforged
    // === 铅锭（方铅矿链：矿石→粉→冶炼→加热铅锭，详见 04_minerals/08_cooling）===
    event.smelting('createae2:heated_lead_ingot', 'electrodynamics:dustlead')
    event.blasting('createae2:heated_lead_ingot', 'electrodynamics:dustlead').time(100)
    // 常温铅锭 → 加热铅锭（重新加热，供锻造用）
    event.smelting('createae2:heated_lead_ingot', 'electrodynamics:ingotlead')
    event.blasting('createae2:heated_lead_ingot', 'electrodynamics:ingotlead').time(100)

    event.smelting('createae2:heated_aluminum_ingot', 'electrodynamics:dustaluminum')
    event.blasting('createae2:heated_aluminum_ingot', 'electrodynamics:dustaluminum').time(100)
    // 常温铝锭 → 加热铝锭（重新加热，供锻造用）
    event.smelting('createae2:heated_aluminum_ingot', 'electrodynamics:ingotaluminum')
    event.blasting('createae2:heated_aluminum_ingot', 'electrodynamics:ingotaluminum').time(100)

    // === 钒锭（钒钢等后续材料用；冷却链在 overgeared_cooling.js）===
    event.smelting('createae2:heated_vanadium_ingot', 'electrodynamics:dustvanadium')
    event.blasting('createae2:heated_vanadium_ingot', 'electrodynamics:dustvanadium').time(100)
    // 常温钒锭 → 加热钒锭（重新加热，供锻造用）
    event.smelting('createae2:heated_vanadium_ingot', 'electrodynamics:ingotvanadium')
    event.blasting('createae2:heated_vanadium_ingot', 'electrodynamics:ingotvanadium').time(100)

    // ============================
    // 粗钢锻造 (加热铁锭 + 碳粉 → 加热粗钢)
    // ============================
    event.custom({
        type: 'overgeared:forging',
        hammering: 18,
        has_polishing: false,
        has_quality: false,
        need_quenching: false,
        show_notification: true,
        key: {
            '#': { item: 'overgeared:heated_iron_ingot' },
            'C': { item: 'dynamicelectricity:dustcarbon' }
        },
        pattern: ['###', '#C#', '###'],
        result: { count: 9, id: 'overgeared:heated_crude_steel' }
    })

    // 粗钢 —熔炉→ 加热粗钢 (回炉)
    event.smelting('overgeared:heated_crude_steel', 'overgeared:crude_steel')
    event.blasting('overgeared:heated_crude_steel', 'overgeared:crude_steel')

    // 加热粗钢 —锻造→ 加热钢锭
    event.custom({
        type: 'overgeared:forging',
        hammering: 3,
        has_polishing: false,
        has_quality: false,
        need_quenching: false,
        show_notification: true,
        key: { '#': { item: 'overgeared:heated_crude_steel' } },
        pattern: ['#'],
        result: { count: 1, id: 'overgeared:heated_steel_ingot' }
    })

    //修改矿物烧炼配方 
    //铜 熔炉

    event.remove({id:'minecraft:copper_ingot_from_smelting_copper_ore'})
    event.remove({id:'minecraft:copper_ingot_from_smelting_deepslate_copper_ore'})
    event.remove({id:'minecraft:copper_ingot_from_smelting_raw_copper'})
    //铜 高炉

    event.remove({id:'minecraft:copper_ingot_from_blasting_copper_ore'})
    event.remove({id:'minecraft:copper_ingot_from_blasting_raw_copper'})
    event.remove({id:'minecraft:copper_ingot_from_blasting_deepslate_copper_ore'})

    //加热的铜 — 熔炉
    event.smelting('overgeared:heated_copper_ingot', 'minecraft:copper_ore')
    event.smelting('overgeared:heated_copper_ingot', 'minecraft:deepslate_copper_ore')
    event.smelting('overgeared:heated_copper_ingot', 'minecraft:raw_copper')
    event.smelting('overgeared:heated_copper_ingot', 'create:crushed_raw_copper')
    //加热的铜 — 高炉
    event.blasting('overgeared:heated_copper_ingot', 'minecraft:copper_ore').time(100)
    event.blasting('overgeared:heated_copper_ingot', 'minecraft:deepslate_copper_ore').time(100)
    event.blasting('overgeared:heated_copper_ingot', 'minecraft:raw_copper').time(100)
    event.blasting('overgeared:heated_copper_ingot', 'create:crushed_raw_copper').time(100)
    //铜锭 → 加热铜锭 (重新加热)
    event.smelting('overgeared:heated_copper_ingot', 'minecraft:copper_ingot')
    event.blasting('overgeared:heated_copper_ingot', 'minecraft:copper_ingot').time(100)
    //铜板统一
    event.replaceInput({input:'overgeared:copper_plate'},'overgeared:copper_plate','create:copper_sheet')
    event.replaceOutput({output:'overgeared:copper_plate'},'overgeared:copper_plate','create:copper_sheet')

    //铁 熔炉
    event.remove({id:'minecraft:iron_ingot_from_smelting_iron_ore'})
    event.remove({id:'minecraft:iron_ingot_from_smelting_deepslate_iron_ore'})
    event.remove({id:'minecraft:iron_ingot_from_smelting_raw_iron'})

    //铁 高炉

    event.remove({id:'minecraft:iron_ingot_from_blasting_iron_ore'})
    event.remove({id:'minecraft:iron_ingot_from_blasting_deepslate_iron_ore'})
    event.remove({id:'minecraft:iron_ingot_from_blasting_raw_iron'})

    //加热的铁 — 熔炉
    event.smelting('overgeared:heated_iron_ingot', 'minecraft:iron_ore')
    event.smelting('overgeared:heated_iron_ingot', 'minecraft:deepslate_iron_ore')
    event.smelting('overgeared:heated_iron_ingot', 'minecraft:raw_iron')
    event.smelting('overgeared:heated_iron_ingot', 'create:crushed_raw_iron')
    //加热的铁 — 高炉
    event.blasting('overgeared:heated_iron_ingot', 'minecraft:iron_ore')
    event.blasting('overgeared:heated_iron_ingot', 'minecraft:deepslate_iron_ore')
    event.blasting('overgeared:heated_iron_ingot', 'minecraft:raw_iron')
    event.blasting('overgeared:heated_iron_ingot', 'create:crushed_raw_iron')
    //铁锭 → 加热铁锭 (重新加热)
    event.smelting('overgeared:heated_iron_ingot', 'minecraft:iron_ingot')
    event.blasting('overgeared:heated_iron_ingot', 'minecraft:iron_ingot')

    //金锭 → 加热金锭 (重新加热)
    event.smelting('createae2:heated_gold_ingot', 'minecraft:gold_ingot')
    event.blasting('createae2:heated_gold_ingot', 'minecraft:gold_ingot')

    //钢锭 → 加热钢锭 (重新加热)
    event.smelting('overgeared:heated_steel_ingot', 'overgeared:steel_ingot')
    event.blasting('overgeared:heated_steel_ingot', 'overgeared:steel_ingot')

    //锌锭 → 加热锌锭 (重新加热)
    event.smelting('createae2:heated_zinc_ingot', 'create:zinc_ingot')
    event.blasting('createae2:heated_zinc_ingot', 'create:zinc_ingot')

    //锌矿/粗锌/粉碎锌 → 加热锌锭 (替换原版锌锭产出)

    event.smelting('createae2:heated_zinc_ingot', '#c:ores/zinc')
    event.smelting('createae2:heated_zinc_ingot', '#c:raw_materials/zinc')
    event.smelting('createae2:heated_zinc_ingot', 'create:crushed_raw_zinc')
    event.blasting('createae2:heated_zinc_ingot', '#c:ores/zinc')
    event.blasting('createae2:heated_zinc_ingot', '#c:raw_materials/zinc')
    event.blasting('createae2:heated_zinc_ingot', 'create:crushed_raw_zinc')

    //金矿 → 加热金锭 (替换原版金锭产出)
    event.remove({id:'minecraft:gold_ingot_from_smelting_gold_ore'})
    event.remove({id:'minecraft:gold_ingot_from_smelting_deepslate_gold_ore'})
    event.remove({id:'minecraft:gold_ingot_from_smelting_nether_gold_ore'})
    event.remove({id:'minecraft:gold_ingot_from_smelting_raw_gold'})
    event.remove({id:'minecraft:gold_ingot_from_blasting_gold_ore'})
    event.remove({id:'minecraft:gold_ingot_from_blasting_deepslate_gold_ore'})
    event.remove({id:'minecraft:gold_ingot_from_blasting_nether_gold_ore'})
    event.remove({id:'minecraft:gold_ingot_from_blasting_raw_gold'})

    //加热的金 — 熔炉
    event.smelting('createae2:heated_gold_ingot', 'minecraft:gold_ore')
    event.smelting('createae2:heated_gold_ingot', 'minecraft:deepslate_gold_ore')
    event.smelting('createae2:heated_gold_ingot', 'minecraft:nether_gold_ore')
    event.smelting('createae2:heated_gold_ingot', 'minecraft:raw_gold')
    event.smelting('createae2:heated_gold_ingot', 'create:crushed_raw_gold')
    //加热的金 — 高炉
    event.blasting('createae2:heated_gold_ingot', 'minecraft:gold_ore')
    event.blasting('createae2:heated_gold_ingot', 'minecraft:deepslate_gold_ore')
    event.blasting('createae2:heated_gold_ingot', 'minecraft:nether_gold_ore')
    event.blasting('createae2:heated_gold_ingot', 'minecraft:raw_gold')
    event.blasting('createae2:heated_gold_ingot', 'create:crushed_raw_gold')

    // ============================
    // 钢块 / 钢粒 / 铜粒
    // ============================

    // 钢块 ↔ 钢锭
    event.shapeless('9x overgeared:steel_ingot', ['overgeared:steel_block'])
    event.shaped('overgeared:steel_block', ['###', '###', '###'], { '#': 'overgeared:steel_ingot' })

    // 钢粒 ↔ 钢锭
    event.shapeless('overgeared:steel_ingot', ['9x overgeared:steel_nugget'])
    event.shapeless('9x overgeared:steel_nugget', ['overgeared:steel_ingot'])

    // 铜粒 ↔ 铜锭（统一用 create:copper_nugget）
    event.shapeless('minecraft:copper_ingot', ['9x create:copper_nugget'])
    event.shapeless('9x create:copper_nugget', ['minecraft:copper_ingot'])


    // === 琥珀金系列 ===
    // 琥珀金锭：金锭 + 银锭 → 加热混合 → 2琥珀金锭
    create.mixing('2x createae2:heated_electrum_ingot',['minecraft:gold_ingot','electrodynamics:ingotsilver']).heated()
    event.custom({
    type: 'overgeared:forging',
    hammering: 4,
    has_polishing: false,
    has_quality: false,
    need_quenching: false,
    show_notification: true,
    key: {
        '#': { item: 'createae2:heated_gold_ingot' },
        'H': { item: 'overgeared:heated_iron_ingot' } 
    },
    pattern: ['#H'],
    result: { count: 1, id: 'createae2:heated_electrum_ingot' }
    })

    // 琥珀金块：9锭 → 工作台 → 1块
    event.shaped('createaddition:electrum_block', ['###', '###', '###'], {
        '#': 'createaddition:electrum_ingot'
    })

    // 琥珀金锭拆解：1块 → 9锭
    event.shapeless('9x createaddition:electrum_ingot', ['createaddition:electrum_block'])

    // 琥珀金粒：1锭 → 9粒
    event.shapeless('9x createaddition:electrum_nugget', ['createaddition:electrum_ingot'])

    // 琥珀金锭合成：9粒 → 1锭
    event.shaped('createaddition:electrum_ingot', ['###', '###', '###'], {
        '#': 'createaddition:electrum_nugget'
    })
})