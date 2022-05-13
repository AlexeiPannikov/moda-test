export class SkillsModel {

    styling = {
        outfit: false
    }

    externalPostProduction = {
        QC: false
    }

    photography = {
        assistant: false,
        photographer: false,
        artDirector: false,
        stylist: false,
        hairAndMakeup: false,
    }

    internalPostProduction = {
        retouching: false,
        QC: false,
    }

    copywriting = {
        writing: false,
        QC: false,
    }

    talent = {
        model: false,
    }

    stakeholder = {
        photoReview: false,
    }

    constructor(obj?: Partial<SkillsModel>) {
        if (obj) {
            Object.assign(this, obj)
        }
    }
}