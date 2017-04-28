'use strict';

let userController = require('../controllers/user');
let authMiddleware = require('../middlewares/auth');
const userConstants = require('../constants/user');

module.exports = (server) => {
    server.get(
        '/api/user',
        [
            authMiddleware.isAuthenticated,
            authMiddleware.allowedRole(userConstants.userRole.admin.name)
        ],
        userController.getAllUsers
    );
};

