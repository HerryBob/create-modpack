
// // ======================== 全局配置 ========================
// const FUNGUS_CONFIG = {
//     fungusBlockIds: [
//         'spore:organite',
//         'spore:mycelium_block',
//         'spore:fungal_shell',
//         'spore:rooted_biomass',
//         'spore:membrane_block',
//         'spore:biomass_block',
//         'spore:gastric_biomass_block',
//         'spore:calcified_biomass_block',
//         'spore:sicken_biomass_block',
//         'spore:mycelium_veins',
//         'spore:brain_remnants'
//     ],
//     immuneBlocks: ['minecraft:iron_block'],
//     mindEntityId: "spore:proto", // 雏形心智实体ID
//     temperature: -20,            // -20度以下无法感染
//     restoreTickInterval: 40,     // 检测间隔（20Tick=1秒，这里是2秒）
//     detectRange: 60              // 立方体检测范围（X/Y/Z各±60格）
// };

// // 全局存储：去重后的方块信息（key=维度:X:Y:Z，value=方块ID）
// let GLOBAL_BLOCK_INFO = new Map();

// // ======================== 所有逻辑集成到Tick事件中 ========================
// ServerEvents.tick(event => {
//     const server = event.server;
//     if (server.tickCount % FUNGUS_CONFIG.restoreTickInterval === 0) {
//         // 每次执行前清空旧的方块信息，避免累积
//         GLOBAL_BLOCK_INFO.clear();

//         // -------------------------- 第一步：获取所有雏形心智坐标 --------------------------
//         let mindPositions = [];
//         server.getAllLevels().forEach(lvl => {
//             const dimId = lvl.dimension.toString();
//             const targetMindId = FUNGUS_CONFIG.mindEntityId;


//             lvl.getAllEntities().forEach(entity => {
//                 if (entity.getType() === targetMindId) { // 你确认此判断有效，保留原逻辑
//                     const pos = entity.blockPosition();
//                     mindPositions.push({
//                         dimension: dimId,
//                         x: pos.getX(),
//                         y: pos.getY(),
//                         z: pos.getZ()
//                     });
//                 }
//             });
//         });
//          // 如果没找到雏形心智，直接结束
//             if (mindPositions.length === 0) {
//                 return;
//             }
//         var range = FUNGUS_CONFIG.detectRange;

//         mindPositions.forEach(mind => {
//             const { dimension:dim, x: mindX, y: mindY, z: mindZ } = mind;
    
//             // X轴：mindX-60 到 mindX+60
//             for (let dx = -range; dx <= range; dx++) {
//                 // Y轴：mindY-60 到 mindY+60（严格按半径，无额外限制）
//                 for (let dy = -range; dy <= range; dy++) {
//                     // Z轴：mindZ-60 到 mindZ+60
//                     for (let dz = -range; dz <= range; dz++) {
//                         // 计算实际坐标
//                         const realX = mindX + dx;
//                         const realY = mindY + dy;
//                         const realZ = mindZ + dz;
//                         // 生成去重key（维度:x:y:z）
//                         const blockKey = `${mind.dim}:${realX}:${realY}:${realZ}`;
//                         server.tell("代码运行到此"+blockKey);

//                         // 跳过已存储的方块（多心智重叠区域去重）
//                         if (GLOBAL_BLOCK_INFO.has(blockKey)) continue;
    
//                         // 获取方块ID
//                         const blockPos = new BlockPos(realX, realY, realZ);
//                         const blockId = level.getBlock(blockPos).id;
    
//                         // 3. 显式存储维度、坐标、方块ID（完全符合你的需求）
//                         GLOBAL_BLOCK_INFO.set(blockKey, {
//                             dimension: mind.dimension, // 维度
//                             x: realX,                  // X坐标
//                             y: realY,                  // Y坐标
//                             z: realZ,                  // Z坐标
//                             blockId: blockId           // 方块ID
//                         });
//                     }
//                 }
//             }
//         });
//     }
// });

// // ColdSweatEvents.temperatureChanged
