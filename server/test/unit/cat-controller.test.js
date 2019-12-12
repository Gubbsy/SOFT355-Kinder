const chai = require("chai");
const sinon = require("sinon");

const expect = chai.expect;

const MockCatRepository = require("./../mocks/cat-repository.mock");
const MockCatRepositoryThrow = require("./../mocks/cat-repository.mock.throw");
const MockCatRepositoryNullReturn = require("./../mocks/cat-repository.mock.null");

const CatController = require("../../controller/cat-controller");

let MockRequest = require("../mocks/request.mock");
let MockResponse = require("../mocks/response.mock");

describe("Cat Controller", function(){
  //Find Cat Test
  describe("find cat with catId body", function() {
    let req, res, catController, mockCatRepo

    beforeEach(() =>{
      mockCatRepo = new MockCatRepository();
      catController = new CatController(mockCatRepo);
    });

    it("should set response status to 400 with empty catId body propity", async function() {
      req = new MockRequest({notCatId:"Meow"}, "headers");
      res = new MockResponse();

      await catController.findCat(req, res);
      expect(res.statusCode).to.equal(400);
      expect(res.body).to.have.property("error").equal("No catId provided");
    });

    it("should set response status to 200 with catId body propity", async function() {
      req = new MockRequest({catId:"Meow"}, "headers");
      res = new MockResponse();

      await catController.findCat(req, res);
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

      await catController.findCat(req, res);
      expect(res.statusCode).to.equal(400);
      expect(res.body).to.have.property("error").equal("No cat with the catId Not Meow found");
    });
  });

  describe("Find Cat catch error", function() {
    let req, res, catController, mockCatRepo

    beforeEach(() =>{
      req = new MockRequest({catId:"catId"}, "headers");
      res = new MockResponse();

      mockCatRepo = new MockCatRepositoryThrow();
      catController = new CatController(mockCatRepo);
    });

    it("should catch repository error", async function() {
      await catController.findCat(req, res);

      expect(res.statusCode).to.equal(500);
      expect(res.body).to.have.property("error").equal("Error finding cat");

    });
  });
  
  //Get Cats test
  describe("Get Cats", function() {
    let req, res, catController, mockCatRepo

    beforeEach(() =>{
      mockCatRepo = new MockCatRepository();
      catController = new CatController(mockCatRepo);
    });

    it("should set response status to 400 with query pageNo not set", async function() {
      query = {}
      query.size = 1
      req = new MockRequest({},{}, query );
      res = new MockResponse();

      await catController.getCats(req, res);
      expect(res.statusCode).to.equal(400);
      expect(res.body).to.have.property("error").equal("Page number or size must be set to an integer greater than 0");
    });

    it("should set response status to 400 with query pageNo set to non-ineger", async function() {
      query = {}
      query.pageNo = "Meow";
      query.size = 1;
      req = new MockRequest({},{}, query );
      res = new MockResponse();

      await catController.getCats(req, res);
      expect(res.statusCode).to.equal(400);
      expect(res.body).to.have.property("error").equal("Page number or size must be set to an integer greater than 0");
    });


    it("should set response status to 400 with size not set", async function() {
      query = {}
      query.pageNo = 1;
      req = new MockRequest({},{}, query );
      res = new MockResponse();

      await catController.getCats(req, res);
      expect(res.statusCode).to.equal(400);
      expect(res.body).to.have.property("error").equal("Page number or size must be set to an integer greater than 0");
    });

    it("should set response status to 400 with query size set to non-ineger", async function() {
      query = {}
      query.pageNo = 1;
      query.size = "Meow";
      req = new MockRequest({},{}, query );
      res = new MockResponse();

      await catController.getCats(req, res);
      expect(res.statusCode).to.equal(400);
      expect(res.body).to.have.property("error").equal("Page number or size must be set to an integer greater than 0");
    });


    it("should set response status to 200 with with cats returned in body with valid query", async function() {
      query = {}
      query.pageNo = 1;
      query.size = 5;
      req = new MockRequest({},{}, query);
      res = new MockResponse();

      cats = await catController.getCats(req, res);

      expect(res.statusCode).to.equal(200);
      expect(res.body).to.have.length(5);
      expect(res.body[0]).to.have.property("_id").equal("1");
      expect(res.body[1]).to.have.property("_id").equal("2");
      expect(res.body[2]).to.have.property("_id").equal("3");
      expect(res.body[3]).to.have.property("_id").equal("4");
      expect(res.body[4]).to.have.property("_id").equal("5");
    });
  });
  
  describe("Get Cats catch error", function() {
    let req, res, catController, mockCatRepo

    query = {}
    query.pageNo = 1;
    query.size = 5;

    beforeEach(() =>{
      req = new MockRequest({} , "headers", query);
      res = new MockResponse();

      mockCatRepo = new MockCatRepositoryThrow();
      catController = new CatController(mockCatRepo);
    });

    it("should catch repository error, set resp status to 500 and return error in json", async function() {
      await catController.getCats(req, res);

      expect(res.statusCode).to.equal(500);
      expect(res.body).to.have.property("error").equal("Error getting all cats");

    });
  });

  describe("Get Cats no cats returned", function() {
    let req, res, catController, mockCatRepo

    query = {}
    query.pageNo = 1;
    query.size = 5;

    beforeEach(() =>{
      req = new MockRequest({} , "headers", query);
      res = new MockResponse();

      mockCatRepo = new MockCatRepositoryNullReturn();
      catController = new CatController(mockCatRepo);
    });

    it("should set resp status to 500 and return error in json for no cats returned", async function() {
      await catController.getCats(req, res);

      expect(res.statusCode).to.equal(500);
      expect(res.body).to.have.property("error").equal("No cats found in DB");
    });
  });
});