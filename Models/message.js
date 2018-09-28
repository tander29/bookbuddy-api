'use strict';
module.exports = (sequelize, DataTypes) => {
  const message = sequelize.define('Message', {
    text: DataTypes.STRING,
    userId: DataTypes.INTEGER
  });
  return message;
};