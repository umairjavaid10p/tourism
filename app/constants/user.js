'use strict';

module.exports = {
    deviceType: {
        iOS: 'iOS',
        Web: 'Web',
        Android: 'Android'
    },
    loginType: {
        system: 'system',
        consumer: 'consumer'
    },
    userRole: {
        user: {
            name: 'user',
            id: 3
        },
        admin: {
            name: 'admin',
            id: 1
        }
    },
    token: {
        invalid: 'JsonWebTokenError',
        expired: 'TokenExpiredError'
    }
};