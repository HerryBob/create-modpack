//1 'mc' = 24 摄氏度
ColdSweatEvents.registries(event=>{
//可用于保持干燥的物品
// 可用于使玩家变干的物品
// - 格式：[ ["item_id", "turns_into"], ... ]
// - item_id：物品ID（如 "minecraft:sponge"）
// - turns_into：使用后变为的物品（如 "minecraft:wet_sponge"）
    event.addDryingItem(drying=>
            drying.items('minecraft:sponge')
                .result('minecraft:wet_sponge')
    )
})
