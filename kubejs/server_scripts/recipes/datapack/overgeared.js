// 原配方快照（从 kubejs/data 移入）
// 命名空间: overgeared | 配方 9 条 | kubejs id（原配方被 00_ 删除，移入后复活）
ServerEvents.recipes(event => {
    event.custom({
      "type": "overgeared:forging",
      "hammering": 3,
      "has_quality": false,
      "key": {
        "#": {
          "tag": "c:ingots/brass"
        }
      },
      "need_quenching": false,
      "pattern": [
        "#"
      ],
      "result": {
        "count": 1,
        "id": "create:brass_sheet"
      },
      "show_notification": false,
      "tier": "stone"
    })

    event.custom({
      "type": "overgeared:forging",
      "hammering": 2,
      "has_quality": false,
      "key": {
        "#": {
          "item": "minecraft:charcoal"
        }
      },
      "need_quenching": false,
      "pattern": [
        "#"
      ],
      "result": {
        "count": 1,
        "id": "dynamicelectricity:dustcarbon"
      },
      "show_notification": false,
      "tier": "stone"
    })

    event.custom({
      "type": "overgeared:forging",
      "hammering": 3,
      "has_quality": false,
      "key": {
        "#": {
          "item": "minecraft:copper_ingot"
        }
      },
      "need_quenching": false,
      "pattern": [
        "#"
      ],
      "result": {
        "count": 1,
        "id": "create:copper_sheet"
      },
      "show_notification": false,
      "tier": "stone"
    })

    event.custom({
      "type": "overgeared:forging",
      "hammering": 3,
      "has_quality": false,
      "key": {
        "#": {
          "item": "minecraft:gold_ingot"
        }
      },
      "need_quenching": false,
      "pattern": [
        "#"
      ],
      "result": {
        "count": 1,
        "id": "create:golden_sheet"
      },
      "show_notification": false,
      "tier": "stone"
    })

    event.custom({
      "type": "overgeared:forging",
      "hammering": 4,
      "has_quality": false,
      "key": {
        "#": {
          "item": "overgeared:heated_iron_ingot"
        },
        "C": {
          "item": "dynamicelectricity:dustcarbon"
        }
      },
      "need_quenching": false,
      "pattern": [
        "#C"
      ],
      "result": {
        "count": 1,
        "id": "overgeared:heated_steel_ingot"
      },
      "show_notification": false
    })

    event.custom({
      "type": "overgeared:forging",
      "hammering": 3,
      "has_quality": false,
      "key": {
        "#": {
          "item": "minecraft:iron_ingot"
        }
      },
      "need_quenching": false,
      "pattern": [
        "#"
      ],
      "result": {
        "count": 1,
        "id": "create:iron_sheet"
      },
      "show_notification": false,
      "tier": "stone"
    })

    event.custom({
      "type": "overgeared:forging",
      "category": "TOOL_HEADS",
      "hammering": 10,
      "has_quality": false,
      "key": {
        "#": {
          "item": "overgeared:heated_iron_ingot"
        }
      },
      "need_quenching": false,
      "pattern": [
        "# #"
      ],
      "result": {
        "count": 1,
        "id": "overgeared:iron_tongs"
      },
      "show_notification": false
    })

    event.custom({
      "type": "overgeared:forging",
      "category": "misc",
      "hammering": 4,
      "has_quality": false,
      "needs_minigame": false,
      "pattern": [
        "#"
      ],
      "key": {
        "#": {
          "tag": "c:ingots/steel"
        }
      },
      "result": {
        "count": 1,
        "id": "overgeared:steel_plate"
      },
      "show_notification": true
    })

    event.custom({
      "type": "overgeared:forging",
      "category": "TOOL_HEADS",
      "hammering": 10,
      "has_quality": false,
      "key": {
        "#": {
          "item": "overgeared:heated_steel_ingot"
        }
      },
      "need_quenching": false,
      "pattern": [
        "# #"
      ],
      "result": {
        "count": 1,
        "id": "overgeared:steel_tongs"
      },
      "show_notification": false
    })

})