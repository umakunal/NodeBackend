const express = require("express");
const app = express();
const PORT = 5000;
const routes = require("./routes/");
app.set('view engine', 'pug')


app.use(routes);

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
