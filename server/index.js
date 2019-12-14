const express = require("express");
var mongoose = require("mongoose");
var cors = require('cors')
const app = express();

const cookieParser = require('cookie-parser')
const bodyParser = require('body-parser');
const routes = require("./routes/router");
require('dotenv').config();

var whitelist = ['http://localhost:4200']

var corsOptions = {
  origin: function (origin, callback) {
    if (whitelist.indexOf(origin) !== -1 || !origin) {
      callback(null, true)
    } else {
      callback(new Error('Not allowed by CORS'))
    }
  }, credentials: true
}

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cookieParser());
app.use(cors(corsOptions));

app.use(routes);
port = process.env.PORT || 3000;
mongoCon = process.env.MONGO_URI;

app.listen(port, function() {
  console.log("CORS - enabled. Server listening on port " + port);

  mongoose.connect(mongoCon, {useNewUrlParser: true, useUnifiedTopology: true}).then((test) => {
    console.log("Connected to DB");
  })
  .catch(error => console.log("Error -> " + error));
})
