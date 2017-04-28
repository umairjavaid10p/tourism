'use strict';

const userService = require('../services/user');

module.exports = {
    getAllUsers
};

function getAllUsers(req, res, next) {
    // console.log(req.userId, req.currentUser, req.currentUserTokenInfo, "---------------- 1 ------------------- 1 -----------------");
    req.body = req.body || {};
    return userService.getAllUsers()
        .then((data) => {
            res.json(data);
        })
        .catch(next);
}