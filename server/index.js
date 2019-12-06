const express = require("express");
var mongoose = require("mongoose");
const app = express();
const bodyParser = require('body-parser');
const routes = require("./routes/router");
require('dotenv').config();


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(routes);
port = process.env.PORT || 3000;
mongoCon = process.env.MONGO_URI;

app.listen(port, function() {
  console.log("Server listening on port " + port);
//   mongoose.connect(mongoCon, {useNewUrlParser: true, useUnifiedTopology: true}).then((test) => {
//     console.log("Connected to DB");
// });
})
