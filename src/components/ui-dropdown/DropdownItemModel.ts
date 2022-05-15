export class DropdownItemModel {

    id: number = 0;

    name: string = "";

    value: string | number = null;

    isSelected: boolean = false;

    constructor(obj?: Partial<DropdownItemModel>) {
        if (obj) {
            Object.assign(this, obj)
        }
    }
}