export class ProductModel {

    code: string = "";

    jobCode: string = "";

    productName: string = "";

    styleGuide: string = "";

    productionType: string = "";


    constructor(obj?: Partial<ProductModel>) {
        if (obj) {
            Object.assign(this, obj)
        }
    }
}