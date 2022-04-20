import { BodyItemModel } from "./BodyItemModel"

export class BodyRowModel {

    id: number = 0;

    items: BodyItemModel[] = new Array<BodyItemModel>();

    isActive: boolean = false;

    constructor(obj?: Partial<BodyRowModel>) {
        if (obj) {
            Object.assign(this, obj)
        }
    }
}