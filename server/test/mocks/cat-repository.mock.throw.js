class MockCatRepository {
  constructor() {}

   async getCat({id}) {
    throw new Error("Error getting cat with repository")
  }
}

module.exports = MockCatRepository