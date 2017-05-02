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
            name: 'user'
        },
        admin: {
            name: 'admin'
        }
    },
    token: {
        invalid: 'JsonWebTokenError',
        expired: 'TokenExpiredError'
    }
};