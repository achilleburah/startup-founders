import mongoose from 'mongoose'

const startupSchema = mongoose.Schema({
  id: Number,
  name: String,
  headline: String,
  description: String,
  foundationDate: Date,
  createdAt: {
    type: Date,
    default: new Date(),
  },
})

export default mongoose.model('Startup', startupSchema)
