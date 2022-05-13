import moment from "moment-timezone"


type ArrTimezones = { id: number, timezone: string }[]

export const useTimezones = () => {

    let timezones = []

    const timezonesNames = moment.tz.names()

    timezones = timezonesNames.map(item => { return { name: item, offset: moment.tz.zone(item).utcOffset(1403465838805) / 60 } }).sort((a, b) => a.offset - b.offset)

    timezones = timezones.map(item => `UTC(${item.offset}) ${item.name}`)

    return timezones
    // const timer: Date = new Date();
    // let timezones: ArrTimezones = [];

    // const getTimeZoneTime = (timezone: number) => {
    //     return moment(timer).utc().add(timezone, "hours");
    // }

    // const getTimeZoneText = (timezone: number) => {
    //     return (
    //         moment(getTimeZoneTime(timezone)).utc().format("HH:mm") +
    //         " (UTC" +
    //         (timezone >= 0 ? "+" : "") +
    //         timezone +
    //         ")"
    //     );
    // }

    // const initTimezones = () => {
    //     for (let i = 0, timezone = -12; timezone <= 14; i++, timezone++) {
    //         timezones.push(
    //             { id: i + 1, timezone: getTimeZoneText(timezone) }
    //         );
    //     }
    // }

    // initTimezones()

    // return timezones
}


// const getTimezoneOffsets = () => {
//     let timezoneOffsets: string[] = [];
//     let timezonesInner = momentTZ.tz.names();
//     timezonesInner.forEach(timezone => {
//       let offset = moment.tz(timezone).format("Z");
//       let find = timezoneOffsets.find(item => item.indexOf(offset) > -1);
//       if (!find) {
//         timezoneOffsets.push(`${timezone} GMT ${offset}`);
//       }
//     });
//     timezones = timezoneOffsets.map((timezone, i) => {
//       return {id: 1, timezone}
//     });
//   }