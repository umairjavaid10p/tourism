'use strict';

const Sequelize = require('sequelize');
const config = require('../config');
const log = require('./log');

let sequelize;

module.exports = () => {
    return sequelize || createInstance();

    function createInstance () {
        sequelize = new Sequelize(
            config.get('mysql.name'),
            config.get('mysql.username'),
            config.get('mysql.password'),
            {
                host: config.get('mysql.host'),
                port: config.get('mysql.port'),
                dialect: 'mysql',
                pool: {
                    maxConnections: config.get('mysql.pool.maxConnections'),
                    minConnections: config.get('mysql.pool.minConnections'),
                    maxIdleTime: config.get('mysql.pool.maxIdleTime')
                }
            }
        );
        sequelize.authenticate()
            .then(() => {
                log.debug('DB Connection has been established successfully.');
            })
            .catch((err) => {
                log.debug('Unable to connect to the database:', err);
            });
        return sequelize;
    }
};
