const user = require("./user");
const { router } = require("./authorize");
const books = require("./books")
const message = require('./message')

module.exports = {
  authorize: router,
  books,
  message,
  user
};