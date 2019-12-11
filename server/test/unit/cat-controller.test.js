const chai = require("chai");
const sinon = require("sinon");

const expect = chai.expect;

const MockCatRepository = require("./../mocks/cat-repository.mock");
const MockCatRepositoryThrow = require("./../mocks/cat-repository.mock.throw");

const CatController = require("../../controller/cat-controller");

let MockRequest = require("../mocks/request.mock");
let MockResponse = require("../mocks/response.mock");

describe("Cat Controller", function(){
  describe("get cat with catId body", function() {
    let req, res, catController, mockCatRepo

    beforeEach(() =>{
      mockCatRepo = new MockCatRepository();
      catController = new CatController(mockCatRepo);
    });

    it("should set response status to 400 with empty catId body propity", async function() {
      req = new MockRequest({notCatId:"Meow"}, "headers");
      res = new MockResponse();

      await catController.getCat(req, res);
      expect(res.statusCode).to.equal(400);
      expect(res.body).to.have.property("error").equal("No catId provided");
    });

    it("should set response status to 200 with catId body propity", async function() {
      req = new MockRequest({catId:"Meow"}, "headers");
      res = new MockResponse();

      await catController.getCat(req, res);
      expect(res.statusCode).to.equal(200);
      expect(res.body).to.have.property("_id").equal("5sdfsdflKm43");
      expect(res.body).to.have.property("catId").equal("Meow");
      expect(res.body).to.have.property("imageUrl").equal("https://caturl.com");
      expect(res.body).to.have.property("width").equal(1920);
      expect(res.body).to.have.property("height").equal(1080);
      expect(res.body).to.have.property("score").equal(1);
    });

    it("should set response status to 400 and error with no CatId body propity", async function() {
      req = new MockRequest({catId:"Not Meow"}, "headers");
      res = new MockResponse();

      await catController.getCat(req, res);
      expect(res.statusCode).to.equal(400);
      expect(res.body).to.have.property("error").equal("No cat with the catId Not Meow found");
    });
  });

  describe("get cat catch error", function() {
    let req, res, catController, mockCatRepo

    beforeEach(() =>{
      req = new MockRequest({catId:"catId"}, "headers");
      res = new MockResponse();

      mockCatRepo = new MockCatRepositoryThrow();
      catController = new CatController(mockCatRepo);
    });

    it("should catch repository error", async function() {
      await catController.getCat(req, res);

      expect(res.statusCode).to.equal(500);
      expect(res.body).to.have.property("error").equal("Error getting cat with repository");

    });
  });
});