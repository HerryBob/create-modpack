// // 临时：/dump_armor 打印背包里所有装备信息 (测完删)
// ServerEvents.basicPublicCommand('dump_armor', event => {
//     let player = event.player
//     if (!player) return

//     let found = player.inventory.getAllItems()
//         .filter(stack => !stack.isEmpty() && stack.maxDamage > 0)

//     if (found.isEmpty()) {
//         player.tell(Text.of('§7[调试] 背包内无装备'))
//         return
//     }

//     // quality_attributes 品质加成对照表 (与 JSON 一致)
//     let armorBonus = {
//         copper:  {poor:-0.5, well:0.0, expert:0.5, perfect:1.0, master:1.5},
//         iron:    {poor:-1.0, well:0.0, expert:1.0, perfect:1.5, master:2.25},
//         steel:   {poor:-1.0, well:0.0, expert:2.0, perfect:2.5, master:3.0},
//         golden:  {poor:-0.5, well:0.0, expert:2.0, perfect:3.0, master:4.25}
//     }
//     let toughnessBonus = {
//         copper:  {poor:0.0, well:0.0, expert:0.0, perfect:0.0, master:0.0},
//         iron:    {poor:0.0, well:0.0, expert:0.25, perfect:0.5, master:1.0},
//         steel:   {poor:0.0, well:0.0, expert:0.25, perfect:0.5, master:1.0},
//         golden:  {poor:0.0, well:0.0, expert:0.5, perfect:1.5, master:2.5}
//     }

//     function getMaterial(id) {
//         if (id.includes('copper_'))    return 'copper'
//         if (id.includes('iron_'))      return 'iron'
//         if (id.includes('steel_'))     return 'steel'
//         if (id.includes('golden_'))    return 'golden'
//         return null
//     }

//     player.tell(Text.of('§6=== 背包装备信息 ==='))
//     let allLines = []
//     found.forEach(stack => {
//         let id = String(stack.id)
//         let maxDmg = stack.maxDamage
//         let curDmg = maxDmg - stack.damageValue

//         let compStr = stack.getComponentString()
//         let qm = compStr.match(/forging_quality="([^"]+)"/)
//         let quality = qm ? qm[1] : 'none'

//         let rawArmor = 0
//         let rawToughness = 0
//         try {
//             if (stack.item.getDefense) rawArmor = stack.item.getDefense()
//             if (stack.item.getToughness) rawToughness = stack.item.getToughness()
//         } catch (e) {}

//         let mat = getMaterial(id)
//         let ab = mat && armorBonus[mat] ? (armorBonus[mat][quality] || 0) : 0
//         let tb = mat && toughnessBonus[mat] ? (toughnessBonus[mat][quality] || 0) : 0

//         let effArmor = rawArmor + ab
//         let effToughness = rawToughness + tb

//         function fmt(n) { if (n === 0) return ''; return n > 0 ? '+'+n : ''+n }

//         let parts = []
//         parts.push('耐久: ' + curDmg + '/' + maxDmg)
//         parts.push('品质: ' + quality)
//         parts.push('护甲: ' + rawArmor + fmt(ab) + '=' + effArmor)
//         parts.push('韧性: ' + rawToughness + fmt(tb) + '=' + effToughness)

//         let line = '  ' + id + '  |  ' + parts.join('  |  ')
//         allLines.push(line)
//         player.tell(Text.of(line).clickCopy(line).hover(Text.of('点击复制此行')))
//     })

//     player.tell(Text.of('§a[一键复制全部]').clickCopy(allLines.join('\n')).hover(Text.of('点击复制全部信息')))
// })
