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
        guest: {
            name: 'guest',
            id: 4
        },
        user: {
            name: 'expert',
            id: 3
        },
        admin: {
            name: 'superAdmin',
            id: 1
        }
    },
    token: {
        invalid: 'JsonWebTokenError',
        expired: 'TokenExpiredError'
    }
};