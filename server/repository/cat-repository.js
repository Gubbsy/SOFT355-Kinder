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
    console.log(JSON.stringify(body.catId));
    return this.cat.updateOne({catId : body.catId}, {score: body.score});
  }
}

module.exports = CatRepository;