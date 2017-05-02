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
function getList (stateId) {
    return models.city.findAll({
        where: {
            stateId: stateId
        }
    });
}