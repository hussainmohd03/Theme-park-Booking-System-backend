const { Schema } = require('mongoose')
const bookingSchema = require('./Booking')

const rideSchema = new Schema(
  {
    name: { type: String, required: true },
    description: { type: String, required: true },
    imageUrl: { type: String, required: true },
    ageLimit: { type: Number, required: true },
    bookings: { bookingSchema }
  },
  { timestamps: true }
)

module.exports = rideSchema
