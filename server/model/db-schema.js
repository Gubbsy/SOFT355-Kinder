var mongoose = require("mongoose");

var Cat = mongoose.model("Cat", {
  catId: String, 
  imageUrl: String,
  width: Number,
  height: Number,
  score: Number});

  module.exports.Cat = Cat;

