const CatModel = require("../model/cat-model")

class CatRepository {
  constructor(){
    this.cat = CatModel;
  }

  async getCat(id){
    return this.cat.findOne({id});
  }
}

module.exports = CatRepository;