import { event } from "jquery";

ServerEvents.recipes(event=>{

    const create = event.recipes.create
    //删除多余的面团物品
    event.remove({id:'refurbished_furniture:combining/wheat_flour'})
    event.remove({id:'refurbished_furniture:dough'})
    event.remove({id:'refurbished_furniture:combining/raw_meatlovers_pizza'})
    event.remove({id:'refurbished_furniture:combining/raw_vegetable_pizza'})
    event.remove({output:'farmersdelight:wheat_dough'})
    event.remove({id:'minecraft:farmersdelight.dough'})


    //面团的去向

    event.replaceInput({input:'minecraft:wheat'},'minecraft:wheat', 'create:dough')
    event.remove({id:'minecraft:hay_block'})
    event.shapeless('minecraft:hay_block',[
      'minecraft:wheat','minecraft:wheat','minecraft:wheat',
      'minecraft:wheat','minecraft:wheat','minecraft:wheat',
      'minecraft:wheat','minecraft:wheat','minecraft:wheat'
    ])



})

