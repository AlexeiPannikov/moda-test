import { NavButtonModel } from '../components/nav-item/models/NavButtonModel';
import { NavLinkModel } from "../components/nav-item/models/NavLinkModel";

class RightMenu {

    Item: NavButtonModel = new NavButtonModel({Name: 'PIXELMODA'});

    InitSubItemList() {
        this.Item.SubItemList.push(new NavButtonModel({ Name: 'MY SETTINGS'})),
        this.Item.SubItemList.push(new NavLinkModel({ Name: 'STUDIO SETTINGS', PathName: 'studio-settings' })),
        this.Item.SubItemList.push(new NavLinkModel({ Name: 'WORKFLOWS', PathName: 'workflows' })),
        this.Item.SubItemList.push(new NavLinkModel({ Name: 'STYLE GUIDES', PathName: 'style-guides' })),
        this.Item.SubItemList.push(new NavButtonModel({ Name: 'COMPUTER LOCATION'})),
        this.Item.SubItemList.push(new NavLinkModel({ Name: 'DEBUG INFO', PathName: 'debug-info' })),
        this.Item.SubItemList.push(new NavButtonModel({ Name: 'LOGOUT'}))
    }

    constructor() {
        this.InitSubItemList()
    }
}

export default new RightMenu()