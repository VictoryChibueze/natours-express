const fs = require('fs');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config({ path: './config.env' });
const Tour = require('./../../models/tourModel');
const DB = process.env.DATABASE.replace(
  '<PASSWORD>',
  process.env.DATABASE_PASSWORD,
);
mongoose
  .connect(DB, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
  })
  .then(() => {
    console.log('DB connection sucessful');
  });

//READ JSON FILE

const tours = fs.readFileSync('tours-simple.json', 'utf-8');

// Import data

const importData = async () => {
  try {
    await Tour.create();
  } catch (err) {
    console.log(err);
  }
};
