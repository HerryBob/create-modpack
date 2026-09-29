// Alex's Mobs 掉落物调整 - 采用 LootJS 1.21+ 标准写法
// - 每种产物独立池子（createPool），确保全部掉落
// - LootEntry.of("item", [min, max]) 直接设定数量范围

LootJS.lootTables(event => {
    // 野牛：生野牛肉 3~5 + 野牛皮 4~8（寒冷群系主要蛋白质来源）
    let bison = event.getLootTable("alexsmobs:entities/bison")
    bison.removeItem("alexsdelight:raw_bison")
    bison.removeItem("alexsmobs:bison_fur")
    bison.createPool(pool => {
        pool.addEntry(LootEntry.of("alexsdelight:raw_bison", [8, 12]))
    })
    bison.createPool(pool => {
        pool.addEntry(LootEntry.of("alexsmobs:bison_fur", [8, 16]))
    })

    // 驼鹿：驼鹿肋排 3~5 + 驼鹿肋骨 1~2 + 驼鹿角（寒冷群系主要蛋白质来源）
    let moose = event.getLootTable("alexsmobs:entities/moose")
    moose.removeItem("alexsdelight:loose_moose_rib")
    moose.removeItem("alexsmobs:moose_ribs")
    moose.removeItem("alexsmobs:moose_antler")
    moose.createPool(pool => {
        pool.addEntry(LootEntry.of("alexsmobs:moose_ribs", [8, 12]))
    })
    moose.createPool(pool => {
        pool.addEntry(LootEntry.of("alexsmobs:moose_antler", [1,2]))
    })
    moose.createPool(pool => {
        pool.addEntry(LootEntry.of("minecraft:leather", [4, 6]))
    })

    // 瞪羚：羊肉 1~2 + 瞪羚角 1~2（热带草原小型猎物）
    let gazelle = event.getLootTable("alexsmobs:entities/gazelle")
    gazelle.removeItem("minecraft:mutton")
    gazelle.removeItem("alexsmobs:gazelle_horn")
    gazelle.createPool(pool => {
        pool.addEntry(LootEntry.of("minecraft:mutton", [2, 4]))
    })
    gazelle.createPool(pool => {
        pool.addEntry(LootEntry.of("alexsmobs:gazelle_horn", [1, 2]))
    })

    // 袋鼠：袋鼠腿 4~8 + 袋鼠肉 1~2 + 袋鼠皮 2~6（热带草原中型猎物）
    let kangaroo = event.getLootTable("alexsmobs:entities/kangaroo")
    kangaroo.removeItem("alexsdelight:kangaroo_shank")
    kangaroo.removeItem("alexsmobs:kangaroo_hide")
    kangaroo.removeItem("alexsmobs:kangaroo_meat")
    kangaroo.createPool(pool => {
        pool.addEntry(LootEntry.of("alexsdelight:kangaroo_shank", [2, 3]))
    })
    kangaroo.createPool(pool => {
        pool.addEntry(LootEntry.of("alexsmobs:kangaroo_meat", [4, 8]))
    })
    kangaroo.createPool(pool => {
        pool.addEntry(LootEntry.of("alexsmobs:kangaroo_hide", [2, 6]))
    })

    // 獠牙兽：猪排 4~8 + 皮革 3~6 + 雪球 2~4（冰雪群系大型猎物）
    let tusklin = event.getLootTable("alexsmobs:entities/tusklin")
    tusklin.removeItem("minecraft:porkchop")
    tusklin.removeItem("minecraft:leather")
    tusklin.removeItem("minecraft:snowball")
    tusklin.createPool(pool => {
        pool.addEntry(LootEntry.of("minecraft:porkchop", [4, 8]))
    })
    tusklin.createPool(pool => {
        pool.addEntry(LootEntry.of("minecraft:leather", [3, 6]))
    })
    tusklin.createPool(pool => {
        pool.addEntry(LootEntry.of("minecraft:snowball", [2, 4]))
    })

    // 鸸鹋：鸸鹋羽毛 4~6 + 羽毛 2~4（荒漠大型禽类）
    let emu = event.getLootTable("alexsmobs:entities/emu")
    emu.removeItem("alexsmobs:emu_feather")
    emu.removeItem("minecraft:feather")
    emu.createPool(pool => {
        pool.addEntry(LootEntry.of("alexsmobs:emu_feather", [4, 6]))
    })
    emu.createPool(pool => {
        pool.addEntry(LootEntry.of("minecraft:feather", [2, 4]))
    })

    // 走鹃：走鹃羽毛 2~4 + 羽毛 1~2（荒漠小型鸟类）
    let roadrunner = event.getLootTable("alexsmobs:entities/roadrunner")
    roadrunner.createPool(pool => {
        pool.addEntry(LootEntry.of("alexsmobs:roadrunner_feather", [2, 4]))
    })
    roadrunner.createPool(pool => {
        pool.addEntry(LootEntry.of("minecraft:feather", [1, 2]))
    })

    // 蘑菇兔：生菌兔肉 2~4 + 生菌兔腿 1~2（蘑菇岛蛋白源）
    let bunfungus = event.getLootTable("alexsmobs:entities/bunfungus")
    bunfungus.removeItem("alexsdelight:raw_bunfungus")
    bunfungus.createPool(pool => {
        pool.addEntry(LootEntry.of("alexsdelight:raw_bunfungus", [2, 4]))
    })
    bunfungus.createPool(pool => {
        pool.addEntry(LootEntry.of("alexsdelight:raw_bunfungus_drumstick", [1, 2]))
    })

    // 灰熊：熊皮 8~16（寒冷群系猛兽，高风险高回报）
    let grizzlyBear = event.getLootTable("alexsmobs:entities/grizzly_bear")
    grizzlyBear.removeItem("alexsmobs:bear_fur")
    grizzlyBear.createPool(pool => {
        pool.addEntry(LootEntry.of("alexsmobs:bear_fur", [8, 16]))
    })

    // 海豹：皮革 2~4 + 鳕鱼 2~4 + 鲑鱼 2~4（海洋掠食者）
    let seal = event.getLootTable("alexsmobs:entities/seal")
    seal.createPool(pool => {
        pool.addEntry(LootEntry.of("minecraft:leather", [2, 4]))
    })
    seal.createPool(pool => {
        pool.addEntry(LootEntry.of("minecraft:cod", [2, 4]))
    })
    seal.createPool(pool => {
        pool.addEntry(LootEntry.of("minecraft:salmon", [2, 4]))
    })
    //羲鹤掉落护身符
    let sunbird = event.getLootTable('alexsmobs:entities/sunbird')
    sunbird.createPool(pool=>{
        pool.addEntry(LootEntry.of('createaddition:electrum_amulet'))
    })
})
