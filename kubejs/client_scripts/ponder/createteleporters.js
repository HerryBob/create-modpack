const $BlockEntity = Java.loadClass("net.minecraft.world.level.block.entity.BlockEntity");
Ponder.registry(event=>{
    event.create(['createteleporters:custom_portal_base','createteleporters:quantum_casing'])
    .scene(
        "kubejs:basicl",
        "搭建传送门",
        "kubejs:basicl",
        (scene, util) => {
            //显示基础场景
            scene.showBasePlate();
            scene.idle(5)
			// 缩放视角至默认视角的70%
			scene.scaleSceneView(0.7)

            scene.idle(5)

            //设定方块常量
            const center = 'createteleporters:custom_portal_base'
            const frame = 'createteleporters:quantum_casing'
            const fluid = 'createteleporters:quantum_fluid'
            const pump  ='create:mechanical_pump'
            const portal = 'createteleporters:quantum_portal_block'
            //传送门方块
            scene.world.setBlock([4,4,4],portal, false)
            scene.world.setBlock([4,3,4],portal, false)
            scene.world.setBlock([4,2,4],portal, false)

            scene.world.setBlock([3,4,4],portal, false)
            scene.world.setBlock([3,3,4],portal, false)
            scene.world.setBlock([3,2,4],portal, false)

            scene.world.setBlock([2,4,4],portal, false)
            scene.world.setBlock([2,3,4],portal, false)
            scene.world.setBlock([2,2,4],portal, false)

            //放置传送门框架
            scene.world.setBlock([5,1,4],frame, true)
            scene.world.setBlock([5,2,4],frame, true)
            scene.world.setBlock([5,3,4],frame, true)
            scene.world.setBlock([5,4,4],frame, true)
            scene.world.setBlock([5,5,4],frame, true)
            scene.world.setBlock([4,5,4],frame, true)
            scene.world.setBlock([3,5,4],frame, true)
            scene.world.setBlock([2,5,4],frame, true)
            scene.world.setBlock([1,1,4],frame, true)
            scene.world.setBlock([1,2,4],frame, true)
            scene.world.setBlock([1,3,4],frame, true)
            scene.world.setBlock([1,4,4],frame, true)
            scene.world.setBlock([1,5,4],frame, true)
            scene.world.setBlock([3,1,4],center, true)
            scene.world.setBlock([3,1,2],fluid, true)
            scene.world.setBlock([3,1,3],pump, true)

            scene.world.modifyBlock([3, 1, 3], (curState) => {return curState.with("facing", "south")}, true);

            scene.world.modifyBlockEntityNBT(
                util.select.position(3,1,3),
                $BlockEntity,
                (nbt) => {
                    nbt.putFloat("Speed", 32.0); // 正数顺时针，负数逆时针
                },
                false // 不需要粒子效果
            );

            scene.world.modifyBlockEntityNBT(
                util.select.position(2,1,3),
                $BlockEntity,
                (nbt) => {
                    nbt.putFloat("Speed", -32.0); // 正数顺时针，负数逆时针
                },
                false // 不需要粒子效果
            );


            const block_1 = [
                [5,1,4],[5,2,4],[5,3,4],[5,4,4],[5,5,4],[4,5,4],[3,5,4],[2,5,4],[1,5,4],[1,4,4],[1,3,4],[1,2,4],[1,1,4],[3,1,4]

            ]
            scene.addKeyframe()

            for(let block of block_1){
                scene.world.showSection(block,Facing.down)
                scene.idle(2)
            }
            scene.text(40,'搭建好框架',[3,1,4])

            scene.idle(50)


            scene.world.showSection([3,1,2],Facing.down)
            scene.world.showSection([3,1,3],Facing.down)



            scene.addKeyframe()

            const block_2 = [
                [4, 4, 4], [4, 3, 4], [4, 2, 4],
                [3, 4, 4], [3, 3, 4], [3, 2, 4],
                [2, 4, 4], [2, 3, 4], [2, 2, 4]
            ]

            for(let block of block_2){
                scene.world.modifyBlock(block, (curState) => {return curState.with("east", "true")}, false);
                scene.world.modifyBlock(block, (curState) => {return curState.with("west", "true")}, false);
            }


            scene.text(40,'传送门的运行需要\"量子流体\"',[3,1,2])

            scene.idle(50)
            for(let block of block_2){
                scene.world.showSection(block,Facing.down)
            }

            scene.addKeyframe()

            scene.text(80,'将\"高级传送链接\"放进基座里即可开启传送',[3,1,4])

            scene.showControls(100,[3,2,4],"down").withItem("createteleporters:adv_tplink");


        }
    );
})


