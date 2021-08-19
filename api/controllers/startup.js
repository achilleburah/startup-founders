import mongoose from 'mongoose';
import Startup from '../models/startup.js';

export const listStartups = async (req, res) => {
  try {
    const startupList = await Startup.find();
    res.status(200).send(startupList);
  } catch (error) {
    console.error('[StartupController:listStartups]', error);
    res.status(400).send({ message: 'Error Getting Startups' });
  }
};

export const createStartup = async (req, res) => {
  const newStartup = new Startup(req.body);
  try {
    await newStartup.save();
    res
      .status(200)
      .send({ message: 'Created Startup', createdStartup: newStartup });
  } catch (error) {
    console.error('[StartupController:createStartup]', error);
    res.status(400).send({
      message: 'Error Creating Startup',
    });
  }
};

export const updateStartup = async (req, res) => {
  const { id: _id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(_id)) {
    console.error('No startup with this id');
    return res.status(400).send({ message: 'No startup with this id' });
  }

  try {
    const updatedStartup = await Startup.findOneAndUpdate(
      { _id: _id },
      req.body,
      { useFindAndModify: false },
    );
    console.log('Updated', updatedStartup);
    res.status(200).send({
      message: 'Successfully updated Startup',
      updatedStartup: {
        _id,
        ...req.body,
      },
    });
  } catch (error) {
    console.error('[StartupController:updateStartup]', error);
    res.status(400).send({ message: error.message });
  }
};

export const deleteStartup = async (req, res) => {
  const { id: _id } = req.params;
  console.log('Deleting Startup', _id);
  if (!mongoose.Types.ObjectId.isValid(_id)) {
    console.error('No startup with this id');
    return res.status(400).send({ message: 'No startup with this id' });
  }

  try {
    await Startup.findByIdAndRemove(_id);
    res.status(200).send({ message: 'Successfully deleted Startup' });
  } catch (error) {
    console.error('[StartupController:deleteStartup]', error);
    res.status(400).send({ message: error.message });
  }
};
