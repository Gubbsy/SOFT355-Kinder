var mongoose = require("mongoose");

var CatModel = mongoose.model("Cat", {
  catId: {type: String, require: true, unique: true}, 
  imageUrl: {type: String, require: true},
  width: {type: Number, require: true},
  height: {type: Number, require: true},
  score: {type: Number, require: true},
  voteCookies:[String]
});

module.exports = CatModel;

