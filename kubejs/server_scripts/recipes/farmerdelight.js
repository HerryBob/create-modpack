ServerEvents.recipes(event=>{
    const create = event.recipes.create
    const vintage = event.recipes.vintageimprovements

    //有机肥料
    event.remove({id:'farmersdelight:organic_compost_from_rotten_flesh'})
    
    //删除生意面的多余配方
    event.remove({id:'farmersdelight:cutting/tag_dough'})
    event.remove({id:'farmersdelight:cutting/tag_dough_using_deployer'})
})
