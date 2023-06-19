const express = require('express')
const router = express.Router()
const dialogController = require('../../controller/v1/index')


router.get('/', dialogController.home)

router.get('/test', dialogController.test)

router.get('/blagues', dialogController.allBlagues)

router.get('/blagues/:id', dialogController.getBlagueById)

// router.get('/blagues/random', dialogController.getRandomBlague)


module.exports = router