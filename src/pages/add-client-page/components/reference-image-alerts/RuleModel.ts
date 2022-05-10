export class RuleModel {

    positionId: number = 0;

    sources: string[] = [];

    productionType: string = "";

    constructor(obj?: Partial<RuleModel>) {
        if (obj) {
            Object.assign(this, obj)
        }
    }
}