var mongoose = require("mongoose");

var Cat = mongoose.model("Cat", {
  id: String, 
  imageUrl: String,
  breed: String,
  width: Number,
  height: Number,
  score: Number});

  module.exports.Cat = Cat;

