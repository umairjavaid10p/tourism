'use strict';
const config = require('../../app/config');

module.exports = (function () {
    return {
        development: getApplicationConfig(),
        production: getApplicationConfig()
    }
}());

function getApplicationConfig () {
    return {
        username: config.get('mysql.username'),
        password: config.get('mysql.password'),
        database: config.get('mysql.name'),
        host: config.get('mysql.host'),
        dialect: 'mysql'
    }
}