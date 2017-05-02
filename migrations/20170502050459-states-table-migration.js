'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
      return queryInterface.createTable('states',
          {
              id: {
                  type: Sequelize.INTEGER,
                  primaryKey: true,
                  autoIncrement: true
              },
              name: Sequelize.STRING,
              country_id: Sequelize.INTEGER,
              deleted_at: Sequelize.DATE
          });
  },

  down: function (queryInterface, Sequelize) {
      return queryInterface.dropTable('states');
  }
};
