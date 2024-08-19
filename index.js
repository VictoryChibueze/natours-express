const express = require('express');

const app = express();
const Port = 3000;

app.get('/', (req, res) => {
  res.status(200).send();
});

app.listen(Port, () => {
  console.log(`App is running on port ${Port}`);
});
