let singleQuote = 'single quote string';
let doubleQuote = 'double quote string';

// console.log(singleQuote);

// let char = singleQuote.charAt(5);
// console.log(char);
// let substr = singleQuote.substring(5,10); // [5,10)
// console.log(substr);

// splitting string in to array
let arrstr = singleQuote.split(" ");
console.log(arrstr);

// joining array elements
let joinstr = arrstr.join("-");
console.log(joinstr);