const uuid = require('uuid')
const path = require('path')
const {Recipes, RecipesInfo} = require("../models/models");
const ApiError = require("../error/ApiError")

class RecipesController {
    async create(req, res, next){
        try{
            let { name,info, calories,servings,time,recipeText,type} = req.body
            const {image} = req.files
            let fileName = uuid.v4() + ".jpeg"
            image.mv(path.resolve(__dirname, '..','static',fileName))
            const recipe = await Recipes.create({recipeText,type, name,info,calories,servings,time, image:fileName})


            if (info) {
                info = JSON.parse(info)
                info.forEach(i =>
                    RecipesInfo.create({
                        title: i.title,
                        description: i.description,
                        recipeId: recipe.id
                    })
                )
            }


            return res.json(recipe)
    } catch (e) {
            next(ApiError.badRequest(e.message))
        }
    }

    async getAll(req, res){
        let {limit, page} = req.query
        page = page || 1
        limit = limit || 9
        let offset = page * limit - limit
        let recipes;
        recipes = await Recipes.findAndCountAll({limit,offset})
        return res.json(recipes)

    }

    async getOne(req, res){
        const {id} = req.params
        const recipe = await Recipes.findOne(
            {
                where: {id},
                include: [{model: RecipesInfo, as: 'info'}]
            },
            )
            return res.json(recipe)
    }
}

module.exports = new RecipesController()