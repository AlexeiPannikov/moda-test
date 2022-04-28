import { BodyRowModel } from './BodyRowModel';

export class TableStylesModel {

    tableStyle: object = {}
    headerStyles: object = {};
    rowStyles: object = {};
    activeRowStyles: object = {};

    constructor(obj?: Partial<TableStylesModel>) {
        if (obj) {
            Object.assign(this, obj)
        }
    }
}