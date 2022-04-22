import { NavButtonModel } from "./NavButtonModel";

export class NavLinkModel {

    Name: string = "";

    Path: string = "";

    PathName: string = "";

    constructor(obj?: Partial<NavLinkModel>) {
        if (obj) {
            Object.assign(this, obj)
        }
    }
}