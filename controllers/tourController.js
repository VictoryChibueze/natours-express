const Tour = require('./../models/tourModel');

exports.getAlltours = async (req, res) => {
  try {
    const queryObj = { ...req.query };
    // const tours = await Tour.find()
    //   .where('duration')
    //   .equals(5)
    //   .where('difficulty')
    //   .equals('easy');

    const tours = await Tour.find(req.query);
    res.status(200).json({
      status: 'sucess',
      results: tours.length,
      data: {
        tours: tours,
      },
    });
  } catch (err) {
    res.status(404).json({
      status: 'fail',
      message: err,
    });
  }
};

exports.getTour = async (req, res) => {
  try {
    const tour = await Tour.findById(req.params.id);
  } catch (err) {
    res.status(404).json({
      status: 'fail',
      message: err,
    });
  }
  // const id = req.params.id * 1;
  // const tour = tours.find((el) => el.id === id);

  // res.status(200).json({
  //   status: 'sucess',
  //   data: {
  //     tours: tour,
  //   },
  // });
};

exports.createTour = async (req, res) => {
  //   console.log(req.body);
  try {
    const newTour = await Tour.create(req.body);
    res.status(201).json({
      status: 'sucess',
      data: {
        tour: newTour,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: 'fail',
      message: err,
    });
  }
};

exports.updateTour = async (req, res) => {
  try {
    const tour = await Tour.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    res.status(200).json({
      status: 'success',
      data: {
        tour,
      },
    });
  } catch (err) {
    res.status(204).json({
      status: 'fail',
      message: err,
    });
  }
};

exports.deleteTour = async (req, res) => {
  try {
    await Tour.findByIdAndDelete(req.params.id);
    res.status(204).json({
      status: 'success',
      data: null,
    });
  } catch (err) {
    res.status(404).json({
      status: 'fail',
      message: err,
    });
  }
};
