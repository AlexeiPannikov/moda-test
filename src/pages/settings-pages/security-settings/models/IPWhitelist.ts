import { AddIPModel } from "./AddIPModel";

export class IPWhitelist {

    enabled: boolean = false;
    isNotInWhitelist: boolean = false;
    addIPData:  AddIPModel = new AddIPModel();

    constructor(obj?: Partial<IPWhitelist>) {
        if (obj) {
            Object.assign(this, obj)
        }
    }
}