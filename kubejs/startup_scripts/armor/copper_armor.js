// 铜甲：入门级，量大多刷  基础: 头2/胸5/腿3/靴1=11
ItemEvents.modification(event => {
    event.modify('overgeared:copper_helmet', item => {
        item.maxDamage = 80
        item.addAttributeModifier('minecraft:generic.armor', { amount: 2.0, operation: 'add_value', id: 'kubejs:copper_helmet' }, 'head')
    })
    event.modify('overgeared:copper_chestplate', item => {
        item.maxDamage = 120
        item.addAttributeModifier('minecraft:generic.armor', { amount: 5.0, operation: 'add_value', id: 'kubejs:copper_chestplate' }, 'chest')
    })
    event.modify('overgeared:copper_leggings', item => {
        item.maxDamage = 110
        item.addAttributeModifier('minecraft:generic.armor', { amount: 3.0, operation: 'add_value', id: 'kubejs:copper_leggings' }, 'legs')
    })
    event.modify('overgeared:copper_boots', item => {
        item.maxDamage = 90
        item.addAttributeModifier('minecraft:generic.armor', { amount: 1.0, operation: 'add_value', id: 'kubejs:copper_boots' }, 'feet')
    })
})
