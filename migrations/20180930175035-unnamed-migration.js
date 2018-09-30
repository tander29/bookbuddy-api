'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.sequelize.query(
      `ALTER TABLE books ADD COLUMN UserID`
    )
  
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.sequelize.query(
      "ALTER TABLE users DROP COLUMN UserId"
    )
  }
};
