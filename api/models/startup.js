import mongoose from 'mongoose';

const startupSchema = mongoose.Schema({
  id: Number,
  name: String,
  city: String,
  country: String,
  creationDate: Date,
  headline: String,
  description: String,
  founders: [
    {
      firstName: String,
      lastName: String,
      jobTitle: String
    }
  ],
  createdAt: {
    type: Date,
    default: new Date()
  }
});

export default mongoose.model('Startup', startupSchema);
