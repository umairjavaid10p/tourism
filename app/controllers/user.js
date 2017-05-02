'use strict';

const userService = require('../services/user');

module.exports = {
    getAllUsers
};

function getAllUsers(req, res, next) {
    req.body = req.body || {};
    return userService.getAllUsers()
        .then((data) => {
            res.json(data);
        })
        .catch(next);
}