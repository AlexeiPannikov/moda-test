export class StateModel<T> {

    isLoading: boolean = false;
    value: T = null;
    error: string = "";

    startLoading() {
        this.isLoading = true
    }

    endLoading() {
        this.isLoading = false;
    }

    resetError() {
        this.error = ""
    }

    constructor(obj?: Partial<StateModel<T>>) {
        if (obj) {
            Object.assign(this, obj)
        }
    }
}