Ponder.registry(event=>{
    event.create(['createteleporters:block_teleporter','createteleporters:item_tp','createteleporters:teleporter','createteleporters:entity_teleporter_slab','createteleporters:entity_teleporter_quarter'])
    .scene(
        "kubejs:basicxl",
        "搭建传送门",
        "kubejs:basicxl",
        (scene, util) => {
            scene.showBasePlate()
            scene.idle(5)
			// 缩放视角至默认视角的70%
			scene.scaleSceneView(0.7)

            scene.idle(5)

            const blockteleport = 'createteleporters:block_teleporter'
            const entityteleprt = 'createteleporters:teleporter'
            const itemteleport = 'createteleporters:item_tp'
            const pumpmech = 'create:mechanical_pump'
            const level = 'minecraft:lever'

            scene.world.setBlock([7,1,3],blockteleport,true)
            scene.world.setBlock([5,1,3],entityteleprt,true)
            scene.world.setBlock([3,1,3],itemteleport,true)

            scene.world.setBlock([6,1,3],pumpmech,true)

            scene.world.setBlock([4,1,3],pumpmech,true)

            scene.world.setBlock([2,1,3],pumpmech,true)

            scene.world.setBlock([1,1,3],'createteleporters:quantum_fluid',true)

            scene.world.setBlock([7,1,2],level,true)
            scene.world.setBlock([5,1,2],level,true)

            



            scene.world.modifyBlock([6, 1, 3], (curState) => {return curState.with("facing", "east")}, true);
            scene.world.modifyBlock([4, 1, 3], (curState) => {return curState.with("facing", "east")}, true);
            scene.world.modifyBlock([2, 1, 3], (curState) => {return curState.with("facing", "east")}, true);

            scene.world.modifyBlockEntityNBT(util.select.position(6,1,3),$BlockEntity,(nbt) => {nbt.putFloat("Speed", -32.0)});
            scene.world.modifyBlockEntityNBT(util.select.position(4,1,3),$BlockEntity,(nbt) => {nbt.putFloat("Speed", -32.0)});
            scene.world.modifyBlockEntityNBT(util.select.position(2,1,3),$BlockEntity,(nbt) => {nbt.putFloat("Speed", -32.0)});

            scene.world.showSection([7,1,3],Facing.down)
            scene.idle(2)
            scene.world.showSection([5,1,3],Facing.down)
            scene.idle(2)
            scene.world.showSection([3,1,3],Facing.down)
            scene.idle(2)
            scene.world.showSection([6,1,3],Facing.down)
            scene.idle(2)
            scene.world.showSection([4,1,3],Facing.down)
            scene.idle(2)
            scene.world.showSection([2,1,3],Facing.down)
            scene.idle(2)
            scene.world.showSection([1,1,3],Facing.down)
            scene.idle(2)
            scene.world.showSection([7,1,2],Facing.down)
            scene.idle(2)
            scene.world.showSection([5,1,2],Facing.down)
            scene.idle(2)

            scene.addKeyframe()
            scene.idle(5)


            scene.showControls(80,[7,2,3],"down").withItem("createteleporters:adv_tplink")
            scene.showControls(80,[5,2,3],"down").withItem('createteleporters:tp_link')
            scene.showControls(80,[3,2,3],"down").withItem('createteleporters:tp_link')
            scene.text(60,"这三个方块都需要使用\"传送链接\"启动")

            scene.idle(65)

            scene.text(60,"且都要使用\"量子流体\"作为能源",[1,1,3])
            scene.text(60,"还要使用红石激活",[5,1,3])

            scene.idle(60)

            scene.addKeyframe()

            scene.text(40,"方块传送器可以传送位于其上方的方块",[7,2,3])

            scene.world.setBlock([7,2,3],'minecraft:stone',true)
            scene.world.setBlock([7,1,7],'minecraft:stone',true)

            scene.world.showSection([7,2,3],Facing.down)
            scene.idle(20)
            scene.world.replaceBlocks([7,2,3], "minecraft:air", false);
            scene.world.showSection([7,1,7],Facing.down)

            scene.idle(50)
            scene.addKeyframe()

            scene.text(40,"生物传送器可以传送位于其上方的生物或实体",[5,2,3])
            scene.idle(30)

            const entity = scene.world.createEntity("minecraft:chicken",[5.5,2,3.5])
            scene.idle(20)
            scene.world.modifyEntity(entity, (entity) => {entity.discard(); });
            scene.world.createEntity("minecraft:chicken",[5.5,1,7.5])

            scene.addKeyframe()

            scene.text(40,"物品传送器可以传送位于其中的物品",[3,2,3])
            scene.showControls(40,[3,2,3],"down").withItem('minecraft:stone')
            scene.idle(45)
            scene.text(40,"但每次传送需要提供一次红石信号",[3,2,3])
            scene.idle(45)
            scene.world.createItemEntity(util.vector.of(3.5,2,7.5),util.vector.of(3.5,1,7.5),'minecraft:stone')

        })
})
