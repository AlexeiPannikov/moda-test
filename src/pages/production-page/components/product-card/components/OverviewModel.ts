import { OverviewItemModel } from './OverviewItemModel';

export class OverviewModel {

    overviewList: Map<string, OverviewItemModel> = new Map<string, OverviewItemModel>()

    constructor(obj?: Partial<OverviewModel>) {
        if (obj) {
            Object.assign(this, obj)
        }
    }
}