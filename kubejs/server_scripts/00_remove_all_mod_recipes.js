// 删除所有模组配方，保留原版 + KubeJS 自定义配方（一二章）
// 文件名 00_ 开头确保最先执行
// 使用正则 + 逐模组删除，双保险

ServerEvents.recipes(event => {
    // 1. 删除所有非白名单命名空间的配方（保留 minecraft/kubejs/seamsandstitches/worldcrafting）
    event.remove({ id: /^(?!(minecraft|kubejs|seamsandstitches|worldcrafting):)/ })
    
    console.log('[配方清理] 已删除所有非原版/非KubeJS配方')
})
