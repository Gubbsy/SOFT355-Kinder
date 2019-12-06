const catRouter = require("express").Router();
const CatRepository = require("../repository/cat-repository")
const CatController = require("../controller/cat-controller")
const CatModel = require("../model/cat-model")

catRouter.get("/", (req, res) => {
  console.log("Hit cat route")
  const catRepo = new CatRepository(CatModel);
  const catController = new CatController(catRepo);
  catController.getCat(req, res);
})

module.exports = catRouter