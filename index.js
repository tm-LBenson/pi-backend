'use strict';
import express from 'express';
const app = express();
import dotenv from 'dotenv';
dotenv.config();
const PORT = process.env.PORT;
app.use(express.json());

app.get('/', (req, res) => {
  res.status(200).json({ 'server-status': 'Online' });
});
app.listen(PORT, () => {
  if (!PORT) {
    throw new Error("No port found in enviroments")
  }
  console.log('Server running on port', PORT);
});