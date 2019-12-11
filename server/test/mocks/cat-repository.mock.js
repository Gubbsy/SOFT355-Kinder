class MockCatRepository {
  constructor() {}

   async getCat(body) {
    
    if(body.catId == "Meow"){
      return {
        _id: "5sdfsdflKm43",
        catId: "Meow", 
        imageUrl: "https://caturl.com",
        width: 1920,
        height: 1080,
        score: 1
      }
    }
    return
  }
}

module.exports = MockCatRepository