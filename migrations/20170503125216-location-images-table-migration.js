'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
      return queryInterface.createTable('location_images', {
          id: {
              type: Sequelize.INTEGER,
              primaryKey: true,
              autoIncrement: true
          },
          name: Sequelize.STRING,
          path: Sequelize.STRING,
          location_id: Sequelize.INTEGER,
          is_approved: Sequelize.BOOL,
          created_at: Sequelize.DATE,
          updated_at: Sequelize.DATE,
          deleted_at: Sequelize.DATE
      });
  },

  down: function (queryInterface, Sequelize) {
      return queryInterface.dropTable('location_images');
  }
};
