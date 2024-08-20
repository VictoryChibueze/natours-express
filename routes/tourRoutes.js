const express = require('express');
const router = express.Router();

router.route('/').get(getAlltours).post(createTour);

router.route('/:id').get(getTour).patch(updateTour).delete(deleteTour);
