import express from 'express'
import {
  createStartup,
  listStartups,
  updateStartup
} from '../controllers/startup.js'

const StartupRouter = express.Router()

// Startup Routes
StartupRouter.get('/', listStartups)
StartupRouter.post('/', createStartup)

StartupRouter.patch('/:id', updateStartup)

export default StartupRouter
