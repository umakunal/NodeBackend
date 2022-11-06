
const express = require("express");
const BookController = require("../Controllers/BookController");
const authMiddleware = require("../Middleware/test");
const bookRouter = express.Router();

bookRouter.use(authMiddleware).route("/").get(BookController.index).post(BookController.store);

bookRouter
  .route("/:id")
  .get(BookController.show)
  .patch(BookController.update)
  .delete(BookController.delete);

module.exports = bookRouter;
