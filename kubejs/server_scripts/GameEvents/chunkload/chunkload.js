// // ===================== 前置定义区（核心常量/实例/类） =====================
// // 加载MC区块状态类
// const ChunkStatus = Java.loadClass("net.minecraft.world.level.chunk.status.ChunkStatus");

// // 全局批次加载定时器（提升作用域，避免未定义报错）
// let loadTimer = null;

// // 整体开关类（仅保留必要配置，无冗余）
// function GlobeSwitch() {
//     // 区块核心配置
//     let _maxChunkDistance = 0;
//     // 优化部分的开关
//     let _mobSpawnDisable = true; // 是否开启生物生成
//     let _timeCycle = true;        // 是否开启时间循环
//     let _lastTimeCycle = true;    // 上次时间循环状态缓存
//     let _getChunk = true;         // 控制是否重复询问玩家区块范围
//     let _interruptLoad = false;   // 中断区块加载标记

//     // 区块距离 getter/setter
//     this.getMaxChunkDistance = function() {
//         return _maxChunkDistance;
//     };
//     this.setMaxChunkDistance = function(value) {
//         _maxChunkDistance = value;
//     };

//     // 生物生成禁用 getter/setter
//     this.getMobSpawnDisable = function() {
//         return _mobSpawnDisable;
//     };
//     this.setMobSpawnDisable = function(value) {
//         _mobSpawnDisable = value;
//     };

//     // 玩家询问标记 getter/setter
//     this.getGetChunk = function() {
//         return _getChunk;
//     };
//     this.setGetChunk = function(value) {
//         _getChunk = value;
//     };
    
//     // 中断区块加载 getter/setter
//     this.getInterruptLoad = function(){
//         return _interruptLoad;
//     };
//     this.setInterruptLoad = function(value){
//         _interruptLoad = value;
//     };

//     // 时间循环标记 getter/setter
//     this.getTimeCycle = function(){
//         return _timeCycle;
//     };
//     this.setTimeCycle = function(value){
//         _timeCycle = value;
//     };

//     // 上次时间循环标记 getter/setter
//     this.getLastTimeCycle = function(){
//         return _lastTimeCycle;
//     };
//     this.setLastTimeCycle = function(value){
//         _lastTimeCycle = value;
//     };
// }

// // 创建全局唯一开关实例
// const globalSwitch = new GlobeSwitch();
// // 待加载区块坐标队列（存储所有需要加载的区块位置）
// let chunkQueue = [];
// // 生物生成禁用白名单
// const mobWhitelist = [
//     "minecraft:player",
//     "minecraft:villager",
//     "minecraft:iron_golem"
// ];

// // ===================== 工具方法区（独立抽离，便于复用） =====================
// // 清理玩家聊天框（提升询问体验）
// function clearChat(player){
//     for(let i = 0; i < 20; i++){
//         player.tell(Text.gray("§r§f§r§f§r§f§r§f§r§f§r§f§r§f§r§f§r§f§r§f§r§f§r§f§r§f"));
//     }
// }

// // ===================== 核心功能事件区（按功能归类，逻辑清晰） =====================
// // 0. 玩家登入事件
// // 1. 实体生成拦截（白名单外实体禁止生成）
// EntityEvents.spawned(event => {
//     if (globalSwitch.getMobSpawnDisable() === true) {
//         return;
//     }
//     const entityTypeID = event.entity.getEntityType();
//     if (!mobWhitelist.includes(entityTypeID.getId())) {
//         event.cancel();
//     }


// });

