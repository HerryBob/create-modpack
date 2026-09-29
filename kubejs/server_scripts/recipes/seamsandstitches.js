// Seams & Stitches — 配方管理
// 保留：裁缝台/缝针/剪刀/7个缝纫图样
// 删除：鞣皮链（鞣皮架/碱液/鞣制生皮）——皮革走原版掉落，不采用鞣皮玩法
// 删除：染缸玩法（染缸方块/全部染色配方）——染色回归原版

ServerEvents.recipes(event => {
    // ===== 删除鞣皮链配方（鞣皮架/碱液/8种生皮鞣制）=====
    event.remove({ id: 'seamsandstitches:tanning_rack' })
    event.remove({ id: 'seamsandstitches:lye' })
    event.remove({ id: 'seamsandstitches:tanned_cow_hide' })
    event.remove({ id: 'seamsandstitches:tanned_mooshroom_hide' })
    event.remove({ id: 'seamsandstitches:tanned_brown_mooshroom_hide' })
    event.remove({ id: 'seamsandstitches:tanned_horse_hide' })
    event.remove({ id: 'seamsandstitches:tanned_donkey_hide' })
    event.remove({ id: 'seamsandstitches:tanned_mule_hide' })
    event.remove({ id: 'seamsandstitches:tanned_llama_hide' })
    event.remove({ id: 'seamsandstitches:tanned_hoglin_hide' })

    // ===== 删除染缸玩法（染缸方块 + 14 类染色配方）=====
    event.remove({ id: 'seamsandstitches:dye_basin' })
    event.remove({ id: 'seamsandstitches:dye_bath_wool' })
    event.remove({ id: 'seamsandstitches:dye_bath_bed' })
    event.remove({ id: 'seamsandstitches:dye_bath_carpet' })
    event.remove({ id: 'seamsandstitches:dye_bath_candle' })
    event.remove({ id: 'seamsandstitches:dye_bath_terracotta' })
    event.remove({ id: 'seamsandstitches:dye_bath_banner' })
    event.remove({ id: 'seamsandstitches:dye_bath_stained_glass' })
    event.remove({ id: 'seamsandstitches:dye_bath_stained_glass_pane' })
    event.remove({ id: 'seamsandstitches:dye_bath_shulker_box' })
    event.remove({ id: 'seamsandstitches:dye_bath_glazed_terracotta' })
    event.remove({ id: 'seamsandstitches:dye_bath_concrete' })
    event.remove({ id: 'seamsandstitches:dye_bath_concrete_powder' })
    event.remove({ id: 'seamsandstitches:dye_bath_dyeable' })
    event.remove({ id: 'seamsandstitches:dye_bath_sophisticated_backpacks' })

    // ===== 删除书/画的缝纫图样配方（回归原版工作台合成）=====
    event.remove({ id: 'seamsandstitches:sewing_pattern_book' })
    event.remove({ id: 'seamsandstitches:sewing_pattern_painting' })
})
