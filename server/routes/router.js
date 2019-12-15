const router = require("express").Router();
const catRouter = require("./cats-router");

var helloControler = require("../controller/helloWorldControler");

router.get('/', function(req, res) {
  res.json({ message: helloControler.helloWorld()});   
});

router.use("/cat", catRouter)


module.exports = router;