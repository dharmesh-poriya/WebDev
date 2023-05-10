# var, let and const keywords and their differences

---

## var
#### i.e
```js
// hoisting
console.log("line number 2",var1);
// declaration
var var1;
// initialization
var1 = "Hello";
console.log("line number 7",var1);
// redeclaration
var var1;
console.log("line number 10",var1);
// initialization
var1 = "Hello1";
console.log("line number 13",var1);
```

- var is function scoped
- var is hoisted
- var can be redeclared
- var can be reinitialized

---

## let
- let is block scoped
- let is not hoisted
- let can not be redeclared
- let can be reinitialized

---

## const
- const is block scoped
- const is not hoisted
- const can not be redeclared
- const can not be reinitialized

```js
const PI = 3.141592653589793;
PI = 3.14;      // This will give an error
PI = PI + 10;   // This will also give an error
*/

// JavaScript const variables must be assigned a value when they are declared:
const PI = 3.14159265359;

// When to use JavaScript const?
/*
* As a general rule, always declare a variable with const unless you know that the value will change.
* Use const when you declare:
* A new Array
* A new Object
* A new Function
* A new RegExp
*/

// Constant Objects and Arrays
/*
* The keyword const is a little misleading.
* 
* It does not define a constant value. It defines a constant reference to a value.
* 
* Because of this you can NOT:
* 
* Reassign a constant value
* Reassign a constant array
* Reassign a constant object
* But you CAN:
* 
* Change the elements of constant array
* Change the properties of constant object
*/
```

---

## Hoisting
- Hoisting is a JavaScript mechanism where variables and function declarations are moved to the top of their scope before code execution.
- Inevitably, this means that no matter where functions and variables are declared, they are moved to the top of their scope regardless of whether their scope is global or local.
- JavaScript only hoists declarations, not initializations.
- JavaScript hoists declarations to the top of the current scope.
- JavaScript hoists function declarations first, then variable declarations.
- Function declarations have priority over variable declarations, but not over variable assignment.
- Function declarations will override variable declarations but not variable assignment.

![reference image](./assets/var_let_const_keyword/01_hoisting.gif)

---

## Scope
- Scope is the accessibility of variables, functions, and objects in some particular part of your code during runtime.
- In other words, scope determines the visibility of variables and other resources in areas of your code.
- JavaScript has two scopes: global and local. A variable that is declared outside a function definition is a global variable, and its value is accessible and modifiable throughout your program. A variable that is declared inside a function definition is local. It is created and destroyed every time the function is executed, and it cannot be accessed by any code outside the function.

#### Block Scope:
- Variables declared with the var keyword cannot have block scope. Variables declared inside a block {} can be accessed from outside the block.
- Variables declared with the let keyword can have block scope. Variables declared inside a block {} cannot be accessed from outside the block:

```js

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
```

---
