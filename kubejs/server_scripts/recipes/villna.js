import { $DataInput } from "java.io.DataInput"
import { ajaxTransport } from "jquery"

ServerEvents.recipes(event=>{
    const create = event.recipes.create
    const vintage = event.recipes.createvintageneoforged
    event.shapeless(
        'minecraft:andesite',
        [
            'minecraft:cobblestone','minecraft:clay_ball',
            'minecraft:clay_ball','minecraft:cobblestone',
        ]
    )
    event.replaceInput({input:'minecraft:glass'}, 'minecraft:glass','create:framed_glass')
    event.replaceOutput({output:'minecraft:glass'}, 'minecraft:glass','create:framed_glass')


    const anshan = 'create:andesite_alloy'
    create.sequenced_assembly(
        [
            CreateItem.of('create:framed_glass')
        ],
        'create:andesite_alloy',
        [
            create.pressing(anshan,anshan),
            create.pressing(anshan,anshan),
            vintage.polishing(anshan,anshan),

        ]
    ).transitionalItem('create:andesite_alloy')
    .loops(1)

    //龙息
    create.compacting([Fluid.of("create_dragons_plus:dragon_breath",50),'minecraft:dragon_head'],'minecraft:dragon_head')

    //金属装备
    event.remove({id:'minecraft:iron_helmet'})
    event.remove({id:'minecraft:iron_chestplate'})
    event.remove({id:'minecraft:iron_boots'})
    event.remove({id:'minecraft:iron_leggings'})

    //金制护甲
    event.remove({id:'minecraft:golden_helmet'})
    event.remove({id:'minecraft:golden_chestplate'})
    event.remove({id:'minecraft:golden_boots'})
    event.remove({id:'minecraft:golden_leggings'})
    //下界合金护甲



    //方块打磨
    vintage.polishing("minecraft:exposed_cut_copper_stairs","minecraft:weathered_cut_copper_stairs")
    vintage.polishing("minecraft:exposed_cut_copper_slab","minecraft:weathered_cut_copper_slab")
    vintage.polishing("minecraft:exposed_cut_copper","minecraft:weathered_cut_copper")
    vintage.polishing("create:exposed_copper_tiles", "create:weathered_copper_tiles")
    vintage.polishing("create:exposed_copper_tile_stairs","create:weathered_copper_tile_stairs")
    vintage.polishing("create:exposed_copper_tile_slab","create:weathered_copper_tile_slab")
    vintage.polishing("create:exposed_copper_shingles","create:weathered_copper_shingles")
    vintage.polishing("create:exposed_copper_shingle_stairs","create:weathered_copper_shingle_stairs")
    vintage.polishing("create:exposed_copper_shingle_slab","create:weathered_copper_shingle_slab")
    vintage.polishing("minecraft:exposed_copper","minecraft:weathered_copper")
    vintage.polishing("minecraft:weathered_cut_copper_stairs","minecraft:waxed_weathered_cut_copper_stairs")
    vintage.polishing("minecraft:weathered_cut_copper_slab","minecraft:waxed_weathered_cut_copper_slab")
    vintage.polishing("minecraft:weathered_cut_copper","minecraft:waxed_weathered_cut_copper")
    vintage.polishing("create:weathered_copper_tiles","create:waxed_weathered_copper_tiles")
    vintage.polishing("create:weathered_copper_tile_stairs","create:waxed_weathered_copper_tile_stairs")
    vintage.polishing("create:weathered_copper_tile_slab","create:waxed_weathered_copper_tile_slab")
    vintage.polishing("create:weathered_copper_shingles","create:waxed_weathered_copper_shingles")
    vintage.polishing("create:weathered_copper_shingle_stairs","create:waxed_weathered_copper_shingle_stairs")
    vintage.polishing("create:weathered_copper_shingle_slab","create:waxed_weathered_copper_shingle_slab")
    vintage.polishing("minecraft:weathered_copper","minecraft:waxed_weathered_copper")
    vintage.polishing("minecraft:oxidized_cut_copper_stairs","minecraft:waxed_oxidized_cut_copper_stairs")
    vintage.polishing("minecraft:oxidized_cut_copper_slab", "minecraft:waxed_oxidized_cut_copper_slab")
    vintage.polishing("minecraft:oxidized_cut_copper","minecraft:waxed_oxidized_cut_copper")
    vintage.polishing("create:oxidized_copper_tiles","create:waxed_oxidized_copper_tiles")
    vintage.polishing("create:oxidized_copper_tile_stairs","create:waxed_oxidized_copper_tile_stairs")
    vintage.polishing("create:oxidized_copper_tile_slab","create:waxed_oxidized_copper_tile_slab")
    vintage.polishing("create:oxidized_copper_shingles", "create:waxed_oxidized_copper_shingles")
    vintage.polishing("create:oxidized_copper_shingle_stairs","create:waxed_oxidized_copper_shingle_stairs")
    vintage.polishing("create:oxidized_copper_shingle_slab","create:waxed_oxidized_copper_shingle_slab")
    vintage.polishing("minecraft:oxidized_copper", "minecraft:waxed_oxidized_copper")
    vintage.polishing("minecraft:exposed_cut_copper_stairs", "minecraft:waxed_exposed_cut_copper_stairs")
    vintage.polishing("minecraft:exposed_cut_copper_slab", "minecraft:waxed_exposed_cut_copper_slab")
    vintage.polishing("minecraft:exposed_cut_copper", "minecraft:waxed_exposed_cut_copper")
    vintage.polishing("create:exposed_copper_tiles", "create:waxed_exposed_copper_tiles")
    vintage.polishing("create:exposed_copper_tile_stairs", "create:waxed_exposed_copper_tile_stairs")
    vintage.polishing("create:exposed_copper_tile_slab", "create:waxed_exposed_copper_tile_slab")
    vintage.polishing("create:exposed_copper_shingles", "create:waxed_exposed_copper_shingles")
    vintage.polishing("create:exposed_copper_shingle_stairs","create:waxed_exposed_copper_shingle_stairs")
    vintage.polishing("create:exposed_copper_shingle_slab", "create:waxed_exposed_copper_shingle_slab")
    vintage.polishing("minecraft:exposed_copper", "minecraft:waxed_exposed_copper")
    vintage.polishing("minecraft:cut_copper_stairs", "minecraft:waxed_cut_copper_stairs")
    vintage.polishing("minecraft:cut_copper_slab", "minecraft:waxed_cut_copper_slab")
    vintage.polishing("minecraft:cut_copper", "minecraft:waxed_cut_copper")
    vintage.polishing("create:copper_tiles", "create:waxed_copper_tiles")
    vintage.polishing("create:copper_tile_stairs", "create:waxed_copper_tile_stairs")
    vintage.polishing("create:copper_tile_slab", "create:waxed_copper_tile_slab")
    vintage.polishing("create:copper_shingles", "create:waxed_copper_shingles")
    vintage.polishing("create:copper_shingle_stairs", "create:waxed_copper_shingle_stairs")
    vintage.polishing("create:copper_shingle_slab", "create:waxed_copper_shingle_slab")
    vintage.polishing("minecraft:copper_block", "minecraft:waxed_copper_block")
    vintage.polishing("minecraft:weathered_cut_copper_stairs", "minecraft:oxidized_cut_copper_stairs")
    vintage.polishing("minecraft:weathered_cut_copper_slab", "minecraft:oxidized_cut_copper_slab")
    vintage.polishing("minecraft:weathered_cut_copper", "minecraft:oxidized_cut_copper")
    vintage.polishing("create:weathered_copper_tiles", "create:oxidized_copper_tiles")
    vintage.polishing("create:weathered_copper_tile_stairs", "create:oxidized_copper_tile_stairs")
    vintage.polishing("create:weathered_copper_tile_slab", "create:oxidized_copper_tile_slab")
    vintage.polishing("create:weathered_copper_shingles", "create:oxidized_copper_shingles")
    vintage.polishing("create:weathered_copper_shingle_stairs","create:oxidized_copper_shingle_stairs")
    vintage.polishing("create:weathered_copper_shingle_slab", "create:oxidized_copper_shingle_slab")
    vintage.polishing("minecraft:weathered_copper", "minecraft:oxidized_copper")
    vintage.polishing("minecraft:cut_copper_stairs", "minecraft:exposed_cut_copper_stairs")
    vintage.polishing("minecraft:cut_copper_slab", "minecraft:exposed_cut_copper_slab")
    vintage.polishing("minecraft:cut_copper", "minecraft:exposed_cut_copper")
    vintage.polishing("create:copper_tiles", "create:exposed_copper_tiles")
    vintage.polishing("create:copper_tile_stairs",  "create:exposed_copper_tile_stairs")
    vintage.polishing("create:copper_tile_slab", "create:exposed_copper_tile_slab")
    vintage.polishing("create:copper_shingles", "create:exposed_copper_shingles")
    vintage.polishing("create:copper_shingle_stairs", "create:exposed_copper_shingle_stairs")
    vintage.polishing("create:copper_shingle_slab", "create:exposed_copper_shingle_slab")
    vintage.polishing("minecraft:copper_block", "minecraft:exposed_copper")


    //边框玻璃板替代原版玻璃板
    event.replaceInput({input:'minecraft:glass_pane'},'minecraft:glass_pane', 'create:framed_glass_pane')
    event.remove({id:'minecraft:glass_pane'})

    //发酵蜘蛛眼
    event.remove({id:'minecraft:fermented_spider_eye'})
    //哭泣黑曜石
    create.filling('minecraft:crying_obsidian', ['minecraft:obsidian', Fluid.of('minecraft:water', 1000)])
    //墨囊
    const tem2 = 'minecraft:ink_sac'
    create.sequenced_assembly(
        [
            CreateItem.of('minecraft:ink_sac')
        ],'minecraft:paper',
        [
            create.filling(tem2,[tem2,Fluid.of('create_dragons_plus:black_dye', 250)]),
            create.deploying(tem2,[tem2,'minecraft:paper']),
            create.deploying(tem2,[tem2,'minecraft:slime_ball'])
        ]
    ).transitionalItem('minecraft:ink_sac')
    .loops(1)
    //骨粉的获取方式
    event.remove({id:'minecraft:bone_block'})
    event.remove({id:'minecraft:bone_meal_from_bone_block'})
    event.remove({id:'create:milling/calcite'})
    event.shaped('minecraft:bone_block',
        [
            'AAA',
            'AAA',
            'AAA'
        ],
        {
            A:'minecraft:bone'
        }
    )
    event.shapeless('8x minecraft:bone','minecraft:bone_block')
    create.crushing([CreateItem.of('minecraft:bone_meal')],'minecraft:calcite',70)
    create.crushing([CreateItem.of('24x minecraft:bone_meal'),CreateItem.of('5x minecraft:bone_meal', 0.6)],'minecraft:bone_block', 200)

//量产线
    event.remove({id:'rusticdelight:string_from_cotton_boll'})
    vintage.centrifugation([CreateItem.of('3x minecraft:string'),CreateItem.of('minecraft:string',0.5)],'createae2:cotton')

})
