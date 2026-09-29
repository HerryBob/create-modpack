// === 加热金属锭注册 ===
// 第二章锻造系统核心 — 熔炉产出加热锭，水冷淬火得冷锭
// 冷却时间: 120秒 (overgeared-common.toml: heatedItemCooldownTicks = 2400)

StartupEvents.registry('item', event => {
    const heated = (id, name) => {
        event.create(`createae2:${id}`)
            .displayName(`§c${name}`)
            .maxStackSize(64)
            .fireResistant(true)
    }

    // === 基础金属 (原版/Create) ===
    heated('heated_gold_ingot', '加热的金锭')

    // === Create 合金 ===
    heated('heated_zinc_ingot', '加热的锌锭')
    heated('heated_brass_ingot', '加热的黄铜锭')

    // === CBC 机械动力大炮 ===
    heated('heated_cast_iron_ingot', '加热的铸铁锭')
    heated('heated_bronze_ingot', '加热的青铜锭')
    heated('heated_nethersteel_ingot', '加热的下界钢锭')

    // === Create Addition ===
    heated('heated_electrum_ingot', '加热的琥珀金锭')

    // === Create Deco ===
    heated('heated_industrial_iron_ingot', '加热的工业铁锭')

    // === Create Propulsion ===
    heated('heated_platinum_ingot', '加热的铂锭')

    // === Electrodynamics 电动力学 ===
    heated('heated_tin_ingot', '加热的锡锭')
    heated('heated_lead_ingot', '加热的铅锭')
    heated('heated_molybdenum_ingot', '加热的钼锭')
    heated('heated_vanadium_ingot', '加热的钒锭')
    heated('heated_aluminum_ingot', '加热的铝锭')
    heated('heated_chromium_ingot', '加热的铬锭')
    heated('heated_stainless_steel_ingot', '加热的不锈钢锭')
    heated('heated_vanadium_steel_ingot', '加热的钒钢锭')
    heated('heated_hsla_steel_ingot', '加热的HSLA钢锭')
    heated('heated_titanium_ingot', '加热的钛锭')
})
