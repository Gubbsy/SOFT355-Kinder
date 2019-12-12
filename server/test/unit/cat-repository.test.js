const chai = require("chai");

const expect = chai.expect;

const CatRepository = require("../../repository/cat-repository");
const MockCatModel = require("../mocks/cat-model.mock") 

describe("Cat Repository", function(){

  beforeEach(() =>{
    mockCatModel = new MockCatModel()
    catRepo = new CatRepository(mockCatModel);
  });

  describe("find Cat", function() {
    it("should find a cat", async function() {
      findId = "Meow";
      cat = await catRepo.findCat(findId);
      
      expect(cat._id).to.equal("1")
      expect(cat.catId).to.equal(findId)
      expect(cat.imageUrl).to.equal("https://caturl.com")
      expect(cat.height).to.equal(1080)
      expect(cat.width).to.equal(1920)
      expect(cat.score).to.equal(1)
    });
  });

  describe("Get Cats", function() {
    it("should find a cat", async function() {
      cats = await catRepo.getCats(findId);

      expect(cats).to.have.lengthOf(5);
      expect(cats[0]._id).to.equal("1")
      expect(cats[1]._id).to.equal("2")
      expect(cats[2]._id).to.equal("3")
      expect(cats[3]._id).to.equal("4")
      expect(cats[4]._id).to.equal("5")
    });
  });
});
