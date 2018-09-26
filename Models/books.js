'use strict';
module.exports = (sequelize, DataTypes) => {
  const books = sequelize.define('books', {
    title: DataTypes.STRING,
    author: DataTypes.STRING,
    isbn10: DataTypes.STRING,
    isbn13: DataTypes.STRING,
    image: DataTypes.STRING,
    rating: DataTypes.INTEGER,
    userId: DataTypes.INTEGER
  });

  return books;
};