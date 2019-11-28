var http = require("http");
var port = 9000;

function sayHello() {
  return "Hello World from Node";
}

var server = http.createServer(function(request, response) {
  response.end(sayHello(request));
});

server.listen(port, function() {
  console.log("Server listening on port " + port);
})
