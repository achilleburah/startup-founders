import express from 'express'

import FounderRouter from './founder.js'
import StartupRouter from './startups.js'

const router = express.Router()

router.use('/startup', StartupRouter)
router.use('/founder', FounderRouter)

export default router
