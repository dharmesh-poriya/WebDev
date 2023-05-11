# Call, Apply and Bind in Javascript

---

## # Call

#### ## What is call method?
- Call is a method of Function prototype.
- Call method is used to call a function with a given `this` value and arguments provided individually.
- Call method accepts an argument as `this` value and rest of the arguments are passed as individual arguments to the function.

#### ## Why do we need call method? and where do we use it?
- Call method is used to invoke a function with a given `this` value and arguments provided individually.
- Call is used when we want to invoke a function with a different `this` value.

#### ## How to use call method?

- Syntax:
    ```javascript
    function.call(thisArg, arg1, arg2, ...)
    ```

- Example:
    ```javascript
    function greet() {
        console.log(`Hello ${this.name}`);
    }
    let person1 = {
        name: 'Dharmesh'
    }
    let person2 = {
        name: 'Hardik'
    }
    greet.call(person1); // Hello Dharmesh
    greet.call(person2); // Hello Hardik
    ```
    - In above example, we have a function `greet` which is printing `Hello` with the name of the person. We have two objects `person1` and `person2` with name property. We are calling `greet` function with `call` method and passing `person1` and `person2` as `this` value. So, `this` value inside `greet` function will be `person1` and `person2` respectively.

- Example:
    ```javascript
    function greet(message) {
        console.log(`${message} ${this.name}`);
    }
    let person1 = {
        name: 'Dharmesh'
    }
    let person2 = {
        name: 'Hardik'
    }
    greet.call(person1, 'Hello'); // Hello Dharmesh
    greet.call(person2, 'Hi'); // Hi Hardik
    ```
    - In above example, we have a function `greet` which is printing `Hello` with the name of the person. We have two objects `person1` and `person2` with name property. We are calling `greet` function with `call` method and passing `person1` and `person2` as `this` value and `Hello` and `Hi` as arguments. So, `this` value inside `greet` function will be `person1` and `person2` respectively and `message` will be `Hello` and `Hi` respectively.

- Example:
    ```javascript
    function greet(message1, message2) {
        console.log(`${message1} ${this.name} ${message2}`);
    }
    let person1 = {
        name: 'Dharmesh'
    }
    let person2 = {
        name: 'Hardik'
    }
    greet.call(person1, 'Hello', 'How are you?'); // Hello Dharmesh How are you?
    greet.call(person2, 'Hi', 'How are you?'); // Hi Hardik How are you?
    ```
    - In above example, we have a function `greet` which is printing `Hello` with the name of the person. We have two objects `person1` and `person2` with name property. We are calling `greet` function with `call` method and passing `person1` and `person2` as `this` value and `Hello` and `Hi` as arguments. So, `this` value inside `greet` function will be `person1` and `person2` respectively and `message1` and `message2` will be `Hello` and `Hi` respectively.

--- 

## # Apply

#### ## What is apply method?
- Apply is a method of Function prototype.
- Apply method is used to call a function with a given `this` value and arguments provided as an array. 
- Apply method accepts an argument as `this` value and rest of the arguments are passed as an array to the function.

#### ## Why do we need apply method? and where do we use it?
- Apply method is used to invoke a function with a given `this` value and arguments provided as an array.
- Apply is used when we want to invoke a function with a different `this` value.

#### ## How to use apply method?

- Syntax:
    ```javascript
    function.apply(thisArg, [argsArray])
    ```

- Example:
    ```javascript
    function greet() {
        console.log(`Hello ${this.name}`);
    }
    let person1 = {
        name: 'Dharmesh'
    }
    let person2 = {
        name: 'Hardik'
    }
    greet.apply(person1); // Hello Dharmesh
    greet.apply(person2); // Hello Hardik
    ```
    - In above example, we have a function `greet` which is printing `Hello` with the name of the person. We have two objects `person1` and `person2` with name property. We are calling `greet` function with `apply` method and passing `person1` and `person2` as `this` value. So, `this` value inside `greet` function will be `person1` and `person2` respectively.

- Example:
    ```javascript
    function greet(message) {
        console.log(`${message} ${this.name}`);
    }
    let person1 = {
        name: 'Dharmesh'
    }
    let person2 = {
        name: 'Hardik'
    }
    greet.apply(person1, ['Hello']); // Hello Dharmesh
    greet.apply(person2, ['Hi']); // Hi Hardik
    ```

- Example:
    ```javascript
    function greet(message1, message2) {
        console.log(`${message1} ${this.name} ${message2}`);
    }
    let person1 = {
        name: 'Dharmesh'
    }
    let person2 = {
        name: 'Hardik'
    }
    greet.apply(person1, ['Hello', 'How are you?']); // Hello Dharmesh How are you?
    greet.apply(person2, ['Hi', 'How are you?']); // Hi Hardik How are you?
    ```

---

## # Bind

#### ## What is bind method?
- Bind is a method of Function prototype.
- Bind method is used to create a new function with a given `this` value and arguments provided individually.
- Bind method accepts an argument as `this` value and rest of the arguments are passed as individual arguments to the function.

#### ## Why do we need bind method? and where do we use it?
- Bind method is used to create a new function with a given `this` value and arguments provided individually.
- Bind is used when we want to create a new function with a different `this` value.

#### ## How to use bind method?

- Syntax:
    ```javascript
    function.bind(thisArg, arg1, arg2, ...)
    ```

- Example:
    ```javascript
    function greet() {
        console.log(`Hello ${this.name}`);
    }
    let person1 = {
        name: 'Dharmesh'
    }
    let person2 = {
        name: 'Hardik'
    }
    let greetPerson1 = greet.bind(person1);
    let greetPerson2 = greet.bind(person2);
    greetPerson1(); // Hello Dharmesh
    greetPerson2(); // Hello Hardik
    ```

- Example:
    ```javascript
    function greet(message) {
        console.log(`${message} ${this.name}`);
    }
    let person1 = {
        name: 'Dharmesh'
    }
    let person2 = {
        name: 'Hardik'
    }
    let greetPerson1 = greet.bind(person1, 'Hello');
    let greetPerson2 = greet.bind(person2, 'Hi');
    greetPerson1(); // Hello Dharmesh
    greetPerson2(); // Hi Hardik
    ```

- Example:
    ```javascript
    function greet(message1, message2) {
        console.log(`${message1} ${this.name} ${message2}`);
    }
    let person1 = {
        name: 'Dharmesh'
    }
    let person2 = {
        name: 'Hardik'
    }
    let greetPerson1 = greet.bind(person1, 'Hello', 'How are you?');
    let greetPerson2 = greet.bind(person2, 'Hi', 'How are you?');
    greetPerson1(); // Hello Dharmesh How are you?
    greetPerson2(); // Hi Hardik How are you?
    ```

---

## # Call vs Apply vs Bind

#### ## What is the difference between call, apply and bind?
- Call and Apply are used to invoke a function with a given `this` value and arguments provided individually and as an array respectively.
- Bind is used to create a new function with a given `this` value and arguments provided individually.

#### ## When to use call, apply and bind?
- Call and Apply are used when we want to invoke a function with a different `this` value.
- Bind is used when we want to create a new function with a different `this` value.

#### ## How to decide when to use call, apply and bind?
- If we want to invoke a function with a different `this` value and we know the arguments then we should use call method.
- If we want to invoke a function with a different `this` value and we don't know the arguments then we should use apply method.
- If we want to create a new function with a different `this` value then we should use bind method.

---

## # References

- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/call
- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/apply
- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/bind
