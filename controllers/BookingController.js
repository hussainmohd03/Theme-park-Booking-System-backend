const { Booking } = require('../models')

exports.booking_create_post = async (req, res) => {
  try {
    const booking = await Booking.create(req.body)
    res.status(200).send(booking)
  } catch (error) {
    throw error
  }
}
exports.booking_index_get = async (req, res) => {
  try {
    const bookings = await Booking.find()
    res.status(200).send(bookings)
  } catch (error) {
    throw error
  }
}
exports.booking_show_get = async (req, res) => {
  try {
    const booking = await Booking.findById(req.params.bookId)
    res.status(200).send(booking)
  } catch (error) {
    throw error
  }
}
exports.booking_update_put = async (req, res) => {
  try {
    const updatedBooking = await Booking.findByIdAndUpdate(
      req.params.bookId,
      req.body,
      { new: true }
    )
    res.status(200).send(updatedBooking)
  } catch (error) {
    throw error
  }
}
exports.booking_delete_delete = async (req, res) => {
  try {
    const deletedBooking = await Booking.findByIdAndDelete(req.params.bookId)
    res.send(200)
  } catch (error) {
    throw error
  }
}


