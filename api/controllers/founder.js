import mongoose from 'mongoose';
import Startup from '../models/startup.js';

export default async (req, res) => {
  console.log('req.body', req.body);
  const { id: startupId } = req.params;

  if (!mongoose.Types.ObjectId.isValid(startupId)) {
    console.error('No startup with this id', startupId);
    return res.status(400).send({ message: 'No startup with this id' });
  }

  try {
    const startup = await Startup.findById(startupId);
    startup.founders.push(req.body);
    await startup.save();
    return res.status(200).send({ message: 'Created Founder' });
  } catch (error) {
    console.error('[FounderController:createFounder]', error);
    return res.status(400).send({
      message: 'Error Creating Founder'
    });
  }
};
