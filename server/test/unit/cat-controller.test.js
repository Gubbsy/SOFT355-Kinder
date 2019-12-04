const chai = require("chai");
const assert = chai.assert;
const sinon =  require("sinon");

const CatController = require("../../controller/cat-controller");
const CatRepository = require("../../repository/cat-repository")


// Mock repository methods and return types
// Mck response
// Mock request

//assert responses sent from controller 




suite("Cat Controller test suite", function() {
  // let catRepository;
  // let req;
  // let res;

  let catRepository;
  let catController;
  let mockCatRepo;
  
  let req;
  let res;

  suiteSetup("Mocking cat repository"), function(){
    //Mock cat repository
    // catRepository = {
    //   findOne: function(body) {
    //     return {
    //       _id: 1,
    //       catId: "1", 
    //       imageUrl: "http://caturl.com",
    //       width: 1080,
    //       height: 1920,
    //       score: 1
    //     }
    //   }
    // }

    // req = {
    //   body: {id: 1}
    // }

    // res = {
    //    json: function(){

    //    }
    // }
  }

  setup(() => {
    catRepository = new CatRepository();
    mockCatRepo = sinon.mock(catRepository)
    catController = new CatController(catRepository);
  
  })


  test("FindOne called", function() {
    returned = catController.getCats(req, req)
    //assert.equal("Hello From kinder!", result, "Wrong message returned");
  })
});