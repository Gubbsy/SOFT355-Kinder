var express = require("express");
var helloControler = require("../controller/helloWorldControler");

var router = express.Router();

router.get('/', function(req, res) {
  res.json({ message: helloControler.helloWorld()});   
});

module.exports = router;