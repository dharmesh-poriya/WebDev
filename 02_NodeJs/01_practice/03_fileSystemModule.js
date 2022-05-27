let fs = require("fs");

// readFileSync() returns the contents of the file in binary format
let buffer = fs.readFileSync("01_temp.js");
console.log(buffer.toString());

// create a file
fs.openSync("03_temp.js","w");
// write to the file 
fs.writeFileSync("03_temp.js","console.log('Hello World');");
// append to the file
fs.appendFileSync("03_temp.js","\nconsole.log('Hello Guys!!');");

// mkdireSync() creates a directory
// fs.mkdirSync("03_tempdirectory");

// fs.writeFileSync("03_tempdirectory/temp.js","console.log('Hello World in directory!!');");
// fs.writeFileSync("03_tempdirectory/temp1.js","console.log('1 Hello World in directory!!');");
// fs.writeFileSync("03_tempdirectory/temp2.js","console.log('2 Hello World in directory!!');");

// readdirSync() returns the list of files in the directory
// let dir_content = fs.readdirSync("03_tempdirectory");
// console.log("Directory content: " + dir_content);

// for(let i=0; i<dir_content.length; i++) {
//     console.log("File " + i + ": " + dir_content[i]);

//     // unlinkSync() deletes the file
//     fs.unlinkSync("03_tempdirectory/" + dir_content[i]);
// }

// // remove the directory
// fs.rmdirSync("03_tempdirectory");

// existsSync() returns true if the file exists
let doespathExist = fs.existsSync("03_tempdirectory");
console.log("Does path exist: " + doespathExist);

doespathExist = fs.existsSync("03_temp.js");
console.log("Does path exist: " + doespathExist);

// stateSync() returns the state of the file
let stats = fs.statSync("03_temp.js");
console.log("File size: " + stats.size);

// lstatSync() returns the state of the file
let detailsObj = fs.lstatSync(__dirname + "\\03_fileSystemModule.js");
let ans = detailsObj.isFile();
console.log("Is it a file: " + ans);
ans = detailsObj.isDirectory();
console.log("Is it a directory: " + ans);

