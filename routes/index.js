const express = require("express");

const router = express.Router();

const path = require("path");

const bookRouter = require("./book");

router.get("/", (req, res) => {
  res.render("index", {
    name: "Samrat Kunal",
  });
});

router.use("/book", bookRouter);

router.all("/*", (req, res) => {
  res.sendFile(path.join(__dirname, "/../Page/error.html"));
});

module.exports = router;
