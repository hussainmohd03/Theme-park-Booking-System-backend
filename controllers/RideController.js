const { Ride } = require('../models')

const GetRide = async (req, res) => {
  try {
    const Rides = await Ride.find({})
    res.status(200).send(Rides)
  } catch (error) {
    throw error
  }
}

module.exports = {
  GetRide
}
