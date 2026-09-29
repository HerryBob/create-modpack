// === Overgeared 加热锭冷却配方 ===
// 1. overgeared:cooling    → JEI 显示 + 右键水方块冷却
// 2. create:splashing      → 鼓风机水洗（水洗途径）
// 3. create_dragons_plus:freezing → 鼓风机冷冻（冷冻途径，速度更快）

ServerEvents.recipes(event => {
    const create = event.recipes.create

    const pairs = [
        ['createae2:heated_gold_ingot',              'minecraft:gold_ingot'],
        ['createae2:heated_zinc_ingot',              'create:zinc_ingot'],
        ['createae2:heated_brass_ingot',             'create:brass_ingot'],
        ['createae2:heated_cast_iron_ingot',         'createbigcannons:cast_iron_ingot'],
        ['createae2:heated_bronze_ingot',            'createbigcannons:bronze_ingot'],
        ['createae2:heated_nethersteel_ingot',       'createbigcannons:nethersteel_ingot'],
        ['createae2:heated_electrum_ingot',          'createaddition:electrum_ingot'],
        ['createae2:heated_industrial_iron_ingot',   'createdeco:industrial_iron_ingot'],
        ['createae2:heated_tin_ingot',               'electrodynamics:ingottin'],
        ['createae2:heated_lead_ingot',              'electrodynamics:ingotlead'],
        ['createae2:heated_molybdenum_ingot',        'electrodynamics:ingotmolybdenum'],
        ['createae2:heated_vanadium_ingot',          'electrodynamics:ingotvanadium'],
        ['createae2:heated_aluminum_ingot',          'electrodynamics:ingotaluminum'],
        ['createae2:heated_chromium_ingot',          'electrodynamics:ingotchromium'],
        ['createae2:heated_stainless_steel_ingot',   'electrodynamics:ingotstainlesssteel'],
        ['createae2:heated_vanadium_steel_ingot',    'electrodynamics:ingotvanadiumsteel'],
        ['createae2:heated_hsla_steel_ingot',        'electrodynamics:ingothslasteel'],
        ['createae2:heated_titanium_ingot',          'electrodynamics:ingottitanium'],
        ['overgeared:heated_silver_ingot',           'electrodynamics:ingotsilver'],
        // 原生 Overgeared 加热锭
        ['overgeared:heated_iron_ingot',             'minecraft:iron_ingot'],
        ['overgeared:heated_copper_ingot',           'minecraft:copper_ingot'],
        ['overgeared:heated_steel_ingot',            'overgeared:steel_ingot'],
        ['overgeared:heated_crude_steel',            'overgeared:crude_steel'],
        ['overgeared:heated_netherite_alloy',        'minecraft:netherite_ingot'],
        //加热的陶瓷
        ['createae2:heated_ceramiccooked',           'electrodynamics:ceramiccooked']
    ]

    pairs.forEach(([heated, cold]) => {
        // 1. Overgeared 水冷淬火
        event.custom({
            type: 'overgeared:cooling',
            input: { item: heated },
            output: { id: cold }
        })

        // 2. 鼓风机水洗（水冷）
        create.splashing([cold], heated)

        // 3. 鼓风机冷冻（冰/雪冷）
        event.custom({
            type: 'create_dragons_plus:freezing',
            ingredients: [{ item: heated }],
            results: [{ id: cold }]
        })
    })
})
