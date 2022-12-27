# The Complete Node.js Developer Course(3rd Edition) 

## Section 01: Welcome
**[⬆ back to top](#table-of-contents)**

## Section 2: Installing and Exploring Node.js
**[⬆ back to top](#table-of-contents)**

## Section 3: Node.js Module System (Notes App)

### Importing Node.js Core Modules

```javascript
const fs = require('fs')

fs.writeFileSync('notes.txt', 'My name is Yuimorii.')
fs.appendFileSync('notes.txt', ' I live in Canada.')
```

```console
node app.js
```

### File **system** Modules

- fs is an important API for manipulating files, reading them, writing them, copying them, deleting them, etc.!
- Both asynchronous and synchronous methods are supported by the fs module

> The last argument of an asynchronous method is a callback function. The arguments passed to the callback function depend on the specific method, but the first argument to the callback function is reserved for exceptions. If the operation completes successfully, the first argument will be null or undefined.
> When using synchronous methods, any exceptions will be thrown immediately. Exceptions can be handled using try/catch, or by letting the exception bubble up.

**[⬆ back to top](#table-of-contents)**

### Import Your Own Files

[Introduction to CommonJS](https://flaviocopes.com/commonjs/)
- Node applications are composed of modules, using the CommonJS module specification.
- Each file is a module, with its own scope. The variables, functions, and classes defined inside a file are private and not visible to other files.

```javascript
const getNotes = () => 'Your notes...'

module.exports = getNotes 
```
### module.exports vs exports = {}

- module.exports is initially an empty object {}
- exports is a reference to module.exports
  (In the above example, the exports pointer has been reassigned to a new object.)
- require() returns module.exports instead of exports
  (in the above example module.exports is not given any value)

[Extend reading: ：Modules in JavaScript – CommonJS and ESmodules Explained](https://www.freecodecamp.org/news/modules-in-javascript/)

```javascript
const getNotes = require('./notes.js')
const msg = getNotes()
```

**[⬆ back to top](#table-of-contents)**

### Importing npm Modules

```console
npm init -y
npm i validator
```

```javascript
const validator = require('validator')
console.log(validator.isURL('https://mead.io/')) 
```

**[⬆ back to top](#table-of-contents)**

### Printing in Color

```console
npm i chalk
```

```javascript
const chalk = require('chalk')
const greenMsg = chalk.green.inverse.bold('Success!')
```

**[⬆ back to top](#table-of-contents)**

### Global npm Modules and nodemon

```console
npm i -g nodemon
nodemon app.js
```

**[⬆ back to top](#table-of-contents)**

## Section 4: File System and Command Line Args (Notes App)

### Getting Input from Users 👇
- The process object is a global variable that provides information about the current Node.js process, and controls the current Node.js process. Because it is a global variable, there is no need to use require().
> The process.argv property returns an array containing the command-line arguments used to start the Node.js process.

```javascript
const command = process.argv[2]

if (command === 'add') {
  console.log('Adding note!')
} else if (command === 'remove') {
  console.log('Removing note!')
}
```

```console
node app.js add
```

**[⬆ back to top](#table-of-contents)**

### Argument Parsing with Yargs 👇

> The purpose is to set up yargs to handle the commands we need to execute, such as adding, deleting, reading and listing comments.

> We first need a command name an optional description, and a handler function, that at the moment we go to just to log to the console a test string. 
> ```javascript
> handler: function(argv) {      
>   console.log('Add note', argv)}
> ```

> The builder properties, which the value is an object {}
>```javascript
>builder: {
>      title:{
>           describe: "Note title"
>            }
>}
>```

> Inside the builder our first option is “title” which has another object as value with the describe property inside. Now in the handler function we need to pass an argument, which will call argv:
> ```javascript
> handler: function(argv) {
>   console.log('Add note', argv)
> }
> ```




```javascript
const yargs = require('yargs')

// Create add command
yargs.command({
  command: 'add',
  describe: 'Add a new note',
  builder: {
    title: {
      describe: 'Note title',
      demandOption: true,
      type: 'string'
    },
    body: {
      describe: 'Note body',
      demandOption: true,
      type: 'string'
    }
  },
  handler: function (argv) {
    console.log('Title: ' + argv.title)
    console.log('Body: ' + argv.body)
  }
})

// Create remove command
yargs.command({
  command: 'remove',
  describe: 'Remove a note',
  handler: function () {
      console.log('Removing the note')
  }
})

// Create list command
yargs.command({
  command: 'list',
  describe: 'List your notes',
  handler: function () {
      console.log('Listing out all notes')
  }
})

// Create read command
yargs.command({
  command: 'read',
  describe: 'Read a note',
  handler: function () {
      console.log('Reading a note')
  }
})

yargs.parse()
```

```javascript
const yargs = require('./yargs')
console.log(yargs.argv)
yargs.parse()
```


```console
node app.js --help
```

```console
node app.js add
node app.js remove
node app.js list
node app.js read
node app.js add --title="My Note" --body="Interesting Lesson"
```

**[⬆ back to top](#table-of-contents)**

### Storing Data with JSON 👇

```javascript
const book = { title: "Ego is the Enemy", author: "Ryan Holiday" };
//convert file into JSON 
const bookJSON = JSON.stringify(book);
fs.writeFileSync("1-json.json", bookJSON);
```

```javascript
const dataBuffer = fs.readFileSync("1-json.json");
const dataJSON = dataBuffer.toString();
const data = JSON.parse(dataJSON);
console.log(data.title);
```

> Two way to deal with JSON files

```javascript
//bookJSON takes in an ovejct or array, return JSON string
const bookJSON = JSON.stringify(book);
console.log(bookJSON);

//take JSON string,return JSON object
const paeseData = JSON.parse(bookJSON);
//take author actually value
console.log(parseData.author);
```


```javascript
const fs = require(`fs`)
const book = { 
		title: "Ego is the Enemy", 
		author: "Ryan Holiday" 
};
const bookJSON = JSON.stringify(book);
//create new json file
fs.writeFileSync("1-json.json", userJSON);
```
> 1-json.json
```
{"name":"YUIMORII","planet":"MOON","age":3000}
```

```javascript
const fs = require("fs");
//read the file in getting binary 
const dataBuffer = fs.readFileSync("1-json.json");
//get the JSON from file system, convert the data into standard string
const dataJSON = dataBuffer.toString();
//parse the JSON data into an object
const data = JSON.parse(dataJSON);
//get the properities of the file
console.log(data.title);
```

>Work with JSON and the file system
> 1. load and parse the JSON Data, 
> 2. change the name and age property using your info
>  3. Stringify the changed object and overwrite the original data
> 4. test your work by viewing data in the JSON file

```javascript

const fs = require("fs");
const dataBuffer = fs.readFileSync("1-json.json");
const dataJSON = dataBuffer.toString();
const data = JSON.parse(dataJSON); 
 
user.name = "YUIMORII";
user.planet = "MOON";
user.age = 3000;

const userJSON = JSON.stringify(user);
fs.writeFileSync("1-json.json", userJSON);
```

### Adding a Note
> notes.js
```javascript

const fs = require('fs');
const getNotes = () => 'Your notes...';

//get the note saved to data store
const addNote = (title, body) => {
  const notes = loadNotes();
  //const duplicateNotes = notes.filter(note => note.title === title);
	const dulicateNotes = notes.filter(function()=>{
 			return note.title === title
	})
	
  if (duplicateNotes.length === 0) {
    notes.push({
        title: title,
        body: body,
    });
    saveNotes(notes);
    console.log('New note added!');
  } else {
    console.log('Note title taken!');
  }
};

const saveNotes = notes => {
  const dataJSON = JSON.stringify(notes, false, 2);
  //writing into file
  fs.writeFileSync('notes.json', dataJSON);
};

//reusable function: load the existing notes, parse them and add something new onto the array, and save them back to the file system
const loadNotes = () => {
  try {
    const dataBuffer = fs.readFileSync("notes.json");
    const dataJSON = dataBuffer.toString();
    return JSON.parse(dataJSON);
    //return require('./notes.json');
  } catch (e) {
    return [];
  }
};
//exports two objects with each properities
module.exports = {
  getNotes: getNotes,
  addNote: addNote
};
```

> app.js
```javascript
const yargs = require("yargs");
const notes = require("./notes.js");

//create add command 
yargs.command({
	command:"add",
	describe:"Add a new note",
	builder: {
   title: {
      describe: "Note title",
      demandOption: true,
      type: "string",
    },
    body: {
      describe: "Note body",
      demandOption: true,
      type: "string",
    },
  },
	handler: function (argv) {
    notes.addNote(argv.title, argv.body);
  },
});
// Create remove command
yargs.command({
  command: "remove",
  describe: "Remove a note",
  handler: function () {
    console.log("Removing the note");
  },
});

// Create list command
yargs.command({
  command: "list",
  describe: "List your notes",
  handler: function () {
    console.log("Listing out all notes");
  },
});

// Create read command
yargs.command({
  command: "read",
  describe: "Read a note",
  handler: function () {
    console.log("Reading a note");
  },
});

console.log(yargs.argv);
yargs.parse();
```

### Removing Notes

> Challenge: Setup command option and function
> 1. setup the remove command to take a required  "--title" option 
> 2. Create and export a removeNote function from notes.js
> 3. Call removeNote in remove command handler
> 4. Have removeNote log the title of the note to be removed
> 5. Test your work using : nodeapp.js remove --title="some title"
>

```javascript
// app.js
const yargs = require('yargs')
const notes = require('./notes.js')
...
// Create remove command
yargs.command({
  command: "remove",
  describe: "Remove a note",
  builder:{
      describe: "Note title",
      demandOption: true,
      type: "string",
  	
  }
  handler: function () {
    console.log("Removing the note");
  },
});
```

> Wire up removeNote
> 1. Load existing nores
> 2. use array filter mehtod to remove the matching note(if any)
> 3. save the newly created array
> 4. test your work with a title that exists and a title that doesn`t exist

```javascript
//notes.js
const chalk = require('chalk');

const removeNote = (title) => {
  const notes = loadNotes();
  const noteToKeep = notes.filter(function (note) {
    return note.title !== title;
  });
  if (notes.length > notesToKeep.length) {
    console.log(chalk.green.inverse("Note removed!"));
    saveNotes(notesToKeep);
  } else {
    console.log(chalk.red.inverse("No note found!"));
  }
};

module.exports = {
  getNotes: getNotes,
  addNote: addNote,
  removeNote: removeNote,
};

```

**[⬆ back to top](#table-of-contents)**

### ES6 Aside: Arrow Functions

```javascript
const event = {
  name: 'Birthday Party',
  guestList: ['Andrew', 'Jen', 'Mike'],
  printGuestList() {
    console.log('Guest list for ' + this.name)
    this.guestList.forEach((guest) => {
      console.log(guest + ' is attending ' + this.name)
    })
  }
}
```

```javascript
// Goal: Create method to get incomplete tasks

// 1. Define getTasksToDo method
// 2. Use filter to to return just the incompleted tasks (arrow function)
// 3. Test your work by running the script

const tasks = {
  tasks: [{
    text: 'Grocery shopping',
    completed: true
  }, {
    text: 'Clean yard',
    completed: false
  }, {
    text: 'Film course',
    completed: false
  }],
  getTasksToDo() {
    return this.tasks.filter(task => task.completed === false)
  }
}
tasks.getTasksToDo()
```

**[⬆ back to top](#table-of-contents)**





