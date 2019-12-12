var mongoose = require("mongoose");

var CatModel = mongoose.model("Cat", {
  catId: String, 
  imageUrl: String,
  width: Number,
  height: Number,
  score: Number,
  voteCookies:[String]
});

module.exports = CatModel;

