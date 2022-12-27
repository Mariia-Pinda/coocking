import {makeAutoObservable} from "mobx";

export default class RecipeStore {
    constructor() {
        this._recipes = []
        makeAutoObservable(this)
    }
    setRecipes(recipes) {
        this._recipes = recipes
    }

    get recipes() {
        return this._recipes
    }
}