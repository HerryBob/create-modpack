// ServerEvents.loaded(event => {
//     // 可选：开局执行的一次性命令
//     event.server.runCommandSilent('/ars-light on')
//     event.server.runCommandSilent('/flywheel backend colorwheel:instancing')
// })

const STARTER_KIT_FLAG = 'createupdate.received_starter_kit'
const STARTER_KIT_ITEMS = [
    '16x corn_delight:corn_seeds',
    '16x vegandelight:soybean',
    '16x rusticdelight:cotton_seeds',
    '32x minecraft:kelp',
    'minecraft:fishing_rod',
    'minecraft:fishing_rod',
    '32x minecraft:bread',
    '16x brewinandchewin:jerky',
    'minecraft:writable_book',
    // 缝纫三件套（开局即得裁缝台/缝针/剪刀）
    'seamsandstitches:tailoring_bench',
    'seamsandstitches:needle',
    'seamsandstitches:scissors',
    '16x minecraft:string'
]

PlayerEvents.loggedIn(event => {
    const player = event.player

    if (player.persistentData.getBoolean(STARTER_KIT_FLAG)) {
        return
    }

    // 先写入标记，避免重连或脚本异常导致重复发放。
    player.persistentData.putBoolean(STARTER_KIT_FLAG, true)

    STARTER_KIT_ITEMS.forEach(item => {
        player.addItem(Item.of(item))
    })

    // 幸存者手札
    player.addItem(Item.of('modonomicon:modonomicon[modonomicon:book_id="kubejs:survival_guide"]'))
})
