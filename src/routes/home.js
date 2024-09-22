import express from 'express';
import { home } from '../controllers/home.js';

export const homeRouter = express.Router();

homeRouter.get('/', home);
