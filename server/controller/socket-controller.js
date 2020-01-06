class SocketController {
  constructor(_catRepository) {
    this.catRepository = _catRepository;
  }
  
  async handleConnection(socket, io) {
    let topCats = await this.catRepository.getTopCats();
    
    socket.on("catVoted", async cat => {
      topCats = await this.catRepository.getTopCats();
      io.emit("topCats", topCats);
    });
    io.emit("topCats", topCats);
  }
}

module.exports = SocketController


