const http = require("http");
const fs = require("fs");
const url = require("url");

const server = http.createServer((req, res) => {
  const pathName = req.url;

  if (pathName === "/" || pathName === "/home") {
    res.end("<h1>Welcome to the Home Page</h1>");
  } else if (pathName === "/about") {
    res.end("<h1>Welcome to the About Page</h1>");
  } else if (pathName === "/contact") {
    res.end("<h1>Welcome to the Contact Page</h1>");
  } else {
    res.writeHead(404);
    res.end("<h1>404 Not Found</h1>");
  }
});

server.listen(8000, "127.0.1", () => {
  console.log("Server is running on port 3000");
});
