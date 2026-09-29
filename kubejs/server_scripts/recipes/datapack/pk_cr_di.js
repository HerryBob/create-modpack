// 原配方快照（从 kubejs/data 移入）
// 命名空间: pk_cr_di | 配方 1 条 | kubejs id（原配方被 00_ 删除，移入后复活）
ServerEvents.recipes(event => {
    event.custom({
      "type": "minecraft:crafting_shaped",
      "pattern": [
        "C C",
        "CCC",
        "PPP"
      ],
      "key": {
        "C": {
          "item": "minecraft:crying_obsidian"
        },
        "P": {
          "item": "minecraft:phantom_membrane"
        }
      },
      "result": {
        "id": "minecraft:player_head",
        "components": {
          "minecraft:custom_model_data": 11130101,
          "minecraft:lore": [
            "{\"color\":\"dark_gray\",\"italic\":false,\"text\":\"Pot'al\"}"
          ],
          "minecraft:item_name": "{\"color\":\"yellow\",\"italic\":false,\"text\":\"Pot'al\"}",
          "minecraft:custom_data": {
            "pk_data": {
              "custom_block": 1,
              "id": "pot_al",
              "from": "creative_dimension",
              "version": 30000
            }
          },
          "minecraft:profile": {
            "properties": [
              {
                "name": "textures",
                "value": "eyJ0ZXh0dXJlcyI6eyJTS0lOIjp7InVybCI6Imh0dHBzOi8vdGV4dHVyZXMubWluZWNyYWZ0Lm5ldC90ZXh0dXJlL2Q0NWEyZTU1ZDY3YmEwM2Q4ZGMyMmJlNGI5ZGQ0MzJiYmI2ZDhiN2U1MDQ1N2FhNGQzOTc3ZTNiYjEyZWVhNTIifX19"
              }
            ]
          }
        }
      }
    })

})