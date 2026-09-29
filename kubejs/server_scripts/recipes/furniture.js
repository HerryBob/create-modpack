ServerEvents.recipes(e=>{

    const create = e.recipes.create

    e.remove({id:'refurbished_furniture:constructing/light_fridge'})
    e.remove({id:'refurbished_furniture:constructing/dark_fridge'})
    e.remove({id:'refurbished_furniture:dark_fridge'})

    //木制桌子
    
    create.item_application('another_furniture:oak_table',['handcrafted:oak_table','minecraft:iron_axe']).keepHeldItem() 
    create.item_application('another_furniture:spruce_table',['handcrafted:spruce_table','minecraft:iron_axe']).keepHeldItem() 
    create.item_application('another_furniture:birch_table',['handcrafted:birch_table','minecraft:iron_axe']).keepHeldItem() 
    create.item_application('another_furniture:bamboo_table',['handcrafted:bamboo_table', 'minecraft:iron_axe']).keepHeldItem() 
    create.item_application('another_furniture:dark_oak_table', ['handcrafted:dark_oak_table','minecraft:iron_axe']).keepHeldItem() 
    create.item_application('another_furniture:cherry_table', ['handcrafted:cherry_table','minecraft:iron_axe']).keepHeldItem() 
    create.item_application('another_furniture:crimson_table',['handcrafted:crimson_table','minecraft:iron_axe']).keepHeldItem() 
    create.item_application('another_furniture:acacia_table',['handcrafted:acacia_table','minecraft:iron_axe']).keepHeldItem() 
    create.item_application('another_furniture:jungle_table',['handcrafted:jungle_table','minecraft:iron_axe']).keepHeldItem() 
    create.item_application('another_furniture:mangrove_table',['handcrafted:mangrove_table','minecraft:iron_axe']).keepHeldItem() 
    create.item_application('another_furniture:warped_table',['handcrafted:warped_table','minecraft:iron_axe']).keepHeldItem() 


})
