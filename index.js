'use strict';
import express from 'express';
const app = express();
import dotenv from 'dotenv';
import { home } from './src/controllers/home.js';
dotenv.config();
const PORT = process.env.PORT;
app.use(express.json());

app.get('/', home);

app.listen(PORT, () => {
  if (!PORT) {
    throw new Error('No port found in enviroments');
  }
  console.log('Server running on port', PORT);
});
