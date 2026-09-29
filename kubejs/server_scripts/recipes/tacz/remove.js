ServerEvents.recipes(event=>{
    const create = event.recipes.create
    event.remove({id:'tacz:gun_smith_table'})
    event.remove({mod:'tacz'})
})
