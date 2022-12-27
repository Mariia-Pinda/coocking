const sequelize = require('../db')
const {DataTypes} = require('sequelize')


const Users = sequelize.define('users',{
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    email: {type: DataTypes.STRING, unique: true},
    password: {type: DataTypes.STRING},
    role: {type: DataTypes.STRING, defaultValue: 'USER'},
})

const Params = sequelize.define('params',{
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    height: {type: DataTypes.INTEGER},
    weight: {type: DataTypes.INTEGER},
    age: {type: DataTypes.INTEGER},
    norm: {type: DataTypes.INTEGER},
})

const Calories = sequelize.define('calories',{
    calories: {type: DataTypes.INTEGER},
})

const Recipes = sequelize.define('recipes',{
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING, unique: true, allowNull: false },
    servings: {type: DataTypes.INTEGER},
    recipeText: {type: DataTypes.TEXT},
    type: {type: DataTypes.INTEGER},
    time: {type: DataTypes.STRING},
    image: {type: DataTypes.STRING},
    calories: {type: DataTypes.INTEGER},
})

const RecipesInfo = sequelize.define('info',{
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    description: {type: DataTypes.STRING, allowNull: false},
})


// const Types = sequelize.define('types',{
//     id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
//     name: {type:DataTypes.STRING,unique:true,allowNull:false}
// })

Recipes.hasMany(RecipesInfo, {as: 'info'})
RecipesInfo.belongsTo(Recipes)

Users.hasMany(Params, {as: 'params'})
Params.belongsTo(Users)

Users.hasOne(Calories)
Calories.belongsTo(Users)


// Types.hasMany(Recipes)
// Recipes.belongsTo(Types)

module.exports = {
    Users,
    Calories,
    Params,
    Recipes,
    RecipesInfo,
}