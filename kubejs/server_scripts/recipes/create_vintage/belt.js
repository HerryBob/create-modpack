ServerEvents.recipes(event=>{
    event.shaped('createvintageneoforged:grinder_belt', [
        'AAA',
        'ABA',
        'AAA'
    ],
        {
            A:'createaddition:diamond_grit_sandpaper',
            B:'minecraft:sand'
        })

    event.remove({id:'createvintageneoforged:craft/grinder_belt'})
})
