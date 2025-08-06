const { Ride } = require('../models')

const GetRide = async (req, res) => {
  try {
    const Rides = await Ride.find({})
    res.status(200).send(Rides)
  } catch (error) {
    throw error
  }
}

const GetOneRide = async (req, res) => {
  try {
    const oneRide = await Ride.findById(req.params.id)
    res.status(200).send(oneRide)
  } catch (error) {
    throw error
  }
}

module.exports = {
  GetRide,
  GetOneRide
}
