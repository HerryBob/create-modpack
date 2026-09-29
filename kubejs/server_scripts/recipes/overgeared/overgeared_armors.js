// === Overgeared 护甲锻造配方（集中管理） ===
// 四材质 × 四部位 = 16个配方
//
// 护甲直接锻造成品，无工具头阶段，品质由打铁分数决定

ServerEvents.recipes(event => {
    // ========== 移除原版打铁护甲配方 ==========
    // 官方只有铜/钢护甲的原版配方
    var armorParts = ['helmet', 'chestplate', 'leggings', 'boots']
    ;['copper', 'steel'].forEach(function(mat) {
        armorParts.forEach(function(part) {
            event.remove({ output: 'overgeared:' + mat + '_' + part })
        })
    })

    /**
     * @param {string}  plateId   板材物品ID（create:xxx_sheet 或 overgeared:steel_plate）
     * @param {string}  prefix    护甲名前缀（copper/iron/golden/steel）
     * @param {string}  resultNs  成品命名空间（minecraft/overgeared）
     * @param {string}  [tier]    锻造砧等级（不传=默认铁砧）
     */
    var armorMaterial = function(plateId, prefix, resultNs, tier) {
        var armors = [
            { part: 'helmet',     hammering: 7, pattern: ['###', '# #'] },
            { part: 'chestplate', hammering: 9, pattern: ['# #', '###', '###'] },
            { part: 'leggings',   hammering: 8, pattern: ['###', '# #', '# #'] },
            { part: 'boots',      hammering: 6, pattern: ['# #', '# #'] },
        ]

        armors.forEach(function(a) {
            var recipe = {
                type: 'overgeared:forging',
                blueprint: [a.part],
                category: 'ARMORS',
                hammering: a.hammering,
                has_polishing: false,
                key: { '#': { item: plateId } },
                need_quenching: false,
                pattern: a.pattern,
                result: { count: 1, id: resultNs + ':' + prefix + '_' + a.part },
                show_notification: false,
            }
            if (tier) {
                recipe.tier = tier
            }
            event.custom(recipe)
        })
    }

    // 铜质：Create铜板, 石砧
    armorMaterial('create:copper_sheet', 'copper', 'overgeared', 'stone')

    // 铁质：Create铁板, 铁砧（默认）
    armorMaterial('create:iron_sheet', 'iron', 'minecraft')

    // 金质：Create金板, 铁砧（默认）
    armorMaterial('create:golden_sheet', 'golden', 'minecraft')

    // 钢质：Overgeared钢板, 铁砧（默认）
    armorMaterial('overgeared:steel_plate', 'steel', 'overgeared')
})
