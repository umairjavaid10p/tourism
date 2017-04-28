'use strict';

const userRepo = require('../repositories/user');

module.exports = {
    getAllUsers
};

function getAllUsers() {
    return userRepo.getUsersList();
}