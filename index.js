'use strict';
import express from 'express';
const app = express();
import dotenv from 'dotenv';
import { home } from './src/controllers/home.js';
import { homeRouter } from './src/routes/home.js';
dotenv.config();
const PORT = process.env.PORT;
app.use(express.json());

app.use(homeRouter);

app.listen(PORT, () => {
  if (!PORT) {
    throw new Error('No port found in enviroments');
  }
  console.log('Server running on port', PORT);
});
