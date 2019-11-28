require('dotenv').config();
var mongoose = require("mongoose");
const fetch = require("node-fetch")

const CatApiURL = process.env.CAT_API_IRL || "https://api.thecatapi.com/v1/images/search"

let schema = require("./model/db-schema")

mongoCon = process.env.MONGO_URI;

mongoose.connect(mongoCon, {useNewUrlParser: true, useUnifiedTopology: true}).then((test) => {
  console.log("Connected to DB");
});

async function AddCat(){
  fetch(CatApiURL)
    .then((resp) => resp.json())
    .then(function(data){
      breedName = "undifined";
      if(data[0].breeds)
          data[0].breeds.forEach((breed) => breedName = breed.name);
      var cat = new schema.Cat({
        id: data.id,
        url: data.url,
        breed: breedName,
        width: data.width,
        height: data.height,
        score: 0
      });
      await cat.save();
    });
    return cat;
  }

for(i = 0; i < 50; i++) {
  addedCat = AddCat();
  console.log("Added cat with id: " + addedCat.id);
}
