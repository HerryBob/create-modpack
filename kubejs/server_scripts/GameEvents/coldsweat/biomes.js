//1 'mc' = 24 摄氏度
ColdSweatEvents.registries(event=>{
//群系温度设定
// 群系温度配置（覆盖群系默认温度）
// - 格式：[ [lowTemp, highTemp, "units", biome_id[] , waterTemp], ... ]
// - biome_id：群系ID（如 "minecraft:desert"）
// - lowTemp：午夜温度
// - highTemp：正午温度
// - units（可选）：温度单位（F/C/MC，默认 MC）
// - waterTemp（可选）：群系水温
    event.addBiomeTemperature(8.9, 46.1, "c", "minecraft:desert", 24.0)
    event.addBiomeTemperature(-7.8, -1.1, "c", "minecraft:deep_cold_ocean", 0.0)
    event.addBiomeTemperature(30.0, 45.0, "c", "minecraft:basalt_deltas", 0.0)
    event.addBiomeTemperature(8.9, 16.7, "c", "terralith:yosemite_lowlands", 15.6)
    event.addBiomeTemperature(20.0, 25.6, "c", "terralith:yosemite_cliffs", 16.7)
    event.addBiomeTemperature(-6.7, -2.2, "c", "terralith:wintry_lowlands", 3.3)
    event.addBiomeTemperature(-6.7, -2.2, "c", "terralith:wintry_forest", 3.3)
    event.addBiomeTemperature(19.4, 21.1, "c", "terralith:windswept_spires", 15.6)
    event.addBiomeTemperature(26.7, 37.8, "c", "terralith:white_mesa", 21.1)
    event.addBiomeTemperature(12.8, 20.0, "c", "terralith:white_cliffs", 15.6)
    event.addBiomeTemperature(12.2, 20.0, "c", "terralith:warm_river", 21.1)
    event.addBiomeTemperature(40.0, 60.0, "c", "terralith:volcanic_peaks", 40.0)
    event.addBiomeTemperature(4.4, 15.6, "c", "terralith:valley_clearing", 15.6)
    event.addBiomeTemperature(24.4, 30.6, "c", "terralith:tropical_jungle", 26.7)
    event.addBiomeTemperature(11.1, 21.1, "c", "terralith:stony_spires", 14.4)
    event.addBiomeTemperature(-9.4, -7.2, "c", "terralith:snowy_shield", 0.0)
    event.addBiomeTemperature(-9.4, -7.2, "c", "terralith:snowy_maple_forest", 0.0)
    event.addBiomeTemperature(-11.1, -7.8, "c", "terralith:snowy_cherry_grove", 0.0)
    event.addBiomeTemperature(-12.2, -7.8, "c", "terralith:snowy_badlands", 0.0)
    event.addBiomeTemperature(-9.4, -6.7, "c", "terralith:skylands_winter", 4.4)
    event.addBiomeTemperature(28.3, 42.2, "c", "terralith:skylands_summer", 23.9)
    event.addBiomeTemperature(20.0, 21.1, "c", "terralith:skylands_spring", 18.3)
    event.addBiomeTemperature(20.0, 21.1, "c", "terralith:skylands_autumn", 18.3)
    event.addBiomeTemperature(-10.0, -1.1, "c", "terralith:siberian_taiga", 4.4)
    event.addBiomeTemperature(-10.0, -1.1, "c", "terralith:siberian_grove", 4.4)
    event.addBiomeTemperature(20.0, 37.8, "c", "terralith:shrubland", 18.3)
    event.addBiomeTemperature(8.9, 15.6, "c", "terralith:scarlet_mountains", 14.4)
    event.addBiomeTemperature(21.1, 40.6, "c", "terralith:savanna_slopes", 22.2)
    event.addBiomeTemperature(15.6, 20.6, "c", "terralith:sakura_valley", 17.8)
    event.addBiomeTemperature(15.6, 20.6, "c", "terralith:sakura_grove", 17.8)
    event.addBiomeTemperature(9.4, 12.2, "c", "terralith:rocky_shrubland", 14.4)
    event.addBiomeTemperature(20.6, 20.6, "c", "terralith:rocky_jungle", 23.3)
    event.addBiomeTemperature(29.4, 40.6, "c", "terralith:painted_mountains", 21.1)
    event.addBiomeTemperature(13.9, 24.4, "c", "terralith:mountain_steppe", 15.6)
    event.addBiomeTemperature(13.9, 24.4, "c", "terralith:moonlight_grove", 15.6)
    event.addBiomeTemperature(21.1, 21.1, "c", "terralith:mirage_isles", 20.0)
    event.addBiomeTemperature(16.0, 22.0, "c", "terralith:lush_valley", 18.0)
    event.addBiomeTemperature(8.9, 13.3, "c", "terralith:lush_desert", 15.6)
    event.addBiomeTemperature(22.0, 28.0, "c", "terralith:jungle_mountains", 25.0)
    event.addBiomeTemperature(4.4, 13.3, "c", "terralith:ice_marsh", 1.7)
    event.addBiomeTemperature(21.1, 37.8, "c", "terralith:hot_shrubland", 21.1)
    event.addBiomeTemperature(20.0, 28.0, "c", "terralith:gravel_desert", 20.0)
    event.addBiomeTemperature(19.4, 24.4, "c", "terralith:gravel_beach", 20.0)
    event.addBiomeTemperature(-9.4, -5.0, "c", "terralith:glacial_chasm", 0.0)
    event.addBiomeTemperature(-9.4, -5.0, "c", "terralith:frozen_cliffs", 0.0)
    event.addBiomeTemperature(8.9, 13.9, "c", "terralith:forested_highlands", 15.6)
    event.addBiomeTemperature(8.9, 15.0, "c", "terralith:emerald_peaks", 15.6)
    event.addBiomeTemperature(20.0, 25.6, "c", "terralith:desert_oasis", 15.6)
    event.addBiomeTemperature(1.7, 4.4, "c", "terralith:cold_shrubland", 7.2)
    event.addBiomeTemperature(20.0, 25.6, "c", "terralith:blooming_valley", 18.9)
    event.addBiomeTemperature(26.7, 48.9, "c", "terralith:ashen_savanna", 23.9)
    event.addBiomeTemperature(22.0, 28.0, "c", "terralith:amethyst_rainforest", 24.0)
    event.addBiomeTemperature(20.0, 25.0, "c", "terralith:amethyst_canyon", 21.1)
    event.addBiomeTemperature(15.6, 26.7, "c", "terralith:alpine_highlands", 12.8)
    event.addBiomeTemperature(1.7, 4.4, "c", "terralith:alpine_grove", 7.2)
    event.addBiomeTemperature(-6.7, 4.4, "c", "terralith:alpha_islands_winter", 4.4)
    event.addBiomeTemperature(8.9, 20.0, "c", "terralith:alpha_islands", 18.3)
    event.addBiomeTemperature(30.0, 40.0, "c", "minecraft:soul_sand_valley", 0.0)
    event.addBiomeTemperature(14.4, 22.2, "c", "minecraft:old_growth_birch_forest", 15.6)
    event.addBiomeTemperature(15.6, 21.1, "c", "minecraft:river", 18.3)
    event.addBiomeTemperature(22.2, 28.9, "c", "minecraft:swamp", 18.0)
    event.addBiomeTemperature(21.1, 40.6, "c", "minecraft:savanna", 16.0)
    event.addBiomeTemperature(24.4, 40.6, "c", "minecraft:savanna_plateau", 16.0)
    event.addBiomeTemperature(19.4, 37.8, "c", "minecraft:windswept_savanna", 15.0)
    event.addBiomeTemperature(6.7, 16.7, "c", "minecraft:taiga", 10.0)
    event.addBiomeTemperature(-7.2, 8.9, "c", "minecraft:snowy_taiga", 4.4)
    event.addBiomeTemperature(8.9, 16.7, "c", "minecraft:old_growth_pine_taiga", 12.2)
    event.addBiomeTemperature(8.9, 16.7, "c", "minecraft:old_growth_spruce_taiga", 12.2)
    event.addBiomeTemperature(10.0, 17.8, "c", "minecraft:stony_shore", 15.6)
    event.addBiomeTemperature(3.3, 11.1, "c", "minecraft:snowy_beach", 4.4)
    event.addBiomeTemperature(-4.4, 3.3, "c", "minecraft:snowy_slopes", 0.0)
    event.addBiomeTemperature(8.9, 18.9, "c", "minecraft:windswept_forest", 14.4)
    event.addBiomeTemperature(-9.4, 0.6, "c", "minecraft:frozen_peaks", 0.0)
    event.addBiomeTemperature(19.4, 24.4, "c", "minecraft:warm_ocean", 21.0)
    event.addBiomeTemperature(-6.7, -1.1, "c", "minecraft:deep_frozen_ocean", 0.0)
    event.addBiomeTemperature(24.4, 30.6, "c", "minecraft:jungle", 20.0)
    event.addBiomeTemperature(24.4, 30.6, "c", "minecraft:bamboo_jungle", 20.0)
    event.addBiomeTemperature(28.9, 48.9, "c", "minecraft:badlands", 16.0)
    event.addBiomeTemperature(26.7, 42.2, "c", "minecraft:wooded_badlands", 16.0)
    event.addBiomeTemperature(31.1, 48.9, "c", "minecraft:eroded_badlands", 16.0)
    event.addBiomeTemperature(17.2, 17.2, "c", "minecraft:deep_dark", 12.8)
    event.addBiomeTemperature(13.9, 24.4, "c", "terralith:moonlight_valley", 15.6)
    event.addBiomeTemperature(7.2, 10.0, "c", "terralith:rocky_mountains", 13.3)
    event.addBiomeTemperature(20.0, 25.6, "c", "terralith:blooming_plateau", 18.9)
    event.addBiomeTemperature(8.3, 20.0, "c", "terralith:yellowstone", 24.0)
    event.addBiomeTemperature(12.2, 26.7, "c", "terralith:temperate_highlands", 16.7)
    event.addBiomeTemperature(25.6, 45.6, "c", "terralith:sandstone_valley", 16.0)
    event.addBiomeTemperature(4.4, 54.4, "c", "terralith:ancient_sands", 24.0)
    event.addBiomeTemperature(7.2, 48.9, "c", "terralith:arid_highlands", 20.0)
    event.addBiomeTemperature(45.0, 60.0, "c", "terralith:volcanic_crater", 32.0)
    event.addBiomeTemperature(7.2, 48.9, "c", "terralith:basalt_cliffs", 22.0)
    event.addBiomeTemperature(4.4, 16.7, "c", "terralith:birch_taiga", 11.1)
    event.addBiomeTemperature(20.0, 26.7, "c", "terralith:brushland", 18.9)
    event.addBiomeTemperature(22.2, 26.7, "c", "terralith:bryce_canyon", 21.1)
    event.addBiomeTemperature(10.0, 15.0, "c", "terralith:caldera", 22.2)
    event.addBiomeTemperature(3.3, 10.0, "c", "terralith:cloud_forest", 12.8)
    event.addBiomeTemperature(22.8, 49.4, "c", "terralith:desert_canyon", 22.0)
    event.addBiomeTemperature(15.6, 49.4, "c", "terralith:desert_spires", 21.0)
    event.addBiomeTemperature(16.7, 27.2, "c", "terralith:orchid_swamp", 22.2)
    event.addBiomeTemperature(18.3, 33.3, "c", "terralith:fractured_savanna", 21.1)
    event.addBiomeTemperature(20.0, 37.2, "c", "terralith:savanna_badlands", 22.2)
    event.addBiomeTemperature(18.3, 29.4, "c", "terralith:granite_cliffs", 16.7)
    event.addBiomeTemperature(16.7, 23.3, "c", "terralith:haze_mountain", 15.6)
    event.addBiomeTemperature(16.7, 23.3, "c", "terralith:highlands", 15.6)
    event.addBiomeTemperature(15.0, 24.4, "c", "terralith:lavender_valley", 17.8)
    event.addBiomeTemperature(13.3, 23.9, "c", "terralith:lavender_forest", 16.7)
    event.addBiomeTemperature(20.0, 25.6, "c", "terralith:red_oasis", 14.0)
    event.addBiomeTemperature(8.9, 20.0, "c", "terralith:shield", 15.6)
    event.addBiomeTemperature(-2.2, 26.7, "c", "terralith:shield_clearing", 13.3)
    event.addBiomeTemperature(6.7, 25.6, "c", "terralith:steppe", 15.6)
    event.addBiomeTemperature(26.7, 37.8, "c", "terralith:warped_mesa", 21.1)
	
//群系温度偏移设定
// 群系温度偏移配置
// - 格式：[ ["biome_id", lowTemp, highTemp, *units, *waterTemp], ... ]
// - biome_id：群系ID（如 "minecraft:desert"）
// - lowTemp：午夜偏移
// - highTemp：正午偏移
// - units（可选）：温度单位（F/C/MC，默认 MC）
// - waterTemp（可选）：水温偏移
    // event.addBiomeOffset()
})
/*	    ["minecraft:desert", 48, 115, "F"],	    
        ["minecraft:deep_cold_ocean", 18, 30, "F"],
	    ["minecraft:basalt_deltas", 48, 56, "F"],
	    ["alexscaves:toxic_caves", 100, 120, "F"],
	    ["alexscaves:primordial_caves", 90, 105, "F"],
	    ["alexscaves:candy_cavity", 20, 25, "F"],
	    ["alexscaves:abyssal_chasm", 40, 40, "F"],
	    ["terralith:yosemite_lowlands", 48, 62, "F"],
	    ["terralith:yosemite_cliffs", 68, 78, "F"],
	    ["terralith:wintry_lowlands", 20, 28, "F"],
	    ["terralith:wintry_forest", 20, 28, "F"],
	    ["terralith:windswept_spires", 67, 70, "F"],
	    ["terralith:white_mesa", 80, 100, "F"],
	    ["terralith:white_cliffs", 55, 68, "F"],
	    ["terralith:warm_river", 54, 68, "F"],
	    ["terralith:volcanic_peaks", 100, 200, "F"],
	    ["terralith:valley_clearing", 40, 60, "F"],
	    ["terralith:tropical_jungle", 76, 87, "F"],
	    ["terralith:stony_spires", 52, 70, "F"],
	    ["terralith:snowy_shield", 15, 19, "F"],
	    ["terralith:snowy_maple_forest", 15, 19, "F"],
	    ["terralith:snowy_cherry_grove", 12, 18, "F"],
	    ["terralith:snowy_badlands", 10, 18, "F"],
	    ["terralith:skylands_winter", 15, 20, "F"],
	    ["terralith:skylands_summer", 83, 108, "F"],
	    ["terralith:skylands_spring", 68, 70, "F"],
	    ["terralith:skylands_autumn", 68, 70, "F"],
	    ["terralith:siberian_taiga", 14, 30, "F"],
	    ["terralith:siberian_grove", 14, 30, "F"],
	    ["terralith:shrubland", 68, 100, "F"],
	    ["terralith:scarlet_mountains", 48, 60, "F"],
	    ["terralith:savanna_slopes", 70, 105, "F"],
	    ["terralith:sakura_valley", 60, 69, "F"],
	    ["terralith:sakura_grove", 60, 69, "F"],
	    ["terralith:rocky_shrubland", 49, 54, "F"],
	    ["terralith:rocky_jungle", 69, 69, "F"],
	    ["terralith:painted_mountains", 85, 105, "F"],
	    ["terralith:mountain_steppe", 57, 76, "F"],
	    ["terralith:moonlight_grove", 57, 76, "F"],
	    ["terralith:mirage_isles", 70, 70, "F"],
	    ["terralith:lush_valley", 32, 40, "F"],
	    ["terralith:lush_desert", 48, 56, "F"],
	    ["terralith:jungle_mountains", 20, 40, "F"],
	    ["terralith:ice_marsh", 40, 56, "F"],
	    ["terralith:hot_shrubland", 70, 100, "F"],
	    ["terralith:gravel_desert", 38, 42, "F"],
	    ["terralith:gravel_beach", 67, 76, "F"],
	    ["terralith:glacial_chasm", 15, 23, "F"],
	    ["terralith:frozen_cliffs", 15, 23, "F"],
	    ["terralith:forested_highlands", 48, 57, "F"],
	    ["terralith:emerald_peaks", 48, 59, "F"],
	    ["terralith:desert_oasis", 68, 78, "F"],
	    ["terralith:cold_shrubland", 35, 40, "F"],
	    ["terralith:blooming_valley", 68, 78, "F"],
	    ["terralith:ashen_savanna", 80, 120, "F"],
	    ["terralith:amethyst_rainforest", 70, 78, "F"],
	    ["terralith:amethyst_canyon", 68, 77, "F"],
	    ["terralith:alpine_highlands", 60, 80, "F"],
	    ["terralith:alpine_grove", 35, 40, "F"],
	    ["terralith:alpha_islands_winter", 20, 40, "F"],
	    ["terralith:alpha_islands", 48, 68, "F"],
	    ["minecraft:soul_sand_valley", 50, 50, "F"],
	    ["minecraft:old_growth_birch_forest", 58, 72, "F"],
	    ["minecraft:river", 60, 70, "F"],
	    ["minecraft:swamp", 72, 84, "F"],
	    ["minecraft:savanna", 70, 105, "F"],
	    ["minecraft:savanna_plateau", 76, 105, "F"],
	    ["minecraft:windswept_savanna", 67, 100, "F"],
	    ["minecraft:taiga", 44, 62, "F"],
	    ["minecraft:snowy_taiga", 19, 48, "F"],
	    ["minecraft:old_growth_pine_taiga", 48, 62, "F"],
	    ["minecraft:old_growth_spruce_taiga", 48, 62, "F"],
	    ["minecraft:stony_shore", 50, 64, "F"],
	    ["minecraft:snowy_beach", 38, 52, "F"],
	    ["minecraft:snowy_slopes", 24, 38, "F"],
	    ["minecraft:windswept_forest", 48, 66, "F"],
	    ["minecraft:frozen_peaks", 15, 33, "F"],
	    ["minecraft:warm_ocean", 67, 76, "F"],
	    ["minecraft:deep_frozen_ocean", 20, 30, "F"],
	    ["minecraft:jungle", 76, 87, "F"],
	    ["minecraft:bamboo_jungle", 76, 87, "F"],
	    ["minecraft:badlands", 84, 120, "F"],
	    ["minecraft:wooded_badlands", 80, 108, "F"],
	    ["minecraft:eroded_badlands", 88, 120, "F"],
	    ["minecraft:deep_dark", 63, 63, "F"],
	    ["terralith:moonlight_valley", 57, 76, "F"],
	    ["terralith:rocky_mountains", 45, 50, "F"],
	    ["terralith:blooming_plateau", 68, 78, "F"],
	    ["terralith:yellowstone", 47, 68, "F"],
	    ["terralith:temperate_highlands", 54, 80, "F"],
	    ["terralith:amethyst_rainforest", 69, 84, "F"],
	    ["terralith:sandstone_valley", 78, 114, "F"],
	    ["terralith:ancient_sands", 40, 130, "F"],
	    ["terralith:arid_highlands", 45, 120, "F"],
	    ["terralith:volcanic_crater", 96, 200, "F"],
	    ["terralith:volcanic_peaks", 76, 122, "F"],
	    ["terralith:basalt_cliffs", 45, 120, "F"],
	    ["terralith:birch_taiga", 40, 62, "F"],
	    ["terralith:brushland", 68, 80, "F"],
	    ["terralith:bryce_canyon", 72, 80, "F"],
	    ["terralith:caldera", 50, 59, "F"],
	    ["terralith:cloud_forest", 38, 50, "F"],
	    ["terralith:desert_canyon", 73, 121, "F"],
	    ["terralith:desert_spires", 60, 121, "F"],
	    ["terralith:orchid_swamp", 62, 81, "F"],
	    ["terralith:fractured_savanna", 65, 92, "F"],
	    ["terralith:savanna_badlands", 68, 99, "F"],
	    ["terralith:granite_cliffs", 65, 85, "F"],
	    ["terralith:haze_mountain", 62, 74, "F"],
	    ["terralith:highlands", 62, 74, "F"],
	    ["terralith:lavender_valley", 59, 76, "F"],
	    ["terralith:lavender_forest", 56, 75, "F"],
	    ["terralith:red_oasis", 68, 78, "F"],
	    ["terralith:shield", 48, 68, "F"],
	    ["terralith:shield_clearing", 28, 80, "F"],
	    ["terralith:steppe", 44, 78, "F"],
	    ["terralith:warped_mesa", 80, 100, "F"]
*/
