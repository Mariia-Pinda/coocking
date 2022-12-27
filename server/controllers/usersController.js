const ApiError = require('../error/ApiError')
const bcrypt = require('bcrypt')
const {Users} = require('../models/models')
const jwt = require('jsonwebtoken')


const generateJWT = (id,email,role) => {
    return jwt.sign({id, email, role}, process.env.SECRET_KEY, {expiresIn: '24h'})
}

class UsersController{

    async registration(req,res,next){
        const {email, password, role} = req.body
        if (!email || !password){
            return next(ApiError.badRequest('Некоректный email или password'))
        }
        const candidate = await Users.findOne({where: {email}})
        if (candidate) {
            return next(ApiError.badRequest('Пользователь с такой почтой уже существует!'))
        }
        const hashPassword = await bcrypt.hash(password, 5)
        const user = await Users.create({email, role, password: hashPassword})
        const token = generateJWT(user.id,user.email,user.role)
        return res.json({token})
    }


    async login(req,res,next){
        console.log(req.body)

        const {email, password} = req.body
        const user = await Users.findOne({where: {email}})
        if (!user) {
            return next(ApiError.badRequest('Пользователя не существует'))
        }
        let correctPassword = bcrypt.compareSync(password, user.password)
        if (!correctPassword) {
            return next(ApiError.badRequest('Пароль неверный'))
        }
        const token = generateJWT(user.id,user.email,user.role)
        return res.json({token})

    }

    async checkAuth(req,res,next){
        const token = generateJWT(req.user.id,req.user.email,req.user.role)
        return res.json({token})
    }
}

module.exports = new UsersController()