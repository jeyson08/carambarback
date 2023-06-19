const express = require('express')
const router = express.Router()
const dialogController = require('../../controller/v1/index')

router.get('/', dialogController.home)

router.get('/test', dialogController.test)

router.get('/blagues', dialogController.allBlagues)

router.get('/blagues/:id', dialogController.getBlagueById)



module.exports = router