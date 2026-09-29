Ponder.registry(event=>{
    event.create(['createmetalogistics:stock_manifest_reader','createmetalogistics:stock_manifest_compiler'])
    .scene(
        "kubejs:basicxl",
        "元物流搭建",
        "kubejs:basicxl",
        (scene, util) => {
            scene.showBasePlate()
            scene.idle(5)
			// 缩放视角至默认视角的70%
			scene.scaleSceneView(0.7)
            scene.idle(5)
            //木桶
            const vault = 'minecraft:barrel'
            //钢梁
            const girder = 'create:metal_girder'
        
            let selection = util.select.fromTo(8,1,8,9, 1, 8);

            scene.world.setBlock([8,1,8],vault,true)
            scene.world.showSection([8,1,8],Direction.DOWN)

            scene.addKeyframe()
            scene.text(40,"<仓库>",[8,2,8])
            scene.idle(60)

            scene.world.setBlocks(util.select.fromTo(10,1,9,10,2,9),girder,true)
            scene.world.showSection(util.select.fromTo(10,1,9,10,2,9),Direction.DOWN)
            scene.world.showSection(util.select.fromTo(10,1,9,10,2,9),Direction.DOWN)

            scene.world.setBlock([10,3,9],'create:chain_conveyor',true)
            scene.world.modifyBlockEntityNBT(util.select.position(10,3,9),$BlockEntity,(nbt) => {nbt.putFloat("Speed", -32.0)});
            scene.world.showSection([10,3,9],Direction.DOWN)
            
            scene.world.setBlock([10,1,7],'create:stock_ticker',true)
            scene.world.showSection([10,1,7],Direction.DOWN)

            scene.world.setBlock([8,1,7],'create:packager',true)
            scene.world.showSection([8,1,7],Direction.DOWN)

            scene.text(40,'将仓储链接站连入当前物流网络',[10.5,2,7.5])
            scene.idle(60)
            scene.showControls(20,[10.5,2,7.5],"down").rightClick().withItem('create:stock_link')
            scene.idle(25)
            scene.world.setBlock([8,2,7],'create:stock_link',true)
            scene.world.showSection([8,2,7],Direction.south)

            scene.idle(70)

            scene.addKeyframe()

            scene.text(60,'将\"仓储货单编译器\"连入当前物流网络',[10.5,2,7.5])
            scene.showControls(30,[10.5,2,7.5],"down").rightClick().withItem('createmetalogistics:stock_manifest_compiler');
            scene.idle(70)

            scene.world.setBlock([9,1,7],'createmetalogistics:stock_manifest_compiler',true)
            scene.world.showSection([9,1,7],Direction.DOWN)

            scene.world.setBlock([9,1,6],'minecraft:lever',true)
            scene.world.showSection([9,1,6],Direction.DOWN)

            scene.world.setBlock([11,1,7],'create:red_seat',true)
            scene.world.showSection([11,1,7],Direction.DOWN)
            const entity_1 = scene.world.createEntity("minecraft:parrot",[11.5,1.5,7.5])


            scene.idle(40)
            scene.text(60,'给予一次红石信号给\"仓储货单编译器\"',[9.5,2,7.5])
            scene.showControls(30,[9.5,2,6.5],"down").rightClick();
            scene.idle(80)
            scene.text(60,'\"仓储货单编译器\"会给出一本\"仓储清单\"',[9.5,2,7.5])
            scene.showControls(30,[9.5,2,6.5],"down").withItem('createmetalogistics:manifest');
            scene.idle(80)

            scene.addKeyframe()

            scene.overlay.showOutlineWithText(util.select.fromTo(8,1,6,11,3,10),100).text('此为一个物流网络')
            scene.idle(100)

            scene.addKeyframe()
            scene.world.hideSection(util.select.fromTo(8,1,6,11,3,10),Direction.south)
            scene.world.modifyEntity(entity_1, (entity) => {entity.discard(); });

            scene.text(100,'拿上\"仓储清单\", 然后来到当前物流网络之外的地方, 建立另一个物流网络<工厂>')

            scene.world.setBlock([3,1,3],'create:stock_ticker',true)
            scene.world.showSection([3,1,3],Direction.DOWN)
            scene.idle(120)
            scene.showControls(30,[3.5,2,3.5],"down").rightClick().withItem('createmetalogistics:stock_manifest_reader');
            scene.idle(40)
            scene.world.setBlock([2,1,3],'createmetalogistics:stock_manifest_reader',true)
            scene.world.showSection([2,1,3],Direction.DOWN)

            scene.world.setBlock([4,1,3],'create:red_seat',true)
            scene.world.showSection([4,1,3],Direction.DOWN)
            scene.world.createEntity("minecraft:parrot",[4.5,1.5,3.5])

            scene.idle(40)
            scene.text(80,'将\"仓储清单\"放进\"仓储货单读取器\"中')
            scene.showControls(30,[2.5,2,3.5],"down").withItem('createmetalogistics:manifest');
            scene.idle(100)
            scene.idle(40)
            scene.world.showSection(util.select.fromTo(8,1,6,11,3,10),Direction.NORTH)
            scene.text(100,'然后就能通过管理员得知<仓库>的库存信息',[8,1.5,8])
            scene.idle(100)
            scene.world.hideSection(util.select.fromTo(8,1,6,11,3,10),Direction.south)
            
            scene.addKeyframe()
            scene.text(60,'通过管理员发起订单:地址<工厂>',[4.5,2,3.5])
            scene.idle(80)

            scene.text(100,'\"仓储货单读取器\"中会产生地址为<工厂>的\"物品请求票证\"',[2.5,2,3.5])
            scene.idle(120)
            scene.showControls(40,[2.5,2,3.5],"down").withItem('createmetalogistics:ticket')
            scene.idle(60)
            scene.text(120,'将\"物品请求票证\"通过\'列车&邮箱\'的方式运送到<仓库>的\"仓储货单编译器\"中')
            scene.idle(100)
            scene.addKeyframe()
            scene.world.showSection(util.select.fromTo(8,1,6,11,3,10),Direction.NORTH)
            scene.idle(20)
            scene.showControls(40,[9.5,2,7.5],"down").withItem('createmetalogistics:ticket')

            scene.idle(60)
            scene.world.toggleRedstonePower(util.select.fromTo(8,1,7,8,2,7))
            scene.text(60,'打包机中会出现地址为<工厂>的包裹',[8,2,7])
            scene.idle(70)
            scene.showControls(60,[8.5,2,7.5],"down").withItem('create:cardboard_package_12x12')
            scene.text(60,'地址:<工厂>',[8.5,2,7.5])
            scene.idle(80)

            scene.text(80,'之后可通过\'列车&邮箱\'运输到<工厂>')
            scene.idle(100)
            scene.text(100,'列车运行到达<仓库>后可通过\'列车站区块加载器\'加载周围区块')
            scene.idle(120)

            scene.addKeyframe()
            scene.idle(40)

            scene.text(60,'在<工厂>发起订单',[3.5,2,3.5])
            scene.idle(80)
            scene.text(80,'将\'票证\'通过列车送到<仓库>',[9.5,2,7.5])
            scene.idle(100)
            scene.text(80,'使用\'票证\'发起订单, 得到\'包裹\'',[8.5,2,7.5])
            scene.idle(100)
            scene.text(100,'同时给予\'编译器\'一次红石信号, 得到\'仓储清单\'',[9.5,2,7.5])
            scene.idle(120)
            scene.text(100,'将\'仓储清单&包裹\'通过列车送到<工厂>',[3.5,2,3.5])
            scene.idle(120)
            scene.text(80,'如此即可实现离线区块物资运输与仓储信息同步')



            

            



            


            

            


            




            



        }
    )
})
