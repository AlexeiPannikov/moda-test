import { NavButtonModel } from "./NavButtonModel";

export class NavLinkModel {

    Name: string = "";

    PathName: string = "";

    constructor(obj?: Partial<NavLinkModel>) {
        if (obj) {
            Object.assign(this, obj)
        }
    }
}