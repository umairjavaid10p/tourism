'use strict';

const rules = require('../rules');

const login = {
    properties: {
        email: rules.email,
        password: rules.password
    }
};

const register = {
    properties: {
        email: rules.email,
        password: rules.password,
        username: rules.username,
        firstName: rules.firstName,
        lastName: rules.lastName,
        phone: rules.phone
    }
};

module.exports = {
    login,
    register
};
