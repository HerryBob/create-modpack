// ===== 野生作物群系标签 =====
// corn_delight / vegandelight 使用 farmersdelight:add_features_by_filter（温度过滤 + is_overworld），无需群系标签
// rusticdelight 使用 neoforge:add_features + 群系标签，需要手动创建标签

ServerEvents.tags('worldgen/biome', event => {

    // ---- 野甜椒: 温带森林/平原 ----
    event.add('rusticdelight:has_wild_bell_peppers', [
        'minecraft:plains',
        'minecraft:sunflower_plains',
        'minecraft:meadow',
        'minecraft:forest',
        'minecraft:flower_forest',
        'minecraft:birch_forest',
        'minecraft:old_growth_birch_forest',
        'minecraft:dark_forest',
        'minecraft:savanna',
        'minecraft:savanna_plateau',
        'minecraft:windswept_savanna',
    ]);

    // ---- 野咖啡: 热带/丛林 ----
    event.add('rusticdelight:has_wild_coffee', [
        'minecraft:jungle',
        'minecraft:sparse_jungle',
        'minecraft:bamboo_jungle',
        'minecraft:mangrove_swamp',
        'minecraft:savanna',
        'minecraft:savanna_plateau',
    ]);

    // ---- 野棉花: 温暖平原 ----
    event.add('rusticdelight:has_wild_cotton', [
        'minecraft:plains',
        'minecraft:sunflower_plains',
        'minecraft:meadow',
        'minecraft:savanna',
        'minecraft:savanna_plateau',
        'minecraft:windswept_savanna',
    ]);

});
