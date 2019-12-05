const chai = require("chai");
const sinon = require("sinon");

const expect = chai.expect;

const CatRepository = require("../../repository/cat-repository");
const CatController = require("../../controller/cat-controller");

describe("Cat Controller", function(){
  describe("get cat", function() {
    let status, json, res, catController, catRepository

    

    beforeEach(() => {
      status = sinon.stub();
      json = sinon.spy();
      res = { json, status };
      status.returns(res);

      catRepository = new CatRepository();
      catController = new CatController(catRepository)

      console.log("cat repo: " + typeof(catRepository))
      console.log("cat repo: " + typeof(catRepository))
      //sinon.stub(CatRepository, 'findCat').resolves();
    });

    it("should not find a cat when no ID is prvided", async function() {
      const req = {body: {}};
      
      //sinon.stub(CatRepository, "getCat").resolves()
     
      //expect(stub.calledOnce).to.be.true;
      
    })
  })
});