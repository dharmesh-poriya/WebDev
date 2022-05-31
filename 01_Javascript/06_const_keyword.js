// The const keyword was introduced in ES6 (2015).
// Variables defined with const cannot be Redeclared.
// Variables defined with const cannot be Reassigned.
// Variables defined with const have Block Scope.

// Cannot be Reassigned
/*
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