'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
      return queryInterface.createTable('cities',
          {
              id: {
                  type: Sequelize.INTEGER,
                  primaryKey: true,
                  autoIncrement: true
              },
              name: Sequelize.STRING,
              state_id: Sequelize.INTEGER,
              deleted_at: Sequelize.DATE
          });
  },

  down: function (queryInterface, Sequelize) {
      return queryInterface.dropTable('cities');
  }
};
