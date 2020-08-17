import express from 'express';
import dotenv from 'dotenv';

//Load env configs
dotenv.config({ path: './config/config.env' });

const app = express();

const PORT = process.env.PORT || 3000;

app.listen(
  PORT,
  console.log(
    `Server is running on ${process.env.NODE_ENV} on port ${process.env.PORT}`
  )
);
