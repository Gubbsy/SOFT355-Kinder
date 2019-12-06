require('dotenv').config();
var mongoose = require("mongoose");
const fetch = require("node-fetch")

const CatApiURL = process.env.CAT_API_IRL || "https://api.thecatapi.com/v1/images/search"
let schema = require("./model/db-schema")
mongoCon = process.env.MONGO_URI;

Seed();


const AddCat = () => {
  fetch(CatApiURL)
  .catch(err => console.log(err))
  .then(res => res.json())
    .then(async function(data){
      data = data[0]
      breedName = "undifined";
     
      var cat = new schema.Cat({
        catId: data.id,
        imageUrl: data.url,
        width: data.width,
        height: data.height,
        score: 0
      });
      
      await cat.save((err, createdCat) => {
        if (err) 
          console.log(err);
        else
          console.log("Cat created: " + createdCat)
      });
    });
}

function Seed(){
  mongoose.connect(mongoCon, {useNewUrlParser: true, useUnifiedTopology: true}).then((test) => {
    console.log("Connected to DB");
    
    for(i = 0; i < 50; i++) {
      AddCat();
    }
  });
}


