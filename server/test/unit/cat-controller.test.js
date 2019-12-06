const chai = require("chai");
const sinon = require("sinon");

const expect = chai.expect;

const CatRepository = require("../mocks/cat-repository.mock");
const CatController = require("../../controller/cat-controller");

let Request = require("../mocks/request.mock");
let Response = require("../mocks/response.mock");

describe("Cat Controller", function(){
  describe("get cat", function() {
    it("should return hello", function() {
      req = new Request({id: 1}, "headers");
      res = new Response();

      catRepo = new CatRepository();
      catController = new CatController(catRepo);

      catController.getCat(req, res)

      expect(res.body).to.have.property("hello","hello")
    })
  })
});