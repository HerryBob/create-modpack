// 原配方快照（从 kubejs/data 移入）
// 命名空间: farmersdelight | 配方 2 条 | kubejs id（原配方被 00_ 删除，移入后复活）
ServerEvents.recipes(event => {
    event.custom({
      "type": "farmersdelight:cooking",
      "container": {
        "id": "minecraft:bowl"
      },
      "cookingtime": 150,
      "experience": 1,
      "ingredients": [
        {
          "item": "vegandelight:soymilk_bucket"
        },
        {
          "item": "vegandelight:soymilk_bottle"
        },
        {
          "item": "ratatouille:salt"
        },
        {
          "item": "minecraft:water_bucket"
        }
      ],
      "recipe_book_tab": "meals",
      "result": {
        "count": 1,
        "id": "vegandelight:silken_tofu"
      }
    })

    event.custom({
      "type": "farmersdelight:cooking",
      "cookingtime": 150,
      "experience": 1,
      "ingredients": [
        {
          "item": "vegandelight:soymilk_bucket"
        },
        {
          "item": "vegandelight:soymilk_bottle"
        },
        {
          "item": "ratatouille:salt"
        }
      ],
      "recipe_book_tab": "meals",
      "result": {
        "count": 1,
        "id": "vegandelight:tofu"
      }
    })

})