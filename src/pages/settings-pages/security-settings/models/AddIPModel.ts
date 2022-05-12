import { IPAddressTypesEnum } from "./IPAddressTypesEnum";

export class AddIPModel {

     name: string = "";
     addressType: IPAddressTypesEnum | string = null;
     IPv4: string = "";

    constructor(obj?: Partial<AddIPModel>) {
        if (obj) {
            Object.assign(this, obj)
        }
    }
}