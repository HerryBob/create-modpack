CDGEvents.oilAmount((event) => {
    // 所有海洋群系
    const OCEAN_BIOMES = [
        "minecraft:deep_ocean",
        "minecraft:deep_lukewarm_ocean",
        "minecraft:deep_cold_ocean",
        "minecraft:deep_frozen_ocean",
        "minecraft:ocean",
        "minecraft:warm_ocean",
        "minecraft:lukewarm_ocean",
        "minecraft:cold_ocean",
        "minecraft:frozen_ocean",
        "terralith:deep_warm_ocean"
    ];

    // 深海群系
    const DEEP_OCEANS = [
        "minecraft:deep_ocean",
        "minecraft:deep_lukewarm_ocean",
        "minecraft:deep_cold_ocean",
        "minecraft:deep_frozen_ocean",
        "terralith:deep_warm_ocean"
    ];

    let biomes = event.biomes;
    let oilAmount = 0;

    // 1. 不是海洋 → 没油
    let isOcean = biomes.some(b => OCEAN_BIOMES.includes(b));
    if (!isOcean) {
        event.success(0);
        return;
    }

    let seed = event.seed;
    let x = event.chunkPos.x;
    let z = event.chunkPos.z;

    // 生成一个 0~1 固定随机数（区块绑定）
    let hash = (seed ^ x ^ z) * 123456789;
    hash = Math.abs(hash);
    let rand = (hash % 10000) / 10000;

    // 2. 15% 概率出油
    if (rand > 0.02) {
        event.success(0);
        return;
    }

    // 判断深海/浅海
    let isDeep = biomes.some(b => DEEP_OCEANS.includes(b));

    // 再生成一个固定随机数（算油量）
    let hash2 = (seed + x * 123 - z * 456) * 98765;
    hash2 = Math.abs(hash2);
    let randAmount = (hash2 % 10000) / 10000;

    // 3. 赋值油量
    if (isDeep) {
        oilAmount = 6000 + Math.floor(randAmount * 16666);
    } else {
        oilAmount = 1000 + Math.floor(randAmount * 6666);
    }

    event.success(oilAmount*1000);
});
