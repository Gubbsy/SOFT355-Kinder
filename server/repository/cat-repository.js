class CatRepository {
  constructor(_catModel){
    this.cat = _catModel;
  }

  async getCat(id){
    return this.cat.findOne({id});
  }
}

module.exports = CatRepository;