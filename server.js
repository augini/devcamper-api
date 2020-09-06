import express from 'express';
import dotenv from 'dotenv';
import morgan from 'morgan';
import colors from 'colors';
//custom imports
import bootcampRoutes from './routes/bootcamps.js';
import connectDB from './config/DB.js';

//Load env configs
dotenv.config({ path: './config/config.env' });

const app = express();

//Body parser
app.use(express.json());

//connect to DB
connectDB();

// Dev logging middleware
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

app.use('/api/v1/bootcamps', bootcampRoutes);

const PORT = process.env.PORT || 3000;

const server = app.listen(
  PORT,
  console.log(
    `Server is running on ${process.env.NODE_ENV} on port ${process.env.PORT}`
      .blue.bold
  )
);

process.on('unhandledRejection', (err, promise) => {
  console.log(`Error: ${err.message}`.red.bold.italic);

  //Close the server and exit the process
  server.close(() => process.exit(1));
});
