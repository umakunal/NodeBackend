const express = require("express");
const app = express();
const PORT = 5000;
const routes = require("./routes/");
const bodyParser = require("body-parser");
const ConnectDB = require("./Database/db");


app.set("view engine", "pug");

app.use(bodyParser.json());
app.use(routes);

ConnectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
  });
});
