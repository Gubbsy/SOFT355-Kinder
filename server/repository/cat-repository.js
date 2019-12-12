class CatRepository {
  constructor(_catModel){
    this.cat = _catModel;
  }

  async findCat(body){
    return this.cat.findOne({catId : body.catId});
  }

  async getCats(query) {
    return this.cat.find({},{},query);
  }
}

module.exports = CatRepository;