// // 2. 世界时间/天气循环控制（仅状态变化时执行）
// LevelEvents.tick(event=>{
//     // 状态未变化时直接返回，避免无效执行
//     if(globalSwitch.getLastTimeCycle() === globalSwitch.getTimeCycle()) {
//         return;
//     }
//     const server = event.server;
//     // 关闭时间/天气循环
//     if(globalSwitch.getTimeCycle() === false){
//         server.runCommandSilent("/gamerule doWeatherCycle false");
//         server.runCommandSilent("/gamerule doDaylightCycle false");
//     }
//     // 开启时间/天气循环
//     if(globalSwitch.getTimeCycle() === true){
//         server.runCommandSilent("/gamerule doWeatherCycle true");
//         server.runCommandSilent("/gamerule doDaylightCycle true");
//     }
//     // 更新缓存状态，确保仅执行一次
//     globalSwitch.setLastTimeCycle(globalSwitch.getTimeCycle());
// });

// // 3. 玩家退出事件（终止区块加载，避免阻塞退出）
// PlayerEvents.loggedOut(event => {
//     globalSwitch.setInterruptLoad(true);
// });

// // 4. 玩家登录事件（延迟询问区块加载半径）
// PlayerEvents.loggedIn(event => {
//     const player = event.player;
//     // 已加载过区块的玩家直接返回
//     if(player.persistentData.contains("has_loaded")){
//         globalSwitch.setMobSpawnDisable(true)
//         return;
//     }
//     // 延迟5秒询问，给玩家加载缓冲时间
//     setTimeout(() => {
//         clearChat(player);
//         player.tell(Text.green("接下来将启动 KubeJS 区块加载流程, 这会耗费一定时间但能带来更流畅的游戏体验"));
//         player.tell(Text.green("🔍 请在聊天框输入你需要的【区块加载半径】:"));
//         player.tell(Text.yellow("点击可复制 ").append(Text.yellow(" maxchunk64 ").clickCopy("maxchunk64")).append(Text.yellow(" maxchunk128").clickCopy("maxchunk128")));
//         player.tell(Text.green("允许自定义范围(最大半径:1024) ").append(Text.yellow(" maxchunk").clickCopy("maxchunk")));
//         player.tell(Text.green("若您不是主机或者不想使用此功能, 请输入 ").append(Text.yellow(" stopchunkload ").clickCopy("stopchunkload")).append(Text.green(" 取消区块加载功能")));
//         player.tell(Text.red("区块加载过程中游戏线程会被阻塞, 请等待, 建议加载区块时将帧率限制拉到最低, 区块渲染拉到最低, 模拟距离拉到最低, 关闭地平线的渲染, 这样加载会更快"))
//         player.tell(Text.red("如果想取消加载, 可以直接退出存档并在再次进入存档时后输入 ").append(Text.yellow( " stopchunkload").clickCopy("stopchunkload")));
//         player.tell(Text.green("最后建议您远离村庄, BOSS挑战建筑等结构再运行区块加载功能"))
//         player.tell(Text.green("因为这些生物的AI可能会拖慢区块加载速度"))
//     }, 5000);
// });

// // 5. 玩家聊天事件（处理输入，触发批次区块加载）
// PlayerEvents.chat(event => {
//     const player = event.player;
//     // 已加载过区块的玩家直接返回
//     if(player.persistentData.contains("has_loaded")){
//         return;
//     }
//     const inputText = event.getMessage();
//     const serverLevel = player.level;

//     // 处理取消加载指令
//     if(inputText === "stopchunkload"){
//         globalSwitch.setTimeCycle(true); // 恢复时间循环
//         globalSwitch.setInterruptLoad(true);
//         globalSwitch.setMobSpawnDisable(true);
//         chunkQueue = [];
//         clearTimeout(loadTimer); // 清理定时器
//         player.persistentData.putBoolean("has_loaded", true);
//         return;
//     }

//     // 区块加载已中断时直接返回
//     if(globalSwitch.getInterruptLoad() === true){
//         return;
//     }

//     // 验证输入格式
//     if (!inputText.toLowerCase().startsWith('maxchunk')) {
//         player.tell(Text.red('❌ 格式错误, 请重新输入 (maxchunk1024) 最大半径为 1024'));
//         return;
//     }

