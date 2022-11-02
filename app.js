const http = require("http");
const PORT = 4000;

const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "application/json" });
  res.end(
    JSON.stringify({
      data: "Hello World! My name is Samrat Kunal",
    })
  );
});
console.log(`Server is running on http://localhost:${PORT}`);
server.listen(PORT);
