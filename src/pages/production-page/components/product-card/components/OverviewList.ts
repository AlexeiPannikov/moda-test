import { OverviewItemModel } from './OverviewItemModel'
import { OverviewModel } from './OverviewModel'
import OverviewItem from './overview-item.vue'
import CheckedIn from './checked-in.vue'
import StyleGuide  from './style-guide.vue'

export default new OverviewModel({
    overviewList: new Map([
        ['Checked In', new OverviewItemModel({ id: 1, isVisible: true, component: CheckedIn })],
        ['Job Code', new OverviewItemModel({ id: 2, label: 'Job Code', value: '221 DONNA E-COM LIQUID PAISLEY PRODUZIONE MARZO', isVisible: true, component: OverviewItem })],
        ['Style Guide', new OverviewItemModel({ id: 3, label: 'Style Guide', value: 'MANICHINO - IND - TAVOLO', isVisible: true, component: StyleGuide })],
        ['Production Type', new OverviewItemModel({ id: 4, label: 'Production Type', value: 'ON MODEL', isVisible: true, component: OverviewItem })],
    ])
})