#!/usr/bin/env node
// for initalizing command line arguments globally (hashbang line is for running in terminal)

fs = require('fs');

// taking input
let inputArr = process.argv.slice(2);
console.log(inputArr);

// diffrentiating filename and options
let filesArr = [];
let optionsArr = [];
for(let i=0;i<inputArr.length;i++){
    let element = inputArr[i];
    if(element[0] == '-'){
        optionsArr.push(element);
    }else{
        filesArr.push(element);
    }
}
// console.log(filesArr);
// console.log(optionsArr);

// if -b and -n both are present then error
if(optionsArr.includes('-b') && optionsArr.includes('-n')){
    console.log("enter either -b or -n not both");
    process.exit(0);
}

// checking fileexist or not
for(let i=0;i<filesArr.length;i++){
    let file = filesArr[i];
    let doesExist = fs.existsSync(file);
    if(!doesExist){
        console.log(`${file} does not exist`);
        process.exit(0);
    }
}

// reading file content
let content = ""
for(let i=0;i<filesArr.length;i++){
    let filePath = filesArr[i];
    let fileContent = fs.readFileSync(filePath,'utf8');
    content += fileContent + "\r\n";
}
console.log(content);
console.log("------------------");
// removing multiple new lines (-s)
if(optionsArr.includes('-s')){
    let contentArr = content.split("\r\n");
    let newContent = "";
    for(let i=0;i<contentArr.length;i++){
        let element = contentArr[i];
        if(element != ""){
            newContent += element + "\r\n";
            if(i!=contentArr.length-1){
                newContent += "\r\n";
            }
        }
    }   
    // console.log(newContent);
}

// put numbers in all lines (-n)
if(optionsArr.includes('-n')){
    let contentArr = content.split("\r\n");
    for(let i=0;i<contentArr.length;i++){
        let element = contentArr[i];
        contentArr[i] = `${i+1} ${element}`;
    }
    console.log(contentArr.join("\r\n"));
}

// put numbers in non empty lines (-b)
if(optionsArr.includes('-b')){
    let contentArr = content.split("\r\n");
    let count = 1;
    for(let i=0;i<contentArr.length;i++){
        let element = contentArr[i];
        if(element != ""){
            contentArr[i] = `${count} ${element}`;
            count++;
        }
    }
    console.log(contentArr.join("\r\n"));
}