'use strict';
import express from 'express';
const app = express();
import dotenv from 'dotenv';
import { homeRouter } from './src/routes/home.js';
import { error } from './src/middleware/500.js';
import { notFound } from './src/middleware/404.js';
import { mdbRouter } from './src/routes/markdown-builder.js';
dotenv.config();
const PORT = process.env.PORT;
app.use(express.json());

app.use(homeRouter);
app.use('/markdown', mdbRouter);
app.use(notFound);
app.use(error);
app.listen(PORT, () => {
  if (!PORT) {
    throw new Error('No port found in enviroments');
  }
  console.log('Server running on port', PORT);
});
