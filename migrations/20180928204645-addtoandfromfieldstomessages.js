'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.createTable('users', { id: Sequelize.INTEGER });
    */

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
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.dropTable('users');
    */

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
