// Genetics: Resequenced 基因清理
// 禁用所有默认基因，只保留 basic（基础合成材料）
// 机器和系统保留，后续自己写超人基因

ServerEvents.tags('geneticsresequenced:gene', event => {
    event.add('geneticsresequenced:disabled', [
        // 特殊能力
        'geneticsresequenced:flight',
        'geneticsresequenced:teleport',
        'geneticsresequenced:wall_climbing',
        'geneticsresequenced:step_assist',
        'geneticsresequenced:reaching',
        'geneticsresequenced:item_magnet',
        'geneticsresequenced:xp_magnet',
        'geneticsresequenced:infinity',
        'geneticsresequenced:keep_inventory',
        'geneticsresequenced:no_fall_damage',
        'geneticsresequenced:no_hunger',
        'geneticsresequenced:water_breathing',
        'geneticsresequenced:night_vision',
        'geneticsresequenced:invisible',
        'geneticsresequenced:mob_sight',
        'geneticsresequenced:shoot_fireballs',
        'geneticsresequenced:dragons_breath',
        'geneticsresequenced:slimy_death',
        'geneticsresequenced:explosive_exit',
        'geneticsresequenced:emerald_heart',
        'geneticsresequenced:ender_dragon_health',
        'geneticsresequenced:bioluminescence',

        // 属性提升
        'geneticsresequenced:speed',
        'geneticsresequenced:speed_2',
        'geneticsresequenced:speed_4',
        'geneticsresequenced:strength',
        'geneticsresequenced:strength_2',
        'geneticsresequenced:resistance',
        'geneticsresequenced:resistance_2',
        'geneticsresequenced:regeneration',
        'geneticsresequenced:regeneration_4',
        'geneticsresequenced:haste',
        'geneticsresequenced:haste_2',
        'geneticsresequenced:efficiency',
        'geneticsresequenced:efficiency_4',
        'geneticsresequenced:jump_boost',
        'geneticsresequenced:more_hearts',
        'geneticsresequenced:more_hearts_2',
        'geneticsresequenced:luck',
        'geneticsresequenced:knockback',
        'geneticsresequenced:thorns',
        'geneticsresequenced:fire_proof',
        'geneticsresequenced:lava_proof',
        'geneticsresequenced:poison_immunity',
        'geneticsresequenced:wither_proof',

        // 攻击相关
        'geneticsresequenced:claws',
        'geneticsresequenced:claws_2',
        'geneticsresequenced:chilling',
        'geneticsresequenced:wither_hit',
        'geneticsresequenced:johnny',
        'geneticsresequenced:un_undeath',

        // 威慑生物
        'geneticsresequenced:scare_creepers',
        'geneticsresequenced:scare_skeletons',
        'geneticsresequenced:scare_spiders',
        'geneticsresequenced:scare_zombies',

        // 生产类
        'geneticsresequenced:milky',
        'geneticsresequenced:wooly',
        'geneticsresequenced:meaty',
        'geneticsresequenced:meaty_2',
        'geneticsresequenced:lay_egg',
        'geneticsresequenced:eat_grass',
        'geneticsresequenced:photosynthesis',
        'geneticsresequenced:bountiful',
        'geneticsresequenced:bountiful_2',
        'geneticsresequenced:experienced',
        'geneticsresequenced:fertile',

        // 行为类
        'geneticsresequenced:frenzied',
        'geneticsresequenced:placid',
        'geneticsresequenced:chatterbox',
        'geneticsresequenced:cringe',

        // 蛛网相关
        'geneticsresequenced:weaving',
        'geneticsresequenced:web_defense',
        'geneticsresequenced:web_walker',
        'geneticsresequenced:oozing',

        // 负面基因
        'geneticsresequenced:blindness',
        'geneticsresequenced:cursed',
        'geneticsresequenced:flambe',
        'geneticsresequenced:hunger',
        'geneticsresequenced:infested',
        'geneticsresequenced:mining_fatigue',
        'geneticsresequenced:nausea',
        'geneticsresequenced:poison',
        'geneticsresequenced:poison_4',
        'geneticsresequenced:slowness',
        'geneticsresequenced:slowness_4',
        'geneticsresequenced:slowness_6',
        'geneticsresequenced:weakness',
        'geneticsresequenced:wither',
        'geneticsresequenced:levitation',
        'geneticsresequenced:wind_charged',

        // 死亡基因
        'geneticsresequenced:black_death',
        'geneticsresequenced:white_death',
        'geneticsresequenced:gray_death',
        'geneticsresequenced:green_death'
    ])

    console.log('[基因清理] 已禁用 100 个默认基因，保留 basic 用于合成')
})
