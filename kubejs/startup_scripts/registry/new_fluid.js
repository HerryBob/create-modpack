StartupEvents.registry('fluid', event=>{

    event.create('createae2:coal_oil', "kubejs:thin")
    .tint('#2F2F2F')  // 深灰色煤油
    .type(type => {
        type.viscosity(600)  // 煤油相对较低的粘稠度
    })
    .tag("forge:coal_oil")
    .formattedDisplayName().displayName('煤油')
    
    event.create('createae2:heavy_oil', "kubejs:thick")
    .tint('#1C1C1C')  // 黑色重油
    .type(type => {
        type.viscosity(2500)  // 重油非常粘稠
    })
    .tag("forge:heavy_oil")
    .translationKey('fluid.createae2.heavy_oil')
    .displayName('重油')

    event.create('createae2:water_heavy_oil', "kubejs:thick")
    .tint('#4A4A2F')  // 深绿褐色水油混合物
    .type(type => {
        type.viscosity(1800)  // 加水重油较粘稠
    })
    .tag("forge:water_heavy_oil")
    .translationKey('fluid.createae2.water_heavy_oil')
    .displayName('加水重油')

    event.create('createae2:sulfur_oil', "kubejs:thin")
    .tint('#FFFACD')  // 淡黄色轻油
    .type(type => {
        type.viscosity(400)  // 轻油粘稠度较低
    })
    .tag("forge:sulfur_oil")
    .translationKey('fluid.createae2.sulfur_oil')
    .displayName('轻油')




    event.create('createae2:molten_silicon', "kubejs:thick")
    .tint('#FFA500')  // 橙色熔融硅
    .type(type => {
        type.viscosity(3000)  // 熔融硅非常粘稠
    })
    .tag("forge:molten_silicon")
    .translationKey('fluid.createae2.molten_silicon')
    .displayName('熔融硅')



    event.create('createae2:absolute_ethanol', "kubejs:thin")
    .tint('#FFFFE0')  // 淡黄色无水乙醇
    .type(type => {
        type.viscosity(250)  // 乙醇粘稠度很低
    })
    .tag("forge:absolute_ethanol")
    .translationKey('fluid.createae2.absolute_ethanol')
    .displayName('无水乙醇')


        event.create('createae2:diluted_sulfuric_acid', "kubejs:thin")
    .tint('#9FD8CF')  // 淡黄色轻油
    .type(type => {
        type.viscosity(400)  // 轻油粘稠度较低
    })
    .tag("forge:sulfur_oil")
    .translationKey('fluid.createae2.diluted_sulfuric_acid')
    .displayName('稀硫酸')
    
})


