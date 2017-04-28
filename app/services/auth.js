'use strict';

const _ = require('lodash');
const userRepo = require('../repositories/user');
const userMessages = require('../messages/user');
const restify = require('restify');
const validator = require('../validator');
const validationSchemas = require('../validator/schema/auth');
const authHelper = require('../helpers/auth');

module.exports = {
    login,
    register
};

function login(payload) {
    return _validatePayload()
        .then(_findUser)
        .then(_validateUser)
        .then(generateToken);

    function _validatePayload() {
        return validator.validatePayload(payload, validationSchemas.login);
    }

    function _findUser() {
        return userRepo.findByEmail(payload.email);
    }

    function _validateUser(user) {
        if (!user) {
            throw new restify.errors.NotFoundError(userMessages.signin.notFound);
        }
        if(!authHelper.compareHash(user.password, payload.password, user.passwordSalt)){
            throw new restify.errors.NotFoundError(userMessages.signin.wrongPassword);
        }
        return {
            user: user
        };
    }
}

function register(payload) {
    return _validatePayload()
        .then(_checkExistingUser)
        .then(_createUser)
        .then(generateToken);

    function _validatePayload () {
        return validator.validatePayload(payload, validationSchemas.register);
    }

    function _checkExistingUser () {
        return userRepo.findByEmail(payload.email);
    }

    function _createUser(user) {
        if (user) {
            throw new restify.errors.NotFoundError(userMessages.register.exists);
        }
        payload.passwordSalt = authHelper.genSalt();
        payload.password = authHelper.genHash(payload.password, payload.passwordSalt);
        payload.role_id = 1;
        return userRepo.create(payload).then(user => {
            return {user: user};
        });
    }

}

function generateToken(data) {
    return authHelper.generateToken(data)
        .then((token) => {
            data.token = token;
            return data;
        });
}