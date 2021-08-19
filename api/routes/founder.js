import express from 'express';
import { getFounder } from '../controllers/founder.js';

const FounderRouter = express.Router();

// Founder Routes
FounderRouter.get('/get', getFounder);

export default FounderRouter;
