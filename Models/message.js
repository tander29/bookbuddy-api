'use strict';
module.exports = (sequelize, DataTypes) => {
  const message = sequelize.define('Message', {
    text: DataTypes.STRING,
    userId: DataTypes.INTEGER,
    touserid: DataTypes.INTEGER,
    fromuserid: DataTypes.INTEGER
  });
  return message;
};