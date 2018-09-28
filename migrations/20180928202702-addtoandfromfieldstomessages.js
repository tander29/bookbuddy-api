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
    ADD COLUMN touserid INTEGER(2)
    ADD COLUMN fromuserid INTEGER(2);
      `
    )
  },

  down: (queryInterface, Sequelize) => {

    return queryInterface.sequelize.query(
      `ALTER TABLE "Messages"
    REMOVE touserid INTEGEr
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
