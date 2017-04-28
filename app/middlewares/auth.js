'use strict';

const errors = require('restify-errors');
const userMessages = require('../messages/user');
const authHelper = require('../helpers/auth');
const authConstants = require('../constants/user');
const userRepo = require('../repositories/user');
const _ = require('lodash');

module.exports = {
    isAuthenticated
};

function isAuthenticated (req, res, next) {
    let token = req.headers.token;
    if (!token) {
        next(new errors.UnauthorizedError(userMessages.token.missing));
    }
    return authHelper.verifyToken(token)
        .then((tokenInfo) => {
            req.userId = tokenInfo.userId;
            return tokenInfo;
        })
        .then(_findUserByToken)
        .catch(_unauthorized);

    function _findUserByToken (tokenInfo) {
        return userRepo.findById(tokenInfo.userId).then((data) => {
            if (!data) {
                next(new errors.UnauthorizedError(userMessages.token.invalid));
            }
            req.currentUser = data.dataValues;
            req.currentUserTokenInfo = tokenInfo;
            return next();
        });
    }

    function _unauthorized (error) {
        switch (error.name) {
            case authConstants.token.invalid:
                next(new errors.UnauthorizedError(userMessages.token.invalid));
                break;
            case authConstants.token.expired:
                next(new errors.UnauthorizedError(userMessages.token.expired));
                break;
            default:
                next(new errors.ForbiddenError(error.message));
        }
    }
}