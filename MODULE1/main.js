const fs = require("fs");
const http = require("http");
const url = require("url");

const server = http.createServer((req, res) => {
  const pathName = req.url;

  if (pathName === "/" || pathName === "/home") {
    res.end("<h1>Welcome to the Home Page</h1>");
  } else if (pathName === "/about") {
    res.end("<h1>Welcome to the About Page</h1>");
  } else if (pathName === "/contact") {
    res.end("<h1>Welcome to the Contact Page</h1>");
  } else if (pathName === "/api" ) {
    fs.readFile(`${__dirname}/product.json`, "utf8", (err, data) => {
      if (err) {
        res.writeHead(500, { "Content-Type": "application/json" });
        res.end(JSON.stringify({ message: "Error reading file" }));
        return;
      }
      res.writeHead(200, { "Content-Type": "application/json" });
      res.end(data);
    });
  }else {
    res.writeHead(404);
    res.end("<h1>404 Not Found !!!</h1>");
  }
});

server.listen(2000, "127.0.0.1", () => {
  console.log("Server is running on port 2000");
});
