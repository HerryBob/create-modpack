ServerEvents.recipes(event => {
    const create = event.recipes.create
    const vintage = event.recipes.createvintageneoforged
    // === 硫矿石 → 硫粉（Create 粉碎选矿）===
    create.crushing(['5x electrodynamics:dustsulfur'], 'electrodynamics:oresulfur')
    create.milling(['3x electrodynamics:dustsulfur'], 'electrodynamics:oresulfur')
    create.crushing(['7x electrodynamics:dustsulfur'], 'electrodynamics:deepslateoresulfur')
    create.milling(['3x electrodynamics:dustsulfur'], 'electrodynamics:deepslateoresulfur')

    // === 钒粉（催化剂来源）：钒铅矿 Vanadinite Pb₅(VO₄)₃Cl ===
    create.crushing(['2x electrodynamics:impuredustvanadium', '2x electrodynamics:impuredustlead'], 'electrodynamics:raworevanadinite')
    // 不纯钒粉 → 水洗提纯 → 钒粉（Create 喷洗，对应现实水浸提钒）
    create.splashing(['electrodynamics:dustvanadium'], 'electrodynamics:impuredustvanadium')
    // 不纯铅粉 → 水洗提纯 → 铅粉（副产，铅板前置）
    create.splashing(['electrodynamics:dustlead'], 'electrodynamics:impuredustlead')

    // === 铅矿：方铅矿 Galena(PbS) → 不纯铅粉（水洗提纯配方见钒铅矿段）===
    create.crushing(['2x electrodynamics:impuredustlead'], 'electrodynamics:raworelead')

    // === 铝矿：铝土矿 Bauxite → 不纯铝粉 → 水洗（拜耳法+电解的简化）===
    create.crushing(['2x electrodynamics:impuredustaluminum'], 'electrodynamics:orealuminum')
    create.crushing(['2x electrodynamics:impuredustaluminum'], 'electrodynamics:deepslateorealuminum')
    create.splashing(['electrodynamics:dustaluminum'], 'electrodynamics:impuredustaluminum')
})