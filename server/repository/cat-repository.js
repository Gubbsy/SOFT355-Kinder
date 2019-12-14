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
    return this.cat.updateOne({catId : body.catId}, {score: body.score});
  }

  async addCookie(body, cookie) {
    return this.cat.updateOne({catId : body.catId}, {$addToSet: { voteCookies: cookie }})
  }

}

module.exports = CatRepository;