export class PropertiesModel {

    gender: number = null;
    bust: string = "";
    eyes: string = "";
    hair: string = "";
    height: string = "";
    hip: string = "";
    shoeSize: string = "";
    size: string = "";
    waist: string = "";

    constructor(obj?: Partial<PropertiesModel>) {
        if (obj) {
            Object.assign(this, obj)
        }
    }
}