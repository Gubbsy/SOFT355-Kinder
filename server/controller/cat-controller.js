class CatController {

  constructor(_catRepository) {
    this.catRepository = _catRepository;
  }
  
  async getCat(req, res) {
    if (!req.body.catId){
      res.status(400).json({"error": "No catId provided"});
    }
    else {
      try {
        const foundCat = await this.catRepository.getCat(req.body);
        if(foundCat){
          res.status(200).json(foundCat);
        }
        else {
          res.status(400).json({"error": "No cat with the catId " + req.body.catId + " found"});
        }
      }
      catch(error){
        res.status(500).json({error: error.message});
        console.error("Error -> " + error.message);
      }
    }
  }
}

module.exports = CatController