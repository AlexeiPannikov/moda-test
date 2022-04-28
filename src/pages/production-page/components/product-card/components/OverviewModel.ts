import { OverviewItemModel } from './OverviewItemModel';

export class OverviewModel {

    task: OverviewItemModel[] = new Array<OverviewItemModel>()
    job: OverviewItemModel[] = new Array<OverviewItemModel>()
    product: OverviewItemModel[] = new Array<OverviewItemModel>()
    assets: OverviewItemModel[] = new Array<OverviewItemModel>()
    team: OverviewItemModel[] = new Array<OverviewItemModel>()
    sample: OverviewItemModel[] = new Array<OverviewItemModel>()

    get fullList() {
        let fullList = new Array<OverviewItemModel>();
        fullList.push(...this.sample)
        fullList.push(...this.job)
        fullList.push(...this.product)
        fullList.push(...this.task)
        fullList.push(...this.assets)
        fullList.push(...this.team)
        fullList = fullList.sort((a, b) => a.id - b.id)
        return fullList
    }

    constructor(obj?: Partial<OverviewModel>) {
        if (obj) {
            Object.assign(this, obj)
        }
    }
}