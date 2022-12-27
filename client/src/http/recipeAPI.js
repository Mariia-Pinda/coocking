import {$authHost,$host} from "./index";

export const createRecipe = async (recipe) => {
    const {data} = await $host.post('/api/recipes', recipe)
    return data
}

export const fetchRecipes = async () => {
    const {data} = await $host.get('api/recipes')
    return data
}

export const fetchOneRecipe = async (id) => {
    const {data} = await $host.get('api/recipes/' + id)
    return data
}