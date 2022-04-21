export class BodyRowModel {

    item: any

    isActive: boolean = false;

    constructor(obj?: Partial<BodyRowModel>) {
        if (obj) {
            Object.assign(this, obj)
        }
    }
}