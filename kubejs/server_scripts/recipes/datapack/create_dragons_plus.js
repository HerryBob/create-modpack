// 原配方快照（从 kubejs/data 移入）
// 命名空间: create_dragons_plus | 配方 2 条 | kubejs id（原配方被 00_ 删除，移入后复活）
ServerEvents.recipes(event => {
    event.custom({
      "type": "create_dragons_plus:freezing",
      "ingredients": [
        {
          "item": "ratatouille:chocolate_mold_filled"
        }
      ],
      "results": [
        {
          "id": "ratatouille:chocolate_mold_solid"
        }
      ]
    })

    event.custom({
      "type": "create_dragons_plus:freezing",
      "ingredients": [
        {
          "item": "ratatouille:melon_popsicle_mold_filled"
        }
      ],
      "results": [
        {
          "id": "ratatouille:melon_popsicle_mold_solid"
        }
      ]
    })

})