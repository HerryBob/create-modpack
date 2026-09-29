// 金甲：玻璃大炮 — 高护甲低耐久  基础: 头3/胸6/腿5/靴2=16  韧性: 1.0/件
ItemEvents.modification(event => {
    event.modify('minecraft:golden_helmet', item => {
        item.maxDamage = 50
        item.addAttributeModifier('minecraft:generic.armor', { amount: 3.0, operation: 'add_value', id: 'kubejs:gold_helmet' }, 'head')
        item.addAttributeModifier('minecraft:generic.armor_toughness', { amount: 1.0, operation: 'add_value', id: 'kubejs:gold_helmet_t' }, 'head')
    })
    event.modify('minecraft:golden_chestplate', item => {
        item.maxDamage = 70
        item.addAttributeModifier('minecraft:generic.armor', { amount: 6.0, operation: 'add_value', id: 'kubejs:gold_chestplate' }, 'chest')
        item.addAttributeModifier('minecraft:generic.armor_toughness', { amount: 1.0, operation: 'add_value', id: 'kubejs:gold_chestplate_t' }, 'chest')
    })
    event.modify('minecraft:golden_leggings', item => {
        item.maxDamage = 65
        item.addAttributeModifier('minecraft:generic.armor', { amount: 5.0, operation: 'add_value', id: 'kubejs:gold_leggings' }, 'legs')
        item.addAttributeModifier('minecraft:generic.armor_toughness', { amount: 1.0, operation: 'add_value', id: 'kubejs:gold_leggings_t' }, 'legs')
    })
    event.modify('minecraft:golden_boots', item => {
        item.maxDamage = 55
        item.addAttributeModifier('minecraft:generic.armor', { amount: 2.0, operation: 'add_value', id: 'kubejs:gold_boots' }, 'feet')
        item.addAttributeModifier('minecraft:generic.armor_toughness', { amount: 1.0, operation: 'add_value', id: 'kubejs:gold_boots_t' }, 'feet')
    })
})
