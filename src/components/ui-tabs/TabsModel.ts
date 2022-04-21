import { TabItemModel } from './TabItemModel';

export class TabsModel<T> {

    tabList: TabItemModel<T>[] = new Array<TabItemModel<T>>();

    setActiveTabById(id: number) {
        this.tabList.forEach(tab => {
            tab.isActive = tab.id === id
        })
    }

    setActiveTabByPath(path: string) {
        this.tabList.forEach(tab => {
            tab.isActive = tab.path === path
        })
    }

    setActiveTabByQuery(tabField: string, queryPayload: string) {
        this.tabList.forEach(tab => {
            tab.isActive = (tab as any)[tabField] === queryPayload
            console.log(tab.name, tab.isActive);

        })
    }

    constructor(obj?: Partial<TabsModel<T>>) {
        if (obj) {
            Object.assign(this, obj)
        }
    }
}