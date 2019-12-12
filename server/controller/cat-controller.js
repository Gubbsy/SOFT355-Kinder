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
          res.status(204);
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
      
      if(cats.length != 0){
        res.status(200).json(cats);
        return;
      } else {
        res.status(204);
        return;
      }
    } catch (error) {
      res.status(500).json({error: error.message});
      console.error("Error -> " + error.message);
      return;
    }
  }

  async getUnvotedCats(req, res) {
    var time = Date.now();
    var cookie = req.cookies.kinderCookie;
    if (cookie === undefined)
    {
      var randomNumber=Math.random().toString() + time.toString();
      randomNumber=randomNumber.substring(2,randomNumber.length);
      res.cookie('kinderCookie', randomNumber , { maxAge: 365 * 60 * 60 * 1000, httpOnly: true });
    } 
    try{
      const cats = await this.catRepository.getUnvotedCats(cookie);
      if(cats.length != 0) {
        res.status(200).json(cats);
        return;
      } else {
        res.status(204);
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