import { NavButtonModel } from "../components/nav-item/models/NavButtonModel";
import { NavLinkModel } from "../components/nav-item/models/NavLinkModel";

class MainNavigationList {

    ItemList: Array<NavLinkModel | NavButtonModel> = new Array<NavLinkModel | NavButtonModel>();

    InitItemList() {
        this.ItemList.push(new NavLinkModel({ Name: 'PRODUCTION', PathName: 'production', Path: '/production' })),
            this.ItemList.push(new NavLinkModel({ Name: 'JOBS', PathName: 'jobs', Path: '/jobs' })),
            this.ItemList.push(new NavLinkModel({ Name: 'PRODUCTS', PathName: 'products', Path: '/products' })),
            this.ItemList.push(new NavLinkModel({ Name: 'SAMPLES', PathName: 'samples', Path: '/samples' })),
            this.ItemList.push(new NavButtonModel({
                Name: 'TASKS',
                SubItemList: [
                    new NavLinkModel({ Name: 'PHOTOGRAPHY', PathName: 'photography', Path: '/photography' }),
                    new NavLinkModel({ Name: 'FINAL SELECTION', PathName: 'final-selection', Path: '/final-selection' }),
                    new NavLinkModel({ Name: 'PHOTO REVIEW', PathName: 'photo-review', Path: '/photo-review' }),
                    new NavLinkModel({ Name: 'EXTERNAL POST QC', PathName: 'external-post-qc', Path: '/external-post-qc' }),
                    new NavLinkModel({ Name: 'INTERNAL POST', PathName: 'internal-post', Path: '/internal-post' }),
                    new NavLinkModel({ Name: 'INTERNAL POST QC', PathName: 'internal-post-qc', Path: '/internal-post-qc' }),
                ]
            })),
            this.ItemList.push(new NavLinkModel({ Name: 'ASSETS', PathName: 'assets', Path: '/assets' })),
            this.ItemList.push(new NavLinkModel({ Name: 'WARDROBE', PathName: 'wardrobe', Path: '/wardrobe' })),
            this.ItemList.push(new NavLinkModel({ Name: 'INSIGHTS', PathName: 'insights', Path: '/insights' })),
            this.ItemList.push(new NavLinkModel({ Name: 'LABS', PathName: 'labs', Path: '/labs' }))
    }

    constructor() {
        this.InitItemList()
    }
}

export default new MainNavigationList()