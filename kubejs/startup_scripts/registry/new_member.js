import { event } from "jquery";

StartupEvents.registry('item', event=>{

    event.create('createae2:incompleted_wire_damper')
    .displayName('未完成的线圈')

    event.create('createae2:incompleted_commutator')
    .displayName('未完成的线缆阻尼器')

    event.create('createae2:incompleted_engine_piston')
    .displayName('未完成的引擎活塞')

    event.create('createae2:incompleted_engine_silencer')
    .displayName('未完成的引擎消音器')

    event.create('createae2:incompleted_distillation_controller')
    .displayName('未完成的蒸馏控制器')

event.create('createae2:incompleted_engine_turbocharger')
    .displayName('未完成的引擎涡轮增压器')

event.create('createae2:incompleted_oil_scanner')
    .displayName('未完成的原油扫描仪')
})
