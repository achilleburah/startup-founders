import mongoose from 'mongoose'

const startupSchema = mongoose.Schema({
  id: Number,
  name: String,
  city: String,
  country: String,
  creationDate: Date,
  headline: String,
  description: String,
  createdAt: {
    type: Date,
    default: new Date()
  }
})

export default mongoose.model('Startup', startupSchema)
