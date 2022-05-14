//Instructions to execute script :
//mongo localhost:27017 mongodbinit.js

// Current Database name: contentdb
db = db.getSiblingDB('contentdb');



//khub-wg-@12
db.content.insert ({
    "_id" : ObjectId(),
    "title" : "IEEE CS Magazine",
    "keywords" : "trends",
    "category": "magazine",
    "summary": "Contains details of Software engineering trends like devops",
	"authors": "Heiko, Jan Bosch",
	"credibility": 5,
	"link": "https://www.computer.org/csdl/magazine/co/2022/02"
});
