var express = require("express");
var app = express();
var bodyParser = require('body-parser');
var routes = require("./routes/router");
require('dotenv').config();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(routes);
port = process.env.PORT || 3000;

app.listen(port, function() {
  console.log("Server listening on port " + port);
})
