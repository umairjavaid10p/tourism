'use strict';
const authHelper = require('../../app/helpers/auth');

module.exports = {
  up: function (queryInterface, Sequelize) {
      let salt = authHelper.genSalt();
      let password = authHelper.genHash('123456', salt);
      return queryInterface.bulkInsert('users', [{
          email: 'admin@tourism.com',
          first_name: 'Admin',
          last_name: 'User',
          phone: '0313-1011011',
          username: 'admin',
          password: password,
          password_salt: salt,
          role_id: 1,
          created_at: new Date(),
          updated_at: new Date()
      },{
          email: 'user@tourism.com',
          first_name: 'Normal',
          last_name: 'User',
          phone: '0313-5055055',
          username: 'user',
          password: password,
          password_salt: salt,
          role_id: 2,
          created_at: new Date(),
          updated_at: new Date()
      }]);
  },

  down: function (queryInterface, Sequelize) {
      return queryInterface.bulkDelete('users', null);
  }
};