let child_pro = require("child_process");
// require() is used to import the module.
// execSync is used to execute the command and get the output

// console.log("trying to open calculator");
// child_pro.execSync("calc");
// clg("calculator opened");

// console.log("trying to open vs code");
// child_pro.execSync("code");
// clg("vs code opened");

// console.log("trying to start website");
// child_pro.execSync("start chrome https://www.cricbuzz.com/")
// clg("website opened");

let output = child_pro.execSync("node 01_temp.js");
console.log(output.toString());
