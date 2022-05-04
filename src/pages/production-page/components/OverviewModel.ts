import { OverviewItemModel } from './OverviewItemModel';

export class OverviewModel {

    task: OverviewItemModel[] = new Array<OverviewItemModel>()
    job: OverviewItemModel[] = new Array<OverviewItemModel>()
    product: OverviewItemModel[] = new Array<OverviewItemModel>()
    assets: OverviewItemModel[] = new Array<OverviewItemModel>()
    team: OverviewItemModel[] = new Array<OverviewItemModel>()
    sample: OverviewItemModel[] = new Array<OverviewItemModel>()

    get fullList(): OverviewItemModel[] {
        let fullList = new Array<OverviewItemModel>();
        fullList.push(...this.sample)
        fullList.push(...this.job)
        fullList.push(...this.product)
        fullList.push(...this.task)
        fullList.push(...this.assets)
        fullList.push(...this.team)
        fullList = fullList.sort((a, b) => a.positionNumber - b.positionNumber)
        return fullList
    }

    get selectedItems(): OverviewItemModel[] {
        const items = this.fullList.filter(item => item.isChecked)
        return items.sort((a, b) => a.positionNumber - b.positionNumber)
    }

    set selectedItems(value: Array<OverviewItemModel>) {
        this.selectedItems = value
    }

    get selectedItemNumber(): number {
        return this.fullList.filter(item => item.isChecked).length
    }

    setPosition() {
        if (this.selectedItemNumber) {
            for (let i = 1; i >= this.selectedItems.length; i++) {
                this.selectedItems[i].positionNumber = i
            }
        }
    }

    updateVisible() {
        Object.entries(this).forEach(([, value]) => {
            value.forEach((item: { updateIsVisible: () => any; }) => item.updateIsVisible())
        })
    }

    constructor(obj?: Partial<OverviewModel>) {
        if (obj) {
            Object.assign(this, obj)
        }
    }
}