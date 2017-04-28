'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
      return queryInterface.bulkInsert('users', [{
          email: 'admin@tourism.com',
          first_name: 'Admin',
          last_name: 'User',
          phone: '0313-1011011',
          username: 'admin',
          password: 'd953cb41bdcd32a035504f2e5237ab82',
          role_id: 1,
          created_at: new Date(),
          updated_at: new Date()
      },{
          email: 'user@tourism.com',
          first_name: 'Normal',
          last_name: 'User',
          phone: '0313-5055055',
          username: 'user',
          password: 'd953cb41bdcd32a035504f2e5237ab82',
          role_id: 2,
          created_at: new Date(),
          updated_at: new Date()
      }]);
  },

  down: function (queryInterface, Sequelize) {
      return queryInterface.bulkDelete('users', [{
          email: 'admin@tourism.com',
          username: 'admin'
      }, {
          email: 'user@tourism.com',
          username: 'user'
      }]);
  }
};