const { Schema } = require('mongoose')

const bookingSchema = new Schema(
  {
    name: { type: String, required: true },
    age: { type: Number, required: true },
    phone: { type: Number, required: true },
    date: { type: Date, required: true },
    startTime: { type: String, required: true },
    endTime: { type: String, required: true },
    notes: {
      type: String
    }
  },
  { timestamps: true }
)

module.exports = bookingSchema
