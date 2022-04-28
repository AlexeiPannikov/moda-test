import { OverviewItemModel } from './OverviewItemModel'
import { OverviewModel } from './OverviewModel'
import OverviewItem from './overview-item.vue'
import CheckedIn from './checked-in.vue'
import StyleGuide from './style-guide.vue'

export default new OverviewModel({
    task: [
        new OverviewItemModel({ id: 5, label: 'Production Type', value: 'ON MODEL', isVisible: true, component: OverviewItem }),
        new OverviewItemModel({ id: 4, label: 'Style Guide', value: 'Men - Woman Ovensize MULTIPACKS PIN', isVisible: true, component: StyleGuide }),
    ],
    job: [
        new OverviewItemModel({ id: 2, label: 'Job Code', value: '221 DONNA E-COM LIQUID PAISLEY PRODUZIONE MARZO', isVisible: true, component: OverviewItem }),
    ],
    product: [
        new OverviewItemModel({ id: 3, label: 'Production Name', value: 'PUMA Boys Placed Logo Boxer Baby and Toddler Underwear Set, red Combo, 152', isVisible: true, component: OverviewItem }),
    ],
    sample: [
        new OverviewItemModel({ id: 1, isVisible: true, component: CheckedIn }),
    ],
})