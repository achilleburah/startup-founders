import Startup from '../models/startup.js'

export const listStartups = async (req, res) => {
  try {
    console.log('GEtting Startups')
    const startupList = await Startup.find()

    res.status(200).send(startupList)
  } catch (error) {
    console.error('[StartupController:listStartups]', error.message)
    res.status(404).send('Error Creating Startup')
  }
}

export const createStartup = async (req, res) => {
  const reqBody = req.body
  const newStartup = new Startup(reqBody)

  console.log('Create Startup: ', reqBody, newStartup)
  try {
    await newStartup.save()
    console.log('Created Startup', newStartup)
    res.status(201).send('Created Startup')
  } catch (error) {
    console.error('[StartupController:createStartup]', error.message)
    res.status(409).send({ message: 'Error Creating Startup' })
  }
}

export const getStartupDetails = async (req, res) => {
  try {
  } catch (error) {
    res.send('Error Creating Startup')
  }
}
