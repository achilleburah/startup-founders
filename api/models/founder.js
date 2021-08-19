import mongoose from 'mongoose';

const founderSchema = mongoose.Schema({
  id: Number,
  firstName: String,
  lastName: String,
  jobTitle: String,
  startupId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Startup'
  }
});

export default mongoose.model('Founder', founderSchema);
