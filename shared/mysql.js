const { createPool } = require("mysql");

const db = createPool(
  {
    host: process.env.HOST,
    user: process.env.USER,
    password: process.env.PASSWORD,
    database: process.env.DATABASE,
  },
  console.log("MySql db Connected Successfully")
);

module.exports = db;
