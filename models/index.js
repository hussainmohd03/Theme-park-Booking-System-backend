const mongoose = require('mongoose')
const rideSchema = require('./Ride')
const bookingSchema = require('./Booking')

const Ride = mongoose.model('Ride', rideSchema)
const Booking = mongoose.model('Booking', bookingSchema)

module.exports = { Ride, Booking }
