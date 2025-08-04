const { Ride } = require('../models')

const GetRide = async (req, res) => {
  try {
    const Rides = await Ride.find({})
    res.send(Rides)
  } catch (error) {
    throw error
  }
}

module.exports = {
  GetRide
}
