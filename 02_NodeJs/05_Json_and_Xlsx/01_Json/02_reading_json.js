const data = require('./02_example.json');
const fs = require('fs');
console.log(data);
// adding new entry into data2 array
data.push(
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
console.log(data);

// writeFileSync can't add array to any file so we need to convert array to string
let str = JSON.stringify(data);
fs.writeFileSync('./02_example.json',str);
