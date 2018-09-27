'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.sequelize.query(
      `ALTER TABLE books
      ADD CONSTRAINT "books_userId_fkey"
        FOREIGN KEY ("userId")
        REFERENCES Users(id)
        ON DELETE CASCADE;`
    )    
  },
  down: (queryInterface, Sequelize) => {
      return queryInterface.sequeli(
        `ALTER TABLE books
      DROP CONSTRAINT "books_userId_fkey";`
      );
  }
};
