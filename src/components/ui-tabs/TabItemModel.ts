export class TabItemModel<T> {

    id: number;

    name: string;

    value: T = null;

    path: string;

    isActive: boolean = false;

    constructor(obj?: Partial<TabItemModel<T>>) {
        if (obj) {
            Object.assign(this, obj)
        }
    }
}