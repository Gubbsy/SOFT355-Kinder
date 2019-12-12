class CatController {

  constructor(_catRepository) {
    this.catRepository = _catRepository;
  }
  
  async findCat(req, res) {
    if (!req.body.catId){
      res.status(400).json({"error": "No catId provided"});
    }
    else {
      try {
        const foundCat = await this.catRepository.findCat(req.body);
        if(foundCat){
          res.status(200).json(foundCat);
          return;
        }
        else {
          res.status(400).json({error: "No cat with the catId " + req.body.catId + " found"});
          return;
        }
      } catch(error){
        res.status(500).json({error: error.message});
        console.error("Error -> " + error.message);
        return;
      }
    }
  }

  async getCats(req, res) {
    
    let pageNo = Number(req.query.pageNo);
    let size = Number(req.query.size);

    if (!pageNo || pageNo <=0 || !size || size <= 0 ){
      res.status(400).json({error: "Page number or size must be set to an integer greater than 0"});
      return;
    }
    
    const query = {
      skip: size * (pageNo -1),
      limit: size
    }

    try{
      const cats = await this.catRepository.getCats(query);
      if(cats){
        res.status(200).json(cats);
        return;
      } else {
        res.status(500).json({"error": "No cats found in DB"});
        return;
      }
    } catch (error) {
      res.status(500).json({error: error.message});
      console.error("Error -> " + error.message);
      return;
    }
  }
}

module.exports = CatController