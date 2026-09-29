// ============================================
// Thunderhead 闪电高度覆盖（客户端）
// ============================================
// 功能：拦截服务器生成的原版闪电，用 Thunderhead API 重新生成
//       支持多种闪电类型：对地/云间/云内/云对空
//       服务器用 y 坐标编码类型，客户端根据高度判断并渲染
//
// 闪电类型：
//   CG 对地(Cloud-to-Ground)：y≈地面 → origin=云层, position=地面
//   CC 云间(Cloud-to-Cloud) ：y≈470  → origin=云层A, position=云层B(水平偏移30-80)
//   IC 云内(Intra-Cloud)    ：y≈460-480 → origin=云层内A, position=云层内B(短偏移5-20)
//   CA 云对空(Cloud-to-Air)  ：y>500  → origin=云层, position=云层上方
//
// 架构：
//   服务器：/summon lightning_bolt（y坐标编码类型，伤害/点燃正常生效）
//   客户端：拦截闪电实体 → 移除 → API重生成（根据类型渲染不同效果）
//
// 注意：只在闪电 life == 0 时处理一次，避免服务器同步导致重复
// ============================================

// === 配置 ===
const CLOUD_HEIGHT = 470          // 整合包统一云层高度
const MIN_MOUNTAIN_OFFSET = 100   // 极高山地区最低偏移（山顶上方格数）

// 云间闪电水平偏移范围
const CC_MIN_OFFSET = 30
const CC_MAX_OFFSET = 80

// 云内闪电短偏移范围
const IC_MIN_OFFSET = 5
const IC_MAX_OFFSET = 20

// === 加载 Thunderhead API ===
let TempestFxApi = null
let LightningEffect = null
let Vec3d = null
let apiLoaded = false
let loadError = null

try {
    TempestFxApi = Java.loadClass('dev.tempestfx.api.TempestFxApi')
    LightningEffect = Java.loadClass('dev.tempestfx.api.LightningEffect')
    Vec3d = Java.loadClass('dev.tempestfx.math.Vec3d')
    apiLoaded = true
    console.log('[Thunderhead覆盖] API加载成功')
} catch (e) {
    loadError = e
    console.log('[Thunderhead覆盖] API加载失败: ' + e)
}

// === 计算闪电起始高度（极高山动态调整）===
function getStartY(level, x, z) {
    let groundY = level.getHeight('world_surface', Math.floor(x), Math.floor(z))
    return Math.max(CLOUD_HEIGHT, groundY + MIN_MOUNTAIN_OFFSET)
}

// === 根据 y 坐标判断闪电类型 ===
function detectLightningType(y, groundY) {
    // CG 对地：y 接近地面
    if (Math.abs(y - groundY) < 20) return 'CG'

    // CA 云对空：y 远高于云层
    if (y > CLOUD_HEIGHT + 20) return 'CA'

    // CC 云间：y 精确等于云层高度
    if (Math.abs(y - CLOUD_HEIGHT) < 5) return 'CC'

    // IC 云内：y 在云层高度 ±15 范围内
    if (Math.abs(y - CLOUD_HEIGHT) < 15) return 'IC'

    // 默认：对地
    return 'CG'
}

// === 生成随机水平偏移 ===
function randomOffset(min, max) {
    return (Math.random() - 0.5) * 2 * (min + Math.random() * (max - min))
}

// === 用 Thunderhead API 触发电闪 ===
function triggerLightning(originX, originY, originZ, posX, posY, posZ, intensity) {
    if (!apiLoaded) return false

    try {
        let effect = LightningEffect.builder()
            .origin(new Vec3d(originX, originY, originZ))
            .position(new Vec3d(posX, posY, posZ))
            .intensity(intensity)
            .build()

        // 尝试多种调用方式（按顺序，成功即停止）
        try {
            TempestFxApi.triggerLightning(effect)
            return true
        } catch (e1) {}

        try {
            let dispatcher = TempestFxApi.DISPATCHER
            if (dispatcher && dispatcher.get) {
                dispatcher.get().triggerLightning(effect)
                return true
            }
        } catch (e2) {}

        try {
            if (TempestFxApi.INSTANCE) {
                TempestFxApi.INSTANCE.triggerLightning(effect)
                return true
            }
        } catch (e3) {}

        return false
    } catch (e) {
        console.log('[Thunderhead覆盖] 触发电闪失败: ' + e)
        return false
    }
}

