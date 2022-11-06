const http = require("http");
const fs = require("fs");
const PORT = 3000;

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.writeHead(200, { "Content-Type": "text/html" });
    fs.readFile("Page/home.html", "utf8", (err, data) => {
      if (err) throw err;
      //   console.log(data);
      res.write(data);
    });
  } else if (req.url === "/login") {
    res.writeHead(200, { "Content-Type": "text/html" });
    fs.readFile("Page/login.html", "utf8", (err, data) => {
      if (err) throw err;
      //   console.log(data);
      res.write(data);
    });
  } else if (req.url === "/create-file") {
    const data = "<h1>This is new test file created.</h1>";
    res.writeHead(200, { "Content-Type": "text/html" });
    fs.writeFile("Temp/test.html", data, (err) => {
      if (err) throw err;
      res.write("File is created again");
      res.end();
    });
  } else {
    // res.writeHead(404, { "Content-Type": "application/json" });
    res.writeHead(404, { "Content-Type": "text/html" });
    fs.readFile("Page/error.html", "utf8", (err, data) => {
      if (err) throw err;
      res.write(data);
      res.end();
    });
  }
});
console.log(`Server is running on http://localhost:${PORT}`);
server.listen(PORT);
