'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
      return queryInterface.createTable('location_facts', {
          id: {
              type: Sequelize.INTEGER,
              primaryKey: true,
              autoIncrement: true
          },
          name: Sequelize.STRING,
          description: Sequelize.STRING,
          is_approved: Sequelize.BOOL,
          location_id: Sequelize.INTEGER,
          created_at: Sequelize.DATE,
          updated_at: Sequelize.DATE,
          deleted_at: Sequelize.DATE
      });
  },

  down: function (queryInterface, Sequelize) {
      return queryInterface.dropTable('location_facts');
  }
};
