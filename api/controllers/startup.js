import mongoose from 'mongoose'
import Startup from '../models/startup.js'

export const listStartups = async (req, res) => {
  try {
    const startupList = await Startup.find()
    console.log('Getting Startups: ', startupList)

    res.status(200).send(startupList)
  } catch (error) {
    console.error('[StartupController:listStartups]', error.message)
    res.status(404).send('Error Creating Startup')
  }
}

export const createStartup = async (req, res) => {
  const newStartup = new Startup(req.body)

  try {
    await newStartup.save()
    console.log('Created Startup', newStartup)
    res.status(201).send('Created Startup')
  } catch (error) {
    console.error('[StartupController:createStartup]', error.message)
    res.status(409).send({ message: 'Error Creating Startup' })
  }
}

export const updateStartup = async (req, res) => {
  const { id: _id } = req.params
  console.log('Updating Startup with id:', _id)

  if (!mongoose.Types.ObjectId.isValid(_id)) {
    console.error('No startup with this id')
    return res.status(404).send('No startup with this id')
  }

  try {
    const updatedstartup = await Startup.findByIdAndUpdate(_id, {
      _id,
      ...req.body
    })
    res.status(201).send(updateStartup)
  } catch (error) {}
}
