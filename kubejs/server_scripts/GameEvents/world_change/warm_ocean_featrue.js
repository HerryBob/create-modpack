
// ===== 温暖海洋珊瑚群配置 =====
// 深度范围: -10 ~ -40 (水面下 10~40 格)
// 珊瑚类型: 爪状(claw) / 蘑菇(mushroom) / 树状(tree)

ServerEvents.registry('worldgen/configured-feature', event => {

    const coralTypes = ['coral_claw', 'coral_mushroom', 'coral_tree'];

    // ---- 浅水珊瑚 (深度 ≤20, 密集) ----
    coralTypes.forEach(type => {
        event.create(`warm_ocean_${type}_shallow`, `minecraft:${type}`)
            .biomes('minecraft:warm_ocean', 'terralith:deep_warm_ocean', 'minecraft:lukewarm_ocean', 'minecraft:deep_lukewarm_ocean')
            .withPlacement(p => p.modifiers(m => {
                m.minecraft.count(20);                   // 每区块尝试 20 次
                m.minecraft.inSquare();                   // 水平随机分布
                m.minecraft.heightmap('OCEAN_FLOOR_WG');  // 贴海底生成
                m.minecraft.surfaceWaterDepth(-20);       // 最浅 20 格水深
            }));
    });

    // ---- 中层珊瑚 (深度 ≤30, 适中) ----
    coralTypes.forEach(type => {
        event.create(`warm_ocean_${type}_mid`, `minecraft:${type}`)
            .biomes('minecraft:warm_ocean', 'terralith:deep_warm_ocean', 'minecraft:lukewarm_ocean', 'minecraft:deep_lukewarm_ocean')
            .withPlacement(p => p.modifiers(m => {
                m.minecraft.count(12);
                m.minecraft.inSquare();
                m.minecraft.heightmap('OCEAN_FLOOR_WG');
                m.minecraft.surfaceWaterDepth(-30);
            }));
    });

    // ---- 深层珊瑚 (深度 ≤40, 稀疏) ----
    coralTypes.forEach(type => {
        event.create(`warm_ocean_${type}_deep`, `minecraft:${type}`)
            .biomes('minecraft:warm_ocean', 'terralith:deep_warm_ocean', 'minecraft:lukewarm_ocean', 'minecraft:deep_lukewarm_ocean')
            .withPlacement(p => p.modifiers(m => {
                m.minecraft.count(6);
                m.minecraft.inSquare();
                m.minecraft.heightmap('OCEAN_FLOOR_WG');
                m.minecraft.surfaceWaterDepth(-40);
            }));
    });

    // ---- 深海珊瑚爪 (保留原有: 深洋专属, 深度 ≤30) ----
    event.create('coral_claw', 'coral_claw')
        .biomes('#c:is_deep_ocean')
        .withPlacement(p => p.modifiers(m => {
            m.minecraft.surfaceWaterDepth(-30);
        }));

});
