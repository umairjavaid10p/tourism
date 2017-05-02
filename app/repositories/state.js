'use strict';

const models = require('../models');

module.exports = {
    getList
};

/**
 * Find single user with partner if required
 * @param payload
 * @param includePartner
 * @returns {*}
 */
function getList (countryId) {
    return models.state.findAll({
        where: {
            countryId: countryId
        }
    });
}