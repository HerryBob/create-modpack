ServerEvents.recipes(event=>{
    const create = event.recipes.create
    const vintage = event.recipes.createvintageneoforged

    //蜂蜜统一(都统一为机械动力的蜂蜜)
    //蜂蜜的产生
    event.remove({id:'vegandelight:integration/create/compacting/agave_from_compacting'})
   
    //奶酪
    event.remove({id:'brewinandchewin:filling/create/unripe_flaxen_cheese_wheel'})
    event.remove({id:'brewinandchewin:filling/create/unripe_scarlet_cheese_wheel'})

    create.compacting('brewinandchewin:unripe_flaxen_cheese_wheel', Fluid.of('brewinandchewin:flaxen_cheese', 1000))
    create.compacting('brewinandchewin:unripe_scarlet_cheese_wheel', Fluid.of('brewinandchewin:scarlet_cheese', 1000))
    //删除陈化配方

    //啤酒(批量)发酵配方
    //已经在 数据包中实现
})
