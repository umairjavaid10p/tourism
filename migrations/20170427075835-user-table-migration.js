'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
      return queryInterface.createTable('users',
          {
              id: {
                  type: Sequelize.INTEGER,
                  primaryKey: true,
                  autoIncrement: true
              },
              email: Sequelize.STRING,
              username: Sequelize.STRING,
              first_name: Sequelize.STRING,
              last_name: Sequelize.STRING,
              phone: Sequelize.STRING,
              password: Sequelize.STRING,
              password_salt: Sequelize.STRING,
              role_id: Sequelize.INTEGER,
              created_at: Sequelize.DATE,
              updated_at: Sequelize.DATE,
              deleted_at: Sequelize.DATE
          });
  },

  down: function (queryInterface, Sequelize) {
      return queryInterface.dropTable('users');
  }
};