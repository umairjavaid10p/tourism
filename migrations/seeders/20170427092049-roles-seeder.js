'use strict';
const userRoles = require('../../app/constants/user').userRole;

module.exports = {
  up: function (queryInterface, Sequelize) {
      return queryInterface.bulkInsert('roles', [{
          name: userRoles.user.name,
          created_at: new Date(),
          updated_at: new Date()
      }, {
          name: userRoles.admin.name,
          created_at: new Date(),
          updated_at: new Date()
      }]);
  },

  down: function (queryInterface, Sequelize) {
      return queryInterface.bulkDelete('roles', null);
  }
};
