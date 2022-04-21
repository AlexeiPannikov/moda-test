export class BodyRowModel {

    id: number = 0;

    item: any

    isActive: boolean = false;

    constructor(obj?: Partial<BodyRowModel>) {
        if (obj) {
            Object.assign(this, obj)
        }
    }
}