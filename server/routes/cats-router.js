const catRouter = require("express").Router();
const CatRepository = require("../repository/cat-repository")
const CatController = require("../controller/cat-controller")

const catController = new CatController(CatRepository);


catRouter.get("/", (req, res) => {
  console.log("Hit cat route")
  catController.getCats(req, res);
})

module.exports = catRouter