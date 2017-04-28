'use strict';

let userController = require('../controllers/user');
let authMiddleware = require('../middlewares/auth');

module.exports = (server) => {
    server.get('/api/user', authMiddleware.isAuthenticated, userController.getAllUsers);
};

