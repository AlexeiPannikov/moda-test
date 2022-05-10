import { RuleModel } from './RuleModel';
export class RulesGroup {

    id: number = 0;

    name: string = '';

    rulesList: RuleModel[] = new Array<RuleModel>();

    get sortedRulesList() {
        this.setPositionId()
        return this.rulesList.sort((a, b) => a.positionId - b.positionId)
    }

    setPositionId() {
        this.rulesList.forEach((rule, i) => { rule.positionId = i })
    }

    constructor(obj?: Partial<RulesGroup>) {
        if (obj) {
            Object.assign(this, obj)
        }
    }
}