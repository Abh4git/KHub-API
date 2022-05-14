//Instructions to execute script :
//mongo localhost:27017 mongodbinit.js

// Current Database name: contentdb
const {convertXlsxTOJSonFile} = require('../mongo-init/xlsxToJsonFile');
const {readFileSync} = require('fs')
db = db.getSiblingDB('contentdb');
insertdata = async() =>{
    try {
        file_location = await convertXlsxTOJSonFile('data.xlsx','data.json');
        data = readFileSync(file_location,'utf8');
        await db.content.insertMany(JSON.parse(data))
    } catch (error) {
        console.log("error in data insert",error);
    }
}


//khub-wg-@12
// db.content.insert ({
//     "_id" : ObjectId(),
//     "title" : "IEEE CS Magazine",
//     "keywords" : "trends",
//     "category": "magazine",
//     "summary": "Contains details of Software engineering trends like devops",
// 	"authors": "Heiko, Jan Bosch",
// 	"credibility": 5,
// 	"link": "https://www.computer.org/csdl/magazine/co/2022/02"
// });

insertdata();