export class BodyItemModel {

    id: number

    name: string

    constructor(obj?: Partial<BodyItemModel>) {
        if (obj) {
            Object.assign(this, obj)
        }
    }
}