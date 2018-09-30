'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
   
    return queryInterface.sequelize.query(
      `
      ALTER TABLE "Messages"
      ADD COLUMN touserid INTEGER;
      ALTER TABLE "Messages"
      ADD COLUMN fromuserid INTEGER;
      `
    )
  },

  down: (queryInterface, Sequelize) => {
  
    return queryInterface.sequelize.query(
      `
    ALTER TABLE "Messages"
   DROP COLUMN touserid;
   ALTER TABLE "Messages"
   DROP COLUMN fromuserid;
      `
    )
  }
};
