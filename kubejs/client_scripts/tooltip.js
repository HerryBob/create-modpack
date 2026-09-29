ItemEvents.modifyTooltips(event=>{

    //可量产
    // event.add([], (Text.darkGray('可量产 1x')))
    // event.add([], (Text.gray('可量产 2x')))
    // event.add([], (Text.red('可量产 3x')))
    // event.add([], (Text.darkRed('可量产 4x')))
    // event.add([], (Text.gold('可量产 Nx')))

    //工具提示
    event.add(['createteleporters:tp_link','createteleporters:adv_tplink'], (Text.gray('右键目的地即可保存坐标, 生物传送器, 方块传送器,物品传送器均只可在同一维度传送, 只有传送门才可跨维度')))
    event.add(['createteleporters:pocket_dimension_remote'], (Text.gray('右键即可进入一个小维度')))
    event.add(['create_power_loader:empty_brass_chunk_loader'], (Text.red('绝对不要将这个方块放在列车上, 不然游戏会冻结无法运行')))
    event.add(['create_power_loader:brass_chunk_loader'], (Text.darkRed('绝对不要将这个方块放在列车上!!!, 不然游戏会冻结无法运行!!!')))

    event.add(['createmetalogistics:filter_requester','createmetalogistics:ticket_crate','createmetalogistics:station_chunk_loader'], (Text.gray('Shift')))
    event.add(['railways:handcar'], (Text.red('若与列车相撞会导致游戏冻结, 所以删除其合成配方')))


})
