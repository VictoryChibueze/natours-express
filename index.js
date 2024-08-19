const express = require('express');
const app = express();
const fs = require('fs');
const Port = 3000;

app.use(express.json());
const tours = JSON.parse(
  fs.readFileSync(`${__dirname}/dev-data/data/tours-simple.json`)
);

app.get('/api/v1/tours', (req, res) => {
  console.log(req.params);
  res.status(200).json({
    status: 'sucess',
  });
});
app.get('/api/v1/tours/:id', (req, res) => {
  res.status(200).json({
    status: 'sucess',
    result: tours.length,
    data: {
      tours: tours,
    },
  });
});

app.post('/api/v1/tours', (req, res) => {
  //   console.log(req.body);

  const newId = tours[tours.length - 1].id + 1;
  const newTour = Object.assign({ id: newId }, req.body);

  tours.push(newTour);

  fs.writeFile(
    `${__dirname}/dev-data/data/tours-simple.json`,
    JSON.stringify(tours),
    (err) => {
      res.status(201).json({
        status: 'sucess',
        data: {
          tour: newTour,
        },
      });
    }
  );
});
app.listen(Port, () => {
  console.log(`App is running on port ${Port}`);
});
