ServerEvents.recipes(event => {

  // === Create 原生机器 ===
  event.custom({
    type: 'worldcrafting:structure',
    pattern: [["C"],["S"]],
    key: { C: { item: 'create:andesite_casing' }, S: { item: 'create:cogwheel' } },
    trigger: 'C',
    result: { id: 'create:encased_chain_drive' },
    trigger_item: { item: 'minecraft:chain' },
    consume_trigger_item: true
  })

  event.custom({
    type: 'worldcrafting:structure',
    pattern: [["S"],["C"],["B"]],
    key: { S: { item: 'minecraft:bell' }, C: { item: 'create:brass_casing' }, B: { item: 'create:shaft' } },
    trigger: 'S',
    result: { id: 'create:clockwork_bearing' },
    trigger_item: { tag: 'overgeared:smithing_hammers' },
    consume_trigger_item: false
  })

  event.custom({
    type: 'worldcrafting:structure',
    pattern: [["A"],["S"]],
    key: { A: { item: 'create:andesite_casing' }, S: { item: 'create:shaft' } },
    trigger: 'A',
    result: { id: 'create:clutch' },
    trigger_item: { item: 'minecraft:redstone' },
    consume_trigger_item: true
  })

  event.custom({
    type: 'worldcrafting:structure',
    pattern: [["C"],["F"]],
    key: { C: { item: 'create:railway_casing' }, F: { item: 'minecraft:lever' } },
    trigger: 'C',
    result: { id: 'create:controls' },
    trigger_item: { item: 'create:precision_mechanism' },
    consume_trigger_item: true
  })

  event.custom({
    type: 'worldcrafting:structure',
    pattern: [["S"],["C"],["D"]],
    key: { S: { item: 'create:shaft' }, C: { item: 'create:brass_casing' }, D: { item: 'minecraft:dried_kelp_block' } },
    trigger: 'D',
    result: { id: 'create:elevator_pulley' },
    trigger_item: { tag: 'overgeared:smithing_hammers' },
    consume_trigger_item: false
  })

  event.custom({
    type: 'worldcrafting:structure',
    pattern: [["CCC","CGC","CCC"]],
    key: { C: { item: 'create:andesite_casing' }, G: { item: 'create:cogwheel' } },
    trigger: 'G',
    result: { id: 'create:chain_conveyor' },
    trigger_item: { item: 'overgeared:copper_smithing_hammer' },
    consume_trigger_item: false
  })

  event.custom({
    type: 'worldcrafting:structure',
    pattern: [["BBB","BSB","BBB"]],
    key: { B: { item: 'create:brass_block' }, S: { item: 'create:shaft' } },
    trigger: 'S',
    result: { id: 'create:flywheel' },
    trigger_item: { tag: 'overgeared:smithing_hammers' },
    consume_trigger_item: false
  })

  event.custom({
    type: 'worldcrafting:structure',
    pattern: [["C"],["P"]],
    key: { C: { item: 'create:cogwheel' }, P: { item: 'minecraft:sticky_piston' } },
    trigger: 'P',
    result: { id: 'create:gantry_carriage' },
    trigger_item: { tag: 'overgeared:smithing_hammers' },
    consume_trigger_item: false
  })

  event.custom({
    type: 'worldcrafting:structure',
    pattern: [["A"],["C"]],
    key: { A: { item: 'create:andesite_casing' }, C: { item: 'create:cogwheel' } },
    trigger: 'A',
    result: { id: 'create:gearshift' },
    trigger_item: { item: 'minecraft:redstone' },
    consume_trigger_item: true
  })

  event.custom({
    type: 'worldcrafting:structure',
    pattern: [["T"],["S"],["K"]],
    key: { T: { item: 'create:fluid_tank' }, S: { item: 'create:shaft' }, K: { item: 'minecraft:dried_kelp_block' } },
    trigger: 'T',
    result: { id: 'create:hose_pulley' },
    trigger_item: { tag: 'overgeared:smithing_hammers' },
    consume_trigger_item: false
  })

  event.custom({
    type: 'worldcrafting:structure',
    pattern: [[" SSS ","SLLLS","SLWLS","SLLLS"," SSS "]],
    key: { S: { tag: 'minecraft:wooden_slabs' }, L: { tag: 'minecraft:logs' }, W: { item: 'create:cogwheel' } },
    trigger: 'W',
    result: { id: 'create:large_water_wheel' },
    trigger_item: { tag: 'overgeared:smithing_hammers' },
    consume_trigger_item: false
  })

  event.custom({
    type: 'worldcrafting:structure',
    pattern: [["I"],["C"],["B"]],
    key: { I: { item: 'create:shaft' }, C: { item: 'create:andesite_casing' }, B: { tag: 'minecraft:wooden_slabs' } },
    trigger: 'I',
    result: { id: 'create:mechanical_bearing' },
    trigger_item: { tag: 'overgeared:smithing_hammers' },
    consume_trigger_item: false
  })

  event.custom({
    type: 'worldcrafting:structure',
    pattern: [["B"],["C"],["I"]],
    key: { B: { tag: 'minecraft:wooden_slabs' }, C: { item: 'create:andesite_casing' }, I: { item: 'create:piston_extension_pole' } },
    trigger: 'C',
    result: { id: 'create:mechanical_piston' },
    trigger_item: { tag: 'overgeared:smithing_hammers' },
    consume_trigger_item: false
  })

  event.custom({
    type: 'worldcrafting:structure',
    pattern: [["P"],["S"],["A"]],
    key: { P: { item: 'minecraft:piston' }, S: { item: 'create:andesite_casing' }, A: { item: 'create:shaft' } },
    trigger: 'P',
    result: { id: 'create:mechanical_press' },
    trigger_item: { tag: 'overgeared:smithing_hammers' },
    consume_trigger_item: false
  })

  event.custom({
    type: 'worldcrafting:structure',
    pattern: [["I"],["S"],["C"]],
    key: { I: { tag: 'c:stones' }, S: { item: 'create:andesite_casing' }, C: { item: 'create:cogwheel' } },
    trigger: 'C',
    result: { id: 'create:millstone' },
    trigger_item: { tag: 'overgeared:smithing_hammers' },
    consume_trigger_item: false
  })

  event.custom({
    type: 'worldcrafting:structure',
    pattern: [["T"],["C"]],
    key: { T: { item: 'create:copper_casing' }, C: { item: 'create:chute' } },
    trigger: 'T',
    result: { id: 'create:portable_fluid_interface' },
    trigger_item: { tag: 'overgeared:smithing_hammers' },
    consume_trigger_item: false
  })

  event.custom({
    type: 'worldcrafting:structure',
    pattern: [["T"],["C"]],
    key: { T: { item: 'create:andesite_casing' }, C: { item: 'create:chute' } },
    trigger: 'T',
    result: { id: 'create:portable_storage_interface' },
    trigger_item: { tag: 'overgeared:smithing_hammers' },
    consume_trigger_item: false
  })

  event.custom({
    type: 'worldcrafting:structure',
    pattern: [["I"],["C"],["R"]],
    key: { I: { item: 'create:shaft' }, C: { item: 'create:andesite_casing' }, R: { tag: 'minecraft:wool' } },
    trigger: 'I',
    result: { id: 'create:rope_pulley' },
    trigger_item: { tag: 'overgeared:smithing_hammers' },
    consume_trigger_item: false
  })

  event.custom({
    type: 'worldcrafting:structure',
    pattern: [["D"],["I"],["L"],["S"]],
    key: { D: { item: 'minecraft:dispenser' }, I: { item: 'minecraft:iron_block' }, L: { tag: 'minecraft:logs' }, S: { item: 'minecraft:smooth_stone' } },
    trigger: 'D',
    result: { id: 'create:schematicannon' },
    trigger_item: { tag: 'overgeared:smithing_hammers' },
    consume_trigger_item: false
  })

  event.custom({
    type: 'worldcrafting:structure',
    pattern: [["C"],["F"]],
    key: { C: { item: 'create:chute' }, F: { item: 'create:brass_funnel' } },
    trigger: 'C',
    result: { id: 'create:smart_chute' },
    trigger_item: { tag: 'overgeared:smithing_hammers' },
    consume_trigger_item: false
  })

  // === CreateAdditions 轧机 ===
  event.custom({
    type: 'worldcrafting:structure',
    pattern: [["C"],["S"],["S"]],
    key: { C: { item: 'create:andesite_casing' }, S: { item: 'create:shaft' } },
    trigger: 'C',
    result: { id: 'createaddition:rolling_mill' },
    trigger_item: { tag: 'overgeared:smithing_hammers' },
    consume_trigger_item: false
  })

  // === Create Vintage 弯曲压机 ===
  event.custom({
    type: 'worldcrafting:structure',
    pattern: [["P"],["S"],["A"]],
    key: { P: { item: 'minecraft:piston' }, S: { item: 'create:andesite_casing' }, A: { item: 'create:shaft' } },
    trigger: 'S',
    result: { id: 'createvintageneoforged:curving_press' },
    trigger_item: { item: 'createvintageneoforged:iron_spring' },
    consume_trigger_item: true
  })

  // === Ratatouille 烤箱风扇 ===
  event.custom({
    type: 'worldcrafting:structure',
    pattern: [["C"],["G"]],
    key: { C: { item: 'create:andesite_casing' }, G: { item: 'create:cogwheel' } },
    trigger: 'C',
    result: { id: 'ratatouille:oven_fan' },
    trigger_item: { item: 'create:propeller' },
    consume_trigger_item: true
  })

  // === CreateAdditions 便携能源接口 ===
  // 竖塔（从下往上）：黄铜机壳（主体/trigger）→ 溜槽（物品流通）→ 铜线轴（电力连接）
  event.custom({
    type: 'worldcrafting:structure',
    pattern: [["C"],["H"],["S"]],
    key: {
      C: { item: 'create:brass_casing' },
      H: { item: 'create:chute' },
      S: { item: 'createaddition:copper_spool' }
    },
    trigger: 'C',
    result: { id: 'createaddition:portable_energy_interface' },
    trigger_item: { tag: 'overgeared:smithing_hammers' },
    consume_trigger_item: false
  })

})
