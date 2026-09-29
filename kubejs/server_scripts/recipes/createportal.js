ServerEvents.recipes(event=>{
    const create = event.recipes.create
    const vintage = event.recipes.createvintageneoforged

    event.remove({id:'createteleporters:quantum_mechanism_recipe'})
    //量子机械元件
    const incom = 'createteleporters:incomplete_q_mechanism'
    create.sequenced_assembly(
        [
            Item.of('createteleporters:quantum_mechanism')
        ],
        'create:sturdy_sheet',
        [
            create.filling(incom,[Fluid.of('createteleporters:quantum_fluid',250),incom]),
            create.deploying(incom,[incom,'createteleporters:advanced_part']),
            create.pressing(incom,incom)
        ]
    ).transitionalItem('createteleporters:incomplete_q_mechanism')
    .loops(1)
})
