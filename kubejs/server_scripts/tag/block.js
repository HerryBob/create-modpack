ServerEvents.tags('block', event=>{
    event.add('create:seats','#another_furniture:sofas')
    event.add('create:seats','#refurbished_furniture:sofas')
    event.add('create:seats','#handcrafted:couches')
    event.add('minecraft:sand','createae2:basalt_sand')

    // SereneSeasons 所有作物 → 春/夏/秋 三季可种植
    const cropBlocks = [
        'minecraft:wheat', 'minecraft:carrots', 'minecraft:potatoes', 'minecraft:beetroots',
        'minecraft:melon_stem', 'minecraft:pumpkin_stem', 'minecraft:cocoa',
        'minecraft:torchflower_crop', 'minecraft:pitcher_crop',
        'minecraft:kelp', 'minecraft:kelp_plant', 'minecraft:nether_wart',
        'minecraft:sweet_berry_bush', 'minecraft:cave_vines', 'minecraft:cave_vines_plant',
        'minecraft:sugar_cane', 'minecraft:bamboo', 'minecraft:cactus',
        'farmersdelight:tomato_crop', 'farmersdelight:cabbage_crop', 'farmersdelight:onion_crop',
        'farmersdelight:rice_crop', 'farmersdelight:rice_upper_crop',
        'rusticdelight:bell_pepper_crop', 'rusticdelight:coffee_crop', 'rusticdelight:cotton_crop',
        'corn_delight:corn_crop',
        'vegandelight:soybean_crop',
        'farmersdelight:wild_carrots','corn_delight:wild_corn','rusticdelight:wild_bell_peppers','rusticdelight:wild_coffee',
        'vegandelight:wild_soybean','rusticdelight:wild_cotton','farmersdelight:wild_cabbages','farmersdelight:wild_onions','farmersdelight:wild_potatoes',
        'farmersdelight:wild_rice'
    ]
    cropBlocks.forEach(c => {
        event.add('sereneseasons:spring_crops', c)
        event.add('sereneseasons:summer_crops', c)
        event.add('sereneseasons:autumn_crops', c)
    })

    event.add('sereneseasons:greenhouse_glass', 'minecraft:tinted_glass')
})
