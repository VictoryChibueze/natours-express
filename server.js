const dotenv = require('dotenv');
const app = require('./index.js');
const Port = 3000;

dotenv.config({ path: './config.env' });

console.log(process.env);

app.listen(Port, () => {
  console.log(`App is running on port ${Port}`);
});
