import { UserGroupsModel } from './../user-groups/models/UserGroupsModel';
import { PropertiesModel } from './../properties/models/PropertiesModel';
import { SkillsModel } from './../skills/models/SkillsModel';
import { DateAndTimeModel } from './../date-and-time/models/DateAndTimeModel';
import { ContactInfoModel } from './../contact-info/models/ContactInfoModel';
import { SettingsModel } from './../settings/models/SettingsModel';
export class AddUserModel {

    settings: SettingsModel = new SettingsModel();
    contactInfo: ContactInfoModel = new ContactInfoModel();
    dateAndTime: DateAndTimeModel = new DateAndTimeModel();
    skills: SkillsModel = new SkillsModel();
    properties: PropertiesModel = new PropertiesModel();
    userGroups: UserGroupsModel = new UserGroupsModel();
    isInviteUser: boolean = false;

    constructor(obj?: Partial<AddUserModel>) {
        if (obj) {
            Object.assign(this, obj)
        }
    }
}