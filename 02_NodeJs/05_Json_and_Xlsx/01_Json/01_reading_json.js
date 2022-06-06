import fs from 'fs';

let buffer1 = fs.readFileSync('./01_example.json');
let buffer2 = fs.readFileSync('./02_example.json')
console.log(buffer1);

let data1 = JSON.parse(buffer1);
let data2 = JSON.parse(buffer2);
console.log(data1);
console.log(data2);

// adding new entry into data2 array
data2.push(
    {
        "firstName" : "Teddy",
        "lastName" : "Bear",
        "age" : "18",
        "address" : {
            "city" : "New York",
            "state" : "New York",
            "country" : "USA"
        },
        "hobbies" : [
            "TimePass",
            "Nothing",
            "Only Timepass"
        ]
    }
)
console.log(data2);

// writeFileSync can't add array to any file so we need to convert array to string
let str = JSON.stringify(data2);
fs.writeFileSync('./02_example.json',str);
