ServerEvents.recipes(event=>{
    const create = event.recipes.create
    event.remove({id:'nutritionalbalance:lunchbox'})
})
