// cmpackagecouriers（纸飞机/包裹快递）— 原版配方原模原样复制进 KubeJS
// 防止 00_remove_all_mod_recipes.js 总删除时把模组配方清掉
// 每个配方均与原 jar 内 JSON 逐字段一致（type/category/key/ingredients/pattern/result 等）
ServerEvents.recipes(event=>{

    // === cardboard_plane_parts — 工作台合成（原样） ===
    event.custom({
        type: 'minecraft:crafting_shaped',
        category: 'misc',
        key: {
            'S': { item: 'minecraft:stick' },
            'C': { item: 'create:cardboard' },
            'R': { item: 'minecraft:firework_rocket' }
        },
        pattern: ['CS ', 'SCS', ' SR'],
        result: { count: 1, id: 'cmpackagecouriers:cardboard_plane_parts' }
    })

    // === cutting/dissasemble_plane — 动力切割（原样） ===
    event.custom({
        type: 'create:cutting',
        ingredients: [
            { item: 'cmpackagecouriers:cardboard_plane' }
        ],
        processing_time: 10,
        results: [
            { count: 1, id: 'create:cardboard_package_12x12' }
        ]
    })

    // === deploying/cardboard_plane — 部署器（原样） ===
    event.custom({
        type: 'create:deploying',
        ingredients: [
            { tag: 'create:packages' },
            { item: 'cmpackagecouriers:cardboard_plane_parts' }
        ],
        results: [
            { id: 'cmpackagecouriers:cardboard_plane' }
        ]
    })

    // === deploying/jar_plane — 部署器（原样，但依赖 create_factory_logistics 未安装，暂注释） ===
    // event.custom({
    //     type: 'create:deploying',
    //     ingredients: [
    //         { item: 'create_factory_logistics:copper_jar_package_8x8' },
    //         { item: 'cmpackagecouriers:cardboard_plane_parts' }
    //     ],
    //     results: [
    //         { id: 'cmpackagecouriers:cardboard_plane' }
    //     ]
    // })

    // === deploying/preopened_package_plane — 部署器（原样） ===
    event.custom({
        type: 'create:deploying',
        ingredients: [
            { item: 'cmpackagecouriers:cardboard_plane' },
            { item: 'minecraft:shears' }
        ],
        results: [
            { id: 'cmpackagecouriers:cardboard_plane' }
        ]
    })

    // === location_transmitter — 无序合成（原样） ===
    event.custom({
        type: 'minecraft:crafting_shapeless',
        category: 'misc',
        ingredients: [
            { item: 'create:transmitter' },
            { item: 'minecraft:compass' },
            { item: 'create:andesite_casing' }
        ],
        result: { count: 1, id: 'cmpackagecouriers:location_transmitter' }
    })

    // === portable_stock_ticker — 无序合成（原样） ===
    event.custom({
        type: 'minecraft:crafting_shapeless',
        category: 'misc',
        ingredients: [
            { item: 'create:clipboard' },
            { item: 'create:redstone_link' },
            { item: 'create:stock_ticker' },
            { item: 'create:andesite_casing' }
        ],
        result: { id: 'cmpackagecouriers:portable_stock_ticker', count: 1 }
    })

    // === portable_stock_ticker_clear — 无序合成清数据（原样） ===
    event.custom({
        type: 'minecraft:crafting_shapeless',
        category: 'misc',
        ingredients: [
            { item: 'cmpackagecouriers:portable_stock_ticker' }
        ],
        result: { id: 'cmpackagecouriers:portable_stock_ticker', count: 1 }
    })

})
