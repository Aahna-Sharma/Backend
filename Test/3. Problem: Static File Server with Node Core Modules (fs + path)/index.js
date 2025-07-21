const http = require("http");
const fs = require("fs");
const path = require("path");

const filePath = path.join(__dirname, "public", "./index.html");

const server = http.createServer((req, res) => {
  fs.readFile(filePath, (err, data) => {
    if (err) {
      return res.end("Server Error");
    }
    res.end(data);
  });
});

server.listen(3000, () => {
  console.log("Server on http://localhost:3000");
});
