'use strict';

const validationMessages = require('../messages/validation');
const util = require('util');

const textRequired = (fieldName) => {
    return {
        type: 'string',
        required: true,
        allowEmpty: false,
        messages: {
            type: util.format(validationMessages.textRequired.empty, fieldName),
            required: util.format(validationMessages.textRequired.empty, fieldName),
            allowEmpty: util.format(validationMessages.textRequired.empty, fieldName)
        }
    };
};

const token = {
    type: 'string',
    required: true,
    allowEmpty: false,
    messages: {
        type: validationMessages.token.empty,
        required: validationMessages.token.empty,
        allowEmpty: validationMessages.token.empty
    }
};

const userId = {
    type: 'string',
    required: true,
    pattern: '^[0-9a-fA-F]{24}$',
    messages: {
        type: validationMessages.userId.empty,
        required: validationMessages.userId.empty,
        pattern: validationMessages.userId.invalid
    }
};

const email = {
    type: 'string',
    required: true,
    format: 'email',
    messages: {
        type: validationMessages.email.empty,
        required: validationMessages.email.empty,
        format: validationMessages.email.invalid
    }
};

const password = {
    type: 'string',
    required: true,
    allowEmpty: false,
    minLength: 6,
    maxLength: 32,
    messages: {
        type: validationMessages.password.empty,
        required: validationMessages.password.empty,
        allowEmpty: validationMessages.password.empty,
        minLength: validationMessages.password.length,
        maxLength: validationMessages.password.length
    }
};

const oldPassword = {
    type: 'string',
    required: true,
    allowEmpty: false,
    messages: {
        type: validationMessages.oldPassword.empty,
        required: validationMessages.oldPassword.empty,
        allowEmpty: validationMessages.oldPassword.empty
    }
};

const phone = {
    type: 'string',
    required: true,
    pattern: '^[0-9]{8,15}$',
    messages: {
        type: validationMessages.phone.empty,
        required: validationMessages.phone.empty,
        pattern: validationMessages.phone.invalid
    }
};

const username = {
    type: 'string',
    required: true,
    allowEmpty: false,
    messages: {
        type: validationMessages.username.empty,
        required: validationMessages.username.empty,
        pattern: validationMessages.username.invalid
    }
};

const firstName = {
    type: 'string',
    required: true,
    allowEmpty: false,
    messages: {
        type: validationMessages.firstName.empty,
        required: validationMessages.firstName.empty,
        pattern: validationMessages.firstName.invalid
    }
};

const lastName = {
    type: 'string',
    required: true,
    allowEmpty: false,
    messages: {
        type: validationMessages.lastName.empty,
        required: validationMessages.lastName.empty,
        pattern: validationMessages.lastName.invalid
    }
};

module.exports = {
    textRequired,
    token,
    userId,
    email,
    password,
    oldPassword,
    phone,
    firstName,
    lastName,
    username
};
