'use strict';

let authController = require('../controllers/auth');

module.exports = (server) => {
    server.post('/api/auth/login', authController.login);
    server.post('/api/auth/register', authController.register);
};

