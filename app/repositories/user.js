'use strict';

const models = require('../models');
const Sequelize = require('sequelize');

module.exports = {
    find,
    findByEmail,
    findById,
    create,
    getUsersList
};

/**
 * Find single user with partner if required
 * @param payload
 * @param includePartner
 * @returns {*}
 */
function find (payload) {
    return models.user.find({
        where: {
            email: payload.email
        }
    });
}

function findByEmail(email) {
    return models.user.find({
        where: {
            email: email
        }
    });
}

function findById(id) {
    return models.user.find({
        where: {
            id: id
        }
    });
}

function create(payload) {
    return models.user.create(payload);
}

function getUsersList() {
    return models.user.findAll();
}