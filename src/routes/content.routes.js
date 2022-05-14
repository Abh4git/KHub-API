const controller = require("../controllers/content.controller");
const cors = require ('cors');
const bodyParser = require('body-parser');
// create application/json parser
var jsonParser = bodyParser.json()

module.exports = function(app) {
  app.use(function(req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });

  
  var corsOptions = {
 
    origin: true
  };
  app.get("/api/content/", cors(corsOptions), jsonParser, controller.getAllContent);
  app.get("/api/content/:title", cors(corsOptions), jsonParser, controller.searchContent);
};