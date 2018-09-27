'use strict';

const Sequelize = require("sequelize");

const sequelize = new Sequelize(process.env.DATABASE_URL);

const User = sequelize.import("./User");

const books = sequelize.import("./books")



module.exports = {
  sequelize,
  books,
  User
};