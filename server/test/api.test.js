const chai = require("chai");
const assert = chai.assert;

const helloControler = require("../controller/helloWorldControler");


suite("Functions test suite", function() {
    test("Test sayHello function", function() {
    result = helloControler.helloWorld();
  
  assert.equal("Hello From kinder!", result, "Wrong message returned");
    })
});