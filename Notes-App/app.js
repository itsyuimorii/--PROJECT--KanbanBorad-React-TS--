/* const chalk = require("chalk");
const getNotes = require("./notes.js");
const yargs = require("yargs");

const command = process.argv[2];
//argv stands for argument vector

// console.log(process.argv);

if (command === "add") {
  console.log("Adding note!");
} else if (command === "remove") {
  console.log("Removing note!");
}
 */

const chalk = require("chalk");
const getNotes = require("./notes.js");
const yargs = require("yargs");

//Customize yargs version
yargs.version("1.1.0");

//Create add command
yargs.command({
  command: "Add",
  describe: "Add a new note",
  handler: function () {
    console.log("Adding a new note");
  },
});

//add,remove, read, list
console.log(yargs.argv);
