// === Overgeared 加热金属标签 ===
// heated_metals     → 标记加热锭，会自动冷却（3分钟后变冷锭）
// heatable_metals   → 标记冷锭，提示可加热进行锻造

ServerEvents.tags('item', event => {
    const heatedTag = 'overgeared:heated_metals'
    const heatableTag = 'overgeared:heatable_metals'

    // ========== 新注册的加热锭 → heated_metals ==========
    const newHeated = [
        'createae2:heated_gold_ingot',
        'createae2:heated_zinc_ingot',
        'createae2:heated_brass_ingot',
        'createae2:heated_cast_iron_ingot',
        'createae2:heated_bronze_ingot',
        'createae2:heated_nethersteel_ingot',
        'createae2:heated_electrum_ingot',
        'createae2:heated_industrial_iron_ingot',
        'createae2:heated_platinum_ingot',
        'createae2:heated_tin_ingot',
        'createae2:heated_lead_ingot',
        'createae2:heated_molybdenum_ingot',
        'createae2:heated_vanadium_ingot',
        'createae2:heated_aluminum_ingot',
        'createae2:heated_chromium_ingot',
        'createae2:heated_stainless_steel_ingot',
        'createae2:heated_vanadium_steel_ingot',
        'createae2:heated_hsla_steel_ingot',
        'createae2:heated_titanium_ingot',
        //陶瓷
        'createae2:heated_ceramiccooked'

    ]

    newHeated.forEach(id => {
        event.add(heatedTag, id)
    })

    // ========== 冷锭 → heatable_metals ==========
    const heatable = [
        'minecraft:gold_ingot',
        'create:zinc_ingot',
        'create:brass_ingot',
        'createbigcannons:cast_iron_ingot',
        'createbigcannons:bronze_ingot',
        'createbigcannons:nethersteel_ingot',
        'createaddition:electrum_ingot',
        'createdeco:industrial_iron_ingot',
        'createpropulsion:platinum_ingot',
        'electrodynamics:ingottin',
        'electrodynamics:ingotlead',
        'electrodynamics:ingotmolybdenum',
        'electrodynamics:ingotvanadium',
        'electrodynamics:ingotaluminum',
        'electrodynamics:ingotchromium',
        'electrodynamics:ingotstainlesssteel',
        'electrodynamics:ingotvanadiumsteel',
        'electrodynamics:ingothslasteel',
        'electrodynamics:ingottitanium',
        'electrodynamics:ingotsilver',
        'minecraft:iron_ingot',
        'minecraft:copper_ingot',
        'createbigcannons:steel_ingot',
        'minecraft:netherite_ingot',
        'electrodynamics:ceramiccooked'
    ]

    heatable.forEach(id => {
        event.add(heatableTag, id)
    })
    // ========== 统一金属标签 ==========
    event.add('c:ingots/steel', [
        'createbigcannons:steel_ingot',
        'overgeared:steel_ingot',
    ])

    event.add('c:ingots/bronze', [
        'createbigcannons:bronze_ingot',
    ])

    event.add('c:ingots/cast_iron', [
        'createbigcannons:cast_iron_ingot',
    ])

    event.add('c:ingots/nethersteel', [
        'createbigcannons:nethersteel_ingot',
    ])

    event.add('c:ingots/iron', 'createdeco:industrial_iron_ingot')
})
