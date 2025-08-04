const mongoose = require('mongoose')
const rideSchema = require('./Ride')

const Ride = mongoose.model('Ride', rideSchema)

module.exports = {
  Ride
}
