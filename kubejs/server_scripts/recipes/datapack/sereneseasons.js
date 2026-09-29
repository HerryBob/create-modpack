// 原配方快照（从 kubejs/data 移入）
// 命名空间: sereneseasons | 配方 2 条 | kubejs id（原配方被 00_ 删除，移入后复活）
ServerEvents.recipes(event => {
    event.custom({
      "type": "minecraft:crafting_shaped",
      "category": "equipment",
      "key": {
        "C": {
          "item": "minecraft:clock"
        },
        "P": {
          "item": "minecraft:paper"
        }
      },
      "pattern": [
        "PPP",
        "PCP",
        "PPP"
      ],
      "result": {
        "count": 1,
        "id": "sereneseasons:calendar"
      }
    })

    event.custom({
      "type": "minecraft:crafting_shaped",
      "category": "redstone",
      "key": {
        "#": {
          "item": "minecraft:cobblestone_slab"
        },
        "C": {
          "item": "sereneseasons:calendar"
        },
        "G": {
          "item": "minecraft:glass"
        },
        "Q": {
          "item": "minecraft:quartz"
        }
      },
      "pattern": [
        "GGG",
        "QCQ",
        "###"
      ],
      "result": {
        "count": 1,
        "id": "sereneseasons:season_sensor"
      }
    })

})