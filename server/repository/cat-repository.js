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

  async getUnvotedCats(cookie) {
    
    return this.cat.find({voteCookies: {$ne: cookie}});
  }

  async voteCat(body) {
    this.cat.updateOne({_id: body._id}, {score: body.score});
  }
}

module.exports = CatRepository;