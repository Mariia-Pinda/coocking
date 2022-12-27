import {makeAutoObservable} from "mobx";

export default class ParamsStore {
    constructor() {
        this._params = []
        makeAutoObservable(this)
    }
    setParams(params) {
        this._params = params
    }

    get paramsFunc() {
        return this._params
    }
}