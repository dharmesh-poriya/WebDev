let path = require("path");

// path.mkdirSync("tempdirectory");
// for(let i=0;i<=10;i++){
//     let dirPathToMake = `tempdirectory\\temp-${i}`;
//     path.mkdirSync(dirPathToMake);
//     path.writeFileSync(`${dirPathToMake}\\readme.md`,`# Readme for temp-${i}`);
// }


// extname() returns the extension of the file
let ext = path.extname(path.join(__dirname,"abc.js"));
console.log("Extension: " + ext);

// basename() returns the file name without extension
let name = path.basename(path.join(__dirname,'E:\\Engineering Journey\\CE_2020_2024\\PepCoding\\WebDev\\02_NodeJs\\03_fileSystemModule.js'));
console.log("Name: " + name);

// dirname() returns the directory name
name = path.basename(__dirname);
console.log("Name: " + name);