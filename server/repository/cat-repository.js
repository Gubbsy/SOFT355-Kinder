class CatRepository {
  constructor(_catModel){
    this.cat = _catModel;
  }

  async getCat(body){
    return this.cat.findOne({catId : body.catId});
  }
}

module.exports = CatRepository;