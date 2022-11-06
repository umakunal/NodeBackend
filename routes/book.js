const express = require("express");

const bookRouter = express.Router();

bookRouter
  .route("/")
  .get((req, res) => {
    res.send("All Books");
  })
  .post((req, res) => {
    res.json({ data: "Book is stored" });
  });

bookRouter.get("/:id", (req, res) => {
  console.log("req==>", req.params);
  res.send(`Single book of  ID: ${req.params.id}`);
});

module.exports = bookRouter;
