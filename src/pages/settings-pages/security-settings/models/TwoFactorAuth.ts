export class TwoFactorAuth {

    enabled: boolean = false;
    enforced: boolean = false;

    constructor(obj?: Partial<TwoFactorAuth>) {
        if (obj) {
            Object.assign(this, obj)
        }
    }
}