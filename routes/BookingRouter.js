const router = require('express').Router()
const bookingCtrl = require('../controllers/BookingController')

router.post('', bookingCtrl.booking_create_post)
router.get('', bookingCtrl.booking_index_get)
router.put('/:bookId', bookingCtrl.booking_update_put)
router.get('/:bookId', bookingCtrl.booking_show_get)
router.delete('/:bookId', bookingCtrl.booking_delete_delete)

module.exports = router
