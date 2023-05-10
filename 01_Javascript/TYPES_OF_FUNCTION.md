# Types of Function
## Function Declaration
```js
function add(a,b){
    return a+b;
}
```
## Function Expression
```js
var add = function(a,b){
    return a+b;
}
```

## Named Function Expression
```js
var add = function add(a,b){
    return a+b;
}
```

## Anonymous Function Expression
```js
var add = function(a,b){
    return a+b;
}
```

## Immediately Invoked Function Expression (IIFE)
```js
(function(a,b){
    console.log(a+b);
})(1,2);
```

## Arrow Function
```js
var add = (a,b) => a+b;
```

## Generator Function
```js
function* add(a,b){
    yield a+b;
}
```

## Recursive Function
```js
function add(a,b){
    if(b==0){
        return a;
    }
    return add(a+1,b-1);
}
```

## Higher Order Function
- A function that takes another function as an argument or returns another function as a result is called a higher order function.
- map, filter, reduce, forEach, find, some, every, sort, etc are higher order function.

```js
const arr = [1,2,3,4,5];

// map
// it will perform given operation and return array of result
const result = arr.map((x) => x*x);
console.log(result);

// filter
// it will filter out some elements according to condition, if condition is true then it will add that element in result array otherwise discard it.
const result1 = arr.filter((x) => x%2===0);
console.log(result1);

// reduce
// it will always return single value
const sum = arr.reduce((prevSum,x) => prevSum+x,0) // 0 is initial value of prevSum
console.log(sum);
```

## Pure Function
```js
function add(a,b){
    return a+b;
}
```

## Impure Function
```js
var a = 10;
function add(b){
    return a+b;
}
```

## First Class Function
```js
function add(a,b){
    return a+b;
}
```

