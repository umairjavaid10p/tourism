'use strict';

const authService = require('../services/auth');

module.exports = {
    login,
    register
};

function login(req, res, next) {
    req.body = req.body || {};
    return authService.login({
        email: req.body.email,
        password: req.body.password,
    })
        .then((data) => {
            res.json(data);
        })
        .catch(next);
}

function register(req, res, next) {
    req.body = req.body || {};
    return authService.register({
        email: req.body.email,
        password: req.body.password,
        username: req.body.username,
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        phone: req.body.phone
    })
        .then((data) => {
            res.json(data);
        })
        .catch(next);
}