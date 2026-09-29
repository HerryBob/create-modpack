LootJS.lootTables(event => {
    // 村庄盔甲匠 添加附魔铁头盔
    event.getLootTable("minecraft:chests/village/village_armorer")
    .firstPool()
    .addEntry(LootEntry.of('minecraft:iron_helmet[cold_sweat:armor_insulation={insulation:[]},repair_cost=3,enchantments={levels:{"minecraft:protection":1,"minecraft:respiration":1}}]').withWeight(10)
    )
    
    event.getLootTable("minecraft:chests/village/village_armorer")
        .firstPool()
        .addEntry(
            Item.of('minecraft:iron_helmet')
                .enchant('minecraft:protection', 2)
                .enchant('minecraft:respiration', 1)
        )
    event.getLootTable("minecraft:chests/village/village_armorer")
        .firstPool()
        .addEntry(
            Item.of('minecraft:iron_helmet')
                .enchant('minecraft:protection', 3)
                .enchant('minecraft:respiration', 1)
        )
    event.getLootTable("minecraft:chests/village/village_armorer")
        .firstPool()
        .addEntry(
            Item.of('minecraft:iron_helmet')
                .enchant('minecraft:protection', 1)
                .enchant('minecraft:respiration', 2)
        )
    event.getLootTable("minecraft:chests/village/village_armorer")
        .firstPool()
        .addEntry(
            Item.of('minecraft:iron_helmet')
                .enchant('minecraft:protection', 2)
                .enchant('minecraft:respiration', 2)
        )
    event.getLootTable("minecraft:chests/village/village_armorer")
        .firstPool()
        .addEntry(
            Item.of('minecraft:iron_helmet')
                .enchant('minecraft:protection', 3)
                .enchant('minecraft:respiration', 2)
        )
        //胸甲
        
    event.getLootTable("minecraft:chests/village/village_armorer")
    .firstPool()
        .addEntry(
            Item.of('minecraft:iron_chestplate')
                .enchant('minecraft:protection', 3)
                .enchant('minecraft:thorns', 1)
        )
    event.getLootTable("minecraft:chests/village/village_armorer")
    .firstPool()
        .addEntry(
            Item.of('minecraft:iron_chestplate')
                .enchant('minecraft:protection', 2)
                .enchant('minecraft:thorns', 1)
        )
    event.getLootTable("minecraft:chests/village/village_armorer")
    .firstPool()
        .addEntry(
            Item.of('minecraft:iron_chestplate')
                .enchant('minecraft:protection', 1)
                .enchant('minecraft:thorns', 1)
        )
    event.getLootTable("minecraft:chests/village/village_armorer")
    .firstPool()
        .addEntry(
            Item.of('minecraft:iron_chestplate')
                .enchant('minecraft:protection', 1)
                .enchant('minecraft:thorns', 2)
        )
    event.getLootTable("minecraft:chests/village/village_armorer")
    .firstPool()
        .addEntry(
            Item.of('minecraft:iron_chestplate')
                .enchant('minecraft:protection', 2)
                .enchant('minecraft:thorns', 2)
        )
    event.getLootTable("minecraft:chests/village/village_armorer")
    .firstPool()
        .addEntry(
            Item.of('minecraft:iron_chestplate')
                .enchant('minecraft:protection', 3)
                .enchant('minecraft:thorns', 2)
        )
        //护腿
        
    event.getLootTable("minecraft:chests/village/village_armorer")
    .firstPool()
        .addEntry(
            Item.of('minecraft:iron_leggings')
                .enchant('minecraft:protection', 3)
                .enchant('minecraft:swift_sneak', 1)
        )
    event.getLootTable("minecraft:chests/village/village_armorer")
    .firstPool()
        .addEntry(
            Item.of('minecraft:iron_leggings')
                .enchant('minecraft:protection', 2)
                .enchant('minecraft:swift_sneak', 1)
        )
    event.getLootTable("minecraft:chests/village/village_armorer")
    .firstPool()
        .addEntry(
            Item.of('minecraft:iron_leggings')
                .enchant('minecraft:protection', 1)
                .enchant('minecraft:swift_sneak', 1)
        )
    event.getLootTable("minecraft:chests/village/village_armorer")
    .firstPool()
        .addEntry(   
            Item.of('minecraft:iron_leggings')
                .enchant('minecraft:protection', 3)
                .enchant('minecraft:swift_sneak', 2)
        )
    event.getLootTable("minecraft:chests/village/village_armorer")
    .firstPool()
        .addEntry(
            Item.of('minecraft:iron_leggings')
                .enchant('minecraft:protection', 2)
                .enchant('minecraft:swift_sneak', 2)
        )
    event.getLootTable("minecraft:chests/village/village_armorer")
    .firstPool()
        .addEntry(
            Item.of('minecraft:iron_leggings')
                .enchant('minecraft:protection', 1)
                .enchant('minecraft:swift_sneak', 2)
        )
        //靴子
    event.getLootTable("minecraft:chests/village/village_armorer")
    .firstPool()
        .addEntry(
            Item.of('minecraft:iron_boots')
                .enchant('minecraft:protection', 1)
                .enchant('minecraft:feather_falling', 1)
        )
        
    event.getLootTable("minecraft:chests/village/village_armorer")
    .firstPool()
        .addEntry(
            Item.of('minecraft:iron_boots')
                .enchant('minecraft:protection', 2)
                .enchant('minecraft:feather_falling', 1)
        )
        
    event.getLootTable("minecraft:chests/village/village_armorer")
    .firstPool()
        .addEntry(
            Item.of('minecraft:iron_boots')
                .enchant('minecraft:protection', 3)
                .enchant('minecraft:feather_falling', 1)
        )
    event.getLootTable("minecraft:chests/village/village_armorer")
    .firstPool()
        .addEntry(
            Item.of('minecraft:iron_boots')
                .enchant('minecraft:protection', 1)
                .enchant('minecraft:feather_falling', 2)
        )
        
    event.getLootTable("minecraft:chests/village/village_armorer")
    .firstPool()
        .addEntry(
            Item.of('minecraft:iron_boots')
                .enchant('minecraft:protection', 2)
                .enchant('minecraft:feather_falling', 2)
        )
        //靴子
    event.getLootTable("minecraft:chests/village/village_armorer")
    .firstPool()
        .addEntry(
            Item.of('minecraft:iron_boots')
                .enchant('minecraft:protection', 3)
                .enchant('minecraft:feather_falling', 2)
        )

        
//另一套附魔的铁装备
        event.getLootTable("minecraft:chests/village/village_armorer")
        .firstPool()
        .addEntry(
            Item.of('minecraft:iron_helmet')
                .enchant('minecraft:protection', 1)
                .enchant('minecraft:aqua_affinity', 1)
        )    
    event.getLootTable("minecraft:chests/village/village_armorer")
    .firstPool()
        .addEntry(
            Item.of('minecraft:iron_helmet')
                .enchant('minecraft:protection', 2)
                .enchant('minecraft:aqua_affinity', 1)
        )
    event.getLootTable("minecraft:chests/village/village_armorer")
    .firstPool()
        .addEntry(
            Item.of('minecraft:iron_helmet')
                .enchant('minecraft:protection', 3)
                .enchant('minecraft:aqua_affinity', 1)
        )

        //胸甲
        
        //靴子
    event.getLootTable("minecraft:chests/village/village_armorer")
    .firstPool()
        .addEntry(
            Item.of('minecraft:iron_boots')
                .enchant('minecraft:protection', 1)
                .enchant('minecraft:frost_walker', 1)
        )
        
    event.getLootTable("minecraft:chests/village/village_armorer")
    .firstPool()
        .addEntry(
            Item.of('minecraft:iron_boots')
                .enchant('minecraft:protection', 2)
                .enchant('minecraft:frost_walker', 1)
        )
        
    event.getLootTable("minecraft:chests/village/village_armorer")
    .firstPool()
        .addEntry(
            Item.of('minecraft:iron_boots')
                .enchant('minecraft:protection', 3)
                .enchant('minecraft:frost_walker', 1)
        )
    event.getLootTable("minecraft:chests/village/village_armorer")
    .firstPool()
        .addEntry(
            Item.of('minecraft:iron_boots')
                .enchant('minecraft:protection', 1)
                .enchant('minecraft:frost_walker', 2)
        )
        
    event.getLootTable("minecraft:chests/village/village_armorer")
    .firstPool()
        .addEntry(
            Item.of('minecraft:iron_boots')
                .enchant('minecraft:protection', 2)
                .enchant('minecraft:frost_walker', 2)
        )
        //靴子
    event.getLootTable("minecraft:chests/village/village_armorer")
    .firstPool()
        .addEntry(
            Item.of('minecraft:iron_boots')
                .enchant('minecraft:protection', 3)
                .enchant('minecraft:frost_walker', 2)
        )

 //另一套附魔的铁装备
 
        
        //靴子
    event.getLootTable("minecraft:chests/village/village_armorer")
    .firstPool()
        .addEntry(
            Item.of('minecraft:iron_boots')
                .enchant('minecraft:protection', 1)
                .enchant('walljump:double_jump', 1)
        )
        
    event.getLootTable("minecraft:chests/village/village_armorer")
    .firstPool()
        .addEntry(
            Item.of('minecraft:iron_boots')
                .enchant('minecraft:protection', 2)
                .enchant('walljump:double_jump', 1)
        )
        
    event.getLootTable("minecraft:chests/village/village_armorer")
    .firstPool()
        .addEntry(
            Item.of('minecraft:iron_boots')
                .enchant('minecraft:protection', 3)
                .enchant('walljump:double_jump', 1)
        )
    event.getLootTable("minecraft:chests/village/village_armorer")
    .firstPool()
        .addEntry(
            Item.of('minecraft:iron_boots')
                .enchant('minecraft:protection', 1)
                .enchant('walljump:double_jump', 2)
        )
        
    event.getLootTable("minecraft:chests/village/village_armorer")
    .firstPool()
        .addEntry(
            Item.of('minecraft:iron_boots')
                .enchant('minecraft:protection', 2)
                .enchant('walljump:double_jump', 2)
        )
        //靴子
    event.getLootTable("minecraft:chests/village/village_armorer")
    .firstPool()
        .addEntry(
            Item.of('minecraft:iron_boots')
                .enchant('minecraft:protection', 3)
                .enchant('walljump:double_jump', 2)
        )
    event.getLootTable("minecraft:chests/village/village_armorer")
        .firstPool()
            .addEntry(
                Item.of('16x minecraft:soul_sand')
            )
        //
        //护腿
    
    //武器
    event.getLootTable("minecraft:chests/village/village_weaponsmith")
        .firstPool()
        .addEntry(
            Item.of('minecraft:iron_sword').enchant('minecraft:smite', 1)
        )
    event.getLootTable("minecraft:chests/village/village_weaponsmith")
        .firstPool()
        .addEntry(
            Item.of('minecraft:iron_sword').enchant('minecraft:smite', 2)
        )    
    event.getLootTable("minecraft:chests/village/village_weaponsmith")
        .firstPool()
        .addEntry(
            Item.of('minecraft:iron_sword').enchant('minecraft:looting', 1)
        )    
    event.getLootTable("minecraft:chests/village/village_weaponsmith")
        .firstPool()
        .addEntry(
            Item.of('minecraft:iron_sword').enchant('minecraft:looting', 1)
        )    
//斧头
    event.getLootTable("minecraft:chests/village/village_weaponsmith")
        .firstPool()
        .addEntry(
            Item.of('minecraft:iron_axe').enchant('minecraft:sharpness', 4)
        )
    event.getLootTable("minecraft:chests/village/village_weaponsmith")
        .firstPool()
        .addEntry(
            Item.of('minecraft:iron_axe').enchant('minecraft:sharpness', 3)
        )
    event.getLootTable("minecraft:chests/village/village_weaponsmith")
        .firstPool()
        .addEntry(
            Item.of('minecraft:iron_axe').enchant('minecraft:sharpness', 2)
        )
    event.getLootTable("minecraft:chests/village/village_weaponsmith")
        .firstPool()
        .addEntry(
            Item.of('minecraft:bow').enchant('minecraft:unbreaking', 2)
        )
    event.getLootTable("minecraft:chests/village/village_weaponsmith")
        .firstPool()
        .addEntry(
            Item.of('minecraft:bow').enchant('minecraft:unbreaking', 3)
        )
//弓
    event.getLootTable("minecraft:chests/village/village_weaponsmith")
        .firstPool()
        .addEntry(
            Item.of('minecraft:crossbow').enchant('minecraft:piercing', 3)
        )
    event.getLootTable("minecraft:chests/village/village_weaponsmith")
        .firstPool()
        .addEntry(
            Item.of('minecraft:crossbow').enchant('minecraft:piercing', 4)
        )
    event.getLootTable("minecraft:chests/village/village_weaponsmith")
        .firstPool()
        .addEntry(
            Item.of('16x minecraft:soul_sand')
        )


//工具
    event.getLootTable("minecraft:chests/village/village_toolsmith")
        .firstPool()
        .addEntry(
            'create:wrench'
        )
    event.getLootTable("minecraft:chests/village/village_toolsmith")
        .firstPool()
        .addEntry(
            'refurbished_furniture:wrench'
        )

    event.getLootTable("minecraft:chests/village/village_toolsmith")
        .firstPool()
        .addEntry(
            'refurbished_furniture:wrench'
        )
    event.getLootTable("minecraft:chests/village/village_toolsmith")
        .firstPool()
        .addEntry(
            Item.of('createdieselgenerators:wire_cutters')
        )
    event.getLootTable("minecraft:chests/village/village_toolsmith")
        .firstPool()
        .addEntry(
            Item.of('createdieselgenerators:hammer')
        )
    event.getLootTable("minecraft:chests/village/village_toolsmith")
        .firstPool()
        .addEntry(
            Item.of('farmersdelight:iron_knife')
        )
    event.getLootTable("minecraft:chests/village/village_toolsmith")
        .firstPool()
        .addEntry(
            Item.of('16x minecraft:soul_sand')
        )
})
// 护腿



