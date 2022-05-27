let osm = require("os");
// arch() returns the architecture of the operating system
console.log(osm.arch());

// plateform() returns the operating system name
console.log(osm.platform());

// release() returns the operating system release
console.log(osm.release());

// totalmem() returns the total amount of system memory in bytes
console.log(osm.totalmem());

// freemem() returns the amount of free system memory in bytes
console.log(osm.freemem());

// homedir() returns the home directory of the current user
console.log(osm.homedir());

// uptime() returns the system uptime in seconds
console.log(osm.uptime());

// loadavg() returns the 1, 5, and 15 minute load averages
console.log(osm.loadavg());

// cpuCount() returns the number of logical cores available to the system
// console.log(osm.cpuCount());

// cpus() returns an array of objects containing information about each logical CPU
console.log(osm.cpus());

// networkInterfaces() returns an object containing network interfaces
console.log(osm.networkInterfaces());

// EOF