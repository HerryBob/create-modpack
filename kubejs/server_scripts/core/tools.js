//检测工具, 整合包完成时删除

// ========== 马速度查看工具 ==========
// 提供两种方式查看马的速度信息：
// 1. 左键攻击马（不造成伤害）
// 2. 手持木棍右键点击马



// 方法2：使用物品右键点击马查看速度（推荐方式）
// 玩家手持指定物品（如木棍）右键点击马时显示速度信息
// ItemEvents.entityInteracted('minecraft:stick', event => {
//     let entity = event.target
//     let player = event.player
    
//     // 检查是否右键点击的是马
//     if (entity.type === 'minecraft:horse') {
//         let speed = entity.getAttribute('minecraft:generic.movement_speed').baseValue
//         let speedPercent = (speed / 0.225 * 100).toFixed(1) // 相对于默认速度的百分比
        
//         // 根据速度范围显示马的等级
//         let horseType = ""
//         if (speed >= 0.06 && speed < 0.1) {
//             horseType = "§4劣质马"
//         } else if (speed >= 0.1 && speed < 0.2) {
//             horseType = "§8慢速马"
//         } else if (speed >= 0.2 && speed < 0.25) {
//             horseType = "§7普通马"
//         } else if (speed >= 0.25 && speed < 0.35) {
//             horseType = "§f良马"
//         } else if (speed >= 0.35 && speed < 0.4) {
//             horseType = "§a快马"
//         } else if (speed >= 0.4 && speed < 0.45) {
//             horseType = "§b优马"
//         } else if (speed >= 0.5 && speed < 0.55) {
//             horseType = "§6极速马"
//         } else if (speed >= 0.55 && speed < 0.6) {
//             horseType = "§d神速马"
//         } else if (speed >= 0.6 && speed < 0.7) {
//             horseType = "§c传说马"
//         } else if (speed >= 0.7 && speed <= 0.75) {
//             horseType = "§l§c超神马"
//         } else {
//             horseType = "§f未知"
//         }
        
//         // 静默检测，无游戏内提示
//         event.cancel() // 取消默认的右键交互
//     }
// })
