import mongoose from 'mongoose'

const founderSchema = mongoose.Shema({
  id: Number,
  first_name: String,
  last_name: String,
  jobTitle: String,
  startup: {
    type: Schema.Types.ObjectId,
    ref: 'Startup',
  },
  story: Text,
})

export default mongoose.model('Founder', founderSchema)
