'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.sequelize
      .query(
        `DELETE FROM "Users" a USING "Users" b WHERE a.id < b.id AND a.username = b.username;`
      )
      .then(() => {
        return queryInterface.sequelize.query(
          `ALTER TABLE "Users" ADD CONSTRAINT unique_username UNIQUE (username);`
        );
      });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.sequelize.query(
      `ALTER TABLE "Users" DROP CONSTRAINT unique_username;`
    );
  }
};
