const express = require('express')
const router = express.Router()
const dialogController = require('../../controller/v1/index')

/**
 * @swagger
 * /api/v1/:
 *  get:
 *    description: Home route
 *    responses:
 *      '200':
 *        description: A successful response
 */
router.get('/', dialogController.home)

router.get('/test', dialogController.test)

router.get('/blagues', dialogController.allBlagues)

router.get('/blagues/:id', dialogController.getBlagueById)



module.exports = router