type Rule = {min: number, max: number, value: number}

export class PasswordRules {

    length: Rule = {min: 8, max: 64, value: 8};
    digits: Rule = {min: 0, max: 8, value: 0};
    symbols: Rule = {min: 0, max: 8, value: 0};
    uppercaseAndLowercase: boolean = false;
    restrictRepetition: boolean = false;

    constructor(obj?: Partial<PasswordRules>) {
        if (obj) {
            Object.assign(this, obj)
        }
    }
}