// === 主循环：拦截闪电实体 ===
ClientEvents.tick(event => {
    if (!apiLoaded) return

    let level = event.client.level
    if (!level) return

    let entities = level.getEntities()
    if (!entities) return

    entities.forEach(entity => {
        if (!entity) return
        if (entity.type !== 'minecraft:lightning_bolt') return

        // 只在闪电生成的第一帧处理（life == 0）
        if (entity.life !== 0) return

        let x = entity.x
        let y = entity.y
        let z = entity.z

        // 计算地表高度
        let groundY = level.getHeight('world_surface', Math.floor(x), Math.floor(z))

        // 判断闪电类型
        let type = detectLightningType(y, groundY)

        // 移除客户端的原版闪电实体
        entity.remove()

        // 根据类型设置 origin 和 position
        let originX, originY, originZ
        let posX, posY, posZ
        let intensity = 1.0
        let typeName = ''

        switch (type) {
            case 'CG':  // 对地：origin=云层, position=地面
                originX = x
                originY = getStartY(level, x, z)
                originZ = z
                posX = x
                posY = groundY
                posZ = z
                typeName = '对地'
                break

            case 'CC':  // 云间：origin=云层A, position=云层B(水平偏移)
                originX = x
                originY = CLOUD_HEIGHT
                originZ = z
                posX = x + randomOffset(CC_MIN_OFFSET, CC_MAX_OFFSET)
                posY = CLOUD_HEIGHT + (Math.random() - 0.5) * 10
                posZ = z + randomOffset(CC_MIN_OFFSET, CC_MAX_OFFSET)
                intensity = 0.8
                typeName = '云间'
                break

            case 'IC':  // 云内：origin=云层内A, position=云层内B(短偏移)
                originX = x
                originY = y
                originZ = z
                posX = x + randomOffset(IC_MIN_OFFSET, IC_MAX_OFFSET)
                posY = y + (Math.random() - 0.5) * 10
                posZ = z + randomOffset(IC_MIN_OFFSET, IC_MAX_OFFSET)
                intensity = 0.6
                typeName = '云内'
                break

            case 'CA':  // 云对空：origin=云层, position=云层上方
                originX = x
                originY = CLOUD_HEIGHT
                originZ = z
                posX = x + (Math.random() - 0.5) * 10
                posY = y  // y 就是召唤时的高度（云层上方）
                posZ = z + (Math.random() - 0.5) * 10
                intensity = 0.7
                typeName = '云对空'
                break

            default:
                originX = x
                originY = getStartY(level, x, z)
                originZ = z
                posX = x
                posY = groundY
                posZ = z
                typeName = '对地(默认)'
        }

        // 用 Thunderhead API 重新生成
        let success = triggerLightning(originX, originY, originZ, posX, posY, posZ, intensity)

        if (success) {
            console.log('[Thunderhead覆盖] ' + typeName + '闪电: ' +
                'origin=(' + Math.floor(originX) + ',' + Math.floor(originY) + ',' + Math.floor(originZ) + ') ' +
                'pos=(' + Math.floor(posX) + ',' + Math.floor(posY) + ',' + Math.floor(posZ) + ')')
        } else {
            console.log('[Thunderhead覆盖] ' + typeName + '闪电重生成失败')
        }
    })
})

// === 进入世界时显示状态 ===
let statusShown = false
ClientEvents.tick(event => {
    if (statusShown) return
    let player = event.client.player
    if (!player) return

    statusShown = true
    player.displayClientMessage(Text.of(
        '§b[Thunderhead覆盖] ' +
        (apiLoaded ? '§a已启用' : '§c未启用 - ' + loadError) +
        ' §7(云层 y=' + CLOUD_HEIGHT + ', 4种闪电类型)'
    ), false)
})
