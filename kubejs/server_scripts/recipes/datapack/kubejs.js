// 原配方快照（从 kubejs/data 移入）
// 命名空间: kubejs | 配方 8 条 | 保留原 id
ServerEvents.recipes(event => {
    event.custom({
      "type": "minecraft:crafting_shapeless",
      "ingredients": [
        {
          "item": "minecraft:book"
        },
        {
          "item": "minecraft:string"
        }
      ],
      "result": {
        "id": "modonomicon:modonomicon",
        "components": {
          "modonomicon:book_id": "kubejs:survival_guide"
        }
      }
    }).id('kubejs:craft_survival_guide')

    event.custom({
      "type": "createaddition:rolling",
      "ingredients": [
        {
          "item": "create:brass_ingot"
        }
      ],
      "results": [
        {
          "count": 2,
          "id": "createaddition:brass_rod"
        }
      ]
    }).id('kubejs:materials/rolling/brass_rod')

    event.custom({
      "type": "createaddition:rolling",
      "ingredients": [
        {
          "item": "createbigcannons:bronze_ingot"
        }
      ],
      "results": [
        {
          "count": 2,
          "id": "createaddition:bronze_rod"
        }
      ]
    }).id('kubejs:materials/rolling/bronze_rod')

    event.custom({
      "type": "createaddition:rolling",
      "ingredients": [
        {
          "item": "minecraft:copper_ingot"
        }
      ],
      "results": [
        {
          "count": 2,
          "id": "createaddition:copper_rod"
        }
      ]
    }).id('kubejs:materials/rolling/copper_rod')

    event.custom({
      "type": "createaddition:rolling",
      "ingredients": [
        {
          "item": "createaddition:electrum_ingot"
        }
      ],
      "results": [
        {
          "count": 2,
          "id": "createaddition:electrum_rod"
        }
      ]
    }).id('kubejs:materials/rolling/electrum_rod')

    event.custom({
      "type": "createaddition:rolling",
      "ingredients": [
        {
          "item": "minecraft:gold_ingot"
        }
      ],
      "results": [
        {
          "count": 2,
          "id": "createaddition:gold_rod"
        }
      ]
    }).id('kubejs:materials/rolling/gold_rod')

    event.custom({
      "type": "createaddition:rolling",
      "ingredients": [
        {
          "item": "minecraft:iron_ingot"
        }
      ],
      "results": [
        {
          "count": 2,
          "id": "createaddition:iron_rod"
        }
      ]
    }).id('kubejs:materials/rolling/iron_rod')

    event.custom({
      "type": "createaddition:rolling",
      "ingredients": [
        {
          "item": "overgeared:steel_ingot"
        }
      ],
      "results": [
        {
          "count": 2,
          "id": "electrodynamics:rodsteel"
        }
      ]
    }).id('kubejs:materials/rolling/steel_rod')

    

})