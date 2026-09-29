// 铁甲：第二章主力，均衡全面  基础: 头2/胸5/腿3/靴2=12  韧性全来自品质
ItemEvents.modification(event => {
    event.modify('minecraft:iron_helmet', item => {
        item.maxDamage = 165
        item.addAttributeModifier('minecraft:generic.armor', { amount: 2.0, operation: 'add_value', id: 'kubejs:iron_helmet' }, 'head')
    })
    event.modify('minecraft:iron_chestplate', item => {
        item.maxDamage = 240
        item.addAttributeModifier('minecraft:generic.armor', { amount: 5.0, operation: 'add_value', id: 'kubejs:iron_chestplate' }, 'chest')
    })
    event.modify('minecraft:iron_leggings', item => {
        item.maxDamage = 225
        item.addAttributeModifier('minecraft:generic.armor', { amount: 3.0, operation: 'add_value', id: 'kubejs:iron_leggings' }, 'legs')
    })
    event.modify('minecraft:iron_boots', item => {
        item.maxDamage = 195
        item.addAttributeModifier('minecraft:generic.armor', { amount: 2.0, operation: 'add_value', id: 'kubejs:iron_boots' }, 'feet')
    })
})
