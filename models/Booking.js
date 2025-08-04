const { Schema } = require('mongoose')
const Booking = mongoose.model('Booking', bookingSchema)

const bookingSchema = new Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true },
    passwordDigest: { type: String, required: true }
  },
  { timestamps: true }
)

module.exports = bookingSchema
