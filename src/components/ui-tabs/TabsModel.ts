import { TabItemModel } from './TabItemModel';

export class TabsModel<T> {

    tabList: TabItemModel<T>[] = new Array<TabItemModel<T>>();

    constructor(obj?: Partial<TabsModel<T>>) {
        if (obj) {
            Object.assign(this, obj)
        }
    }

    setActiveTab(id: number) {
        this.tabList.forEach(tab => {
            tab.isActive = tab.id === id
        })
    }
}