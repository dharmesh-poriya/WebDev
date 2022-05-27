#!/usr/bin/env node
// for initalizing command line arguments globally (hashbang line is for running in terminal)

// process.argv is an array of strings containing the command line arguments.
let inputArr = process.argv.slice(2);
// console.log(inputArr);
let fs = require('fs');
let path = require('path');
// node main.js tree "directory path"
// node main.js organize "directory path"
// node main.js help

let command = inputArr[0];
let dirPath = inputArr[1];

// requiring all functions
let treeObj = require('./commands/tree');
let organizeObj = require('./commands/organize');
let helpObj = require('./commands/help');

types = {
    media: ["mp4", "mkv"],
    music: ["mp3", "wav", "flac"],
    image: ["jpg", "jpeg", "png", "gif"],
    archives: ['zip', '7z', 'rar', 'tar', 'gz', 'ar', 'iso', "xz"],
    documents: ['docx', 'doc', 'pdf', 'xlsx', 'xls', 'odt', 'ods', 'odp', 'odg', 'odf', 'txt', 'ps', 'tex'],
    app: ['exe', 'dmg', 'pkg', "deb"]
}

switch (command) {
    case "tree":
        // console.log("tree");
        treeObj.treeKey(dirPath);
        break;
    case "organize":
        // console.log("organize");
        organizeObj.organizeKey(dirPath);
        break;
    case "help":
        // console.log("help");
        helpObj.helpKey();
        break;
    default:
        console.log("Invalid command");
        break;
}

