const chai = require("chai");
const sinon = require("sinon");

const expect = chai.expect;

const CatRepository = require("../../repository/cat-repository");
const CatModel = require("../../model/cat-model") 


// Mock repository methods and return types
// Mck response
// Mock request

//assert responses sent from controller 

describe("Cat Repository", function(){
  describe("find one", function() {
    it("should find a cat", async function() {
      findId = 1;

      const stubValue = {
        _id: findId,
        catId: "123",
        width: 1920,
        height: 1080,
        score: 1
      };

      const stub = sinon.stub(CatModel, "findOne").returns(stubValue);

      const catRepository = new CatRepository();
      const cat = await catRepository.getCat(findId);

      expect(stub.calledOnce).to.be.true;
      expect(cat._id).to.equal(stubValue._id)
      expect(cat.catId).to.equal(stubValue.catId)
      expect(cat.width).to.equal(stubValue.width)
      expect(cat.height).to.equal(stubValue.height)
      expect(cat.score).to.equal(stubValue.score)
    })
  })
});
