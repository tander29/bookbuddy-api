'use strict';

const Sequelize = require("sequelize");

const sequelize = new Sequelize(process.env.DATABASE_URL, {operatorsAliases: false, ssl: { rejectUnauthorized: false }});

const User = sequelize.import("./User");

const books = sequelize.import("./books")

const message = sequelize.import("./message")


User.hasMany(books);

books.belongsTo(User);

module.exports = {
  sequelize,
  books,
  User,
  message
};