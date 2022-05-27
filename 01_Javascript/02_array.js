let arr = [1,2,3,4,5,6,7,8,9,10];
console.log(arr);

// // add element to the end of array
// arr.push(11);
// console.log(arr);

// // add element to the beginning of array
// arr.unshift(0);
// console.log(arr);

// // remove element from the end of array
// arr.shift();
// console.log(arr);

// // remove element from the beginning of array
// arr.pop();
// console.log(arr);

// taking element from 2 to 4 from array and adding them to new array
let partOfArr = arr.slice(2,5);
console.log(partOfArr);
console.log(arr);

// remove 5 elements from index 2
let partOfArr1 = arr.splice(2,5);
console.log(partOfArr1);
console.log(arr);