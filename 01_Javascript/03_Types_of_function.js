// Types of function :-

//1. Normal function
/*
function sayHello(){
    console.log("Hello");
}
sayHello();
*/
// we can also pass the arguments to the function
// we can also return the value from the function
// ------------------------------------------------------
// function are first class citizens
// function are treated as a variable
// 2. Function Expression
/*
let funContainer = function sayHello1(){
    console.log("Hello","I am a function expression");
};
funContainer();
*/
// without any function name it's called anonymous function
/*
let funContainer1 = function(){
    console.log("Hello","I am a function expression");
    console.log("Hello","I am also an anonymous function");
}
funContainer1();
*/
// ------------------------------------------------------
// 3. IIFE -> Immediately Invoked Function Expression
/*
(function sayHello2(){
    console.log("Hello","I am a automatically invoked function expression");
})();
*/
// ------------------------------------------------------
// 4. Arrow Function
/*
let sayHello3 = () => {
    console.log("Hello","I am a arrow function");
}
sayHello3();
*/
// ------------------------------------------------------
// 5. First Class Citizens
// function are treated asavariable
// 1. assignment->fn expression
// variable can be passed asaparameter
// 2. function can be passed asaparameter
// function sayHello4(param){
//     console.log("hello",param);
//     param();
//     return"sttrfbj";
// }
// // address
// function smaller(){
//     console.log("Helloiam smaller");
// }I
// // sayHello([1,2,3,4]);
// let rVal=sayHello4(smaller);
// console.log(rVal);

// closure
function outer(){
    console.log("Iam outer returning inner");
    return function inner(){
        console.log("Iam inner");
    }
}
let rVal=outer();
console.log("Rval",rVal);|