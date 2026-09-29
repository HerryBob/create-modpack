// Loot 表修改 - 采用 LootJS 1.21+ 标准写法
//
// 说明：
// - 每种产物独立池子（createPool），确保固定掉落多种产物，不会互相抢占
// - LootEntry.of("item", [min, max]) 直接设定数量范围，均匀随机
// - LootEntry.of("item", count) 固定数量
// - 所有表路径采用新版命名：例如 "minecraft:entities/hoglin"

LootJS.lootTables(event => {
    // ===== 疣猪：疣猪皮 ×12 + 猪排 ×12 + 火腿 =====
    let hoglin = event.getLootTable("minecraft:entities/hoglin")
    hoglin.removeItem("cold_sweat:hoglin_hide")
    hoglin.removeItem("minecraft:porkchop")
    hoglin.removeItem("minecraft:leather")
    hoglin.createPool(pool => { pool.addEntry(LootEntry.of("cold_sweat:hoglin_hide", 12)) })
    hoglin.createPool(pool => { pool.addEntry(LootEntry.of("minecraft:porkchop", 12)) })
    hoglin.createPool(pool => { pool.addEntry(LootEntry.of("farmersdelight:ham", [1, 3])) })

    // 僵尸疣猪兽
    let zoglin = event.getLootTable("minecraft:entities/zoglin")
    zoglin.createPool(pool => { pool.addEntry(LootEntry.of("cold_sweat:hoglin_hide", 3)) })

    // 猪灵
    let piglin = event.getLootTable("minecraft:entities/piglin")
    piglin.createPool(pool => { pool.addEntry(LootEntry.of("cold_sweat:hoglin_hide", 5)) })

    // 猪灵蛮兵
    let brute = event.getLootTable("minecraft:entities/piglin_brute")
    brute.createPool(pool => { pool.addEntry(LootEntry.of("cold_sweat:hoglin_hide", 6)) })

    // ===== 山羊：山羊毛 ×8 + 羊肉 1~2 =====
    let goat = event.getLootTable("minecraft:entities/goat")
    goat.removeItem("cold_sweat:goat_fur")
    goat.createPool(pool => { pool.addEntry(LootEntry.of("cold_sweat:goat_fur", 8)) })
    goat.createPool(pool => { pool.addEntry(LootEntry.of("minecraft:mutton", [1, 2])) })

    // ===== 猪：生猪排 2~4 + 火腿 =====
    let pig = event.getLootTable("minecraft:entities/pig")
    pig.removeItem("minecraft:porkchop")
    pig.createPool(pool => { pool.addEntry(LootEntry.of("minecraft:porkchop", [2, 4])) })
    pig.createPool(pool => { pool.addEntry(LootEntry.of("farmersdelight:ham", [1, 3])) })

    // ===== 牛：生牛肉 2~4 + 皮革 2~6 =====
    let cow = event.getLootTable("minecraft:entities/cow")
    cow.removeItem("minecraft:beef")
    cow.removeItem("minecraft:leather")
    cow.createPool(pool => { pool.addEntry(LootEntry.of("minecraft:beef", [2, 4])) })
    cow.createPool(pool => { pool.addEntry(LootEntry.of("minecraft:leather", [2, 6])) })

    // ===== 羊：生羊肉 2~4（羊毛保留原版，匹配羊的颜色）=====
    let sheep = event.getLootTable("minecraft:entities/sheep")
    sheep.removeItem("minecraft:mutton")
    sheep.createPool(pool => { pool.addEntry(LootEntry.of("minecraft:mutton", [2, 4])) })

    // ===== 马：皮革 4~8（坐骑，不掉肉）=====
    let horse = event.getLootTable("minecraft:entities/horse")
    horse.removeItem("minecraft:leather")
    horse.createPool(pool => { pool.addEntry(LootEntry.of("minecraft:leather", [4, 8])) })

    // ===== 驴：皮革 4~8（坐骑，不掉肉）=====
    let donkey = event.getLootTable("minecraft:entities/donkey")
    donkey.removeItem("minecraft:leather")
    donkey.createPool(pool => { pool.addEntry(LootEntry.of("minecraft:leather", [4, 8])) })

    // ===== 羊驼：皮革 3~6 + 羊毛 1~2（荒漠驮兽）=====
    let llama = event.getLootTable("minecraft:entities/llama")
    llama.removeItem("minecraft:leather")
    llama.createPool(pool => { pool.addEntry(LootEntry.of("minecraft:leather", [3, 6])) })
    llama.createPool(pool => { pool.addEntry(LootEntry.of("minecraft:white_wool", [1, 2])) })

    // ===== 哞菇：牛肉 2~4 + 皮革 2~4（蘑菇岛蛋白源）=====
    let mooshroom = event.getLootTable("minecraft:entities/mooshroom")
    mooshroom.removeItem("minecraft:beef")
    mooshroom.removeItem("minecraft:leather")
    mooshroom.createPool(pool => { pool.addEntry(LootEntry.of("minecraft:beef", [2, 4])) })
    mooshroom.createPool(pool => { pool.addEntry(LootEntry.of("minecraft:leather", [2, 4])) })

    // ===== 骆驼：皮革 4~8（荒漠坐骑，不掉肉）=====
    let camel = event.getLootTable("minecraft:entities/camel")
    camel.removeItem("minecraft:leather")
    camel.createPool(pool => { pool.addEntry(LootEntry.of("minecraft:leather", [4, 8])) })

    // ===== 海龟：海龟蛋 1~2 =====
    let turtle = event.getLootTable("minecraft:entities/turtle")
    turtle.createPool(pool => { pool.addEntry(LootEntry.of("minecraft:turtle_egg", [1, 2])) })
})
