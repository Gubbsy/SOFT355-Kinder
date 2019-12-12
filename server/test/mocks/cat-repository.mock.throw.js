class MockCatRepository {
  constructor() {}

  async findCat({id}) {
    throw new Error("Error finding cat")
  }

  async getCats({id}) {
    throw new Error("Error getting all cats")
  }
}

module.exports = MockCatRepository