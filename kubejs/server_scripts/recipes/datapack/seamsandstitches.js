// 原配方快照（从 kubejs/data 移入）
// 命名空间: seamsandstitches | 配方 29 条 | 保留原 id
ServerEvents.recipes(event => {
    event.custom({
      "type": "seamsandstitches:sewing_pattern",
      "texture": "cold_sweat:textures/item/chameleon_boots.png",
      "output": {
        "id": "cold_sweat:chameleon_boots",
        "count": 1
      },
      "ingredients": [
        {
          "item": "cold_sweat:chameleon_molt"
        },
        {
          "item": "cold_sweat:chameleon_molt"
        },
        {
          "item": "cold_sweat:chameleon_molt"
        },
        {
          "item": "cold_sweat:chameleon_molt"
        },
        {
          "item": "minecraft:string"
        }
      ],
      "seams": [
        {
          "id": "left_shaft",
          "path": [
            [
              3,
              8
            ],
            [
              3,
              7
            ],
            [
              3,
              6
            ],
            [
              3,
              5
            ],
            [
              3,
              4
            ],
            [
              4,
              3
            ],
            [
              5,
              3
            ],
            [
              6,
              3
            ],
            [
              6,
              4
            ],
            [
              6,
              5
            ],
            [
              6,
              6
            ],
            [
              6,
              7
            ],
            [
              6,
              8
            ],
            [
              6,
              9
            ],
            [
              6,
              10
            ]
          ],
          "speed": 1
        },
        {
          "id": "right_shaft",
          "path": [
            [
              12,
              8
            ],
            [
              12,
              7
            ],
            [
              12,
              6
            ],
            [
              12,
              5
            ],
            [
              12,
              4
            ],
            [
              11,
              3
            ],
            [
              10,
              3
            ],
            [
              9,
              3
            ],
            [
              9,
              4
            ],
            [
              9,
              5
            ],
            [
              9,
              6
            ],
            [
              9,
              7
            ],
            [
              9,
              8
            ],
            [
              9,
              9
            ],
            [
              9,
              10
            ]
          ],
          "speed": 1
        },
        {
          "id": "left_sole",
          "path": [
            [
              2,
              9
            ],
            [
              1,
              10
            ],
            [
              1,
              11
            ],
            [
              1,
              12
            ],
            [
              2,
              12
            ],
            [
              3,
              12
            ],
            [
              4,
              12
            ],
            [
              5,
              11
            ],
            [
              6,
              11
            ]
          ],
          "speed": 1
        },
        {
          "id": "right_sole",
          "path": [
            [
              13,
              9
            ],
            [
              14,
              10
            ],
            [
              14,
              11
            ],
            [
              14,
              12
            ],
            [
              13,
              12
            ],
            [
              12,
              12
            ],
            [
              11,
              12
            ],
            [
              10,
              11
            ],
            [
              9,
              11
            ]
          ],
          "speed": 1
        }
      ],
      "quality_breakpoints": {
        "poor": 0.25,
        "well": 0.5,
        "expert": 0.75,
        "master": 0.95
      },
      "quality_bonuses": [
        {
          "attribute": "cold_sweat:cold_dampening",
          "slot": "feet",
          "poor": -0.02,
          "well": 0,
          "expert": 0.04,
          "master": 0.08
        },
        {
          "attribute": "cold_sweat:heat_dampening",
          "slot": "feet",
          "poor": -0.02,
          "well": 0,
          "expert": 0.04,
          "master": 0.08
        }
      ],
      "crafts_to_master": 3
    }).id('seamsandstitches:sewing_pattern_chameleon_boots')

    event.custom({
      "type": "seamsandstitches:sewing_pattern",
      "texture": "cold_sweat:textures/item/chameleon_chestplate.png",
      "output": {
        "id": "cold_sweat:chameleon_chestplate",
        "count": 1
      },
      "ingredients": [
        {
          "item": "cold_sweat:chameleon_molt"
        },
        {
          "item": "cold_sweat:chameleon_molt"
        },
        {
          "item": "cold_sweat:chameleon_molt"
        },
        {
          "item": "cold_sweat:chameleon_molt"
        },
        {
          "item": "cold_sweat:chameleon_molt"
        },
        {
          "item": "cold_sweat:chameleon_molt"
        },
        {
          "item": "cold_sweat:chameleon_molt"
        },
        {
          "item": "cold_sweat:chameleon_molt"
        }
      ],
      "seams": [
        {
          "id": "collar",
          "path": [
            [
              5,
              2
            ],
            [
              5,
              3
            ],
            [
              6,
              4
            ],
            [
              7,
              5
            ],
            [
              8,
              5
            ],
            [
              9,
              4
            ],
            [
              10,
              3
            ],
            [
              10,
              2
            ]
          ],
          "speed": 1
        },
        {
          "id": "left_sleeve",
          "path": [
            [
              4,
              2
            ],
            [
              3,
              2
            ],
            [
              2,
              2
            ],
            [
              1,
              2
            ],
            [
              1,
              3
            ],
            [
              1,
              4
            ],
            [
              1,
              5
            ],
            [
              1,
              6
            ],
            [
              1,
              7
            ]
          ],
          "speed": 1
        },
        {
          "id": "right_sleeve",
          "path": [
            [
              11,
              2
            ],
            [
              12,
              2
            ],
            [
              13,
              2
            ],
            [
              14,
              2
            ],
            [
              14,
              3
            ],
            [
              14,
              4
            ],
            [
              14,
              5
            ],
            [
              14,
              6
            ],
            [
              14,
              7
            ]
          ],
          "speed": 1
        },
        {
          "id": "torso",
          "path": [
            [
              3,
              8
            ],
            [
              3,
              9
            ],
            [
              3,
              10
            ],
            [
              3,
              11
            ],
            [
              4,
              12
            ],
            [
              5,
              13
            ],
            [
              6,
              13
            ],
            [
              7,
              13
            ],
            [
              8,
              13
            ],
            [
              9,
              13
            ],
            [
              10,
              13
            ],
            [
              11,
              12
            ],
            [
              12,
              11
            ],
            [
              12,
              10
            ],
            [
              12,
              9
            ],
            [
              12,
              8
            ]
          ],
          "speed": 1
        }
      ],
      "quality_breakpoints": {
        "poor": 0.25,
        "well": 0.5,
        "expert": 0.75,
        "master": 0.95
      },
      "quality_bonuses": [
        {
          "attribute": "cold_sweat:cold_dampening",
          "slot": "chest",
          "poor": -0.02,
          "well": 0,
          "expert": 0.07,
          "master": 0.14
        },
        {
          "attribute": "cold_sweat:heat_dampening",
          "slot": "chest",
          "poor": -0.02,
          "well": 0,
          "expert": 0.07,
          "master": 0.14
        }
      ]
    }).id('seamsandstitches:sewing_pattern_chameleon_chestplate')

    event.custom({
      "type": "seamsandstitches:sewing_pattern",
      "texture": "cold_sweat:textures/item/chameleon_helmet.png",
      "output": {
        "id": "cold_sweat:chameleon_helmet",
        "count": 1
      },
      "ingredients": [
        {
          "item": "cold_sweat:chameleon_molt"
        },
        {
          "item": "cold_sweat:chameleon_molt"
        },
        {
          "item": "cold_sweat:chameleon_molt"
        },
        {
          "item": "cold_sweat:chameleon_molt"
        },
        {
          "item": "cold_sweat:chameleon_molt"
        }
      ],
      "seams": [
        {
          "id": "crown",
          "path": [
            [
              4,
              11
            ],
            [
              3,
              10
            ],
            [
              3,
              9
            ],
            [
              3,
              8
            ],
            [
              3,
              7
            ],
            [
              3,
              6
            ],
            [
              4,
              5
            ],
            [
              5,
              4
            ],
            [
              5,
              3
            ],
            [
              6,
              3
            ],
            [
              7,
              3
            ],
            [
              8,
              3
            ],
            [
              9,
              3
            ],
            [
              10,
              3
            ],
            [
              10,
              4
            ],
            [
              10,
              5
            ],
            [
              12,
              6
            ],
            [
              12,
              7
            ],
            [
              12,
              8
            ],
            [
              12,
              9
            ],
            [
              12,
              10
            ],
            [
              11,
              11
            ]
          ],
          "speed": 1
        },
        {
          "id": "left_strap",
          "path": [
            [
              6,
              4
            ],
            [
              6,
              5
            ],
            [
              6,
              6
            ],
            [
              7,
              7
            ],
            [
              6,
              7
            ],
            [
              5,
              8
            ],
            [
              5,
              9
            ],
            [
              5,
              10
            ],
            [
              5,
              11
            ]
          ],
          "speed": 1
        },
        {
          "id": "right_strap",
          "path": [
            [
              9,
              4
            ],
            [
              9,
              5
            ],
            [
              9,
              6
            ],
            [
              8,
              7
            ],
            [
              9,
              7
            ],
            [
              10,
              8
            ],
            [
              10,
              9
            ],
            [
              10,
              10
            ],
            [
              10,
              11
            ]
          ],
          "speed": 1
        }
      ],
      "quality_breakpoints": {
        "poor": 0.25,
        "well": 0.5,
        "expert": 0.75,
        "master": 0.95
      },
      "quality_bonuses": [
        {
          "attribute": "cold_sweat:cold_dampening",
          "slot": "head",
          "poor": -0.02,
          "well": 0,
          "expert": 0.05,
          "master": 0.1
        },
        {
          "attribute": "cold_sweat:heat_dampening",
          "slot": "head",
          "poor": -0.02,
          "well": 0,
          "expert": 0.05,
          "master": 0.1
        }
      ]
    }).id('seamsandstitches:sewing_pattern_chameleon_helmet')

    event.custom({
      "type": "seamsandstitches:sewing_pattern",
      "texture": "cold_sweat:textures/item/chameleon_leggings.png",
      "output": {
        "id": "cold_sweat:chameleon_leggings",
        "count": 1
      },
      "ingredients": [
        {
          "item": "cold_sweat:chameleon_molt"
        },
        {
          "item": "cold_sweat:chameleon_molt"
        },
        {
          "item": "cold_sweat:chameleon_molt"
        },
        {
          "item": "cold_sweat:chameleon_molt"
        },
        {
          "item": "cold_sweat:chameleon_molt"
        },
        {
          "item": "cold_sweat:chameleon_molt"
        },
        {
          "item": "cold_sweat:chameleon_molt"
        }
      ],
      "seams": [
        {
          "id": "waistband",
          "path": [
            [
              4,
              2
            ],
            [
              5,
              2
            ],
            [
              6,
              2
            ],
            [
              7,
              2
            ],
            [
              8,
              2
            ],
            [
              9,
              2
            ],
            [
              10,
              2
            ],
            [
              11,
              2
            ]
          ],
          "speed": 1
        },
        {
          "id": "left_outer_leg",
          "path": [
            [
              3,
              3
            ],
            [
              3,
              4
            ],
            [
              3,
              5
            ],
            [
              3,
              6
            ],
            [
              3,
              7
            ],
            [
              3,
              8
            ],
            [
              3,
              9
            ],
            [
              3,
              10
            ],
            [
              3,
              11
            ],
            [
              3,
              12
            ],
            [
              3,
              13
            ],
            [
              4,
              13
            ]
          ],
          "speed": 1
        },
        {
          "id": "right_outer_leg",
          "path": [
            [
              12,
              3
            ],
            [
              12,
              4
            ],
            [
              12,
              5
            ],
            [
              12,
              6
            ],
            [
              12,
              7
            ],
            [
              12,
              8
            ],
            [
              12,
              9
            ],
            [
              12,
              10
            ],
            [
              12,
              11
            ],
            [
              12,
              12
            ],
            [
              12,
              13
            ],
            [
              11,
              13
            ]
          ],
          "speed": 1
        },
        {
          "id": "right_inner_leg",
          "path": [
            [
              8,
              6
            ],
            [
              9,
              6
            ],
            [
              9,
              7
            ],
            [
              9,
              8
            ],
            [
              9,
              9
            ],
            [
              9,
              10
            ],
            [
              9,
              11
            ],
            [
              9,
              12
            ],
            [
              9,
              13
            ],
            [
              10,
              13
            ]
          ],
          "speed": 1
        },
        {
          "id": "left_inner_leg",
          "path": [
            [
              7,
              6
            ],
            [
              6,
              6
            ],
            [
              6,
              7
            ],
            [
              6,
              8
            ],
            [
              6,
              9
            ],
            [
              6,
              10
            ],
            [
              6,
              11
            ],
            [
              6,
              12
            ],
            [
              6,
              13
            ],
            [
              5,
              13
            ]
          ],
          "speed": 1
        }
      ],
      "quality_breakpoints": {
        "poor": 0.25,
        "well": 0.5,
        "expert": 0.75,
        "master": 0.95
      },
      "quality_bonuses": [
        {
          "attribute": "cold_sweat:cold_dampening",
          "slot": "legs",
          "poor": -0.02,
          "well": 0,
          "expert": 0.06,
          "master": 0.12
        },
        {
          "attribute": "cold_sweat:heat_dampening",
          "slot": "legs",
          "poor": -0.02,
          "well": 0,
          "expert": 0.06,
          "master": 0.12
        }
      ]
    }).id('seamsandstitches:sewing_pattern_chameleon_leggings')

    event.custom({
      "type": "seamsandstitches:sewing_pattern",
      "texture": "cold_sweat:textures/item/goat_fur_boots.png",
      "output": {
        "id": "cold_sweat:goat_fur_boots",
        "count": 1
      },
      "ingredients": [
        {
          "item": "cold_sweat:goat_fur"
        },
        {
          "item": "cold_sweat:goat_fur"
        },
        {
          "item": "cold_sweat:goat_fur"
        },
        {
          "item": "cold_sweat:goat_fur"
        },
        {
          "item": "minecraft:string"
        }
      ],
      "seams": [
        {
          "id": "left_shaft",
          "path": [
            [
              3,
              8
            ],
            [
              3,
              7
            ],
            [
              3,
              6
            ],
            [
              3,
              5
            ],
            [
              3,
              4
            ],
            [
              4,
              3
            ],
            [
              5,
              3
            ],
            [
              6,
              3
            ],
            [
              6,
              4
            ],
            [
              6,
              5
            ],
            [
              6,
              6
            ],
            [
              6,
              7
            ],
            [
              6,
              8
            ],
            [
              6,
              9
            ],
            [
              6,
              10
            ]
          ],
          "speed": 1
        },
        {
          "id": "right_shaft",
          "path": [
            [
              12,
              8
            ],
            [
              12,
              7
            ],
            [
              12,
              6
            ],
            [
              12,
              5
            ],
            [
              12,
              4
            ],
            [
              11,
              3
            ],
            [
              10,
              3
            ],
            [
              9,
              3
            ],
            [
              9,
              4
            ],
            [
              9,
              5
            ],
            [
              9,
              6
            ],
            [
              9,
              7
            ],
            [
              9,
              8
            ],
            [
              9,
              9
            ],
            [
              9,
              10
            ]
          ],
          "speed": 1
        },
        {
          "id": "left_sole",
          "path": [
            [
              2,
              9
            ],
            [
              1,
              10
            ],
            [
              1,
              11
            ],
            [
              1,
              12
            ],
            [
              2,
              12
            ],
            [
              3,
              12
            ],
            [
              4,
              12
            ],
            [
              5,
              11
            ],
            [
              6,
              11
            ]
          ],
          "speed": 1
        },
        {
          "id": "right_sole",
          "path": [
            [
              13,
              9
            ],
            [
              14,
              10
            ],
            [
              14,
              11
            ],
            [
              14,
              12
            ],
            [
              13,
              12
            ],
            [
              12,
              12
            ],
            [
              11,
              12
            ],
            [
              10,
              11
            ],
            [
              9,
              11
            ]
          ],
          "speed": 1
        }
      ],
      "quality_breakpoints": {
        "poor": 0.25,
        "well": 0.5,
        "expert": 0.75,
        "master": 0.95
      },
      "quality_bonuses": [
        {
          "attribute": "cold_sweat:cold_dampening",
          "slot": "feet",
          "poor": -0.02,
          "well": 0,
          "expert": 0.04,
          "master": 0.08
        }
      ],
      "crafts_to_master": 3
    }).id('seamsandstitches:sewing_pattern_goat_fur_boots')

    event.custom({
      "type": "seamsandstitches:sewing_pattern",
      "texture": "cold_sweat:textures/item/goat_fur_boots.png",
      "output": {
        "id": "cold_sweat:goat_fur_boots",
        "count": 1
      },
      "ingredients": [
        {
          "item": "alexsmobs:bison_fur"
        },
        {
          "item": "alexsmobs:bison_fur"
        },
        {
          "item": "alexsmobs:bison_fur"
        },
        {
          "item": "alexsmobs:bison_fur"
        },
        {
          "item": "minecraft:string"
        }
      ],
      "seams": [
        {
          "id": "left_shaft",
          "path": [
            [
              3,
              8
            ],
            [
              3,
              7
            ],
            [
              3,
              6
            ],
            [
              3,
              5
            ],
            [
              3,
              4
            ],
            [
              4,
              3
            ],
            [
              5,
              3
            ],
            [
              6,
              3
            ],
            [
              6,
              4
            ],
            [
              6,
              5
            ],
            [
              6,
              6
            ],
            [
              6,
              7
            ],
            [
              6,
              8
            ],
            [
              6,
              9
            ],
            [
              6,
              10
            ]
          ],
          "speed": 1
        },
        {
          "id": "right_shaft",
          "path": [
            [
              12,
              8
            ],
            [
              12,
              7
            ],
            [
              12,
              6
            ],
            [
              12,
              5
            ],
            [
              12,
              4
            ],
            [
              11,
              3
            ],
            [
              10,
              3
            ],
            [
              9,
              3
            ],
            [
              9,
              4
            ],
            [
              9,
              5
            ],
            [
              9,
              6
            ],
            [
              9,
              7
            ],
            [
              9,
              8
            ],
            [
              9,
              9
            ],
            [
              9,
              10
            ]
          ],
          "speed": 1
        },
        {
          "id": "left_sole",
          "path": [
            [
              2,
              9
            ],
            [
              1,
              10
            ],
            [
              1,
              11
            ],
            [
              1,
              12
            ],
            [
              2,
              12
            ],
            [
              3,
              12
            ],
            [
              4,
              12
            ],
            [
              5,
              11
            ],
            [
              6,
              11
            ]
          ],
          "speed": 1
        },
        {
          "id": "right_sole",
          "path": [
            [
              13,
              9
            ],
            [
              14,
              10
            ],
            [
              14,
              11
            ],
            [
              14,
              12
            ],
            [
              13,
              12
            ],
            [
              12,
              12
            ],
            [
              11,
              12
            ],
            [
              10,
              11
            ],
            [
              9,
              11
            ]
          ],
          "speed": 1
        }
      ],
      "quality_breakpoints": {
        "poor": 0.25,
        "well": 0.5,
        "expert": 0.75,
        "master": 0.95
      },
      "quality_bonuses": [
        {
          "attribute": "cold_sweat:cold_dampening",
          "slot": "feet",
          "poor": -0.02,
          "well": 0,
          "expert": 0.04,
          "master": 0.08
        }
      ],
      "crafts_to_master": 3
    }).id('seamsandstitches:sewing_pattern_goat_fur_boots2')

    event.custom({
      "type": "seamsandstitches:sewing_pattern",
      "texture": "cold_sweat:textures/item/goat_fur_boots.png",
      "output": {
        "id": "cold_sweat:goat_fur_boots",
        "count": 1
      },
      "ingredients": [
        {
          "item": "alexsmobs:bear_fur"
        },
        {
          "item": "alexsmobs:bear_fur"
        },
        {
          "item": "alexsmobs:bear_fur"
        },
        {
          "item": "alexsmobs:bear_fur"
        },
        {
          "item": "minecraft:string"
        }
      ],
      "seams": [
        {
          "id": "left_shaft",
          "path": [
            [
              3,
              8
            ],
            [
              3,
              7
            ],
            [
              3,
              6
            ],
            [
              3,
              5
            ],
            [
              3,
              4
            ],
            [
              4,
              3
            ],
            [
              5,
              3
            ],
            [
              6,
              3
            ],
            [
              6,
              4
            ],
            [
              6,
              5
            ],
            [
              6,
              6
            ],
            [
              6,
              7
            ],
            [
              6,
              8
            ],
            [
              6,
              9
            ],
            [
              6,
              10
            ]
          ],
          "speed": 1
        },
        {
          "id": "right_shaft",
          "path": [
            [
              12,
              8
            ],
            [
              12,
              7
            ],
            [
              12,
              6
            ],
            [
              12,
              5
            ],
            [
              12,
              4
            ],
            [
              11,
              3
            ],
            [
              10,
              3
            ],
            [
              9,
              3
            ],
            [
              9,
              4
            ],
            [
              9,
              5
            ],
            [
              9,
              6
            ],
            [
              9,
              7
            ],
            [
              9,
              8
            ],
            [
              9,
              9
            ],
            [
              9,
              10
            ]
          ],
          "speed": 1
        },
        {
          "id": "left_sole",
          "path": [
            [
              2,
              9
            ],
            [
              1,
              10
            ],
            [
              1,
              11
            ],
            [
              1,
              12
            ],
            [
              2,
              12
            ],
            [
              3,
              12
            ],
            [
              4,
              12
            ],
            [
              5,
              11
            ],
            [
              6,
              11
            ]
          ],
          "speed": 1
        },
        {
          "id": "right_sole",
          "path": [
            [
              13,
              9
            ],
            [
              14,
              10
            ],
            [
              14,
              11
            ],
            [
              14,
              12
            ],
            [
              13,
              12
            ],
            [
              12,
              12
            ],
            [
              11,
              12
            ],
            [
              10,
              11
            ],
            [
              9,
              11
            ]
          ],
          "speed": 1
        }
      ],
      "quality_breakpoints": {
        "poor": 0.25,
        "well": 0.5,
        "expert": 0.75,
        "master": 0.95
      },
      "quality_bonuses": [
        {
          "attribute": "cold_sweat:cold_dampening",
          "slot": "feet",
          "poor": -0.02,
          "well": 0,
          "expert": 0.04,
          "master": 0.08
        }
      ],
      "crafts_to_master": 3
    }).id('seamsandstitches:sewing_pattern_goat_fur_boots3')

    event.custom({
      "type": "seamsandstitches:sewing_pattern",
      "texture": "cold_sweat:textures/item/goat_fur_chestplate.png",
      "output": {
        "id": "cold_sweat:goat_fur_chestplate",
        "count": 1
      },
      "ingredients": [
        {
          "item": "cold_sweat:goat_fur"
        },
        {
          "item": "cold_sweat:goat_fur"
        },
        {
          "item": "cold_sweat:goat_fur"
        },
        {
          "item": "cold_sweat:goat_fur"
        },
        {
          "item": "cold_sweat:goat_fur"
        },
        {
          "item": "cold_sweat:goat_fur"
        },
        {
          "item": "cold_sweat:goat_fur"
        },
        {
          "item": "cold_sweat:goat_fur"
        }
      ],
      "seams": [
        {
          "id": "collar",
          "path": [
            [
              5,
              2
            ],
            [
              5,
              3
            ],
            [
              6,
              4
            ],
            [
              7,
              5
            ],
            [
              8,
              5
            ],
            [
              9,
              4
            ],
            [
              10,
              3
            ],
            [
              10,
              2
            ]
          ],
          "speed": 1
        },
        {
          "id": "left_sleeve",
          "path": [
            [
              4,
              2
            ],
            [
              3,
              2
            ],
            [
              2,
              2
            ],
            [
              1,
              3
            ],
            [
              1,
              4
            ],
            [
              1,
              5
            ],
            [
              1,
              6
            ],
            [
              1,
              7
            ],
            [
              2,
              7
            ]
          ],
          "speed": 1
        },
        {
          "id": "right_sleeve",
          "path": [
            [
              11,
              2
            ],
            [
              12,
              2
            ],
            [
              13,
              2
            ],
            [
              14,
              3
            ],
            [
              14,
              4
            ],
            [
              14,
              5
            ],
            [
              14,
              6
            ],
            [
              14,
              7
            ],
            [
              13,
              7
            ]
          ],
          "speed": 1
        },
        {
          "id": "torso",
          "path": [
            [
              3,
              8
            ],
            [
              3,
              9
            ],
            [
              3,
              10
            ],
            [
              3,
              11
            ],
            [
              3,
              12
            ],
            [
              4,
              13
            ],
            [
              5,
              14
            ],
            [
              6,
              14
            ],
            [
              7,
              14
            ],
            [
              8,
              14
            ],
            [
              9,
              14
            ],
            [
              10,
              14
            ],
            [
              11,
              13
            ],
            [
              12,
              12
            ],
            [
              12,
              11
            ],
            [
              12,
              10
            ],
            [
              12,
              9
            ],
            [
              12,
              8
            ]
          ],
          "speed": 1
        }
      ],
      "quality_breakpoints": {
        "poor": 0.25,
        "well": 0.5,
        "expert": 0.75,
        "master": 0.95
      },
      "quality_bonuses": [
        {
          "attribute": "cold_sweat:cold_dampening",
          "slot": "chest",
          "poor": -0.02,
          "well": 0,
          "expert": 0.07,
          "master": 0.14
        }
      ]
    }).id('seamsandstitches:sewing_pattern_goat_fur_chestplate')

    event.custom({
      "type": "seamsandstitches:sewing_pattern",
      "texture": "cold_sweat:textures/item/goat_fur_chestplate.png",
      "output": {
        "id": "cold_sweat:goat_fur_chestplate",
        "count": 1
      },
      "ingredients": [
        {
          "item": "alexsmobs:bison_fur"
        },
        {
          "item": "alexsmobs:bison_fur"
        },
        {
          "item": "alexsmobs:bison_fur"
        },
        {
          "item": "alexsmobs:bison_fur"
        },
        {
          "item": "alexsmobs:bison_fur"
        },
        {
          "item": "alexsmobs:bison_fur"
        },
        {
          "item": "alexsmobs:bison_fur"
        },
        {
          "item": "alexsmobs:bison_fur"
        }
      ],
      "seams": [
        {
          "id": "collar",
          "path": [
            [
              5,
              2
            ],
            [
              5,
              3
            ],
            [
              6,
              4
            ],
            [
              7,
              5
            ],
            [
              8,
              5
            ],
            [
              9,
              4
            ],
            [
              10,
              3
            ],
            [
              10,
              2
            ]
          ],
          "speed": 1
        },
        {
          "id": "left_sleeve",
          "path": [
            [
              4,
              2
            ],
            [
              3,
              2
            ],
            [
              2,
              2
            ],
            [
              1,
              3
            ],
            [
              1,
              4
            ],
            [
              1,
              5
            ],
            [
              1,
              6
            ],
            [
              1,
              7
            ],
            [
              2,
              7
            ]
          ],
          "speed": 1
        },
        {
          "id": "right_sleeve",
          "path": [
            [
              11,
              2
            ],
            [
              12,
              2
            ],
            [
              13,
              2
            ],
            [
              14,
              3
            ],
            [
              14,
              4
            ],
            [
              14,
              5
            ],
            [
              14,
              6
            ],
            [
              14,
              7
            ],
            [
              13,
              7
            ]
          ],
          "speed": 1
        },
        {
          "id": "torso",
          "path": [
            [
              3,
              8
            ],
            [
              3,
              9
            ],
            [
              3,
              10
            ],
            [
              3,
              11
            ],
            [
              3,
              12
            ],
            [
              4,
              13
            ],
            [
              5,
              14
            ],
            [
              6,
              14
            ],
            [
              7,
              14
            ],
            [
              8,
              14
            ],
            [
              9,
              14
            ],
            [
              10,
              14
            ],
            [
              11,
              13
            ],
            [
              12,
              12
            ],
            [
              12,
              11
            ],
            [
              12,
              10
            ],
            [
              12,
              9
            ],
            [
              12,
              8
            ]
          ],
          "speed": 1
        }
      ],
      "quality_breakpoints": {
        "poor": 0.25,
        "well": 0.5,
        "expert": 0.75,
        "master": 0.95
      },
      "quality_bonuses": [
        {
          "attribute": "cold_sweat:cold_dampening",
          "slot": "chest",
          "poor": -0.02,
          "well": 0,
          "expert": 0.07,
          "master": 0.14
        }
      ]
    }).id('seamsandstitches:sewing_pattern_goat_fur_chestplate2')

    event.custom({
      "type": "seamsandstitches:sewing_pattern",
      "texture": "cold_sweat:textures/item/goat_fur_chestplate.png",
      "output": {
        "id": "cold_sweat:goat_fur_chestplate",
        "count": 1
      },
      "ingredients": [
        {
          "item": "alexsmobs:bear_fur"
        },
        {
          "item": "alexsmobs:bear_fur"
        },
        {
          "item": "alexsmobs:bear_fur"
        },
        {
          "item": "alexsmobs:bear_fur"
        },
        {
          "item": "alexsmobs:bear_fur"
        },
        {
          "item": "alexsmobs:bear_fur"
        },
        {
          "item": "alexsmobs:bear_fur"
        },
        {
          "item": "alexsmobs:bear_fur"
        }
      ],
      "seams": [
        {
          "id": "collar",
          "path": [
            [
              5,
              2
            ],
            [
              5,
              3
            ],
            [
              6,
              4
            ],
            [
              7,
              5
            ],
            [
              8,
              5
            ],
            [
              9,
              4
            ],
            [
              10,
              3
            ],
            [
              10,
              2
            ]
          ],
          "speed": 1
        },
        {
          "id": "left_sleeve",
          "path": [
            [
              4,
              2
            ],
            [
              3,
              2
            ],
            [
              2,
              2
            ],
            [
              1,
              3
            ],
            [
              1,
              4
            ],
            [
              1,
              5
            ],
            [
              1,
              6
            ],
            [
              1,
              7
            ],
            [
              2,
              7
            ]
          ],
          "speed": 1
        },
        {
          "id": "right_sleeve",
          "path": [
            [
              11,
              2
            ],
            [
              12,
              2
            ],
            [
              13,
              2
            ],
            [
              14,
              3
            ],
            [
              14,
              4
            ],
            [
              14,
              5
            ],
            [
              14,
              6
            ],
            [
              14,
              7
            ],
            [
              13,
              7
            ]
          ],
          "speed": 1
        },
        {
          "id": "torso",
          "path": [
            [
              3,
              8
            ],
            [
              3,
              9
            ],
            [
              3,
              10
            ],
            [
              3,
              11
            ],
            [
              3,
              12
            ],
            [
              4,
              13
            ],
            [
              5,
              14
            ],
            [
              6,
              14
            ],
            [
              7,
              14
            ],
            [
              8,
              14
            ],
            [
              9,
              14
            ],
            [
              10,
              14
            ],
            [
              11,
              13
            ],
            [
              12,
              12
            ],
            [
              12,
              11
            ],
            [
              12,
              10
            ],
            [
              12,
              9
            ],
            [
              12,
              8
            ]
          ],
          "speed": 1
        }
      ],
      "quality_breakpoints": {
        "poor": 0.25,
        "well": 0.5,
        "expert": 0.75,
        "master": 0.95
      },
      "quality_bonuses": [
        {
          "attribute": "cold_sweat:cold_dampening",
          "slot": "chest",
          "poor": -0.02,
          "well": 0,
          "expert": 0.07,
          "master": 0.14
        }
      ]
    }).id('seamsandstitches:sewing_pattern_goat_fur_chestplate3')

    event.custom({
      "type": "seamsandstitches:sewing_pattern",
      "texture": "cold_sweat:textures/item/goat_fur_helmet.png",
      "output": {
        "id": "cold_sweat:goat_fur_helmet",
        "count": 1
      },
      "ingredients": [
        {
          "item": "cold_sweat:goat_fur"
        },
        {
          "item": "cold_sweat:goat_fur"
        },
        {
          "item": "cold_sweat:goat_fur"
        },
        {
          "item": "cold_sweat:goat_fur"
        },
        {
          "item": "cold_sweat:goat_fur"
        }
      ],
      "seams": [
        {
          "id": "crown",
          "path": [
            [
              4,
              11
            ],
            [
              3,
              10
            ],
            [
              3,
              9
            ],
            [
              3,
              8
            ],
            [
              3,
              7
            ],
            [
              3,
              6
            ],
            [
              3,
              5
            ],
            [
              4,
              4
            ],
            [
              5,
              3
            ],
            [
              6,
              3
            ],
            [
              7,
              3
            ],
            [
              8,
              3
            ],
            [
              9,
              3
            ],
            [
              10,
              3
            ],
            [
              11,
              4
            ],
            [
              12,
              5
            ],
            [
              12,
              6
            ],
            [
              12,
              7
            ],
            [
              12,
              8
            ],
            [
              12,
              9
            ],
            [
              12,
              10
            ],
            [
              11,
              11
            ]
          ],
          "speed": 1
        },
        {
          "id": "left_strap",
          "path": [
            [
              6,
              4
            ],
            [
              6,
              5
            ],
            [
              6,
              6
            ],
            [
              7,
              7
            ],
            [
              6,
              7
            ],
            [
              5,
              8
            ],
            [
              5,
              9
            ],
            [
              5,
              10
            ],
            [
              5,
              11
            ]
          ],
          "speed": 1
        },
        {
          "id": "right_strap",
          "path": [
            [
              9,
              4
            ],
            [
              9,
              5
            ],
            [
              9,
              6
            ],
            [
              8,
              7
            ],
            [
              9,
              7
            ],
            [
              10,
              8
            ],
            [
              10,
              9
            ],
            [
              10,
              10
            ],
            [
              10,
              11
            ]
          ],
          "speed": 1
        }
      ],
      "quality_breakpoints": {
        "poor": 0.25,
        "well": 0.5,
        "expert": 0.75,
        "master": 0.95
      },
      "quality_bonuses": [
        {
          "attribute": "cold_sweat:cold_dampening",
          "slot": "head",
          "poor": -0.02,
          "well": 0,
          "expert": 0.05,
          "master": 0.1
        }
      ]
    }).id('seamsandstitches:sewing_pattern_goat_fur_helmet')

    event.custom({
      "type": "seamsandstitches:sewing_pattern",
      "texture": "cold_sweat:textures/item/goat_fur_helmet.png",
      "output": {
        "id": "cold_sweat:goat_fur_helmet",
        "count": 1
      },
      "ingredients": [
        {
          "item": "alexsmobs:bison_fur"
        },
        {
          "item": "alexsmobs:bison_fur"
        },
        {
          "item": "alexsmobs:bison_fur"
        },
        {
          "item": "alexsmobs:bison_fur"
        },
        {
          "item": "alexsmobs:bison_fur"
        }
      ],
      "seams": [
        {
          "id": "crown",
          "path": [
            [
              4,
              11
            ],
            [
              3,
              10
            ],
            [
              3,
              9
            ],
            [
              3,
              8
            ],
            [
              3,
              7
            ],
            [
              3,
              6
            ],
            [
              3,
              5
            ],
            [
              4,
              4
            ],
            [
              5,
              3
            ],
            [
              6,
              3
            ],
            [
              7,
              3
            ],
            [
              8,
              3
            ],
            [
              9,
              3
            ],
            [
              10,
              3
            ],
            [
              11,
              4
            ],
            [
              12,
              5
            ],
            [
              12,
              6
            ],
            [
              12,
              7
            ],
            [
              12,
              8
            ],
            [
              12,
              9
            ],
            [
              12,
              10
            ],
            [
              11,
              11
            ]
          ],
          "speed": 1
        },
        {
          "id": "left_strap",
          "path": [
            [
              6,
              4
            ],
            [
              6,
              5
            ],
            [
              6,
              6
            ],
            [
              7,
              7
            ],
            [
              6,
              7
            ],
            [
              5,
              8
            ],
            [
              5,
              9
            ],
            [
              5,
              10
            ],
            [
              5,
              11
            ]
          ],
          "speed": 1
        },
        {
          "id": "right_strap",
          "path": [
            [
              9,
              4
            ],
            [
              9,
              5
            ],
            [
              9,
              6
            ],
            [
              8,
              7
            ],
            [
              9,
              7
            ],
            [
              10,
              8
            ],
            [
              10,
              9
            ],
            [
              10,
              10
            ],
            [
              10,
              11
            ]
          ],
          "speed": 1
        }
      ],
      "quality_breakpoints": {
        "poor": 0.25,
        "well": 0.5,
        "expert": 0.75,
        "master": 0.95
      },
      "quality_bonuses": [
        {
          "attribute": "cold_sweat:cold_dampening",
          "slot": "head",
          "poor": -0.02,
          "well": 0,
          "expert": 0.05,
          "master": 0.1
        }
      ]
    }).id('seamsandstitches:sewing_pattern_goat_fur_helmet2')

    event.custom({
      "type": "seamsandstitches:sewing_pattern",
      "texture": "cold_sweat:textures/item/goat_fur_helmet.png",
      "output": {
        "id": "cold_sweat:goat_fur_helmet",
        "count": 1
      },
      "ingredients": [
        {
          "item": "alexsmobs:bear_fur"
        },
        {
          "item": "alexsmobs:bear_fur"
        },
        {
          "item": "alexsmobs:bear_fur"
        },
        {
          "item": "alexsmobs:bear_fur"
        },
        {
          "item": "alexsmobs:bear_fur"
        }
      ],
      "seams": [
        {
          "id": "crown",
          "path": [
            [
              4,
              11
            ],
            [
              3,
              10
            ],
            [
              3,
              9
            ],
            [
              3,
              8
            ],
            [
              3,
              7
            ],
            [
              3,
              6
            ],
            [
              3,
              5
            ],
            [
              4,
              4
            ],
            [
              5,
              3
            ],
            [
              6,
              3
            ],
            [
              7,
              3
            ],
            [
              8,
              3
            ],
            [
              9,
              3
            ],
            [
              10,
              3
            ],
            [
              11,
              4
            ],
            [
              12,
              5
            ],
            [
              12,
              6
            ],
            [
              12,
              7
            ],
            [
              12,
              8
            ],
            [
              12,
              9
            ],
            [
              12,
              10
            ],
            [
              11,
              11
            ]
          ],
          "speed": 1
        },
        {
          "id": "left_strap",
          "path": [
            [
              6,
              4
            ],
            [
              6,
              5
            ],
            [
              6,
              6
            ],
            [
              7,
              7
            ],
            [
              6,
              7
            ],
            [
              5,
              8
            ],
            [
              5,
              9
            ],
            [
              5,
              10
            ],
            [
              5,
              11
            ]
          ],
          "speed": 1
        },
        {
          "id": "right_strap",
          "path": [
            [
              9,
              4
            ],
            [
              9,
              5
            ],
            [
              9,
              6
            ],
            [
              8,
              7
            ],
            [
              9,
              7
            ],
            [
              10,
              8
            ],
            [
              10,
              9
            ],
            [
              10,
              10
            ],
            [
              10,
              11
            ]
          ],
          "speed": 1
        }
      ],
      "quality_breakpoints": {
        "poor": 0.25,
        "well": 0.5,
        "expert": 0.75,
        "master": 0.95
      },
      "quality_bonuses": [
        {
          "attribute": "cold_sweat:cold_dampening",
          "slot": "head",
          "poor": -0.02,
          "well": 0,
          "expert": 0.05,
          "master": 0.1
        }
      ]
    }).id('seamsandstitches:sewing_pattern_goat_fur_helmet3')

    event.custom({
      "type": "seamsandstitches:sewing_pattern",
      "texture": "cold_sweat:textures/item/goat_fur_leggings.png",
      "output": {
        "id": "cold_sweat:goat_fur_leggings",
        "count": 1
      },
      "ingredients": [
        {
          "item": "cold_sweat:goat_fur"
        },
        {
          "item": "cold_sweat:goat_fur"
        },
        {
          "item": "cold_sweat:goat_fur"
        },
        {
          "item": "cold_sweat:goat_fur"
        },
        {
          "item": "cold_sweat:goat_fur"
        },
        {
          "item": "cold_sweat:goat_fur"
        },
        {
          "item": "cold_sweat:goat_fur"
        }
      ],
      "seams": [
        {
          "id": "waistband",
          "path": [
            [
              4,
              2
            ],
            [
              5,
              2
            ],
            [
              6,
              2
            ],
            [
              7,
              2
            ],
            [
              8,
              2
            ],
            [
              9,
              2
            ],
            [
              10,
              2
            ],
            [
              11,
              2
            ]
          ],
          "speed": 1
        },
        {
          "id": "left_outer_leg",
          "path": [
            [
              3,
              3
            ],
            [
              3,
              4
            ],
            [
              3,
              5
            ],
            [
              3,
              6
            ],
            [
              3,
              7
            ],
            [
              3,
              8
            ],
            [
              3,
              9
            ],
            [
              3,
              10
            ],
            [
              3,
              11
            ],
            [
              3,
              12
            ],
            [
              3,
              13
            ],
            [
              4,
              13
            ]
          ],
          "speed": 1
        },
        {
          "id": "right_outer_leg",
          "path": [
            [
              12,
              3
            ],
            [
              12,
              4
            ],
            [
              12,
              5
            ],
            [
              12,
              6
            ],
            [
              12,
              7
            ],
            [
              12,
              8
            ],
            [
              12,
              9
            ],
            [
              12,
              10
            ],
            [
              12,
              11
            ],
            [
              12,
              12
            ],
            [
              12,
              13
            ],
            [
              11,
              13
            ]
          ],
          "speed": 1
        },
        {
          "id": "right_inner_leg",
          "path": [
            [
              8,
              6
            ],
            [
              9,
              6
            ],
            [
              9,
              7
            ],
            [
              9,
              8
            ],
            [
              9,
              9
            ],
            [
              9,
              10
            ],
            [
              9,
              11
            ],
            [
              9,
              12
            ],
            [
              9,
              13
            ],
            [
              10,
              13
            ]
          ],
          "speed": 1
        },
        {
          "id": "left_inner_leg",
          "path": [
            [
              7,
              6
            ],
            [
              6,
              6
            ],
            [
              6,
              7
            ],
            [
              6,
              8
            ],
            [
              6,
              9
            ],
            [
              6,
              10
            ],
            [
              6,
              11
            ],
            [
              6,
              12
            ],
            [
              6,
              13
            ],
            [
              5,
              13
            ]
          ],
          "speed": 1
        }
      ],
      "quality_breakpoints": {
        "poor": 0.25,
        "well": 0.5,
        "expert": 0.75,
        "master": 0.95
      },
      "quality_bonuses": [
        {
          "attribute": "cold_sweat:cold_dampening",
          "slot": "legs",
          "poor": -0.02,
          "well": 0,
          "expert": 0.06,
          "master": 0.12
        }
      ]
    }).id('seamsandstitches:sewing_pattern_goat_fur_leggings')

    event.custom({
      "type": "seamsandstitches:sewing_pattern",
      "texture": "cold_sweat:textures/item/goat_fur_leggings.png",
      "output": {
        "id": "cold_sweat:goat_fur_leggings",
        "count": 1
      },
      "ingredients": [
        {
          "item": "alexsmobs:bison_fur"
        },
        {
          "item": "alexsmobs:bison_fur"
        },
        {
          "item": "alexsmobs:bison_fur"
        },
        {
          "item": "alexsmobs:bison_fur"
        },
        {
          "item": "alexsmobs:bison_fur"
        },
        {
          "item": "alexsmobs:bison_fur"
        },
        {
          "item": "alexsmobs:bison_fur"
        }
      ],
      "seams": [
        {
          "id": "waistband",
          "path": [
            [
              4,
              2
            ],
            [
              5,
              2
            ],
            [
              6,
              2
            ],
            [
              7,
              2
            ],
            [
              8,
              2
            ],
            [
              9,
              2
            ],
            [
              10,
              2
            ],
            [
              11,
              2
            ]
          ],
          "speed": 1
        },
        {
          "id": "left_outer_leg",
          "path": [
            [
              3,
              3
            ],
            [
              3,
              4
            ],
            [
              3,
              5
            ],
            [
              3,
              6
            ],
            [
              3,
              7
            ],
            [
              3,
              8
            ],
            [
              3,
              9
            ],
            [
              3,
              10
            ],
            [
              3,
              11
            ],
            [
              3,
              12
            ],
            [
              3,
              13
            ],
            [
              4,
              13
            ]
          ],
          "speed": 1
        },
        {
          "id": "right_outer_leg",
          "path": [
            [
              12,
              3
            ],
            [
              12,
              4
            ],
            [
              12,
              5
            ],
            [
              12,
              6
            ],
            [
              12,
              7
            ],
            [
              12,
              8
            ],
            [
              12,
              9
            ],
            [
              12,
              10
            ],
            [
              12,
              11
            ],
            [
              12,
              12
            ],
            [
              12,
              13
            ],
            [
              11,
              13
            ]
          ],
          "speed": 1
        },
        {
          "id": "right_inner_leg",
          "path": [
            [
              8,
              6
            ],
            [
              9,
              6
            ],
            [
              9,
              7
            ],
            [
              9,
              8
            ],
            [
              9,
              9
            ],
            [
              9,
              10
            ],
            [
              9,
              11
            ],
            [
              9,
              12
            ],
            [
              9,
              13
            ],
            [
              10,
              13
            ]
          ],
          "speed": 1
        },
        {
          "id": "left_inner_leg",
          "path": [
            [
              7,
              6
            ],
            [
              6,
              6
            ],
            [
              6,
              7
            ],
            [
              6,
              8
            ],
            [
              6,
              9
            ],
            [
              6,
              10
            ],
            [
              6,
              11
            ],
            [
              6,
              12
            ],
            [
              6,
              13
            ],
            [
              5,
              13
            ]
          ],
          "speed": 1
        }
      ],
      "quality_breakpoints": {
        "poor": 0.25,
        "well": 0.5,
        "expert": 0.75,
        "master": 0.95
      },
      "quality_bonuses": [
        {
          "attribute": "cold_sweat:cold_dampening",
          "slot": "legs",
          "poor": -0.02,
          "well": 0,
          "expert": 0.06,
          "master": 0.12
        }
      ]
    }).id('seamsandstitches:sewing_pattern_goat_fur_leggings2')

    event.custom({
      "type": "seamsandstitches:sewing_pattern",
      "texture": "cold_sweat:textures/item/goat_fur_leggings.png",
      "output": {
        "id": "cold_sweat:goat_fur_leggings",
        "count": 1
      },
      "ingredients": [
        {
          "item": "alexsmobs:bear_fur"
        },
        {
          "item": "alexsmobs:bear_fur"
        },
        {
          "item": "alexsmobs:bear_fur"
        },
        {
          "item": "alexsmobs:bear_fur"
        },
        {
          "item": "alexsmobs:bear_fur"
        },
        {
          "item": "alexsmobs:bear_fur"
        },
        {
          "item": "alexsmobs:bear_fur"
        }
      ],
      "seams": [
        {
          "id": "waistband",
          "path": [
            [
              4,
              2
            ],
            [
              5,
              2
            ],
            [
              6,
              2
            ],
            [
              7,
              2
            ],
            [
              8,
              2
            ],
            [
              9,
              2
            ],
            [
              10,
              2
            ],
            [
              11,
              2
            ]
          ],
          "speed": 1
        },
        {
          "id": "left_outer_leg",
          "path": [
            [
              3,
              3
            ],
            [
              3,
              4
            ],
            [
              3,
              5
            ],
            [
              3,
              6
            ],
            [
              3,
              7
            ],
            [
              3,
              8
            ],
            [
              3,
              9
            ],
            [
              3,
              10
            ],
            [
              3,
              11
            ],
            [
              3,
              12
            ],
            [
              3,
              13
            ],
            [
              4,
              13
            ]
          ],
          "speed": 1
        },
        {
          "id": "right_outer_leg",
          "path": [
            [
              12,
              3
            ],
            [
              12,
              4
            ],
            [
              12,
              5
            ],
            [
              12,
              6
            ],
            [
              12,
              7
            ],
            [
              12,
              8
            ],
            [
              12,
              9
            ],
            [
              12,
              10
            ],
            [
              12,
              11
            ],
            [
              12,
              12
            ],
            [
              12,
              13
            ],
            [
              11,
              13
            ]
          ],
          "speed": 1
        },
        {
          "id": "right_inner_leg",
          "path": [
            [
              8,
              6
            ],
            [
              9,
              6
            ],
            [
              9,
              7
            ],
            [
              9,
              8
            ],
            [
              9,
              9
            ],
            [
              9,
              10
            ],
            [
              9,
              11
            ],
            [
              9,
              12
            ],
            [
              9,
              13
            ],
            [
              10,
              13
            ]
          ],
          "speed": 1
        },
        {
          "id": "left_inner_leg",
          "path": [
            [
              7,
              6
            ],
            [
              6,
              6
            ],
            [
              6,
              7
            ],
            [
              6,
              8
            ],
            [
              6,
              9
            ],
            [
              6,
              10
            ],
            [
              6,
              11
            ],
            [
              6,
              12
            ],
            [
              6,
              13
            ],
            [
              5,
              13
            ]
          ],
          "speed": 1
        }
      ],
      "quality_breakpoints": {
        "poor": 0.25,
        "well": 0.5,
        "expert": 0.75,
        "master": 0.95
      },
      "quality_bonuses": [
        {
          "attribute": "cold_sweat:cold_dampening",
          "slot": "legs",
          "poor": -0.02,
          "well": 0,
          "expert": 0.06,
          "master": 0.12
        }
      ]
    }).id('seamsandstitches:sewing_pattern_goat_fur_leggings3')

    event.custom({
      "type": "seamsandstitches:sewing_pattern",
      "texture": "cold_sweat:textures/item/hoglin_boots.png",
      "output": {
        "id": "cold_sweat:hoglin_boots",
        "count": 1
      },
      "ingredients": [
        {
          "item": "cold_sweat:hoglin_hide"
        },
        {
          "item": "cold_sweat:hoglin_hide"
        },
        {
          "item": "cold_sweat:hoglin_hide"
        },
        {
          "item": "cold_sweat:hoglin_hide"
        },
        {
          "item": "minecraft:string"
        }
      ],
      "seams": [
        {
          "id": "left_shaft",
          "path": [
            [
              3,
              8
            ],
            [
              3,
              7
            ],
            [
              3,
              6
            ],
            [
              3,
              5
            ],
            [
              3,
              4
            ],
            [
              4,
              3
            ],
            [
              5,
              3
            ],
            [
              6,
              3
            ],
            [
              6,
              4
            ],
            [
              6,
              5
            ],
            [
              6,
              6
            ],
            [
              6,
              7
            ],
            [
              6,
              8
            ],
            [
              6,
              9
            ],
            [
              6,
              10
            ]
          ],
          "speed": 1
        },
        {
          "id": "right_shaft",
          "path": [
            [
              12,
              8
            ],
            [
              12,
              7
            ],
            [
              12,
              6
            ],
            [
              12,
              5
            ],
            [
              12,
              4
            ],
            [
              11,
              3
            ],
            [
              10,
              3
            ],
            [
              9,
              3
            ],
            [
              9,
              4
            ],
            [
              9,
              5
            ],
            [
              9,
              6
            ],
            [
              9,
              7
            ],
            [
              9,
              8
            ],
            [
              9,
              9
            ],
            [
              9,
              10
            ]
          ],
          "speed": 1
        },
        {
          "id": "left_sole",
          "path": [
            [
              2,
              9
            ],
            [
              1,
              10
            ],
            [
              1,
              11
            ],
            [
              1,
              12
            ],
            [
              2,
              12
            ],
            [
              3,
              12
            ],
            [
              4,
              12
            ],
            [
              5,
              11
            ],
            [
              6,
              11
            ]
          ],
          "speed": 1
        },
        {
          "id": "right_sole",
          "path": [
            [
              13,
              9
            ],
            [
              14,
              10
            ],
            [
              14,
              11
            ],
            [
              14,
              12
            ],
            [
              13,
              12
            ],
            [
              12,
              12
            ],
            [
              11,
              12
            ],
            [
              10,
              11
            ],
            [
              9,
              11
            ]
          ],
          "speed": 1
        }
      ],
      "quality_breakpoints": {
        "poor": 0.25,
        "well": 0.5,
        "expert": 0.75,
        "master": 0.95
      },
      "quality_bonuses": [
        {
          "attribute": "cold_sweat:heat_dampening",
          "slot": "feet",
          "poor": -0.02,
          "well": 0,
          "expert": 0.04,
          "master": 0.08
        }
      ],
      "crafts_to_master": 3
    }).id('seamsandstitches:sewing_pattern_hoglin_boots')

    event.custom({
      "type": "seamsandstitches:sewing_pattern",
      "texture": "cold_sweat:textures/item/hoglin_chestplate.png",
      "output": {
        "id": "cold_sweat:hoglin_chestplate",
        "count": 1
      },
      "ingredients": [
        {
          "item": "cold_sweat:hoglin_hide"
        },
        {
          "item": "cold_sweat:hoglin_hide"
        },
        {
          "item": "cold_sweat:hoglin_hide"
        },
        {
          "item": "cold_sweat:hoglin_hide"
        },
        {
          "item": "cold_sweat:hoglin_hide"
        },
        {
          "item": "cold_sweat:hoglin_hide"
        },
        {
          "item": "cold_sweat:hoglin_hide"
        },
        {
          "item": "cold_sweat:hoglin_hide"
        }
      ],
      "seams": [
        {
          "id": "collar",
          "path": [
            [
              5,
              2
            ],
            [
              5,
              3
            ],
            [
              6,
              4
            ],
            [
              7,
              5
            ],
            [
              8,
              5
            ],
            [
              9,
              4
            ],
            [
              10,
              3
            ],
            [
              10,
              2
            ]
          ],
          "speed": 1
        },
        {
          "id": "left_sleeve",
          "path": [
            [
              4,
              2
            ],
            [
              3,
              2
            ],
            [
              2,
              2
            ],
            [
              1,
              2
            ],
            [
              1,
              3
            ],
            [
              1,
              4
            ],
            [
              1,
              5
            ],
            [
              1,
              6
            ],
            [
              1,
              7
            ],
            [
              2,
              7
            ]
          ],
          "speed": 1
        },
        {
          "id": "right_sleeve",
          "path": [
            [
              11,
              2
            ],
            [
              12,
              2
            ],
            [
              13,
              2
            ],
            [
              14,
              2
            ],
            [
              14,
              3
            ],
            [
              14,
              4
            ],
            [
              14,
              5
            ],
            [
              14,
              6
            ],
            [
              14,
              7
            ],
            [
              13,
              7
            ]
          ],
          "speed": 1
        },
        {
          "id": "torso",
          "path": [
            [
              3,
              8
            ],
            [
              3,
              9
            ],
            [
              3,
              10
            ],
            [
              3,
              11
            ],
            [
              3,
              12
            ],
            [
              4,
              13
            ],
            [
              5,
              14
            ],
            [
              6,
              14
            ],
            [
              7,
              14
            ],
            [
              8,
              14
            ],
            [
              9,
              14
            ],
            [
              10,
              14
            ],
            [
              11,
              13
            ],
            [
              12,
              12
            ],
            [
              12,
              11
            ],
            [
              12,
              10
            ],
            [
              12,
              9
            ],
            [
              12,
              8
            ]
          ],
          "speed": 1
        }
      ],
      "quality_breakpoints": {
        "poor": 0.25,
        "well": 0.5,
        "expert": 0.75,
        "master": 0.95
      },
      "quality_bonuses": [
        {
          "attribute": "cold_sweat:heat_dampening",
          "slot": "chest",
          "poor": -0.02,
          "well": 0,
          "expert": 0.07,
          "master": 0.14
        }
      ]
    }).id('seamsandstitches:sewing_pattern_hoglin_chestplate')

    event.custom({
      "type": "seamsandstitches:sewing_pattern",
      "texture": "cold_sweat:textures/item/hoglin_helmet.png",
      "output": {
        "id": "cold_sweat:hoglin_helmet",
        "count": 1
      },
      "ingredients": [
        {
          "item": "cold_sweat:hoglin_hide"
        },
        {
          "item": "cold_sweat:hoglin_hide"
        },
        {
          "item": "cold_sweat:hoglin_hide"
        },
        {
          "item": "cold_sweat:hoglin_hide"
        },
        {
          "item": "cold_sweat:hoglin_hide"
        }
      ],
      "seams": [
        {
          "id": "crown",
          "path": [
            [
              4,
              11
            ],
            [
              3,
              10
            ],
            [
              3,
              9
            ],
            [
              3,
              8
            ],
            [
              3,
              7
            ],
            [
              3,
              6
            ],
            [
              3,
              5
            ],
            [
              4,
              4
            ],
            [
              5,
              3
            ],
            [
              6,
              3
            ],
            [
              7,
              3
            ],
            [
              8,
              3
            ],
            [
              9,
              3
            ],
            [
              10,
              3
            ],
            [
              11,
              4
            ],
            [
              12,
              5
            ],
            [
              12,
              6
            ],
            [
              12,
              7
            ],
            [
              12,
              8
            ],
            [
              12,
              9
            ],
            [
              12,
              10
            ],
            [
              11,
              11
            ]
          ],
          "speed": 1
        },
        {
          "id": "left_strap",
          "path": [
            [
              6,
              4
            ],
            [
              6,
              5
            ],
            [
              6,
              6
            ],
            [
              7,
              7
            ],
            [
              6,
              7
            ],
            [
              5,
              8
            ],
            [
              5,
              9
            ],
            [
              5,
              10
            ],
            [
              5,
              11
            ]
          ],
          "speed": 1
        },
        {
          "id": "right_strap",
          "path": [
            [
              9,
              4
            ],
            [
              9,
              5
            ],
            [
              9,
              6
            ],
            [
              8,
              7
            ],
            [
              9,
              7
            ],
            [
              10,
              8
            ],
            [
              10,
              9
            ],
            [
              10,
              10
            ],
            [
              10,
              11
            ]
          ],
          "speed": 1
        }
      ],
      "quality_breakpoints": {
        "poor": 0.25,
        "well": 0.5,
        "expert": 0.75,
        "master": 0.95
      },
      "quality_bonuses": [
        {
          "attribute": "cold_sweat:heat_dampening",
          "slot": "head",
          "poor": -0.02,
          "well": 0,
          "expert": 0.05,
          "master": 0.1
        }
      ]
    }).id('seamsandstitches:sewing_pattern_hoglin_helmet')

    event.custom({
      "type": "seamsandstitches:sewing_pattern",
      "texture": "cold_sweat:textures/item/hoglin_leggings.png",
      "output": {
        "id": "cold_sweat:hoglin_leggings",
        "count": 1
      },
      "ingredients": [
        {
          "item": "cold_sweat:hoglin_hide"
        },
        {
          "item": "cold_sweat:hoglin_hide"
        },
        {
          "item": "cold_sweat:hoglin_hide"
        },
        {
          "item": "cold_sweat:hoglin_hide"
        },
        {
          "item": "cold_sweat:hoglin_hide"
        },
        {
          "item": "cold_sweat:hoglin_hide"
        },
        {
          "item": "cold_sweat:hoglin_hide"
        }
      ],
      "seams": [
        {
          "id": "waistband",
          "path": [
            [
              4,
              2
            ],
            [
              5,
              2
            ],
            [
              6,
              2
            ],
            [
              7,
              2
            ],
            [
              8,
              2
            ],
            [
              9,
              2
            ],
            [
              10,
              2
            ],
            [
              11,
              2
            ]
          ],
          "speed": 1
        },
        {
          "id": "left_outer_leg",
          "path": [
            [
              3,
              3
            ],
            [
              3,
              4
            ],
            [
              3,
              5
            ],
            [
              3,
              6
            ],
            [
              3,
              7
            ],
            [
              3,
              8
            ],
            [
              3,
              9
            ],
            [
              3,
              10
            ],
            [
              3,
              11
            ],
            [
              3,
              12
            ],
            [
              3,
              13
            ],
            [
              4,
              13
            ]
          ],
          "speed": 1
        },
        {
          "id": "right_outer_leg",
          "path": [
            [
              12,
              3
            ],
            [
              12,
              4
            ],
            [
              12,
              5
            ],
            [
              12,
              6
            ],
            [
              12,
              7
            ],
            [
              12,
              8
            ],
            [
              12,
              9
            ],
            [
              12,
              10
            ],
            [
              12,
              11
            ],
            [
              12,
              12
            ],
            [
              12,
              13
            ],
            [
              11,
              13
            ]
          ],
          "speed": 1
        },
        {
          "id": "right_inner_leg",
          "path": [
            [
              8,
              6
            ],
            [
              9,
              6
            ],
            [
              9,
              7
            ],
            [
              9,
              8
            ],
            [
              9,
              9
            ],
            [
              9,
              10
            ],
            [
              9,
              11
            ],
            [
              9,
              12
            ],
            [
              9,
              13
            ],
            [
              10,
              13
            ]
          ],
          "speed": 1
        },
        {
          "id": "left_inner_leg",
          "path": [
            [
              7,
              6
            ],
            [
              6,
              6
            ],
            [
              6,
              7
            ],
            [
              6,
              8
            ],
            [
              6,
              9
            ],
            [
              6,
              10
            ],
            [
              6,
              11
            ],
            [
              6,
              12
            ],
            [
              6,
              13
            ],
            [
              5,
              13
            ]
          ],
          "speed": 1
        }
      ],
      "quality_breakpoints": {
        "poor": 0.25,
        "well": 0.5,
        "expert": 0.75,
        "master": 0.95
      },
      "quality_bonuses": [
        {
          "attribute": "cold_sweat:heat_dampening",
          "slot": "legs",
          "poor": -0.02,
          "well": 0,
          "expert": 0.06,
          "master": 0.12
        }
      ]
    }).id('seamsandstitches:sewing_pattern_hoglin_leggings')

    event.custom({
      "type": "seamsandstitches:sewing_pattern",
      "texture": "minecraft:textures/item/leather_boots.png",
      "output": {
        "id": "minecraft:leather_boots",
        "count": 1
      },
      "ingredients": [
        {
          "item": "minecraft:leather"
        },
        {
          "item": "minecraft:leather"
        },
        {
          "item": "minecraft:leather"
        },
        {
          "item": "minecraft:string"
        }
      ],
      "seams": [
        {
          "id": "left_shaft",
          "path": [
            [
              3,
              8
            ],
            [
              3,
              7
            ],
            [
              3,
              6
            ],
            [
              3,
              5
            ],
            [
              3,
              4
            ],
            [
              4,
              3
            ],
            [
              5,
              3
            ],
            [
              6,
              3
            ],
            [
              6,
              4
            ],
            [
              6,
              5
            ],
            [
              6,
              6
            ],
            [
              6,
              7
            ],
            [
              6,
              8
            ],
            [
              6,
              9
            ],
            [
              6,
              10
            ]
          ],
          "speed": 1
        },
        {
          "id": "right_shaft",
          "path": [
            [
              12,
              8
            ],
            [
              12,
              7
            ],
            [
              12,
              6
            ],
            [
              12,
              5
            ],
            [
              12,
              4
            ],
            [
              11,
              3
            ],
            [
              10,
              3
            ],
            [
              9,
              3
            ],
            [
              9,
              4
            ],
            [
              9,
              5
            ],
            [
              9,
              6
            ],
            [
              9,
              7
            ],
            [
              9,
              8
            ],
            [
              9,
              9
            ],
            [
              9,
              10
            ]
          ],
          "speed": 1
        },
        {
          "id": "left_sole",
          "path": [
            [
              2,
              9
            ],
            [
              1,
              10
            ],
            [
              1,
              11
            ],
            [
              1,
              12
            ],
            [
              2,
              12
            ],
            [
              3,
              12
            ],
            [
              4,
              12
            ],
            [
              5,
              11
            ],
            [
              6,
              11
            ]
          ],
          "speed": 1
        },
        {
          "id": "right_sole",
          "path": [
            [
              13,
              9
            ],
            [
              14,
              10
            ],
            [
              14,
              11
            ],
            [
              14,
              12
            ],
            [
              13,
              12
            ],
            [
              12,
              12
            ],
            [
              11,
              12
            ],
            [
              10,
              11
            ],
            [
              9,
              11
            ]
          ],
          "speed": 1
        }
      ],
      "quality_breakpoints": {
        "poor": 0.25,
        "well": 0.5,
        "expert": 0.75,
        "master": 0.95
      },
      "quality_bonuses": [
        {
          "attribute": "cold_sweat:cold_dampening",
          "slot": "feet",
          "poor": -0.02,
          "well": 0,
          "expert": 0.04,
          "master": 0.08
        },
        {
          "attribute": "cold_sweat:heat_dampening",
          "slot": "feet",
          "poor": -0.02,
          "well": 0,
          "expert": 0.04,
          "master": 0.08
        }
      ],
      "crafts_to_master": 3
    }).id('seamsandstitches:sewing_pattern_leather_boots')

    event.custom({
      "type": "seamsandstitches:sewing_pattern",
      "texture": "minecraft:textures/item/leather_chestplate.png",
      "output": {
        "id": "minecraft:leather_chestplate",
        "count": 1
      },
      "ingredients": [
        {
          "item": "minecraft:leather"
        },
        {
          "item": "minecraft:leather"
        },
        {
          "item": "minecraft:leather"
        },
        {
          "item": "minecraft:leather"
        },
        {
          "item": "minecraft:leather"
        },
        {
          "item": "minecraft:leather"
        },
        {
          "item": "minecraft:leather"
        },
        {
          "item": "minecraft:leather"
        }
      ],
      "seams": [
        {
          "id": "collar",
          "path": [
            [
              5,
              2
            ],
            [
              5,
              3
            ],
            [
              6,
              4
            ],
            [
              7,
              5
            ],
            [
              8,
              5
            ],
            [
              9,
              4
            ],
            [
              10,
              3
            ],
            [
              10,
              2
            ]
          ],
          "speed": 1
        },
        {
          "id": "left_sleeve",
          "path": [
            [
              4,
              2
            ],
            [
              3,
              2
            ],
            [
              2,
              2
            ],
            [
              1,
              2
            ],
            [
              1,
              3
            ],
            [
              1,
              4
            ],
            [
              1,
              5
            ],
            [
              1,
              6
            ],
            [
              1,
              7
            ],
            [
              2,
              7
            ]
          ],
          "speed": 1
        },
        {
          "id": "right_sleeve",
          "path": [
            [
              11,
              2
            ],
            [
              12,
              2
            ],
            [
              13,
              2
            ],
            [
              14,
              2
            ],
            [
              14,
              3
            ],
            [
              14,
              4
            ],
            [
              14,
              5
            ],
            [
              14,
              6
            ],
            [
              14,
              7
            ],
            [
              13,
              7
            ]
          ],
          "speed": 1
        },
        {
          "id": "torso",
          "path": [
            [
              3,
              8
            ],
            [
              3,
              9
            ],
            [
              3,
              10
            ],
            [
              3,
              11
            ],
            [
              3,
              12
            ],
            [
              4,
              13
            ],
            [
              5,
              14
            ],
            [
              6,
              14
            ],
            [
              7,
              14
            ],
            [
              8,
              14
            ],
            [
              9,
              14
            ],
            [
              10,
              14
            ],
            [
              11,
              13
            ],
            [
              12,
              12
            ],
            [
              12,
              11
            ],
            [
              12,
              10
            ],
            [
              12,
              9
            ],
            [
              12,
              8
            ]
          ],
          "speed": 1
        }
      ],
      "quality_breakpoints": {
        "poor": 0.25,
        "well": 0.5,
        "expert": 0.75,
        "master": 0.95
      },
      "quality_bonuses": [
        {
          "attribute": "cold_sweat:cold_dampening",
          "slot": "chest",
          "poor": -0.02,
          "well": 0,
          "expert": 0.07,
          "master": 0.14
        },
        {
          "attribute": "cold_sweat:heat_dampening",
          "slot": "chest",
          "poor": -0.02,
          "well": 0,
          "expert": 0.07,
          "master": 0.14
        }
      ]
    }).id('seamsandstitches:sewing_pattern_leather_chestplate')

    event.custom({
      "type": "seamsandstitches:sewing_pattern",
      "texture": "minecraft:textures/item/leather_helmet.png",
      "output": {
        "id": "minecraft:leather_helmet",
        "count": 1
      },
      "ingredients": [
        {
          "item": "minecraft:leather"
        },
        {
          "item": "minecraft:leather"
        },
        {
          "item": "minecraft:leather"
        },
        {
          "item": "minecraft:leather"
        },
        {
          "item": "minecraft:leather"
        }
      ],
      "seams": [
        {
          "id": "crown",
          "path": [
            [
              4,
              11
            ],
            [
              3,
              10
            ],
            [
              3,
              9
            ],
            [
              3,
              8
            ],
            [
              3,
              7
            ],
            [
              3,
              6
            ],
            [
              3,
              5
            ],
            [
              4,
              4
            ],
            [
              5,
              3
            ],
            [
              6,
              3
            ],
            [
              7,
              3
            ],
            [
              8,
              3
            ],
            [
              9,
              3
            ],
            [
              10,
              3
            ],
            [
              11,
              4
            ],
            [
              12,
              5
            ],
            [
              12,
              6
            ],
            [
              12,
              7
            ],
            [
              12,
              8
            ],
            [
              12,
              9
            ],
            [
              12,
              10
            ],
            [
              11,
              11
            ]
          ],
          "speed": 1
        },
        {
          "id": "left_strap",
          "path": [
            [
              6,
              4
            ],
            [
              6,
              5
            ],
            [
              6,
              6
            ],
            [
              7,
              7
            ],
            [
              6,
              7
            ],
            [
              5,
              8
            ],
            [
              5,
              9
            ],
            [
              5,
              10
            ],
            [
              5,
              11
            ]
          ],
          "speed": 1
        },
        {
          "id": "right_strap",
          "path": [
            [
              9,
              4
            ],
            [
              9,
              5
            ],
            [
              9,
              6
            ],
            [
              8,
              7
            ],
            [
              9,
              7
            ],
            [
              10,
              8
            ],
            [
              10,
              9
            ],
            [
              10,
              10
            ],
            [
              10,
              11
            ]
          ],
          "speed": 1
        }
      ],
      "quality_breakpoints": {
        "poor": 0.25,
        "well": 0.5,
        "expert": 0.75,
        "master": 0.95
      },
      "quality_bonuses": [
        {
          "attribute": "cold_sweat:cold_dampening",
          "slot": "head",
          "poor": -0.02,
          "well": 0,
          "expert": 0.05,
          "master": 0.1
        },
        {
          "attribute": "cold_sweat:heat_dampening",
          "slot": "head",
          "poor": -0.02,
          "well": 0,
          "expert": 0.05,
          "master": 0.1
        }
      ]
    }).id('seamsandstitches:sewing_pattern_leather_helmet')

    event.custom({
      "type": "seamsandstitches:sewing_pattern",
      "texture": "minecraft:textures/item/leather_horse_armor.png",
      "output": {
        "id": "minecraft:leather_horse_armor",
        "count": 1
      },
      "ingredients": [
        {
          "item": "minecraft:leather"
        },
        {
          "item": "minecraft:leather"
        },
        {
          "item": "minecraft:leather"
        },
        {
          "item": "minecraft:leather"
        },
        {
          "item": "minecraft:leather"
        },
        {
          "item": "minecraft:leather"
        },
        {
          "item": "minecraft:leather"
        },
        {
          "item": "minecraft:leather"
        },
        {
          "item": "minecraft:leather"
        },
        {
          "item": "minecraft:leather"
        },
        {
          "item": "minecraft:leather"
        },
        {
          "item": "minecraft:leather"
        }
      ],
      "seams": [
        {
          "id": "crown",
          "path": [
            [
              14,
              6
            ],
            [
              14,
              5
            ],
            [
              13,
              4
            ],
            [
              12,
              4
            ],
            [
              11,
              3
            ],
            [
              11,
              4
            ],
            [
              10,
              5
            ],
            [
              9,
              6
            ],
            [
              9,
              7
            ],
            [
              9,
              8
            ],
            [
              8,
              8
            ],
            [
              7,
              8
            ],
            [
              6,
              8
            ],
            [
              5,
              8
            ],
            [
              4,
              8
            ],
            [
              3,
              8
            ],
            [
              2,
              8
            ],
            [
              1,
              9
            ],
            [
              1,
              10
            ],
            [
              1,
              11
            ],
            [
              1,
              12
            ]
          ],
          "speed": 1
        },
        {
          "id": "hem",
          "path": [
            [
              1,
              13
            ],
            [
              2,
              13
            ],
            [
              3,
              13
            ],
            [
              4,
              13
            ],
            [
              5,
              13
            ],
            [
              6,
              13
            ],
            [
              7,
              13
            ],
            [
              8,
              13
            ],
            [
              9,
              13
            ],
            [
              10,
              13
            ],
            [
              11,
              13
            ],
            [
              12,
              13
            ]
          ],
          "speed": 1
        },
        {
          "id": "bridle",
          "path": [
            [
              14,
              7
            ],
            [
              13,
              7
            ],
            [
              12,
              7
            ],
            [
              11,
              8
            ],
            [
              11,
              9
            ],
            [
              10,
              9
            ],
            [
              9,
              9
            ],
            [
              9,
              10
            ],
            [
              9,
              11
            ],
            [
              9,
              12
            ]
          ],
          "speed": 1
        },
        {
          "id": "saddle",
          "path": [
            [
              8,
              8
            ],
            [
              8,
              9
            ],
            [
              8,
              10
            ],
            [
              8,
              11
            ],
            [
              8,
              12
            ],
            [
              7,
              12
            ],
            [
              6,
              12
            ],
            [
              5,
              12
            ],
            [
              5,
              11
            ],
            [
              5,
              10
            ],
            [
              5,
              9
            ],
            [
              5,
              8
            ]
          ],
          "speed": 1
        },
        {
          "id": "chest_plate",
          "path": [
            [
              11,
              10
            ],
            [
              12,
              10
            ],
            [
              12,
              11
            ],
            [
              12,
              12
            ]
          ],
          "speed": 1
        }
      ],
      "quality_breakpoints": {
        "poor": 0.25,
        "well": 0.5,
        "expert": 0.75,
        "master": 1
      }
    }).id('seamsandstitches:sewing_pattern_leather_horse_armor')

    event.custom({
      "type": "seamsandstitches:sewing_pattern",
      "texture": "minecraft:textures/item/leather_leggings.png",
      "output": {
        "id": "minecraft:leather_leggings",
        "count": 1
      },
      "ingredients": [
        {
          "item": "minecraft:leather"
        },
        {
          "item": "minecraft:leather"
        },
        {
          "item": "minecraft:leather"
        },
        {
          "item": "minecraft:leather"
        },
        {
          "item": "minecraft:leather"
        },
        {
          "item": "minecraft:leather"
        },
        {
          "item": "minecraft:leather"
        }
      ],
      "seams": [
        {
          "id": "waistband",
          "path": [
            [
              4,
              2
            ],
            [
              5,
              2
            ],
            [
              6,
              2
            ],
            [
              7,
              2
            ],
            [
              8,
              2
            ],
            [
              9,
              2
            ],
            [
              10,
              2
            ],
            [
              11,
              2
            ]
          ],
          "speed": 1
        },
        {
          "id": "left_outer_leg",
          "path": [
            [
              3,
              3
            ],
            [
              3,
              4
            ],
            [
              3,
              5
            ],
            [
              3,
              6
            ],
            [
              3,
              7
            ],
            [
              3,
              8
            ],
            [
              3,
              9
            ],
            [
              3,
              10
            ],
            [
              3,
              11
            ],
            [
              3,
              12
            ],
            [
              3,
              13
            ],
            [
              4,
              13
            ]
          ],
          "speed": 1
        },
        {
          "id": "right_outer_leg",
          "path": [
            [
              12,
              3
            ],
            [
              12,
              4
            ],
            [
              12,
              5
            ],
            [
              12,
              6
            ],
            [
              12,
              7
            ],
            [
              12,
              8
            ],
            [
              12,
              9
            ],
            [
              12,
              10
            ],
            [
              12,
              11
            ],
            [
              12,
              12
            ],
            [
              12,
              13
            ],
            [
              11,
              13
            ]
          ],
          "speed": 1
        },
        {
          "id": "right_inner_leg",
          "path": [
            [
              8,
              6
            ],
            [
              9,
              6
            ],
            [
              9,
              7
            ],
            [
              9,
              8
            ],
            [
              9,
              9
            ],
            [
              9,
              10
            ],
            [
              9,
              11
            ],
            [
              9,
              12
            ],
            [
              9,
              13
            ],
            [
              10,
              13
            ]
          ],
          "speed": 1
        },
        {
          "id": "left_inner_leg",
          "path": [
            [
              7,
              6
            ],
            [
              6,
              6
            ],
            [
              6,
              7
            ],
            [
              6,
              8
            ],
            [
              6,
              9
            ],
            [
              6,
              10
            ],
            [
              6,
              11
            ],
            [
              6,
              12
            ],
            [
              6,
              13
            ],
            [
              5,
              13
            ]
          ],
          "speed": 1
        }
      ],
      "quality_breakpoints": {
        "poor": 0.25,
        "well": 0.5,
        "expert": 0.75,
        "master": 0.95
      },
      "quality_bonuses": [
        {
          "attribute": "cold_sweat:cold_dampening",
          "slot": "legs",
          "poor": -0.02,
          "well": 0,
          "expert": 0.06,
          "master": 0.12
        },
        {
          "attribute": "cold_sweat:heat_dampening",
          "slot": "legs",
          "poor": -0.02,
          "well": 0,
          "expert": 0.06,
          "master": 0.12
        }
      ]
    }).id('seamsandstitches:sewing_pattern_leather_leggings')

    event.custom({
      "type": "seamsandstitches:sewing_pattern",
      "texture": "create:textures/item/cardboard_boots.png",
      "output": {
        "id": "create:cardboard_boots",
        "count": 1
      },
      "ingredients": [
        {
          "item": "create:cardboard"
        },
        {
          "item": "create:cardboard"
        },
        {
          "item": "create:cardboard"
        },
        {
          "item": "minecraft:string"
        }
      ],
      "seams": [
        {
          "id": "left",
          "path": [
            [
              1,
              13
            ],
            [
              1,
              12
            ],
            [
              1,
              11
            ],
            [
              1,
              10
            ],
            [
              2,
              10
            ],
            [
              2,
              9
            ],
            [
              3,
              9
            ],
            [
              4,
              9
            ],
            [
              5,
              9
            ],
            [
              5,
              10
            ],
            [
              6,
              10
            ],
            [
              6,
              11
            ],
            [
              6,
              12
            ]
          ],
          "speed": 1
        },
        {
          "id": "right",
          "path": [
            [
              14,
              13
            ],
            [
              14,
              12
            ],
            [
              14,
              11
            ],
            [
              14,
              10
            ],
            [
              13,
              10
            ],
            [
              13,
              9
            ],
            [
              12,
              9
            ],
            [
              11,
              9
            ],
            [
              10,
              9
            ],
            [
              10,
              10
            ],
            [
              9,
              10
            ],
            [
              9,
              11
            ],
            [
              9,
              12
            ]
          ],
          "speed": 1
        }
      ],
      "quality_breakpoints": {
        "poor": 0.25,
        "well": 0.5,
        "expert": 0.75,
        "master": 0.95
      },
      "quality_bonuses": [],
      "crafts_to_master": 3
    }).id('seamsandstitches:sewing_pattern_paper_boots')

    event.custom({
      "type": "seamsandstitches:sewing_pattern",
      "texture": "create:textures/item/cardboard_chestplate.png",
      "output": {
        "id": "create:cardboard_chestplate",
        "count": 1
      },
      "ingredients": [
        {
          "item": "create:cardboard"
        },
        {
          "item": "create:cardboard"
        },
        {
          "item": "create:cardboard"
        },
        {
          "item": "create:cardboard"
        },
        {
          "item": "create:cardboard"
        },
        {
          "item": "create:cardboard"
        },
        {
          "item": "create:cardboard"
        },
        {
          "item": "create:cardboard"
        }
      ],
      "seams": [
        {
          "id": "collar",
          "path": [
            [
              4,
              3
            ],
            [
              5,
              3
            ],
            [
              6,
              3
            ],
            [
              7,
              3
            ],
            [
              8,
              3
            ],
            [
              9,
              3
            ],
            [
              10,
              3
            ],
            [
              11,
              3
            ]
          ],
          "speed": 1
        },
        {
          "id": "left_sleeve",
          "path": [
            [
              4,
              4
            ],
            [
              4,
              5
            ],
            [
              4,
              6
            ],
            [
              3,
              6
            ],
            [
              3,
              7
            ]
          ],
          "speed": 1
        },
        {
          "id": "right_sleeve",
          "path": [
            [
              11,
              4
            ],
            [
              11,
              5
            ],
            [
              11,
              6
            ],
            [
              12,
              6
            ],
            [
              12,
              7
            ]
          ],
          "speed": 1
        },
        {
          "id": "torso",
          "path": [
            [
              3,
              8
            ],
            [
              3,
              9
            ],
            [
              3,
              10
            ],
            [
              3,
              11
            ],
            [
              3,
              12
            ],
            [
              3,
              13
            ],
            [
              4,
              13
            ],
            [
              5,
              13
            ],
            [
              6,
              13
            ],
            [
              7,
              13
            ],
            [
              8,
              13
            ],
            [
              9,
              13
            ],
            [
              10,
              13
            ],
            [
              11,
              13
            ],
            [
              12,
              13
            ],
            [
              12,
              12
            ],
            [
              12,
              11
            ],
            [
              12,
              10
            ],
            [
              12,
              9
            ],
            [
              12,
              8
            ]
          ],
          "speed": 1
        }
      ],
      "quality_breakpoints": {
        "poor": 0.25,
        "well": 0.5,
        "expert": 0.75,
        "master": 0.95
      },
      "quality_bonuses": []
    }).id('seamsandstitches:sewing_pattern_paper_chestplate')

    event.custom({
      "type": "seamsandstitches:sewing_pattern",
      "texture": "create:textures/item/cardboard_helmet.png",
      "output": {
        "id": "create:cardboard_helmet",
        "count": 1
      },
      "ingredients": [
        {
          "item": "create:cardboard"
        },
        {
          "item": "create:cardboard"
        },
        {
          "item": "create:cardboard"
        },
        {
          "item": "create:cardboard"
        },
        {
          "item": "create:cardboard"
        }
      ],
      "seams": [
        {
          "id": "left",
          "path": [
            [
              7,
              11
            ],
            [
              6,
              11
            ],
            [
              5,
              11
            ],
            [
              4,
              11
            ],
            [
              3,
              11
            ],
            [
              3,
              10
            ],
            [
              3,
              9
            ],
            [
              3,
              8
            ],
            [
              3,
              7
            ],
            [
              3,
              6
            ],
            [
              3,
              5
            ],
            [
              3,
              4
            ],
            [
              4,
              4
            ],
            [
              5,
              4
            ],
            [
              6,
              4
            ],
            [
              7,
              4
            ]
          ],
          "speed": 1
        },
        {
          "id": "right",
          "path": [
            [
              8,
              11
            ],
            [
              9,
              11
            ],
            [
              10,
              11
            ],
            [
              11,
              11
            ],
            [
              12,
              11
            ],
            [
              12,
              10
            ],
            [
              12,
              9
            ],
            [
              12,
              8
            ],
            [
              12,
              7
            ],
            [
              12,
              6
            ],
            [
              12,
              5
            ],
            [
              12,
              4
            ],
            [
              11,
              4
            ],
            [
              10,
              4
            ],
            [
              9,
              4
            ],
            [
              8,
              4
            ]
          ],
          "speed": 1
        }
      ],
      "quality_breakpoints": {
        "poor": 0.25,
        "well": 0.5,
        "expert": 0.75,
        "master": 0.95
      },
      "quality_bonuses": []
    }).id('seamsandstitches:sewing_pattern_paper_helmet')

    event.custom({
      "type": "seamsandstitches:sewing_pattern",
      "texture": "create:textures/item/cardboard_leggings.png",
      "output": {
        "id": "create:cardboard_leggings",
        "count": 1
      },
      "ingredients": [
        {
          "item": "create:cardboard"
        },
        {
          "item": "create:cardboard"
        },
        {
          "item": "create:cardboard"
        },
        {
          "item": "create:cardboard"
        },
        {
          "item": "create:cardboard"
        },
        {
          "item": "create:cardboard"
        },
        {
          "item": "create:cardboard"
        }
      ],
      "seams": [
        {
          "id": "waistband",
          "path": [
            [
              3,
              2
            ],
            [
              4,
              2
            ],
            [
              5,
              2
            ],
            [
              6,
              2
            ],
            [
              7,
              2
            ],
            [
              8,
              2
            ],
            [
              9,
              2
            ],
            [
              10,
              2
            ],
            [
              11,
              2
            ],
            [
              12,
              2
            ]
          ],
          "speed": 1
        },
        {
          "id": "left_outer_leg",
          "path": [
            [
              3,
              3
            ],
            [
              3,
              4
            ],
            [
              3,
              5
            ],
            [
              3,
              6
            ],
            [
              3,
              7
            ],
            [
              3,
              8
            ],
            [
              3,
              9
            ],
            [
              3,
              10
            ],
            [
              3,
              11
            ],
            [
              3,
              12
            ],
            [
              3,
              13
            ],
            [
              3,
              14
            ],
            [
              4,
              14
            ]
          ],
          "speed": 1
        },
        {
          "id": "right_outer_leg",
          "path": [
            [
              12,
              3
            ],
            [
              12,
              4
            ],
            [
              12,
              5
            ],
            [
              12,
              6
            ],
            [
              12,
              7
            ],
            [
              12,
              8
            ],
            [
              12,
              9
            ],
            [
              12,
              10
            ],
            [
              12,
              11
            ],
            [
              12,
              12
            ],
            [
              12,
              13
            ],
            [
              12,
              14
            ],
            [
              11,
              14
            ]
          ],
          "speed": 1
        },
        {
          "id": "right_inner_leg",
          "path": [
            [
              8,
              6
            ],
            [
              9,
              6
            ],
            [
              9,
              7
            ],
            [
              9,
              8
            ],
            [
              9,
              9
            ],
            [
              9,
              10
            ],
            [
              9,
              11
            ],
            [
              9,
              12
            ],
            [
              9,
              13
            ],
            [
              10,
              14
            ],
            [
              9,
              14
            ]
          ],
          "speed": 1
        },
        {
          "id": "left_inner_leg",
          "path": [
            [
              7,
              6
            ],
            [
              6,
              6
            ],
            [
              6,
              7
            ],
            [
              6,
              8
            ],
            [
              6,
              9
            ],
            [
              6,
              10
            ],
            [
              6,
              11
            ],
            [
              6,
              12
            ],
            [
              6,
              13
            ],
            [
              5,
              14
            ],
            [
              6,
              14
            ]
          ],
          "speed": 1
        }
      ],
      "quality_breakpoints": {
        "poor": 0.25,
        "well": 0.5,
        "expert": 0.75,
        "master": 0.95
      },
      "quality_bonuses": []
    }).id('seamsandstitches:sewing_pattern_paper_leggings')

})