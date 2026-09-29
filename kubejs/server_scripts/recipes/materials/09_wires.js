ServerEvents.recipes(event => {
    const dieselgenerators = event.recipes.createdieselgenerators

    // === CDG 剪线钳（wire_cutting）：板→线 ===
    // 现实：金属板用剪线钳裁成细条导线；手持 CDG 剪线钳加工
    dieselgenerators.wire_cutting('createaddition:copper_wire', 'create:copper_sheet')
    dieselgenerators.wire_cutting('createaddition:iron_wire', 'create:iron_sheet')
    dieselgenerators.wire_cutting('createaddition:gold_wire', 'create:golden_sheet')
    dieselgenerators.wire_cutting('createaddition:electrum_wire', 'createaddition:electrum_sheet')
    dieselgenerators.wire_cutting('createaddition:straw', 'minecraft:bamboo')

    // === 剪线钳裁木条（CDG 原版默认）：木板 → 4 木棍 ===
    dieselgenerators.wire_cutting(Item.of('minecraft:stick', 4), 'minecraft:oak_planks')
})
