ServerEvents.recipes(event=>{
    const create = event.recipes.create
    const vintage = event.recipes.createvintageneoforged
    //钢锭统一
    event.replaceInput({input:'electrodynamics:ingotsteel'},'electrodynamics:ingotsteel','createbigcannons:steel_ingot')
    event.replaceInput({input:'overgeared:steel_ingot'},'overgeared:steel_ingot','createbigcannons:steel_ingot')
    event.remove({output:'overgeared:steel_ingot'})
    event.remove({output:'electrodynamics:ingotsteel'})
    //钢粒统一
    event.replaceInput({input:'createbigcannons:steel_scrap'},'createbigcannons:steel_scrap','overgeared:steel_nugget')
    event.replaceOutput({output:'createbigcannons:steel_scrap'},'createbigcannons:steel_scrap','overgeared:steel_nugget')

    //删除粗钢→加热粗钢→钢锭整条线（钢已统一到CBC）
    event.remove({output:'overgeared:crude_steel'})
    event.remove({output:'overgeared:heated_crude_steel'})
    event.remove({input:'overgeared:heated_crude_steel'})

})
