const chai = require("chai");
const sinon = require("sinon");

const expect = chai.expect;

const CatRepository = require("../../repository/cat-repository");
const CatModelMock = require("../mocks/cat-model.mock") 


// Mock repository methods and return types
// Mck response
// Mock request

//assert responses sent from controller 

describe("Cat Repository", function(){
  describe("find one", function() {
    it("should find a cat", async function() {

      findId = 1;

      const mockCatModel = new CatModelMock();
      const catRepo = new CatRepository(mockCatModel);
      

      cat = await catRepo.getCat(findId);
      
      expect(cat._id).to.equal(1)
      expect(cat.catId).to.equal("CatId")
      expect(cat.imageUrl).to.equal("https://caturl.com")
      expect(cat.height).to.equal(1080)
      expect(cat.width).to.equal(1920)
      expect(cat.score).to.equal(1)
    })
  })
});
