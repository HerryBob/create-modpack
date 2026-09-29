const TICK = 40; // 每2秒执行一次

// ✅ 沿用原生数组（适配KubeJS）
const SPORE_ENTITY = [
    "spore:proto",
    'spore:infected_human',
    'spore:inf_husk',
    'spore:inf_villager',
    'spore:inf_diseased_villager',
    'spore:inf_witch',
    'spore:inf_pillager',
    'spore:inf_vind',
    'spore:inf_evo',
    'spore:inf_wanderer',
    'spore:inf_drowned',
    'spore:inf_player',
    'spore:inf_hazmat',
    "spore:inf_human",
    'spore:plagued',
    'spore:lacerator',
    'spore:biobloob',
    'spore:saugling',
    'spore:knight',
    'spore:griefer',
    'spore:braio',
    'spore:busser',
    'spore:leaper',
    'spore:slasher',
    'spore:spitter',
    'spore:howler',
    'spore:stalker',
    'spore:brute',
    'spore:volatile',
    'spore:meph',
    'spore:inebriater',
    'spore:chemist',
    'spore:thorn',
    'spore:jagd',
    'spore:scavenger',
    'spore:bloater',
    'spore:naiad',
    'spore:nuclea',
    'spore:prot',
    'spore:bairn',
    'spore:illusion',
    'spore:scamper',
    'spore:gastgaber',
    'spore:specter',
    'spore:construct',
    'spore:vanguard',
    'spore:mound',
    'spore:vigil',
    'spore:umarmed',
    'spore:usurper',
    'spore:braurei',
    'spore:verva',
    'spore:delusioner',
    'spore:reconstructor',
    'spore:wendigo',
    'spore:inquisitor',
    'spore:brot',
    'spore:hevoker',
    'spore:ogre',
    'spore:hvindicator',
    'spore:sieger',
    'spore:gazen',
    'spore:hinden',
    'spore:howitzer',
    'spore:hohlfresser',
    'spore:kraken',
    'spore:inf_contruct'
];

const monitoredEntityUUIDs = [];
const invalidUUIDs=[];
EntityEvents.spawned(event => {
    const server = event.server
    const entity = event.entity;
    const entityType = entity.getType().toString();
    
    if (SPORE_ENTITY.includes(entityType)) {
        // 避免重复添加同一实体
        if (!monitoredEntityUUIDs.includes(entity.getUuid().toString())) {
            monitoredEntityUUIDs.push(entity.getUuid().toString());
        }
    }
});

// 仅遍历标记的实体，优化性能
ServerEvents.tick(event => {
    const server = event.server;

    if (server.tickCount % TICK !== 0) return;

    // 遍历标记的实体UUID
    monitoredEntityUUIDs.forEach(every=>{
        // 通过UUID获取实体（KubeJS官方推荐，避免全局遍历）
        const entity = server.getEntityByUUID(every);
        // 检查实体是否存在
        if(!entity || !entity.isAlive() || !entity.level) {
            // 第一步：将无效UUID存入临时数组（不直接删除）
            invalidUUIDs.push(every);
            return;
        }
            const entityTemp = coldsweat.getTemperature(entity, "world");
            // 批量处理药水效果
            const effects = [];
            if (entityTemp <= 0 && entityTemp > -0.4) {//虚弱,缓慢
                effects.push(["minecraft:slowness", 60, 0], ["minecraft:weakness", 60, 0]);
            } else if (entityTemp >= -1.0 && entityTemp <= -0.4) {//虚弱,缓慢,重伤
                effects.push(["minecraft:slowness", 60, 1], ["minecraft:weakness", 60, 1]);
            }else if(entityTemp >= -1.6 && entityTemp <= -1.0){//虚弱,缓慢,重伤,破甲
                effects.push(["minecraft:slowness", 60, 3], ["minecraft:weakness", 60, 3],["spore:corrosion",60,2])
            }else if(entityTemp >= -2.4 && entityTemp <= -1.6){//虚弱,缓慢,重伤,破甲,失明
                effects.push(["minecraft:slowness", 60, 5], ["minecraft:weakness", 60, 5],["spore:corrosion",60,3],["minecraft:blindness",60,0])
            }else if(entityTemp >= -3.0 && entityTemp <= -2.4){//虚弱,缓慢,重伤,破甲,失明
                effects.push(["minecraft:slowness", 60, 6], ["minecraft:weakness", 60, 6],["spore:corrosion",60,4],["minecraft:poison",60,2],["minecraft:blindness",60,1])
            }else if(entityTemp <= -3.0){//虚弱,缓慢,重伤,破甲,失明,死亡
                effects.push(["minecraft:slowness", 60, 6], ["minecraft:weakness", 60, 6], ["spore:corrosion",60,5],["minecraft:blindness",60,1])
                    entity.kill()
            }

            // 批量添加药水效果（减少调用次数）
            effects.forEach(([id, duration, amp]) => {
                entity.potionEffects.add(id, duration, amp);
            });
    })

    invalidUUIDs.forEach(uuid => {
        // 找到UUID在数组中的索引
        const index = monitoredEntityUUIDs.indexOf(uuid);
        if (index !== -1) {
            monitoredEntityUUIDs.splice(index, 1);
        }
    });

});

ColdSweatEvents.registries(event => {
    event.addEntityClimate(builder => {
        builder.entities(SPORE_ENTITY); // 直接用原数组
        builder.rate(0);
        builder.units("c");
    });
});
