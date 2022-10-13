const db = require("../shared/mysql");

const helper = {
  // find all books
  find() {
    return db.query("select * from books");
  },
};

module.exports = helper;
