const chai = require("chai");
const expect = chai.expect;

const MockCatRepository = require("./../mocks/cat-repository.mock");
const SocketController = require("./../../controller/socket-controller");

const MockIO = require('../mocks/io.mock');
const MockSocket = require('../mocks/socket.mock');

describe("Socket Controller", function(){
  describe("handle intial connection ", function() {
    
    beforeEach(() =>{
      mockCatRepo = new MockCatRepository();
      socketController = new SocketController(mockCatRepo);
    });

    it("should call socket.on once", async function() {
      socket = new MockSocket();
      io = new MockIO();

      await socketController.handleConnection(socket, io);
      expect(socket.getOnCallNo()).to.equal(1);
    });

    it("should call io.emit once", async function() {
      socket = new MockSocket();
      io = new MockIO();

      await socketController.handleConnection(socket, io);
      expect(io.getEmitCallNo()).to.equal(1);
    });
    
  });
});