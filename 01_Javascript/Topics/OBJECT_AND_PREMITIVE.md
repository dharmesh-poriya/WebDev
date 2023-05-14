# Everything is Object in Javascript

---

- Everything is object in Javascript except for the primitive data types.
- Primitive data types are: `string`, `number`, `boolean`, `null`, `undefined`, `symbol`.
- Everything else is object in Javascript.
- Objects are the core of Javascript.

```js
// in javascript everything is an object
// array is an object
let arr = [1,2,3,4,5];
// console.log(arr);
// console.log(arr.length);
// we can also add method and property in array, that's why we can use array as object
arr.myMethod = function(){
    console.log("myMethod");
}
// arr.myMethod();
arr.myProperty = "myProperty";
// console.log(arr.myProperty);
// console.log(arr);
// looping in array 
// bydefault indexing start from zero and key is array index
// for(let key in arr){
//     console.log(key," : ",arr[key]);
// }


// we can also add rendom indexing in array
arr[99] = "99";
// bydefault value of key 5 to 98 are undefined
// console.log(arr);
// console.log(arr.length);

// function is also an object
function fn(){
    console.log("fn");
}
fn.myMethod = {
    name : "myMethod",
    age : "age",
    address : "address",
    myProperty : "myProperty",
    myMethod : function(){
        console.log("myMethod");
    }
}
console.log(fn);
fn.property = "timepass";
console.log(fn);
fn[2] = 30;
console.log(fn);

```

![reference](./../assets/execution_context/04_object_reference.avif)