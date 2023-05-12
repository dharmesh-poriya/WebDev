# Currying in Javascript

---

## # What is currying?
- Currying is a technique of evaluating function with multiple arguments, into sequence of functions with single argument.
- Currying is a process of breaking down a function into series of functions that each take a single argument.
- Currying is a process of taking a function with multiple arguments and turning it into a sequence of functions each with only a single argument.

## # Why do we need currying?
- Currying is used to reduce the number of arguments required for a function.
- Currying is used to create a higher order function.
- Currying is used to create a function with partial application.

## # How to use currying?
- Example (using bind method):
    ```javascript
    function multiply(a, b) {
        return a * b;
    }
    let multiplyByTwo = multiply.bind(this, 2);
    console.log(multiplyByTwo(5)); // 10
    console.log(multiplyByTwo(10)); // 20
    ```

- Example (using closure):
    ```javascript
    function multiply(a, b) {
        return a * b;
    }
    function currying(fn, ...args) {
        return function(...args2) {
            return fn.apply(this, args.concat(args2));
        }
    }
    let multiplyByTwo = currying(multiply, 2);
    console.log(multiplyByTwo(5)); // 10
    console.log(multiplyByTwo(10)); // 20
    ```


