/*
// ============================================
// Thunderhead API 测试脚本（客户端）【已注释，测试完成】
// ============================================
// 测试能否在 KubeJS 客户端脚本中调用 Thunderhead API
// 自定义闪电起始高度
//
// 使用方法：手持木棍（minecraft:stick），每2秒自动触发一次测试闪电
// ============================================

// === 直接加载 API（客户端脚本顶部执行）===
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
    console.log('[Thunderhead测试] API加载成功')
} catch (e) {
    loadError = e
    console.log('[Thunderhead测试] API加载失败: ' + e)
}

// === 触发测试闪电 ===
function triggerTestLightning(player) {
    if (!apiLoaded) {
        player.displayClientMessage(Text.of('§c[Thunderhead测试] API未加载: ' + loadError), true)
        return
    }

    try {
        let level = player.level
        let x = player.x
        let z = player.z + 20  // 玩家前方20格
        let groundY = level.getHeight('world_surface', Math.floor(x), Math.floor(z))
        let startY = 470  // 测试起始高度

        // 构建闪电效果
        let effect = LightningEffect.builder()
            .origin(new Vec3d(x, startY, z))
            .position(new Vec3d(x, groundY, z))
            .intensity(1.0)
            .build()

        // 尝试多种方式触发闪电
        let triggered = false
        let errors = []

        // 方式1：静态方法
        try {
            TempestFxApi.triggerLightning(effect)
            triggered = true
            console.log('[Thunderhead测试] 方式1成功: 静态方法')
        } catch (e1) {
            errors.push('方式1(静态): ' + e1)
            console.log('[Thunderhead测试] 方式1失败: ' + e1)
        }

        // 方式2：DISPATCHER
        if (!triggered) {
            try {
                let dispatcher = TempestFxApi.DISPATCHER
                if (dispatcher && dispatcher.get) {
                    dispatcher.get().triggerLightning(effect)
                    triggered = true
                    console.log('[Thunderhead测试] 方式2成功: DISPATCHER')
                } else {
                    errors.push('方式2(DISPATCHER): 字段不存在')
                }
            } catch (e2) {
                errors.push('方式2(DISPATCHER): ' + e2)
                console.log('[Thunderhead测试] 方式2失败: ' + e2)
            }
        }

        // 方式3：INSTANCE
        if (!triggered) {
            try {
                if (TempestFxApi.INSTANCE) {
                    TempestFxApi.INSTANCE.triggerLightning(effect)
                    triggered = true
                    console.log('[Thunderhead测试] 方式3成功: INSTANCE')
                } else {
                    errors.push('方式3(INSTANCE): 字段不存在')
                }
            } catch (e3) {
                errors.push('方式3(INSTANCE): ' + e3)
                console.log('[Thunderhead测试] 方式3失败: ' + e3)
            }
        }

        if (triggered) {
            player.displayClientMessage(Text.of('§a[Thunderhead测试] 闪电已触发 (起始y=' + startY + ', 击中y=' + groundY + ')'), true)
        } else {
            player.displayClientMessage(Text.of('§c[Thunderhead测试] 所有方式都失败:'), true)
            errors.forEach(err => {
                player.displayClientMessage(Text.of('§7  ' + err), true)
            })
        }

    } catch (e) {
        player.displayClientMessage(Text.of('§c[Thunderhead测试] 触发失败: ' + e), true)
        console.log('[Thunderhead测试] 触发失败: ' + e)
        if (e.stack) console.log(e.stack)
    }
}

// === 客户端 tick：手持木棍时每2秒触发一次 ===
let lastTick = 0
let hintShown = false

ClientEvents.tick(event => {
    let player = event.client.player
    if (!player) return

    // 进入世界时显示提示（只显示一次）
    if (!hintShown) {
        hintShown = true
        player.displayClientMessage(Text.of('§b[Thunderhead测试] 手持木棍即可触发测试闪电（每2秒一次）'), false)
        player.displayClientMessage(Text.of('§7API状态: ' + (apiLoaded ? '§a已加载' : '§c未加载 - ' + loadError)), false)
    }

    // 每 40 tick（2秒）检测一次
    let time = event.client.level.time
    if (time - lastTick < 40) return
    lastTick = time

    // 检测玩家主手是否是木棍
    let mainHand = player.getMainHandItem()
    if (!mainHand) return
    if (mainHand.id !== 'minecraft:stick') return

    // 触发测试闪电
    triggerTestLightning(player)
})
*/
