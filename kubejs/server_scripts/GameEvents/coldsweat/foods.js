//1 'mc' = 24 摄氏度
ColdSweatEvents.registries(event=>{

//     event.addFoodTemperature(foodtemp=>
//     foodtemp.items("minecraft:melon_slice")
//     .temperature(-5)
//     .duration(600)
// )
//     event.addFoodTemperature(foodtemp=>
//     foodtemp.items("farmersdelight:melon_popsicle")
//     .temperature(-20)
//     .duration(1200)
// )
    event.addFoodTemperature(foodtemp=>
    foodtemp.items("farmersdelight:hot_cocoa","create:builders_tea")
    .temperature(20)
    .duration(1200)
)


})
