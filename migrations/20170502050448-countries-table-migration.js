'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
      return queryInterface.createTable('countries',
          {
              id: {
                  type: Sequelize.INTEGER,
                  primaryKey: true,
                  autoIncrement: true
              },
              sort_name: Sequelize.STRING,
              name: Sequelize.STRING,
              phone_code: Sequelize.INTEGER,
              deleted_at: Sequelize.DATE
          });
  },

  down: function (queryInterface, Sequelize) {
      return queryInterface.dropTable('countries');
  }
};
