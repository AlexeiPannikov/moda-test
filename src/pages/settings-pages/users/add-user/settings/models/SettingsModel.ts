export class SettingsModel {
    
    firstName: string = ""
    lastName: string = ""
    email: string = ""
    photo: string = ""
    role: string = ""
    employment: string = ""
    userType: string = ""

    constructor(obj?: Partial<SettingsModel>) {
        if (obj) {
            Object.assign(this, obj)
        }
    }
}