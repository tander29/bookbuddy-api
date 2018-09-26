const user = require("./User");
const { router } = require("./authorize");
const books = require("./books")


module.exports = {
  authorize: router,
  books,
  user
};