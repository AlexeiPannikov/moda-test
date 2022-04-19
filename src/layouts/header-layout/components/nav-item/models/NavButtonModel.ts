import { NavLinkModel } from "./NavLinkModel";

export class NavButtonModel {

    Name: string = "";

    SubItemList: Array<NavLinkModel | NavButtonModel> = new Array<NavLinkModel | NavButtonModel>();

    constructor(obj?: Partial<NavButtonModel>) {
        if (obj) {
            Object.assign(this, obj)
        }
    }
}