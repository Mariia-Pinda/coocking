const {Params, Recipes} = require("../models/models");


class ParamsController {
    async inputParams(req,res,next){
        const {height, weight, age, userId,norm} = req.body
        const params = await Params.create({height,weight,age,userId,norm})
        return res.json(params)
    }
    async getParams(req, res){
        let params;
        params = await Params.findAll()
        return res.json(params)

    }
}


module.exports = new ParamsController()

