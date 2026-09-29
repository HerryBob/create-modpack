// 马速度修改脚本 - 按概率分布设置速度
// Horse speed modification script with probability distribution

// 生成按概率分布的马速度函数
function generateHorseSpeed() {
    let random = Math.random() * 100 // 0-100的随机数
    let speed
    
    if (random < 16) {
        // 16%概率：0.1到0.2之间（慢速马）
        speed = 0.1 + Math.random() * (0.2 - 0.1)
    } else if (random < 56) {
        // 40%概率：0.2到0.25之间（普通马）
        speed = 0.2 + Math.random() * (0.25 - 0.2)
    } else if (random < 72) {
        // 16%概率：0.25到0.35之间（良马）
        speed = 0.25 + Math.random() * (0.35 - 0.25)
    } else if (random < 82) {
        // 10%概率：0.35到0.4之间（快马）
        speed = 0.35 + Math.random() * (0.4 - 0.35)
    } else if (random < 92) {
        // 10%概率：0.4到0.45之间（优马）
        speed = 0.4 + Math.random() * (0.45 - 0.4)
    } else if (random < 97) {
        // 5%概率：0.5到0.55之间（极速马）
        speed = 0.5 + Math.random() * (0.55 - 0.5)
    } else if (random < 99.99) {
        // 2.99%概率：0.55到0.6之间（神速马）
        speed = 0.55 + Math.random() * (0.6 - 0.55)
    } else {
        // 0.01%概率：0.6到0.7之间（传说马）
        speed = 0.6 + Math.random() * (0.7 - 0.6)
    }
    
    return speed
}

// 基于父母马速度的繁育速度计算函数
function generateBreedingHorseSpeed(parent1Speed, parent2Speed) {
    // 计算父母马速度的平均值
    let averageSpeed = (parent1Speed + parent2Speed) / 2
    let minParentSpeed = Math.min(parent1Speed, parent2Speed)
    let maxParentSpeed = Math.max(parent1Speed, parent2Speed)
    
    let random = Math.random() * 100
    let finalSpeed
    
    if (random < 0.1) {
        // 0.1%概率：高于父母马最高速度0.2或低于父母马最低速度0.2
        if (Math.random() < 0.5) {
            finalSpeed = maxParentSpeed + 0.2
        } else {
            finalSpeed = minParentSpeed - 0.2
        }
    } else if (random < 10.1) {
        // 10%概率：高于父母马最高速度0.02或低于父母马最低速度0.02
        if (Math.random() < 0.5) {
            finalSpeed = maxParentSpeed + 0.02
        } else {
            finalSpeed = minParentSpeed - 0.02
        }
    } else {
        // 89.9%概率：在父母马速度平均值附近（±0.01的小幅变化）
        finalSpeed = averageSpeed + (Math.random() - 0.5) * 0.02
    }
    
    // 限制速度范围：最低0.06，最高0.75
    finalSpeed = Math.max(0.06, Math.min(0.75, finalSpeed))
    
    return finalSpeed
}

// 存储繁殖信息的全局变量
let breedingData = new Map() // 存储繁殖位置和父母马信息
const MAX_BREEDING_RECORDS = 100 // 最大繁殖记录数限制
const CLEANUP_INTERVAL = 60000 // 定期清理间隔（60秒）

// 定期清理过期数据
function cleanupExpiredBreedingData() {
    let currentTime = Date.now()
    let cleanedCount = 0
    
    for (let [breedingKey, breedingInfo] of breedingData.entries()) {
        // 清理超过5分钟的记录
        if (currentTime - breedingInfo.timestamp > 300000) {
            breedingData.delete(breedingKey)
            cleanedCount++
        }
    }
    
    // 如果记录数仍然过多，清理最旧的记录
    if (breedingData.size > MAX_BREEDING_RECORDS) {
        let entries = Array.from(breedingData.entries())
        entries.sort((a, b) => a[1].timestamp - b[1].timestamp)
        
        let toRemove = breedingData.size - MAX_BREEDING_RECORDS
        for (let i = 0; i < toRemove; i++) {
            breedingData.delete(entries[i][0])
            cleanedCount++
        }
    }
    
    // 静默清理，减少日志输出
}

// 启动定期清理任务
ServerEvents.tick(event => {
    if (event.server.tickCount % 1200 === 0) { // 每60秒执行一次
        cleanupExpiredBreedingData()
    }
})
let breedingCooldown = new Map() // 防止重复检测

// 监听玩家使用繁殖物品喂马
ItemEvents.entityInteracted(event => {
    let entity = event.target
    let player = event.player
    let item = event.item
    
    // 检查是否是马和繁殖物品
    if (entity.type === 'minecraft:horse' && 
        (item.id === 'minecraft:golden_carrot' || 
         item.id === 'minecraft:golden_apple' || 
         item.id === 'minecraft:sugar')) {
        
        // 检查马是否成年且已驯服
        if (!entity.baby && entity.tamed) {
            let horseSpeed = entity.getAttribute('minecraft:generic.movement_speed').baseValue
            
            // 不取消事件，让原版逻辑正常执行
            // 延迟检测繁殖，给原版足够时间处理繁殖逻辑
            entity.server.scheduleInTicks(40, () => {
                // 检查马是否真的进入了爱心状态（原版逻辑成功执行）
                if (entity.inLove > 0) {
                    checkForBreeding(entity, horseSpeed, player)
                }
            })
        }
    }
})

