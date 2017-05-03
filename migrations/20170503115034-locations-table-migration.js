'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
      return queryInterface.createTable('locations', {
          id: {
              type: Sequelize.INTEGER,
              primaryKey: true,
              autoIncrement: true
          },
          name: Sequelize.STRING,
          description: Sequelize.STRING,
          latitude: Sequelize.STRING,
          longitude: Sequelize.STRING,
          country_id: Sequelize.STRING,
          state_id: Sequelize.STRING,
          city_id: Sequelize.STRING,
          created_at: Sequelize.DATE,
          updated_at: Sequelize.DATE,
          deleted_at: Sequelize.DATE
      });
  },

  down: function (queryInterface, Sequelize) {
      return queryInterface.dropTable('locations');
  }
};
