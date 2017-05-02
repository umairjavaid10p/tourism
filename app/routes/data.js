'use strict';

let dataController = require('../controllers/data');

module.exports = (server) => {
    server.get('/api/data/countries', dataController.getCountriesList);
    server.get('/api/data/states/:countryId', dataController.getStatesForCountry);
    server.get('/api/data/cities/:stateId', dataController.getCitiesForState);
};

