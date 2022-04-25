import { Component } from "vue";

export class OverviewItemModel {

    id: number = 0;

    label: string = "";

    value: string = "";

    isVisible: boolean = false;

    component: Component = null;

    constructor(obj?: Partial<OverviewItemModel>) {
        if (obj) {
            Object.assign(this, obj)
        }
    }
}