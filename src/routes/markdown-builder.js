import express from 'express';
import { createFile } from '../controllers/markdown-builder.js';

export const mdbRouter = express.Router();

mdbRouter.post('/create', createFile);
