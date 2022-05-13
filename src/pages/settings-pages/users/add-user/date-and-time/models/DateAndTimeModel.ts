export class DateAndTimeModel {

    timezone: number = null;
    dateFormat: number = null;
    firstDayOfWeek: number = null;
    twentyFourTime: boolean = false

    constructor(obj?: Partial<DateAndTimeModel>) {
        if (obj) {
            Object.assign(this, obj)
        }
    }
}