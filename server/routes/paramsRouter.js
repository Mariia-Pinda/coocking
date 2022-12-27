const Router = require('express')
const router = new Router
const paramsController = require('../controllers/paramsController')

router.post('/', paramsController.inputParams)
router.get('/', paramsController.getParams)

module.exports = router