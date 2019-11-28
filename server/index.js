var express = require("express");
var app = express();

var helloControler = require("./controller/helloWorldControler");

port = 9000;

app.get("/", function(request, response) {
  response.send(helloControler.helloWorld());
});

app.listen(port, function() {
  console.log("Server listening on port " + port);
})
