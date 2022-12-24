// const fs = require("fs");
/////////////////////////////////////////////////////////////////
// const book = { title: "Ego is the Enemy", author: "Ryan Holiday" };

// const bookJSON = JSON.stringify(book);
// fs.writeFileSync("1-json.json", bookJSON);

/////////////////////////////////////////////////////////////////
// const dataBuffer = fs.readFileSync("1-json.json");
// const dataJSON = dataBuffer.toString();
// const data = JSON.parse(dataJSON);
// console.log(data.title);

/* 


//read the file in getting binary 
const dataBuffer = fs.readFileSync("1-json.json");
// console.log(dataBuffer);
// console.log(dataBuffer.toString());
//get the JSON from file system, convert the data into standard string
const dataJSON = dataBuffer.toString();
//parse the JSON data into an object
const data = JSON.parse(dataJSON);
console.log(data.title); */

//Work with JSON and the file system
// 1. load and parse the JSON Data, data
// 2. change the name and age property using your info
// 3. Stringify the changed object and overwrite the original data
// 4. test your work by viewing data in the JSON file

const fs = require("fs");
const dataBuffer = fs.readFileSync("1-json.json");
const dataJSON = dataBuffer.toString();
const user = JSON.parse(dataJSON);

user.name = "YUIMORII";
user.planet = "MOON";
user.age = 3000;

const userJSON = JSON.stringify(user);
//overwrite the file
fs.writeFileSync("1-json.json", userJSON);
