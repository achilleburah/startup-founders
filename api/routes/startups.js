import express from 'express'
import {
  createStartup,
  getStartupDetails,
  listStartups
} from '../controllers/startup.js'

const StartupRouter = express.Router()

// Startup Routes
StartupRouter.get('/list', listStartups)
StartupRouter.get('/details', getStartupDetails)
StartupRouter.post('/create', createStartup)


export default StartupRouter
