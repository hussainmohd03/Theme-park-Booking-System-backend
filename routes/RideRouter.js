const router = require('express').Router()
const controller = require('../controllers/RideController')

router.get('/', controller.GetRide)
router.get('/:id', controller.GetOneRide)

module.exports = router
