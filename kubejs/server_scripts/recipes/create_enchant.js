// 删除附魔书体系
// 1. 删除图书管理员的附魔书交易
// 2. 从所有战利品宝箱中移除附魔书
// 3. 删除附魔台配方

// ===== 1. 删除图书管理员原版交易（含附魔书） =====
MoreJS.villagerTrades(event => {
    event.removeVanillaTypedTrades('librarian', 1)
    event.removeVanillaTypedTrades('librarian', 2)
    event.removeVanillaTypedTrades('librarian', 3)
    event.removeVanillaTypedTrades('librarian', 4)
    event.removeVanillaTypedTrades('librarian', 5)
    console.log('[附魔清理] 已删除图书管理员原版交易')
})

// ===== 2. 从战利品宝箱中移除附魔书 =====
// 注意：原版附魔书是 minecraft:book + 附魔函数，不是 enchanted_book
// 这里删除 book 条目会同时删掉普通书和附魔书
LootJS.lootTables(event => {
    const book = 'minecraft:book'

    const tables = [
        // 地牢
        'minecraft:chests/simple_dungeon',
        // 要塞
        'minecraft:chests/stronghold_library',
        'minecraft:chests/stronghold_corridor',
        'minecraft:chests/stronghold_crossing',
        // 神殿
        'minecraft:chests/desert_pyramid',
        'minecraft:chests/jungle_temple',
        // 矿井
        'minecraft:chests/abandoned_mineshaft',
        // 海底
        'minecraft:chests/underwater_ruin_big',
        // 沉船
        'minecraft:chests/shipwreck_map',
        // 远古城市
        'minecraft:chests/ancient_city',
        // 堡垒遗迹
        'minecraft:chests/bastion_other',
        // 袭击者前哨站
        'minecraft:chests/pillager_outpost',
        // 林地府邸
        'minecraft:chests/woodland_mansion',
        // 试炼密室
        'minecraft:chests/trial_chambers/reward_rare',
        'minecraft:chests/trial_chambers/reward_ominous_rare',
        // 村庄房屋
        'minecraft:chests/village/village_desert_house',
        'minecraft:chests/village/village_plains_house',
        // 钓鱼
        'minecraft:gameplay/fishing/treasure',
        // 猪灵交易
        'minecraft:gameplay/piglin_bartering',
        // 村庄英雄礼物
        'minecraft:gameplay/hero_of_the_village/librarian_gift'
    ]

    tables.forEach(id => {
        event.getLootTable(id).firstPool().removeItem(book)
    })

})

// ===== 3. 删除附魔台配方 =====
ServerEvents.recipes(event => {
    event.remove({ output: 'minecraft:enchanting_table' })
})
