'use strict';
const crypto = require('crypto');
const jwt = require('jsonwebtoken');
const config = require('../config');
const uuid = require('uuid');
const userConstants = require('../constants/user');

module.exports = {
    genHash,
    compareHash,
    genSalt,
    verifyToken,
    generateToken,
    generateUuid
};

/**
 * hash password with sha512 using Salt.
 * @param {string} password - String password.
 * @param {string} salt - Random string to use as Salt.
 * @returns {string}
 */
function genHash (password, salt) {
    return crypto.createHmac('sha512', salt).update(password).digest('hex');
}

/**
 * Compare hash password with sha512 using Salt.
 * @param {string} hash - String hash.
 * @param {string} password - String password.
 * @param {string} salt - Random string to use as Salt.
 * @returns {boolean}
 */
function compareHash (hash, password, salt) {
    return genHash(password, salt) === hash;
}

/**
 * generates random string of characters i.e salt
 * @returns {string}
 */
function genSalt () {
    return crypto.randomBytes(100).toString('hex');
}

function _genJWTToken (payload, expireObj) {
    return jwt.sign({
          userId: payload.id,
          iat: Math.floor(Date.now() / 1000)
      }, config.get('token.secret'), expireObj);
}

function verifyToken (token) {
    return new Promise((resolve, reject) => {
        return jwt.verify(token, config.get('token.secret'), (error, response) => {
            if (error) {
                return reject(error);
            }
            return resolve(response);
        });
    });
}

function generateToken (data) {
    return Promise.resolve(_genJWTToken(data.user, {expiresIn: '7d'}));
}

function generateUuid () {
    return uuid.v4();
}
