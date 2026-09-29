ServerEvents.recipes(event=>{
    const create = event.recipes.create
    event.remove({type:'create_dragons_plus:sandpaper_polishing'})
})
