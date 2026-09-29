// ===== 冻海海底岩浆块 =====
// 大片岩浆块铺在海底，水下自动产生气泡柱（向下吸流）

ServerEvents.registry('worldgen/configured-feature', event => {

    event.create('frozen_ocean_magma_field', 'minecraft:block_pile')
        .stateProvider('minecraft:magma_block')
        .biomes('minecraft:frozen_ocean','minecraft:cold_ocean','minecraft:deep_cold_ocean', 'minecraft:deep_frozen_ocean')
        .withPlacement(p => p.modifiers(m => {
            m.minecraft.count(30);                      // 每区块尝试 8 次
            m.minecraft.inSquare();
            m.minecraft.heightmap('OCEAN_FLOOR_WG');
            m.minecraft.surfaceWaterDepth(-90);
        }));

});
