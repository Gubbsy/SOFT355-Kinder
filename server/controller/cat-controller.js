class CatController {

  constructor(_catRepository) {
    this.catRepository = _catRepository;
  }
  
  async getCat(req, resp) {
    console.log("hit cat controller")

    let cat = this.catRepository.getCat(1);

    //cheeck recieved valid search value.
    // Make find, and interigate the search.

    // if (req.body == null){
    //   resp.status(400);
    //   resp.json({error: "No cat data sent with request"});
    // }
    // else {
    //   resp.status(200);
    //   resp.json(await this.catRepository.findOne(req.body));
    // }
    resp.json({hello: "hello"});
  }
}

module.exports = CatController