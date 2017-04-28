'use strict';

//require('newrelic');

const config = require('./config');
const restify = require('restify');
const log = require('./bootstrap/log');
const path = require('path');

let server = restify.createServer({
    name: 'tourism',
    log: log,
    formatters: {
        'application/json': require('./formatters/json')
    }
});

require('./bootstrap/restify')(server);
require('./bootstrap/database')();

require('./routes')(server);

server.get(/\/apidoc\/?.*/, restify.serveStatic({
    directory: __dirname
}));

// ---  /\/\/?.*/
server.get('/', restify.serveStatic({
    directory: path.resolve(__dirname, '../public'),
    default: 'index.html'
}));

server.listen(config.get('server.port'), () => {
    server.log.info('%s listening at %s', server.name, server.url);
});

process.on('unhandledRejection', (err) => {
    server.log.error(err);
});
