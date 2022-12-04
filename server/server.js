const express = require("express");
const cors = require("cors");
var fs=require("fs");
var net = require('net');

const app = express();

var corsOptions = {
  origin: "http://localhost:3000",
  optionsSuccessStatus: 200
};

app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(express.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

const db = require("./app/models");
db.mongoose
  .connect(db.url, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => {
    console.log("Connected to the database!");
  })
  .catch(err => {
    console.log("Cannot connect to the database!", err);
    process.exit();
  });

// simple route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to CryptoFarm application." });
});

var routePath="./app/routes/";
fs.readdirSync(routePath).forEach(function(file) {
    var route=routePath+file;
    require(route)(app);
});

// set port, listen for requests

var portInUse = function(port, callback) {
  var server = net.createServer(function(socket) {
    socket.write('Echo server\r\n');
    socket.pipe(socket);
  });

  server.on('error', function (e) {
    callback(true);
  });
  server.on('listening', function (e) {
    server.close();
    callback(false);
  });

  server.listen(port, '127.0.0.1');
};

const PORT = process.env.PORT || 30001;
portInUse(PORT, function(returnValue) {
  console.log(`Port ${PORT} is available for use`);
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
  });
});