//     // 解析并验证加载半径
//     const loadRadius = parseInt(inputText.slice(8));
//     if (isNaN(loadRadius) || loadRadius <= 0 || loadRadius > 1024) {
//         player.tell(Text.red('❌ 请输入有效的正整数 (maxchunk1024) 最大半径为 1024'));
//         return;
//     }

//     // 保存配置并反馈玩家
//     globalSwitch.setMaxChunkDistance(loadRadius);
//     player.tell(Text.green(`✅ 已确定区块加载半径为 ${loadRadius} 区块`));
//     globalSwitch.setGetChunk(false);

//     // 转换加载中心坐标
//     const centerChunkX = Math.floor(player.x / 16);
//     const centerChunkZ = Math.floor(player.z / 16);
//     const totalChunkCount = ((2 * loadRadius) + 1) * ((2 * loadRadius) + 1);
    
//     let chunkLoadCount = 0;

//     // 反馈玩家加载开始
//     player.tell(Text.green(`📌 开始分批次加载 ${totalChunkCount} 个区块, 建议待在原地勿要走动`));
//     event.server.runCommandSilent('/incontrol kill all')
//     // 开启优化配置
//     globalSwitch.setTimeCycle(false);
//     globalSwitch.setMobSpawnDisable(false)
//     // 批次加载配置
//     const batchSize = 10; // 每批次加载区块数量
//     let currentBatchIndex = 0; // 当前批次索引

//     // 第一步：收集所有待加载区块坐标
//     for (let dx = -loadRadius; dx <= loadRadius; dx++) {
//         for (let dz = -loadRadius; dz <= loadRadius; dz++) {
//             chunkQueue.push({
//                 targetChunkX: centerChunkX + dx,
//                 targetChunkZ: centerChunkZ + dz
//             });
//         }
//     }

//     // 第二步：批次加载核心方法
//     function loadBatch() {
//         // 计算当前批次索引范围
//         const startIdx = currentBatchIndex * batchSize;
//         const endIdx = Math.min(startIdx + batchSize, chunkQueue.length);

//         // 所有批次加载完成
//         if (startIdx >= chunkQueue.length) {
//             player.tell(Text.green(`✅ 所有区块批次加载完成！共处理 ${chunkLoadCount}/${totalChunkCount} 个区块，加载完毕`));
//             globalSwitch.setTimeCycle(true); // 恢复时间循环
//             globalSwitch.setInterruptLoad(true);
//             globalSwitch.setMobSpawnDisable(true);
//             chunkQueue = [];
//             clearTimeout(loadTimer); // 清理定时器
//             player.persistentData.putBoolean("has_loaded", true);
//             return;
//         }
        
//         // 区块加载已中断时直接返回
//         if(globalSwitch.getInterruptLoad() === true){
//             return;
//         }

        

//         // 处理当前批次区块加载
//         for (let i = startIdx; i < endIdx; i++) {
//             const chunkData = chunkQueue[i];
//             const targetChunkX = chunkData.targetChunkX;
//             const targetChunkZ = chunkData.targetChunkZ;

        
//             // 核心加载逻辑
//             const chunk = serverLevel.getChunk(
//                 targetChunkX,
//                 targetChunkZ,
//                 ChunkStatus.FULL,
//                 true
//             );

//             // 计数更新
//             chunkLoadCount++;

//         }

//         // 批次完成提示
//         const totalBatches = Math.ceil(chunkQueue.length / batchSize);
//         player.tell(Text.blue(`🔄 第 ${currentBatchIndex + 1}/${totalBatches} 批次加载完成，已处理 ${endIdx}/${chunkQueue.length} 个区块`));

//         // 推进到下一批次
//         currentBatchIndex++;
//         // 延迟加载下一批，给服务器缓冲时间
//         loadTimer = setTimeout(loadBatch, 200);
//     }

//     // 启动批次加载
//     loadBatch();
// });
