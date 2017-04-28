'use strict';
const userRoles = require('../../app/constants/user').userRole;

module.exports = {
  up: function (queryInterface, Sequelize) {
      return queryInterface.bulkInsert('roles', [{
          id: userRoles.user.id,
          name: userRoles.user.name,
          created_at: new Date(),
          updated_at: new Date()
      }, {
          name: userRoles.admin.name,
          id: userRoles.admin.id,
          created_at: new Date(),
          updated_at: new Date()
      }, {
          name: userRoles.guest.name,
          id: userRoles.guest.id,
          created_at: new Date(),
          updated_at: new Date()
      }]);
  },

  down: function (queryInterface, Sequelize) {
      return queryInterface.bulkDelete('roles', [{
          name: userRoles.admin.name
      }, {
          name: userRoles.user.name
      }, {
          name: userRoles.guest.name
      }]);
  }
};
