const router = require('express').Router()
const controller = require('../controllers/RideController')

router.get('/', controller.GetRide)

module.exports = router
