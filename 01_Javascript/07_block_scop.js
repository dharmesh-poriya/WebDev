// Before ES6 (2015), JavaScript had only Global Scope and Function Scope.
// ES6 introduced two important new JavaScript keywords: let and const.
// These two keywords provide Block Scope in JavaScript.
// Variables declared inside a { } block cannot be accessed from outside the block:

let fruits;
console.log(fruits);
fruits = "apple";
console.log(fruits);
{
    let fruits;
    console.log(fruits);
    fruits = "orange";
    console.log(fruits);
    {
        console.log(fruits);
    }
    console.log(fruits);
}
console.log(fruits);

// let variables are block scoped.
// const variables are block scoped.
/*
let fruits1;
console.log(fruits1);
fruits1 = "apple";
console.log(fruits1);
{
    var fruits1; // error
    console.log(fruits1);
}
*/

/*
var fruits2;
console.log(fruits2);
fruits2 = "apple";
console.log(fruits2);
{
    let fruits2;// it will not give error
    console.log(fruits2);
}
*/