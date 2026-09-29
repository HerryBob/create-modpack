// === Overgeared 工具锻造配方（集中管理） ===
// 四材质 × 五工具 × 两阶段 = 40个配方
//
// 阶段1: overgeared:forging      → 加热锭 → 工具头（打铁·品质·蓝图）
// 阶段2: overgeared:crafting_shapeless → 工具头+木棍 → 成品（继承品质）

ServerEvents.recipes(event => {
    // ========== 移除原版打铁配方，防止冲突 ==========
    const headTypes = ['sword_blade', 'pickaxe_head', 'axe_head', 'shovel_head', 'hoe_head']
    const finalTypes = ['sword', 'pickaxe', 'axe', 'shovel', 'hoe']
    const toolHeadsRemovals = []
    const finalToolsRemovals = []

    // 移除所有材质的工具头原版配方
    ;['copper', 'iron', 'golden', 'steel'].forEach(mat => {
        headTypes.forEach(head => {
            toolHeadsRemovals.push('overgeared:' + mat + '_' + head)
        })
    })

    // 移除铜/钢成品原版配方（金/铁成品是原版物品，无打铁配方）
    ;['copper', 'steel'].forEach(mat => {
        finalTypes.forEach(name => {
            finalToolsRemovals.push('overgeared:' + mat + '_' + name)
        })
    })

    toolHeadsRemovals.forEach(id => event.remove({ output: id }))
    finalToolsRemovals.forEach(id => event.remove({ output: id }))

    // 移除原版工作台合成配方（铁/金工具）
    event.remove({ id: /minecraft:(iron|golden)_(sword|pickaxe|axe|shovel|hoe)/ })

    /**
     * @param {string}  heatedId      加热锭物品ID
     * @param {string}  headNs        工具头前缀（golden/copper/iron/steel）
     * @param {string}  resultNs      成品命名空间（minecraft/overgeared）
     * @param {number}  hammering     打铁次数（铜铁金=3, 钢=4）
     * @param {boolean} needQuenching 是否淬火（金=false, 其他=true）
     * @param {string}  [anvilTier]   锻造砧等级（"stone"=石砧, 不传=铁砧）
     */
    const toolMaterial = (heatedId, headNs, resultNs, hammering, needQuenching, anvilTier) => {
        const tools = [
            { head: 'sword_blade',  name: 'sword',   pattern: ['#', '#'] },
            { head: 'pickaxe_head', name: 'pickaxe', pattern: ['###'] },
            { head: 'axe_head',     name: 'axe',     pattern: ['##', '# '] },
            { head: 'shovel_head',  name: 'shovel',  pattern: ['#'] },
            { head: 'hoe_head',     name: 'hoe',     pattern: ['##'] },
        ]

        tools.forEach(t => {
            // ========== 阶段1：加热锭 → 工具头 ==========
            const headRecipe = {
                type: 'overgeared:forging',
                blueprint: [t.name],
                category: 'TOOL_HEADS',
                hammering: hammering,
                key: { '#': { item: heatedId } },
                pattern: t.pattern,
                result: { count: 1, id: 'overgeared:' + headNs + '_' + t.head },
                show_notification: false,
            }
            headRecipe.need_quenching = needQuenching
            if (anvilTier) {
                headRecipe.tier = anvilTier
            }
            event.custom(headRecipe)

            // ========== 阶段2：工具头 + 木棍 → 成品 ==========
            event.custom({
                type: 'overgeared:crafting_shapeless',
                category: 'equipment',
                ingredients: [
                    { item: 'overgeared:' + headNs + '_' + t.head },
                    { item: 'minecraft:stick' },
                ],
                result: { count: 1, id: resultNs + ':' + headNs + '_' + t.name },
            })
        })
    }

    // 金质：铁砧, hammering 3, 无需淬火
    toolMaterial('createae2:heated_gold_ingot', 'golden', 'minecraft', 3, false)

    // 铜质：石砧, hammering 3
    toolMaterial('overgeared:heated_copper_ingot', 'copper', 'overgeared', 3, true, 'stone')

    // 铁质：铁砧, hammering 3
    toolMaterial('overgeared:heated_iron_ingot', 'iron', 'minecraft', 3, true)

    // 钢质：铁砧（不传anvilTier）, hammering 4
    toolMaterial('overgeared:heated_steel_ingot', 'steel', 'overgeared', 4, true)
})
