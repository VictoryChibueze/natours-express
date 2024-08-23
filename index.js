const express = require('express');
const app = express();
const morgan = require('morgan');

const tourRouter = require('./Routes/tourRoutes.js');
const userRouter = require('./Routes/userRoutes.js');

if (process.env.NODE_ENV == 'development') {
  app.use(morgan('dev'));
}

app.use(express.json());

app.use(express.static(`${__dirname}/public`));

app.use((req, res, next) => {
  console.log('Hello from the middleware');
  next();
});

app.use((req, res, next) => {
  req.requestTime = new Date().toISOString();
  next();
});

// ROUTE HANDLERS

// ROUTES

app.use('/api/v1/tours', tourRouter);
app.use('/api/v1/users', userRouter);
//   START SERVER

module.exports = app;
