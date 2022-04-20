import { BodyRowModel } from './BodyRowModel';

export class TableModel {

    bodyRows: BodyRowModel[] = new Array<BodyRowModel>();

    setActiveRow(id: number) {
        this.bodyRows.forEach(row => {
            row.isActive = row.id === id
        })
    }

    constructor(obj?: Partial<TableModel>) {
        if (obj) {
            Object.assign(this, obj)
        }
    }
}