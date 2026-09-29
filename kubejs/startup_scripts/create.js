// 机械动力（Create）模组相关修改
// 修改强力胶耐久度为无限

ItemEvents.modification(event => {
    event.modify('create:super_glue', item => {
        // 设置物品为极高耐久度（Java Integer最大值）
        item.maxDamage = 2147483647;
    });

    //面团+陶碗
    event.modify('thirst:terracotta_water_bowl', item=>{
        item.setCraftingRemainder('thirst:terracotta_bowl')
    })
});

