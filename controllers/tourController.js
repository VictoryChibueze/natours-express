const Tour = require('./../models/tourModel');

exports.checkBody = (req, res, next, val) => {
  if (!req.body.name || !req.body.price) {
    return res.status(400).json({
      status: 'fail',
      message: 'Missing name or price',
    });
  }
  next();
};
exports.getAlltours = (req, res) => {
  res.status(200).json({
    status: 'sucess',
    result: tours.length,
    requestedAt: req.requestTime,
    // data: {
    //   tours: tours,
    // },
  });
};

exports.getTour = (req, res) => {
  const id = req.params.id * 1;
  // const tour = tours.find((el) => el.id === id);

  // res.status(200).json({
  //   status: 'sucess',
  //   data: {
  //     tours: tour,
  //   },
  // });
};

exports.createTour = (req, res) => {
  //   console.log(req.body);

  res.status(201).json({
    status: 'sucess',
    data: {
      tour: newTour,
    },
  });
};

exports.updateTour = (req, res) => {
  res.status(200).json({
    status: 'success',
    data: {
      tours: `<updated tour here>`,
    },
  });
};

exports.deleteTour = (req, res) => {
  res.status(204).json({
    status: 'success',
    data: null,
  });
};
