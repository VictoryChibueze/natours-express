const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config({ path: './config.env' });
const app = require('./index.js');

// console.log(process.env);
const Port = process.env.PORT || 3003;
app.listen(Port, () => {
  console.log(`App is running on port ${Port}`);
});
