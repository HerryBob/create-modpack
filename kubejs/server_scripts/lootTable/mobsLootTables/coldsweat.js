
// LootJS.modifiers(event=>{
//     // 变色龙鳞片掉落物增多 - 原范围[2,3] -> 3
//     event.addEntityModifier("minecraft:entities/zombie")
//         .addLoot(Item.of("cold_sweat:chameleon_molt"))
// })
// LootJS.lootTables(event => {
//     event.getLootTable("minecraft:chests/desert_pyramid").firstPool().addEntry("minecraft:apple")
// })

LootJS.lootTables(event=>{
    event.getLootTable("cold_sweat:entities/chameleon").firstPool().removeItem(Item.of("cold_sweat:chameleon_molt")).addEntry(Item.of("2x cold_sweat:chameleon_molt"))
})

