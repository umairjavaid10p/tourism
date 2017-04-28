'use strict';

const validator = require('revalidator');
const errors = require('restify-errors');

module.exports = {
    validatePayload
};

function validatePayload (payload, schema) {
    return new Promise((resolve) => {
        let result = validator.validate(payload, schema);

        if (!result.valid) {
            throw new errors.BadRequestError(result.errors[0]);
        }
        return resolve(payload);
    });
}
