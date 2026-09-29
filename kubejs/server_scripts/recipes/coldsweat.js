ServerEvents.recipes(event => {
    // ============================
    // 核心设备
    // ============================

    // 锅炉 — 热源（铁块+熔炉）
    event.shaped('cold_sweat:boiler', [
        'ABA',
        'CDC',
        'EEE'
    ], {
        A: 'minecraft:iron_block',
        B: 'minecraft:blast_furnace',
        C: 'minecraft:iron_bars',
        D: 'minecraft:furnace',
        E: 'minecraft:iron_ingot'
    })

    // 温度计 — 金锭+红石粉
    event.shaped('cold_sweat:thermometer', [
        'GRG',
        ' R ',
        ' R '
    ], {
        G: '#c:ingots/gold',
        R: '#c:dusts/redstone'
    })

    // 水袋 — 线+皮革 (2个)
    event.shaped('2x cold_sweat:waterskin', [
        '  S',
        ' L ',
        'L  '
    ], {
        S: '#c:strings',
        L: '#c:leathers'
    })

    // 冰柜 — 圆石+木板
    event.shaped('cold_sweat:icebox', [
        'CCC',
        'P P',
        'PPP'
    ], {
        C: '#c:cobblestones/normal',
        P: '#minecraft:planks'
    })

    // 烟囱 — 圆石 (4个)
    event.shaped('4x cold_sweat:smokestack', [
        'C C',
        'C C',
        'C C'
    ], {
        C: '#c:cobblestones/normal'
    })

    // 壁炉 — 烟囱+下界砖+灵魂沙+铁锭（需下界材料）
    event.shaped('cold_sweat:hearth', [
        ' # ',
        'BBB',
        'SIS'
    ], {
        '#': 'cold_sweat:smokestack',
        B: '#c:ingots/nether_brick',
        S: '#minecraft:soul_fire_base_blocks',
        I: '#c:ingots/iron'
    })

    // 缝纫台 — 羊毛+木板
    event.shaped('cold_sweat:sewing_table', [
        'WW',
        'PP',
        'PP'
    ], {
        W: '#minecraft:wool',
        P: '#minecraft:planks'
    })

    // 灵魂灯 — 金粒+铁锭+海洋之心+锁链（稀有Boss材料）
    event.shaped('cold_sweat:soulspring_lamp', [
        ' G ',
        'IHI',
        ' C '
    ], {
        G: '#c:nuggets/gold',
        I: '#c:ingots/iron',
        H: 'minecraft:heart_of_the_sea',
        C: '#c:chains'
    })

    // 热石块 — 变色龙鳞片+陶瓦
    event.shaped('cold_sweat:thermolith', [
        'MT ',
        'MT ',
        'MTT'
    ], {
        M: '#c:scales/chameleon',
        T: '#minecraft:terracotta'
    })

    // 疣猪皮→皮革 (1→2)
    event.shapeless('2x minecraft:leather', ['#c:leathers/hoglin'])

    // ============================
    // 矿车隔热
    // ============================
    // 矿车隔热层 — 羊毛+皮革
    event.shaped('cold_sweat:minecart_insulation', [
        '   ',
        'W W',
        'LLL'
    ], {
        W: '#minecraft:wool',
        L: '#c:leathers'
    })

    // 隔热矿车 — 隔热层+矿车
    event.shaped('cold_sweat:insulated_minecart', [
        '   ',
        ' I ',
        ' M '
    ], {
        I: 'cold_sweat:minecart_insulation',
        M: 'minecraft:minecart'
    })

    // 隔热矿车(直接合成) — 羊毛+皮革+矿车
    event.shaped('cold_sweat:insulated_minecart', [
        '   ',
        'WMW',
        'LLL'
    ], {
        W: '#minecraft:wool',
        L: '#c:leathers',
        M: 'minecraft:minecart'
    })

})
