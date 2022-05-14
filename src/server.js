/*********** IMPORTS AREA ************/

const http = require('http');
const cors = require('cors');
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const Int32 = require('mongodb');



const app = express();



console.log('Adding  routes');
// routes
require('./routes/content.routes')(app);






var corsOptions = {

  origin: true
};

app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(bodyParser.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));


//database aspects
const db = require("./models");
const dbConfig = require('./config/db.config');
const Role = db.role;


db.mongoose.connect('mongodb://khub-content-mongodb:27017/contentdb',
{user: "mongoadmin", pass: "secret", authSource: "admin", userNewUrlParser: true, useUnifiedTopology: true})
//   db.mongoose.connect('mongodb://localhost:27017/contentdb',
//    {  userNewUrlParser: true, useUnifiedTopology: true})
       .then(() => console.log("Mongo  connected successfully to contentdb"))
       .catch(err => console.log(err));



// simple route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to KHub-Content Service." });
});




//Making API Port to be loaded from configuration
const urlConfig = require('./config/url.config');
// set port, listen for requests
const PORT = process.env.PORT || urlConfig.PORT;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
  console.log('Routes added');
});






