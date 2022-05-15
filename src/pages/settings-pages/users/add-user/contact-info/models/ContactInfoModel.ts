export class ContactInfoModel {

    address: string = ""
    zip: string = ""
    city: string = ""
    phoneCode: number = null
    phoneNumber: number = null
    country: string = "";

    get phone(): number {
        return Number(`${this.phoneCode}${this.phoneNumber}`)
    }

    constructor(obj?: Partial<ContactInfoModel>) {
        if (obj) {
            Object.assign(this, obj)
        }
    }
}