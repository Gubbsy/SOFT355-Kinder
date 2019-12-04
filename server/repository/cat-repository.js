var mongoose = require("mongoose");

var CatRepository = mongoose.model("Cat", {
  catId: String, 
  imageUrl: String,
  width: Number,
  height: Number,
  score: Number
});

  module.exports = CatRepository;

