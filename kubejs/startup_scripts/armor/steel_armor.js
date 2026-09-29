// 钢甲：毕业坦克，超耐久  基础: 头3/胸8/腿6/靴3=20  韧性: 1.0/件
ItemEvents.modification(event => {
    event.modify('overgeared:steel_helmet', item => {
        item.maxDamage = 280
        item.addAttributeModifier('minecraft:generic.armor', { amount: 3.0, operation: 'add_value', id: 'kubejs:steel_helmet' }, 'head')
        item.addAttributeModifier('minecraft:generic.armor_toughness', { amount: 1.0, operation: 'add_value', id: 'kubejs:steel_helmet_t' }, 'head')
    })
    event.modify('overgeared:steel_chestplate', item => {
        item.maxDamage = 400
        item.addAttributeModifier('minecraft:generic.armor', { amount: 8.0, operation: 'add_value', id: 'kubejs:steel_chestplate' }, 'chest')
        item.addAttributeModifier('minecraft:generic.armor_toughness', { amount: 1.0, operation: 'add_value', id: 'kubejs:steel_chestplate_t' }, 'chest')
    })
    event.modify('overgeared:steel_leggings', item => {
        item.maxDamage = 375
        item.addAttributeModifier('minecraft:generic.armor', { amount: 6.0, operation: 'add_value', id: 'kubejs:steel_leggings' }, 'legs')
        item.addAttributeModifier('minecraft:generic.armor_toughness', { amount: 1.0, operation: 'add_value', id: 'kubejs:steel_leggings_t' }, 'legs')
    })
    event.modify('overgeared:steel_boots', item => {
        item.maxDamage = 330
        item.addAttributeModifier('minecraft:generic.armor', { amount: 3.0, operation: 'add_value', id: 'kubejs:steel_boots' }, 'feet')
        item.addAttributeModifier('minecraft:generic.armor_toughness', { amount: 1.0, operation: 'add_value', id: 'kubejs:steel_boots_t' }, 'feet')
    })
})
