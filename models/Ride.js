const { Schema } = require('mongoose')

const rideSchema = new Schema(
  {
    name: { type: String, required: true },
    description: { type: String, required: true },
    imageUrl: { type: String, required: true },
    ageLimit: { type: Number, required: true }
  },
  { timestamps: true }
)

module.exports = rideSchema
