import express from 'express';
import createFounder from '../controllers/founder.js';

const FounderRouter = express.Router();

// Founder Routes
// FounderRouter.get('/:startupId', listFounders);
FounderRouter.post('/:id', createFounder);

export default FounderRouter;
