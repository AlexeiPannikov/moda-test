export class UserModel {

    id: number = 0;
    avatar: string = "";
    name: string = "";
    email: string = "";
    role: string = "";
    type: string = "";
    lastLogin: string = "";

    constructor(obj?: Partial<UserModel>) {
        if (obj) {
            Object.assign(this, obj)
        }
    }
}