// 检测繁殖的函数
function checkForBreeding(fedHorse, fedHorseSpeed, player) {
    // 确保马仍然处于爱心状态
    if (fedHorse.inLove <= 0) {
        return
    }
    
    let pos = fedHorse.blockPosition()
    let level = fedHorse.level
    
    // 查找附近8格内的其他成年已驯服马
    let nearbyHorses = level.getEntitiesWithin(AABB.of(pos.x - 8, pos.y - 3, pos.z - 8, pos.x + 8, pos.y + 3, pos.z + 8))
        .filter(entity => 
            entity.type === 'minecraft:horse' && 
            !entity.baby && 
            entity.tamed && 
            entity.uuid !== fedHorse.uuid &&
            entity.inLove > 0  // 检查是否处于爱心状态
        )
    
    if (nearbyHorses.length > 0) {
        // 找到第一匹处于爱心状态的马作为配偶
        let partnerHorse = nearbyHorses[0]
        let partnerSpeed = partnerHorse.getAttribute('minecraft:generic.movement_speed').baseValue
        
        // 生成唯一的繁殖键（确保顺序一致）
        let breedingKey = `${Math.min(fedHorse.uuid, partnerHorse.uuid)}_${Math.max(fedHorse.uuid, partnerHorse.uuid)}`
        
        // 检查是否已经记录过这对马的繁殖
        if (!breedingData.has(breedingKey)) {
            // 检查记录数限制，如果超过限制则先清理
            if (breedingData.size >= MAX_BREEDING_RECORDS) {
                cleanupExpiredBreedingData()
                
                // 如果清理后仍然超过限制，拒绝添加新记录
                if (breedingData.size >= MAX_BREEDING_RECORDS) {
                    return
                }
            }
            
            // 存储繁殖信息
            breedingData.set(breedingKey, {
                parent1Speed: fedHorseSpeed,
                parent2Speed: partnerSpeed,
                location: pos,
                timestamp: Date.now(),
                player: player.username,
                parent1Tamed: fedHorse.tamed,
                parent2Tamed: partnerHorse.tamed
            })
            
            // 设置清理定时器（5分钟后清理数据，与幼马检测时间窗口一致）
            fedHorse.server.scheduleInTicks(6000, () => {
                breedingData.delete(breedingKey)
            })
            

        }
    }
}

// 马生成时设置速度
EntityEvents.spawned('minecraft:horse', event => {
    let horse = event.entity
    
    // 延迟处理，确保马完全生成
    horse.server.scheduleInTicks(5, () => {
        if (horse.baby) {
            // 检查是否是繁殖产生的幼马
            let breedingResult = checkForBreedingBaby(horse)
            if (breedingResult !== null) {
                // 是繁殖产生的幼马，设置基于父母的速度
                horse.getAttribute('minecraft:generic.movement_speed').setBaseValue(breedingResult.speed)
                
                // 如果父母都已驯服，自动驯服幼马
                if (breedingResult.tamed) {
                    horse.tamed = true
                    // 设置幼马的主人为繁殖者
                    let breedingPlayer = horse.server.getPlayer(breedingResult.player)
                    if (breedingPlayer) {
                        horse.owner = breedingPlayer
                    }
                }
                
                // 静默处理，无游戏内提示
            } else {
                // 不是繁殖产生的幼马，设置随机速度
                let speed = generateHorseSpeed()
                horse.getAttribute('minecraft:generic.movement_speed').setBaseValue(speed)
            }
        } else {
            // 成年马，设置随机速度
            let speed = generateHorseSpeed()
            horse.getAttribute('minecraft:generic.movement_speed').setBaseValue(speed)
        }
    })
})

// 检查幼马是否是繁殖产生的
function checkForBreedingBaby(babyHorse) {
    let pos = babyHorse.blockPosition()
    let currentTime = Date.now()
    
    // 检查所有存储的繁殖数据
    for (let [breedingKey, breedingInfo] of breedingData.entries()) {
        // 检查时间（5分钟内）和位置（16格内）
        if (currentTime - breedingInfo.timestamp < 300000) { // 5分钟
            let distance = Math.sqrt(
                Math.pow(pos.x - breedingInfo.location.x, 2) +
                Math.pow(pos.y - breedingInfo.location.y, 2) +
                Math.pow(pos.z - breedingInfo.location.z, 2)
            )
            
            if (distance <= 16) {
                // 找到匹配的繁殖记录，计算幼马速度
                let breedingSpeed = generateBreedingHorseSpeed(
                    breedingInfo.parent1Speed, 
                    breedingInfo.parent2Speed
                )
                
                // 检查父母是否都已驯服
                let shouldBeTamed = breedingInfo.parent1Tamed && breedingInfo.parent2Tamed
                
                // 清除已使用的繁殖数据
                breedingData.delete(breedingKey)
                
                return {
                    speed: breedingSpeed,
                    tamed: shouldBeTamed,
                    player: breedingInfo.player
                }
            }
        }
    }
    
    return null // 不是繁殖产生的幼马
}

// 管理员命令已移除以保持游戏沉浸感


