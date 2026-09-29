ServerEvents.tags('item', event=>{
    event.add('createbigcannons:gas_masks', 'alexscaves:hazmat_mask')
    event.add('cuisinedelight:utensils', 'minecraft:bowl')
    event.add('minecraft:sand','createae2:basalt_sand')

    // 统一木材标签：原木 + 木板（各模组木头全覆盖）
    event.add('material:wood', '#minecraft:logs')
    event.add('material:wood', '#minecraft:planks')

    //盐
    event.add('c:dusts/salt', 'ratatouille:salt')
    event.add('c:salt', 'ratatouille:salt')
    event.add('c:foods/salt', 'ratatouille:salt')

    // SereneSeasons 所有种子/种植物品 → 春/夏/秋 三季可种植
    const cropItems = [
        'minecraft:wheat_seeds', 'minecraft:carrot', 'minecraft:potato', 'minecraft:beetroot_seeds',
        'minecraft:melon_seeds', 'minecraft:pumpkin_seeds', 'minecraft:cocoa_beans',
        'minecraft:torchflower_seeds', 'minecraft:pitcher_pod',
        'minecraft:kelp', 'minecraft:nether_wart',
        'minecraft:sweet_berries', 'minecraft:glow_berries',
        'minecraft:sugar_cane', 'minecraft:bamboo', 'minecraft:cactus',
        'farmersdelight:tomato_seeds', 'farmersdelight:cabbage_seeds', 'farmersdelight:onion',
        'farmersdelight:rice',
        'rusticdelight:bell_pepper_seeds', 'rusticdelight:coffee_seeds', 'rusticdelight:cotton_seeds',
        'corn_delight:corn_seeds',
        'vegandelight:soybean'
    ]
    cropItems.forEach(c => {
        event.add('sereneseasons:spring_crops', c)
        event.add('sereneseasons:summer_crops', c)
        event.add('sereneseasons:autumn_crops', c)
    })

    const corals = [
        'minecraft:horn_coral_fan','hybrid-aquatic:sun_coral','hybrid-aquatic:leaf_coral','hybrid-aquatic:button_coral','hybrid-aquatic:rose_coral'
        ,'hybrid-aquatic:lophelia_coral','hybrid-aquatic:thorn_coral','hybrid-aquatic:sun_coral_fan','hybrid-aquatic:leaf_coral_fan',
        'minecraft:tube_coral','minecraft:brain_coral','minecraft:bubble_coral','minecraft:fire_coral','minecraft:horn_coral','minecraft:tube_coral_fan','minecraft:brain_coral_fan',
        'minecraft:bubble_coral_fan','minecraft:fire_coral_fan','hybrid-aquatic:thorn_coral_fan','hybrid-aquatic:lophelia_coral_fan','hybrid-aquatic:rose_coral_fan','hybrid-aquatic:button_coral_fan'
    ]
    corals.forEach(c => {
        event.add('minecraft:corals',c)
    })

    // === CDG 可发酵物（水槽发酵 → 乙醇）===
    // 现实：糖/淀粉/水果 → 发酵 → 乙醇
    const fermentables = [
        // 糖（最直接的原料）
        'minecraft:sugar',
        'minecraft:sugar_cane',
        // 水果（现实：果酒发酵）
        'minecraft:apple',
        'minecraft:sweet_berries',
        'minecraft:glow_berries',
        'minecraft:melon_slice',
        // 农作物（现实：淀粉类发酵）
        'minecraft:wheat',
        'minecraft:potato',
        'minecraft:carrot',
        'minecraft:beetroot',
        // FarmersDelight 作物
        'farmersdelight:cabbage',
        'farmersdelight:onion',
        'farmersdelight:tomato',
        'farmersdelight:rice',
        // 其他
        'minecraft:honey_bottle',
        'minecraft:dried_kelp'
    ]
    fermentables.forEach(item => {
        event.add('createdieselgenerators:fermentable', item)
    })
})
