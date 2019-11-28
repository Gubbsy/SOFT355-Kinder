const router = require("express").Router();

var helloControler = require("../controller/helloWorldControler");

router.get('/', function(req, res) {
  res.json({ message: helloControler.helloWorld()});   
});


module.exports = router;