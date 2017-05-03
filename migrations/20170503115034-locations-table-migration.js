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
          small_description: Sequelize.STRING,
          description: Sequelize.STRING,
          latitude: Sequelize.STRING,
          longitude: Sequelize.STRING,
          country_id: Sequelize.INTEGER,
          state_id: Sequelize.INTEGER,
          city_id: Sequelize.INTEGER,
          is_approved: Sequelize.BOOLEAN,
          created_at: Sequelize.DATE,
          updated_at: Sequelize.DATE,
          deleted_at: Sequelize.DATE
      });
  },

  down: function (queryInterface, Sequelize) {
      return queryInterface.dropTable('locations');
  }
};
