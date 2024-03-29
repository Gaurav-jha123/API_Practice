const express = require('express');

const { FlightMiddlewares } = require('../../middlewares/index');

const cityController = require('../../controllers/city-controller');
const flightsController  =  require('../../controllers/flight-controller');
const airportController = require('../../controllers/airport-controller');

const router = express.Router();

router.post('/city' , cityController.create);  // i.e /v1/city
router.delete('/city/:id' , cityController.destroy);  // i.e /v1/city  // same way in postman
router.get('/city/:id', cityController.get);
router.get('/city',cityController.getAll);
router.patch('/city/:id',cityController.update);

router.post('/flights',
FlightMiddlewares.validateCreateFlight,
 flightsController.create );
router.get('/flights', flightsController.getAll);
router.get('/flights/:id',flightsController.get);
router.patch('/flights/:id',flightsController.update)

router.post('/airports', airportController.create);

module.exports = router;