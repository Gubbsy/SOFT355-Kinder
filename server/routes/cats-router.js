const catRouter = require("express").Router();
const CatRepository = require("../repository/cat-repository")
const CatController = require("../controller/cat-controller")
const CatModel = require("../model/cat-model")

catRouter.get("/findCat", (req, res) => {
  const catRepo = new CatRepository(CatModel);
  const catController = new CatController(catRepo);
  catController.findCat(req, res);
});

catRouter.get("/getCats", (req, res) => {
  const catRepo = new CatRepository(CatModel);
  const catController = new CatController(catRepo);
  catController.getCats(req, res);
});

module.exports = catRouter