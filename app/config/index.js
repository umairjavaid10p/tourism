'use strict';

const convict = require('convict');
const path = require('path');

let config = convict({
    env: {
        doc: 'Application environment',
        format: ['development', 'staging', 'production'],
        env: 'NODE_ENV',
        default: 'development'
    },
    server: {
        port: {
            doc: 'Port to bind',
            format: 'port',
            default: 3000
        },
        appURL: {
            doc: 'Web-App URL',
            format: String,
            default: 'https://www.tourism.pk'
        }
    },
    mysql: {
        host: {
            doc: 'Database host name/IP',
            format: String,
            default: 'localhost'
        },
        port: {
            doc: 'Database port',
            format: 'port',
            default: 27017
        },
        name: {
            doc: 'Database name',
            format: String,
            default: 'dbName'
        },
        username: {
            doc: 'Database username',
            format: String,
            default: ''
        },
        password: {
            doc: 'Database password',
            format: String,
            default: ''
        },
        pool: {
            maxConnections: {
                doc: 'Maximum Connections',
                format: Number,
                default: 5
            },
            minConnections: {
                doc: 'Minimum Connections',
                format: Number,
                default: 0
            },
            maxIdleTime: {
                doc: 'Maximum Idle Time',
                format: Number,
                default: 30
            }
        }
    },
    newrelic: {
        licenseKey: {
            doc: 'New Relic License Key',
            format: String,
            default: ''
        }
    },
    logs: {
        token: {
            doc: 'Loggly token',
            format: String,
            default: ''
        },
        subdomain: {
            doc: 'Loggly subdomain',
            format: String,
            default: 'fma'
        },
        directory: {
            doc: 'Logs directory',
            format: String,
            default: path.join(__dirname, '../../logs/')
        }
    },
    token: {
        secret: {
            doc: 'Token secret key',
            format: String,
            default: 'SomeSecretKey'
        },
        auth: {
            expiresIn: {
                doc: 'Token expiry time (Auth)',
                format: 'duration',
                default: '1 day'
            }
        }
    },
    sendgrid: {
        apiKey: {
            doc: 'SendGrid API Key',
            format: String,
            default: ''
        }
    },
    azureStorage: {
        accountName: {
            doc: 'Azure Storage Account Name',
            format: String,
            default: ''
        },
        accessKey: {
            doc: 'Azure Storage Access Key',
            format: String,
            default: ''
        }
    },
});

// Load environment dependent configuration
config.loadFile(path.join(__dirname, '../../config.json'));

// Perform validation
config.validate({ strict: true });

module.exports = config;
