'use strict';

const models = require('../models');

module.exports = {
    getAll
};

/**
 * Find single user with partner if required
 * @param payload
 * @param includePartner
 * @returns {*}
 */
function getAll () {
    return models.country.findAll();
}