export class ClientModel {
    constructor(obj?: Partial<ClientModel>) {
        if (obj) {
            Object.assign(this, obj)
        }
    }
}