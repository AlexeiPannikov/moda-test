import { Component } from "vue";

export class OverviewItemModel {

    id: number = 0;

    label: string = "";

    value: string = "";

    isVisible: boolean = false;

    isChecked: boolean = false;

    component: Component = null;

    private initIsChecked() {
        this.isChecked = this.isVisible
    }

    updateIsVisible() {
        this.isVisible = this.isChecked;
    }

    constructor(obj?: Partial<OverviewItemModel>) {
        if (obj) {
            Object.assign(this, obj)
        }
        this.initIsChecked()
    }
}