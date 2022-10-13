const router = require("express").Router();
const service = require("../services/books.service");

router.get("/", service.getAllBooks);
router.get("/:id", service.getBookById);
router.post("/", service.createBooks);
router.delete("/:id", service.deleteBookById);
router.put("/:id", service.updateBookById);

module.exports = router;
