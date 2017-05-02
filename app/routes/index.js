'use strict';

module.exports = (server) => {
    require('./auth')(server);
    require('./user')(server);
    require('./data')(server);
};