class MockCatRepository {
  constructor() {}

  async getCats(){
    return [];
  }

  async getUnvotedCats(){
    return [];
  }
}

module.exports = MockCatRepository