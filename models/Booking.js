const { Schema } = require('mongoose')

const bookingSchema = new Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: Number, required: true },
    date: { type: Date },
    ticketType: {
      type: String,
      enum: ['Single-Day-Pass', 'Family-Pass', 'VIP-Galactic'],
      required: true
    },
    notes: {
      type: String
    }
  },
  { timestamps: true }
)

module.exports = bookingSchema
