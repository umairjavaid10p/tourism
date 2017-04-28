'use strict';

module.exports = {
    saveSuccess: 'User has been saved.',
    notFound: 'Invalid User ID.',
    notAllowed: 'You are not allowed to save/get details of this user.',
    token: {
        missing: 'Token missing.',
        invalid: 'Invalid token.',
        expired: 'Token expired'
    },
    register: {
        success: 'User has been created.',
        exists: 'This email address already exists.'
    },
    signin: {
        notFound: 'User not found.',
        success: 'User sign-in successfully.',
        wrongPassword: 'Password is incorrect.'
    },
    resetPassword: {
        codeExpiredOrInvalid: 'Invalid/expired code. Please request another code.',
        success: 'Password has been changed successfully'
    },
    logout: {
        success: 'User logout successfully.',
        notFound: 'Token not found.'
    }
};
