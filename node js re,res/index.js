console.log("hello world");
// reguest response
let http = require("http"); //node moduls=> http,fs,os
let fs = require("fs");

let server = http.createServer((req, res) => {
  if (req.url == "/") {
    fs.readFile("index.html", (err, html) => {
      res.write(html);
      res.end();
    });
  } else if (req.url == "/urunler") {
    fs.readFile("urunler.html", (err, html) => {
      res.write(html);
      res.end();
    });
  } else {
    fs.readFile("404.html", (err, html) => {
      res.write(html);
      res.end();
    });
  }
});
server.listen(3000, () => {
  console.log("node js 300 portda ishleyir");
});
