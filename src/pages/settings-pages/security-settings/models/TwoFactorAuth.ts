export class TwoFactorAuth {

    enabled: boolean = false;
    enforced: boolean = false;

    resetEnforced() {
        if(!this.enabled) {
            this.enforced = false
        }
    }

    constructor(obj?: Partial<TwoFactorAuth>) {
        if (obj) {
            Object.assign(this, obj)
        }
    }
}