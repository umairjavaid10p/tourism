'use strict';

const dataService = require('../services/data');

module.exports = {
    getCountriesList,
    getStatesForCountry,
    getCitiesForState
};

function getCountriesList(req, res, next) {
    return dataService.getAllCountries()
        .then((data) => {
            res.json(data);
        })
        .catch(next);
}

function getStatesForCountry(req, res, next) {
    return dataService.getStates(req.params.countryId)
        .then((data) => {
            res.json(data);
        })
        .catch(next);
}

function getCitiesForState(req, res, next) {
    return dataService.getCities(req.params.stateId)
        .then((data) => {
            res.json(data);
        })
        .catch(next);
}