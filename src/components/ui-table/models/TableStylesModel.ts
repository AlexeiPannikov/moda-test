import { BodyRowModel } from './BodyRowModel';

export class TableStylesModel {

    tableStyle: object = {}
    headerStyles: object = {};
    bodyStyles: object = {};
    rowStyles: object = {};
    activeRowStyles: object = {};
    hoverRowStyles: object = {};

    constructor(obj?: Partial<TableStylesModel>) {
        if (obj) {
            Object.assign(this, obj)
        }
    }
}