class MockCatModel {
  constructor() {}

  findOne({id}) {
    return {
      _id: 1,
      catId: "CatId", 
      imageUrl: "https://caturl.com",
      width: 1920,
      height: 1080,
      score: 1
    }
  }
}

module.exports = MockCatModel