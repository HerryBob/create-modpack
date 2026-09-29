// 原配方快照（从 kubejs/data 移入）
// 命名空间: minecraft | 配方 34 条 | 保留原 id
ServerEvents.recipes(event => {
    event.custom({
      "type": "minecraft:crafting_shaped",
      "category": "equipment",
      "key": {
        "#": {
          "item": "minecraft:stick"
        },
        "X": {
          "item": "minecraft:flint"
        },
        "Y": {
          "item": "minecraft:feather"
        }
      },
      "pattern": [
        "X",
        "#",
        "Y"
      ],
      "result": {
        "count": 4,
        "id": "minecraft:arrow"
      }
    }).id('minecraft:arrow')

    event.custom({
      "type": "minecraft:crafting_shaped",
      "category": "misc",
      "key": {
        "#": {
          "item": "minecraft:iron_ingot"
        }
      },
      "pattern": [
        "# #",
        " # "
      ],
      "result": {
        "count": 1,
        "id": "minecraft:bucket"
      }
    }).id('minecraft:bucket')

    event.custom({
      "type": "minecraft:crafting_shaped",
      "category": "misc",
      "key": {
        "#": {
          "item": "minecraft:iron_ingot"
        }
      },
      "pattern": [
        "# #",
        "# #",
        "###"
      ],
      "result": {
        "count": 1,
        "id": "minecraft:cauldron"
      }
    }).id('minecraft:cauldron')

    event.custom({
      "type": "minecraft:crafting_shaped",
      "category": "equipment",
      "key": {
        "#": {
          "item": "minecraft:stick"
        },
        "X": {
          "item": "minecraft:diamond"
        }
      },
      "pattern": [
        "XX",
        "X#",
        " #"
      ],
      "result": {
        "count": 1,
        "id": "minecraft:diamond_axe"
      }
    }).id('minecraft:diamond_axe')

    event.custom({
      "type": "minecraft:crafting_shaped",
      "category": "equipment",
      "key": {
        "X": {
          "item": "minecraft:diamond"
        }
      },
      "pattern": [
        "X X",
        "X X"
      ],
      "result": {
        "count": 1,
        "id": "minecraft:diamond_boots"
      }
    }).id('minecraft:diamond_boots')

    event.custom({
      "type": "minecraft:crafting_shaped",
      "category": "equipment",
      "key": {
        "X": {
          "item": "minecraft:diamond"
        }
      },
      "pattern": [
        "X X",
        "XXX",
        "XXX"
      ],
      "result": {
        "count": 1,
        "id": "minecraft:diamond_chestplate"
      }
    }).id('minecraft:diamond_chestplate')

    event.custom({
      "type": "minecraft:crafting_shaped",
      "category": "equipment",
      "key": {
        "X": {
          "item": "minecraft:diamond"
        }
      },
      "pattern": [
        "XXX",
        "X X"
      ],
      "result": {
        "count": 1,
        "id": "minecraft:diamond_helmet"
      }
    }).id('minecraft:diamond_helmet')

    event.custom({
      "type": "minecraft:crafting_shaped",
      "category": "equipment",
      "key": {
        "#": {
          "item": "minecraft:stick"
        },
        "X": {
          "item": "minecraft:diamond"
        }
      },
      "pattern": [
        "XX",
        " #",
        " #"
      ],
      "result": {
        "count": 1,
        "id": "minecraft:diamond_hoe"
      }
    }).id('minecraft:diamond_hoe')

    event.custom({
      "type": "minecraft:crafting_shaped",
      "category": "equipment",
      "key": {
        "X": {
          "item": "minecraft:diamond"
        }
      },
      "pattern": [
        "XXX",
        "X X",
        "X X"
      ],
      "result": {
        "count": 1,
        "id": "minecraft:diamond_leggings"
      }
    }).id('minecraft:diamond_leggings')

    event.custom({
      "type": "minecraft:crafting_shaped",
      "category": "equipment",
      "key": {
        "#": {
          "item": "minecraft:stick"
        },
        "X": {
          "item": "minecraft:diamond"
        }
      },
      "pattern": [
        "XXX",
        " # ",
        " # "
      ],
      "result": {
        "count": 1,
        "id": "minecraft:diamond_pickaxe"
      }
    }).id('minecraft:diamond_pickaxe')

    event.custom({
      "type": "minecraft:crafting_shaped",
      "category": "equipment",
      "key": {
        "#": {
          "item": "minecraft:stick"
        },
        "X": {
          "item": "minecraft:diamond"
        }
      },
      "pattern": [
        "X",
        "#",
        "#"
      ],
      "result": {
        "count": 1,
        "id": "minecraft:diamond_shovel"
      }
    }).id('minecraft:diamond_shovel')

    event.custom({
      "type": "minecraft:crafting_shaped",
      "category": "equipment",
      "key": {
        "#": {
          "item": "minecraft:stick"
        },
        "X": {
          "item": "minecraft:diamond"
        }
      },
      "pattern": [
        "X",
        "X",
        "#"
      ],
      "result": {
        "count": 1,
        "id": "minecraft:diamond_sword"
      }
    }).id('minecraft:diamond_sword')

    event.custom({
      "type": "minecraft:crafting_shapeless",
      "category": "equipment",
      "ingredients": [
        {
          "item": "minecraft:iron_ingot"
        },
        {
          "item": "minecraft:flint"
        }
      ],
      "result": {
        "count": 1,
        "id": "minecraft:flint_and_steel"
      }
    }).id('minecraft:flint_and_steel')

    event.custom({
      "type": "minecraft:crafting_shaped",
      "category": "equipment",
      "key": {
        "#": {
          "item": "minecraft:stick"
        },
        "X": {
          "item": "minecraft:gold_ingot"
        }
      },
      "pattern": [
        "XX",
        "X#",
        " #"
      ],
      "result": {
        "count": 1,
        "id": "minecraft:golden_axe"
      }
    }).id('minecraft:golden_axe')

    event.custom({
      "type": "minecraft:crafting_shaped",
      "category": "equipment",
      "key": {
        "X": {
          "item": "minecraft:gold_ingot"
        }
      },
      "pattern": [
        "X X",
        "X X"
      ],
      "result": {
        "count": 1,
        "id": "minecraft:golden_boots"
      }
    }).id('minecraft:golden_boots')

    event.custom({
      "type": "minecraft:crafting_shaped",
      "category": "equipment",
      "key": {
        "X": {
          "item": "minecraft:gold_ingot"
        }
      },
      "pattern": [
        "X X",
        "XXX",
        "XXX"
      ],
      "result": {
        "count": 1,
        "id": "minecraft:golden_chestplate"
      }
    }).id('minecraft:golden_chestplate')

    event.custom({
      "type": "minecraft:crafting_shaped",
      "category": "equipment",
      "key": {
        "X": {
          "item": "minecraft:gold_ingot"
        }
      },
      "pattern": [
        "XXX",
        "X X"
      ],
      "result": {
        "count": 1,
        "id": "minecraft:golden_helmet"
      }
    }).id('minecraft:golden_helmet')

    event.custom({
      "type": "minecraft:crafting_shaped",
      "category": "equipment",
      "key": {
        "#": {
          "item": "minecraft:stick"
        },
        "X": {
          "item": "minecraft:gold_ingot"
        }
      },
      "pattern": [
        "XX",
        " #",
        " #"
      ],
      "result": {
        "count": 1,
        "id": "minecraft:golden_hoe"
      }
    }).id('minecraft:golden_hoe')

    event.custom({
      "type": "minecraft:crafting_shaped",
      "category": "equipment",
      "key": {
        "X": {
          "item": "minecraft:gold_ingot"
        }
      },
      "pattern": [
        "XXX",
        "X X",
        "X X"
      ],
      "result": {
        "count": 1,
        "id": "minecraft:golden_leggings"
      }
    }).id('minecraft:golden_leggings')

    event.custom({
      "type": "minecraft:crafting_shaped",
      "category": "equipment",
      "key": {
        "#": {
          "item": "minecraft:stick"
        },
        "X": {
          "item": "minecraft:gold_ingot"
        }
      },
      "pattern": [
        "XXX",
        " # ",
        " # "
      ],
      "result": {
        "count": 1,
        "id": "minecraft:golden_pickaxe"
      }
    }).id('minecraft:golden_pickaxe')

    event.custom({
      "type": "minecraft:crafting_shaped",
      "category": "equipment",
      "key": {
        "#": {
          "item": "minecraft:stick"
        },
        "X": {
          "item": "minecraft:gold_ingot"
        }
      },
      "pattern": [
        "X",
        "#",
        "#"
      ],
      "result": {
        "count": 1,
        "id": "minecraft:golden_shovel"
      }
    }).id('minecraft:golden_shovel')

    event.custom({
      "type": "minecraft:crafting_shaped",
      "category": "equipment",
      "key": {
        "#": {
          "item": "minecraft:stick"
        },
        "X": {
          "item": "minecraft:gold_ingot"
        }
      },
      "pattern": [
        "X",
        "X",
        "#"
      ],
      "result": {
        "count": 1,
        "id": "minecraft:golden_sword"
      }
    }).id('minecraft:golden_sword')

    event.custom({
      "type": "minecraft:blasting",
      "category": "misc",
      "cookingtime": 100,
      "experience": 0.7,
      "group": "iron_ingot",
      "ingredient": {
        "item": "minecraft:deepslate_iron_ore"
      },
      "result": {
        "id": "minecraft:iron_ingot"
      }
    }).id('minecraft:iron_ingot_from_blasting_deepslate_iron_ore')

    event.custom({
      "type": "minecraft:blasting",
      "category": "misc",
      "cookingtime": 100,
      "experience": 0.7,
      "group": "iron_ingot",
      "ingredient": {
        "item": "minecraft:iron_ore"
      },
      "result": {
        "id": "minecraft:iron_ingot"
      }
    }).id('minecraft:iron_ingot_from_blasting_iron_ore')

    event.custom({
      "type": "minecraft:blasting",
      "category": "misc",
      "cookingtime": 100,
      "experience": 0.7,
      "group": "iron_ingot",
      "ingredient": {
        "item": "minecraft:raw_iron"
      },
      "result": {
        "id": "minecraft:iron_ingot"
      }
    }).id('minecraft:iron_ingot_from_blasting_raw_iron')

    event.custom({
      "type": "minecraft:crafting_shapeless",
      "category": "misc",
      "group": "netherite_ingot",
      "ingredients": [
        {
          "item": "minecraft:netherite_scrap"
        },
        {
          "item": "minecraft:netherite_scrap"
        },
        {
          "item": "minecraft:netherite_scrap"
        },
        {
          "item": "minecraft:netherite_scrap"
        },
        {
          "item": "minecraft:gold_ingot"
        },
        {
          "item": "minecraft:gold_ingot"
        },
        {
          "item": "minecraft:gold_ingot"
        },
        {
          "item": "minecraft:gold_ingot"
        }
      ],
      "result": {
        "count": 1,
        "id": "minecraft:netherite_ingot"
      }
    }).id('minecraft:netherite_ingot')

    event.custom({
      "type": "minecraft:crafting_shaped",
      "category": "equipment",
      "key": {
        "#": {
          "item": "minecraft:iron_ingot"
        }
      },
      "pattern": [
        " #",
        "# "
      ],
      "result": {
        "count": 1,
        "id": "minecraft:shears"
      }
    }).id('minecraft:shears')

    event.custom({
      "type": "minecraft:crafting_shaped",
      "category": "equipment",
      "key": {
        "#": {
          "item": "minecraft:glowstone_dust"
        },
        "X": {
          "item": "minecraft:arrow"
        }
      },
      "pattern": [
        " # ",
        "#X#",
        " # "
      ],
      "result": {
        "count": 2,
        "id": "minecraft:spectral_arrow"
      }
    }).id('minecraft:spectral_arrow')

    event.custom({
      "type": "minecraft:crafting_shaped",
      "category": "equipment",
      "key": {
        "#": {
          "item": "minecraft:stick"
        },
        "X": {
          "tag": "minecraft:stone_tool_materials"
        }
      },
      "pattern": [
        "XX",
        "X#",
        " #"
      ],
      "result": {
        "count": 1,
        "id": "minecraft:stone_axe"
      }
    }).id('minecraft:stone_axe')

    event.custom({
      "type": "minecraft:crafting_shaped",
      "category": "equipment",
      "key": {
        "#": {
          "item": "minecraft:stick"
        },
        "X": {
          "tag": "minecraft:stone_tool_materials"
        }
      },
      "pattern": [
        "XX",
        " #",
        " #"
      ],
      "result": {
        "count": 1,
        "id": "minecraft:stone_hoe"
      }
    }).id('minecraft:stone_hoe')

    event.custom({
      "type": "minecraft:crafting_shaped",
      "category": "equipment",
      "key": {
        "#": {
          "item": "minecraft:stick"
        },
        "X": {
          "tag": "minecraft:stone_tool_materials"
        }
      },
      "pattern": [
        "XXX",
        " # ",
        " # "
      ],
      "result": {
        "count": 1,
        "id": "minecraft:stone_pickaxe"
      }
    }).id('minecraft:stone_pickaxe')

    event.custom({
      "type": "minecraft:crafting_shaped",
      "category": "equipment",
      "key": {
        "#": {
          "item": "minecraft:stick"
        },
        "X": {
          "tag": "minecraft:stone_tool_materials"
        }
      },
      "pattern": [
        "X",
        "#",
        "#"
      ],
      "result": {
        "count": 1,
        "id": "minecraft:stone_shovel"
      }
    }).id('minecraft:stone_shovel')

    event.custom({
      "type": "minecraft:crafting_shaped",
      "category": "equipment",
      "key": {
        "#": {
          "item": "minecraft:stick"
        },
        "X": {
          "tag": "minecraft:stone_tool_materials"
        }
      },
      "pattern": [
        "X",
        "X",
        "#"
      ],
      "result": {
        "count": 1,
        "id": "minecraft:stone_sword"
      }
    }).id('minecraft:stone_sword')

    event.custom({
      "type": "minecraft:crafting_special_tippedarrow",
      "category": "misc"
    }).id('minecraft:tipped_arrow')

})