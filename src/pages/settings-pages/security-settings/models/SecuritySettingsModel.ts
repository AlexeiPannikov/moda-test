import { IPWhitelist } from './IPWhitelist';
import { PasswordRules } from './PasswordRules';
import { TwoFactorAuth } from './TwoFactorAuth';
export class SecuritySettingsModel {

    twoFactorAuth: TwoFactorAuth = new TwoFactorAuth()
    passwordRules: PasswordRules = new PasswordRules()
    IPWhitelist: IPWhitelist = new IPWhitelist();

    constructor(obj?: Partial<SecuritySettingsModel>) {
        if (obj) {
            Object.assign(this, obj)
        }
    }
}