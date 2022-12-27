const Router = require('express')
const router = new Router
const caloriesRouter = require('./caloriesRouter')
const usersRouter = require('./userRouter')
const recipesRouter = require('./recipesRouter')
const paramsRouter = require('./paramsRouter')
const typeRouter = require('./TypeRouter')


router.use('/users', usersRouter)
router.use('/params', paramsRouter)
router.use('/recipes', recipesRouter)
router.use('/calories', caloriesRouter)
// router.use('/type', typeRouter)


module.exports = router