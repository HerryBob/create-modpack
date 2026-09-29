// 村民交易配置

MoreJS.villagerTrades(event=>{
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    //制图师
    //yung的建筑
    //更好的地牢地图
    const structureStronghold = VillagerUtils.createStructureMapTrade(['32x minecraft:emerald'], "betterstrongholds:stronghold");
    structureStronghold.displayName('要塞')
    event.addTrade('cartographer', 5, structureStronghold)
    //更好的下界堡垒
    const structureFortress = VillagerUtils.createStructureMapTrade(['32x minecraft:emerald'], "betterfortresses:fortress");
    structureFortress.displayName('下界堡垒')
    event.addTrade('cartographer', 5, structureFortress)

    //更好的丛林神庙
    const structureJungle_temple = VillagerUtils.createStructureMapTrade(['32x minecraft:emerald'], 'betterjungletemples:jungle_temple')
    structureJungle_temple.displayName('丛林神庙')
    event.addTrade('cartographer', 5, structureJungle_temple)
    //更好的海洋神殿

    const structureOcean_monument = VillagerUtils.createStructureMapTrade(['32x minecraft:emerald'], 'betteroceanmonuments:ocean_monument')
    structureOcean_monument.displayName('海洋神殿')
    event.addTrade('cartographer', 5, structureOcean_monument)

    //更好的沙漠神殿
    const structureDesert_temple = VillagerUtils.createStructureMapTrade(['32x minecraft:emerald'], 'betterdeserttemples:desert_temple')
    structureDesert_temple.displayName('沙漠神殿')
    event.addTrade('cartographer', 5, structureDesert_temple)

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    //盔甲匠 armorer - 删除原版交易并添加自定义交易
    // 删除所有等级的原版交易
    event.removeVanillaTypedTrades('armorer', 1)
    event.removeVanillaTypedTrades('armorer', 2)
    event.removeVanillaTypedTrades('armorer', 3)
    event.removeVanillaTypedTrades('armorer', 4)
    event.removeVanillaTypedTrades('armorer', 5)

    event.addTrade('armorer', 1, ['27x minecraft:emerald'] ,'create:cardboard_helmet')
    event.addTrade('armorer', 1, ['27x minecraft:emerald'] ,'create:cardboard_chestplate')
    event.addTrade('armorer', 1, ['27x minecraft:emerald'] ,'cold_sweat:chameleon_helmet')
    event.addTrade('armorer', 1, ['27x minecraft:emerald'] ,'cold_sweat:chameleon_chestplate')

    event.addTrade('armorer', 2, ['27x minecraft:emerald'] ,'create:cardboard_leggings')
    event.addTrade('armorer', 2, ['27x minecraft:emerald'] ,'create:cardboard_boots')
    event.addTrade('armorer', 2, ['27x minecraft:emerald'] ,'cold_sweat:chameleon_leggings')
    event.addTrade('armorer', 2, ['27x minecraft:emerald'] ,'cold_sweat:chameleon_boots')

    event.addTrade('armorer', 3, ['27x minecraft:emerald'], 'create:copper_diving_helmet')
    // event.addTrade('armorer', 3, ['27x minecraft:emerald'], 'createfisheryindustry:copper_diving_leggings')
    event.addTrade('armorer', 3, ['27x minecraft:emerald'], 'create:copper_diving_boots')
    event.addTrade('armorer', 3, ['27x minecraft:emerald'], 'create:copper_backtank')

    event.addTrade('armorer', 4, ['27x minecraft:emerald'], 'create:netherite_diving_helmet')
    // event.addTrade('armorer', 4, ['27x minecraft:emerald'], 'createfisheryindustry:netherite_diving_leggings')
    event.addTrade('armorer', 4, ['27x minecraft:emerald'], 'create:netherite_backtank')
    event.addTrade('armorer', 4, ['27x minecraft:emerald'], 'create:netherite_diving_boots')

    
    
    // 额外交易 - 使用自定义等级来显示更多装备

    
    // 高级装备

    
    // 潜水套装
    // event.addTrade('armorer', 1, ['27x minecraft:emerald'], 'alexscaves:diving_helmet')

    




///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//屠夫 butcher


    //生鲇鱼肉
    // event.addTrade('butcher', 1, ['1x minecraft:emerald'] ,'alexsmobs:raw_catfish')


    

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//皮匠 leatherworker
    event.removeVanillaTypedTrades('leatherworker', 1)
    event.removeVanillaTypedTrades('leatherworker', 2)
    event.removeVanillaTypedTrades('leatherworker', 3)
    event.removeVanillaTypedTrades('leatherworker', 4)
    event.removeVanillaTypedTrades('leatherworker', 5) 

    //皮革装备
    event.addTrade('leatherworker', 1, ['5x minecraft:emerald'], 'minecraft:leather_helmet')
    event.addTrade('leatherworker', 1, ['7x minecraft:emerald'], 'minecraft:leather_chestplate')
    event.addTrade('leatherworker', 1, ['9x minecraft:emerald'], 'minecraft:leather_leggings')
    event.addTrade('leatherworker', 1, ['5x minecraft:emerald'], 'minecraft:leather_boots')

    event.addTrade('leatherworker', 3, ['27x minecraft:emerald'] ,'cold_sweat:goat_fur_helmet')
    event.addTrade('leatherworker', 3, ['27x minecraft:emerald'] ,'cold_sweat:goat_fur_chestplate')
    event.addTrade('leatherworker', 3, ['27x minecraft:emerald'] ,'cold_sweat:goat_fur_leggings')
    event.addTrade('leatherworker', 3, ['27x minecraft:emerald'] ,'cold_sweat:goat_fur_boots')

    event.addTrade('leatherworker', 3, ['27x minecraft:emerald'] ,'cold_sweat:hoglin_helmet')
    event.addTrade('leatherworker', 3, ['27x minecraft:emerald'] ,'cold_sweat:hoglin_chestplate')
    event.addTrade('leatherworker', 3, ['27x minecraft:emerald'] ,'cold_sweat:hoglin_leggings')
    event.addTrade('leatherworker', 3, ['27x minecraft:emerald'] ,'cold_sweat:hoglin_boots')





///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//牧师 cleric

event.removeVanillaTypedTrades('cleric', 1)
event.removeVanillaTypedTrades('cleric', 2)
event.removeVanillaTypedTrades('cleric', 3)
event.removeVanillaTypedTrades('cleric', 4)
event.removeVanillaTypedTrades('cleric', 5) 


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//农民 farmer
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//渔夫 fisherman


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//制箭师 fletcher 
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//图书管理员 librarian   
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////// 
//石匠 mason  
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//牧羊人 shepherd
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//工具匠 toolsmith


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//武器匠 weaponsmith
// event.addTrade("weaponsmith", 4, ['10x minecraft:emerald'] ,'createbigcannons:impact_fuze')


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////

})

