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
    ADD COLUMN touserid INTEGER
    ADD COLUMN fromuserid INTEGER;
      `
    )
  },

  down: (queryInterface, Sequelize) => {

    return queryInterface.sequelize.query(
      `ALTER TABLE "Messages"
    REMOVE touserid INTEGER
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
