'use strict';

const countryRepo = require('../repositories/country');
const stateRepo = require('../repositories/state');
const cityRepo = require('../repositories/city');

module.exports = {
    getAllCountries,
    getStates,
    getCities
};

function getAllCountries() {
    return countryRepo.getAll();
}

function getStates(countryId) {
    return stateRepo.getList(countryId);
}

function getCities(stateId) {
    return cityRepo.getList(stateId);
}