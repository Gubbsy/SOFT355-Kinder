const express = require("express");
const mongoose = require("mongoose");
const cors = require('cors')

const app = require('express')();
const server = require('http').Server(app);
const io = require('socket.io')(server);

const SocketController = require('./controller/socket-controller');
const CatRepository = require("./repository/cat-repository")
const CatModel = require("./model/cat-model")

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

server.listen(port, function() {
  console.log("CORS - enabled. Server listening on port " + port);

  mongoose.connect(mongoCon, {useNewUrlParser: true, useUnifiedTopology: true}).then((test) => {
    console.log("Connected to DB");
  })
  .catch(error => console.log("Error -> " + error));
})

io.on('connection', function (socket) {
  const catRepo = new CatRepository(CatModel);
  const socketController = new SocketController(catRepo);
  socketController.handleConnection(socket, io)
});

module.exports = app;

