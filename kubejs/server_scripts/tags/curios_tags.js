// === Curios 饰品标签注册 ===
ServerEvents.tags('item', event=>{
    // 把琥珀金护身符加到项链栏
    event.add('curios:head', 'createaddition:electrum_amulet')
})
