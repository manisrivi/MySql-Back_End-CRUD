const helper = require("../helper/books.helper");
const db = require("../shared/mysql");

const service = {
  // get all books
  async getAllBooks(req, res) {
    try {
      await db.query("select * from books", function (error, rows) {
        if (!!error) {
          console.log("error in the query");
        } else {
          console.log("success to get the all books");
          res.send(rows);
        }
      });
    } catch (error) {
      console.log("error", error.message);
      res.status(500).send({ error: "cannot fetch books" });
    }
  },

  // get individual book
  async getBookById(req, res) {
    try {
      const id = req.params.id;
      await db.query(
        "select * from books where id=?",
        [id],
        function (error, rows) {
          if (!!error) {
            console.log("error in the query");
          } else {
            console.log("success to get a book");
            res.send(rows);
          }
        }
      );
    } catch (error) {
      console.log("error", error.message);
      res.status(500).send({ error: `cannot fetch this id ${req.params.id}` });
    }
  },

  // create book
  async createBooks(req, res) {
    try {
      const { title, details, cover } = req.body;
      await db.query(
        "insert into books (title, details, cover) values (?,?,?)",
        [title, details, cover],
        function (error, rows) {
          if (!!error) {
            console.log("error in the query");
          } else {
            console.log("success to post the book");
            res.send(rows);
          }
        }
      );
    } catch (error) {
      console.log("error:", error.message);
      res.status(500).send({ error: "incorrect data try again" });
    }
  },

  // delete book
  async deleteBookById(req, res) {
    try {
      const bookId = req.params.id;
      await db.query(
        "delete from books where id = ?",
        [bookId],
        function (error, rows) {
          if (!!error) {
            console.log("error in the query");
          } else {
            console.log("delete a book successfully");
            res.send(rows);
          }
        }
      );
    } catch (error) {
      res.status(500).send({ error: error.message });
    }
  },

  // update book
  async updateBookById(req, res) {
    try {
      const { title, details, cover } = req.body;
      const id = req.params.id;
      await db.query(
        "update books set title=?, details=?, cover=? where id=?",
        [title, details, cover, id],
        function (error, rows) {
          if (!!error) {
            console.log("error in the query");
          } else {
            console.log("successfully updated a book");
            res.send(rows);
          }
        }
      );
    } catch (error) {
      console.log("error:", error.message);
      res.status(500).send({ error: "incorrect data try again" });
    }
  },
};

module.exports = service;
