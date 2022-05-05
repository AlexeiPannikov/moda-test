export class DropdownItemModel {

    id: number = 0;

    name: string = "";

    isSelected: boolean = false;

    constructor(obj?: Partial<DropdownItemModel>) {
        if (obj) {
            Object.assign(this, obj)
        }
    }
}