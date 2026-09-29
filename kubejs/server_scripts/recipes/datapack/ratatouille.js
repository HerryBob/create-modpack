// 原配方快照（从 kubejs/data 移入）
// 命名空间: ratatouille | 配方 1 条 | kubejs id（原配方被 00_ 删除，移入后复活）
ServerEvents.recipes(event => {
    event.custom({
      "type": "ratatouille:threshing",
      "ingredients": [
        {
          "item": "rusticdelight:cotton_boll"
        }
      ],
      "processing_time": 200,
      "results": [
        {
          "count": 2,
          "id": "createae2:cotton"
        }
      ]
    })

})