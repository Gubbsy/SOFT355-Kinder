var express = require("express");
var app = express();
var bodyParser = require('body-parser');
var routes = require("./routes/router")

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(routes);
port = 9000;

app.listen(port, function() {
  console.log("Server listening on port " + port);
})
