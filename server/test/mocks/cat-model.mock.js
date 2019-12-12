class MockCatModel {
  constructor() {}

  findOne(id) {
    return {
      _id: "1",
      catId: "Meow", 
      imageUrl: "https://caturl.com",
      width: 1920,
      height: 1080,
      score: 1
    }
  }

  find(query) {
    return [
    {
      _id: "1",
      catId: "Meow-1", 
      imageUrl: "https://caturl-2.com",
      width: 1920,
      height: 1080,
      score: 3
    },
    {
      _id: "2",
      catId: "Meow-2", 
      imageUrl: "https://caturl-2.com",
      width: 480,
      height: 480,
      score: 2
    },
    {
      _id: "3",
      catId: "Meow-3", 
      imageUrl: "https://caturl-3.com",
      width: 720,
      height: 1240,
      score: 5
    },
    {
      _id: "4",
      catId: "Meow-4", 
      imageUrl: "https://caturl-4.com",
      width: 1020,
      height: 720,
      score: 6
    },
    {
      _id: "5",
      catId: "Meow-5", 
      imageUrl: "https://caturl-5.com",
      width: 920,
      height: 640,
      score: 0
    }]
  }
}

module.exports = MockCatModel