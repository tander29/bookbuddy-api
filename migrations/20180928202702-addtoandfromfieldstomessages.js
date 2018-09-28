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
      `ALTER TABLE "Messages"
    ADD COLUMN touserid INT
    ADD COLUMN fromuserid INT;
      `
    )
  },

  down: (queryInterface, Sequelize) => {

    return queryInterface.sequelize.query(
      `ALTER TABLE "Messages"
    REMOVE touserid INTEGE
    REMOVE fromuserid INTEGER;
      `
    )
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.dropTable('users');
    */
  }
};
