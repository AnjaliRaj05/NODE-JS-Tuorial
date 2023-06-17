
var http = require("http");
const express = require("express");
const app = express();
const port = 3000;

app.get("/hello-world", function (request, response) {
  console.log(request);
  response.send("Hello world from express");
});

app.listen(port, function () {
  console.log("Server started on port" + port);
});