const mongoose = require('mongoose')
const data = require('./allGames.json')
const { Ride } = require('./models')
require('dotenv').config()

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log('Successfully connected to MongoDB')
    seedDatabase()
  })
  .catch((e) => {
    console.error('Connection error:', e.message)
  })
const seedDatabase = async () => {
  try {
    await Ride.deleteMany({})
    console.log(' rides deleted')
    await Ride.insertMany(data)
    console.log(' New rides added successfully!')
  } catch (err) {
    console.error('Error during seeding:', err)
  } finally {
    mongoose.connection.close()
  }
}

seedDatabase()
