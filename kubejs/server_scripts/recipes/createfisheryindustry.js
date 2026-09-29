ServerEvents.recipes(event =>{
    const create = event.recipes.create
    const vintage = event.recipes.vintageimprovements
    event.remove({id:'createfisheryindustry:pressing/zinc_ingot'})
})
