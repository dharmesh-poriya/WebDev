# Promise in Javascript

---

## # What is a Promise?
- A promise is an object that may produce a single value some time in the future: either a resolved value, or a reason that it's not resolved (e.g., a network error occurred). A promise may be in one of 3 possible states: fulfilled, rejected, or pending. Promise users can attach callbacks to handle the fulfilled value or the reason for rejection.
- A promise is a proxy for a value not necessarily known when the promise is created. It allows you to associate handlers with an asynchronous action's eventual success value or failure reason. This lets asynchronous methods return values like synchronous methods: instead of immediately returning the final value, the asynchronous method returns a promise to supply the value at some point in the future.
- A Promise is in one of these states:
    - pending: initial state, neither fulfilled nor rejected.
    - fulfilled: meaning that the operation was completed successfully.
    - rejected: meaning that the operation failed.

---

## # Why do we need a Promise?
- Promises are used to handle asynchronous operations in JavaScript. They are easy to manage when dealing with multiple asynchronous operations where callbacks can create callback hell leading to unmanageable code.
- Prior to promises events and callback functions were used but they had limited functionalities and created unmanageable code.

---

## # How do we create a Promise?
- A Promise is created using the Promise constructor. A promise constructor takes a function called the executor function as an argument which specifies the async operation. The executor function generally starts an asynchronous operation and dictates how the promise should be settled.
- The executor function has two function parameters which are the resolve() and reject() functions. The resolve() function is called when the asynchronous operation is successful and returns the results of the async operation as a value. The reject() function is called when the async operation fails and returns the reason for failure, which is typically an error object.
- A Promise object supports two properties: state and result.
    - The state of a promise object can be one of the following:
        - pending: Initial state, before the Promise succeeds or fails.
        - fulfilled: Completed successfully.
        - rejected: Failed.
    - The result of a promise object can be one of the following:
        - undefined: Promise is pending.
        - value: Promise is fulfilled.
        - error: Promise is rejected.

---

## # How do we use a Promise?
- A promise is used by calling the then() method of a promise object. It takes two optional callback functions as arguments, onFulfilled and onRejected. The onFulfilled callback function is called when the promise is fulfilled. The onRejected callback function is called when the promise is rejected.
- The then() method returns a promise. It takes two optional callback functions as arguments, onFulfilled and onRejected. The onFulfilled callback function is called when the promise is fulfilled. The onRejected callback function is called when the promise is rejected.

- i.e (Simple promise):
    ```javascript
    import fs from 'fs';
    let myPromise = new Promise(function (myResolve, myReject) {
        let exists = fs.existsSync('main.js');
        if (exists) {
            myResolve('File exists');
        } else {
            myReject('File does not exist');
        }
    });


    myPromise.then(
        function (value) { console.log(`promise resolved: `, value); },
        function (error) { console.log(`promise rejected: ${error}`); }
    );

    myPromise.then((msg) => {
        console.log(`promise resolved: ${msg}`);
    }).catch((err) => {
        console.log(`promise rejected: ${err}`);
    });
    ```

---

## # Promise.all()
- The Promise.all() method takes an iterable of promises as an input, and returns a single Promise that resolves to an array of the results of the input promises.
- This returned promise will resolve when all of the input's promises have resolved, or if the input iterable contains no promises. It rejects immediately upon any of the input promises rejecting or non-promises throwing an error, and will reject with this first rejection message / error.
- This method can be useful for aggregating results of multiple promises together.
- If you pass in an empty iterable, the returned promise will be forever pending.
- **If any of the passed-in promises reject, Promise.all asynchronously rejects with the value of the promise that rejected, whether or not the other promises have resolved.**

- i.e (array of promises):
    ```javascript
    const promise1 = Promise.resolve(3);
    const promise2 = 42;
    const promise3 = new Promise((resolve, reject) => {
    setTimeout(resolve, 100, 'foo');
    }); 

    Promise.all([promise1, promise2, promise3]).then((values) => {
    console.log(values);
    }).catch((err) => {
        console.log(err);
    });
    // expected output: Array [3, 42, "foo"]
    ```
---

## # Promise.race()
- it returns a promise that fulfills or rejects as soon as one of the promises in an iterable fulfills or rejects, with the value or reason from that promise.
- in short, whichever promise has been resolved or rejected first, the result of that promise will be returned.
- If the iterable passed is empty, the promise returned will be forever pending.

- i.e:
    ```javascript
    const promise1 = new Promise((resolve, reject) => {
        resolve('promise1 resolved');
    }); 

    const promise2 = new Promise((resolve, reject) => {
        resolve('promise2 resolved');
    }); 

    const promise3 = new Promise((resolve, reject) => {
        setTimeout(resolve, 100, 'promise3 resolved');
    }); 

    Promise.race([promise1, promise2, promise3]).then((values) => {
    console.log(values);
    }).catch((err) => {
        console.log(err);
    });
    ```

---

## # Promise.allSettled()
- The Promise.allSettled() method returns a promise that resolves after all of the given promises have either fulfilled or rejected, with an array of objects that each describes the outcome of each promise.
- It is typically used when you have multiple asynchronous tasks that are not dependent on one another to complete successfully, or you'd always like to know the result of each promise.
- it accepts an iterable of promises. It returns a promise that is fulfilled with an array of promise state snapshots, but only after all the original promises have settled, i.e. become either fulfilled or rejected.
- The snapshots have two properties:
    - status - either "fulfilled" or "rejected"
    - value or reason - fulfilled value or rejection reason, respectively.

- i.e:
    ```javascript
    const promise1 = new Promise((resolve, reject) => {
        resolve('promise1 resolved');
    }); 

    const promise2 = new Promise((resolve, reject) => {
        reject('promise2 rejected');
    }); 

    const promise3 = new Promise((resolve, reject) => {
        setTimeout(resolve, 100, 'promise3 resolved');
    }); 

    Promise.allSettled([promise1,promise2,promise3]).then((values) => {
        console.log(values);
    }).catch((err) => {
        console.log(err);
    });
    ```

---

## # Promise.finally()
- The Promise.prototype.finally() method returns a Promise. When the promise is settled, i.e either fulfilled or rejected, the specified callback function is executed. This provides a way for code to be run whether the promise was fulfilled successfully or rejected once the Promise has been dealt with.
- This lets you avoid duplicating code in both the promise's then() and catch() handlers.
- The finally() method is very similar to calling .then(onFinally, onFinally) however there are couple of differences:
    - When creating a function inline, you can pass it once, instead of being forced to either declare it twice, or create a variable for it
    - A finally callback will not receive any argument, since there's no reliable means of determining if the promise was fulfilled or rejected. This use case is for precisely when you do not care about the rejection reason, or the fulfillment value, and so there's no need to provide it.
    - Unlike Promise.resolve(2).then(() => {}, () => {}) (which will be resolved with undefined), Promise.resolve(2).finally(() => {}) will be resolved with 2.
- it's useful for cleaning up any resources allocated by the promise.
- it's useful for knowing when either success or failure has occurred.


- i.e:
    ```javascript
    let loader = true;
    function test(a,b) {
        let sum = a+b;

        if(0 === sum%2){
            return new Promise((resolve, reject) => {
                resolve('sum is even');
            });
        }

        return new Promise((resolve, reject) => {
            reject('sum is odd');
        });
    }
    console.log(`before promise call loader: ${loader}`);
    test(2,3).then((msg) => {
        console.log(`promise resolved: ${msg}`);
    }).catch((err) => {
        console.log(`promise rejected: ${err}`);
    }).finally(() => {
        loader = false;
        console.log(`after promise call loader: ${loader}`);
    });
    ```
    Output:
    ```
    before promise call loader: true
    promise rejected: sum is odd
    after promise call loader: false
    ```

---

## # Parallel execution of promises
- Promise.all() is used to execute multiple promises in parallel and wait until all promises fulfill.
- i.e: 
    ```javascript
    import fs from 'fs/promises';

    // callback functions
    function cb1(data){
        console.log(data + "");
    }

    function cb2(data){
        console.log(data + "");
    }

    function cb3(data){
        console.log(data + "");
    }
    let f1read = fs.readFile('./f1.txt');
    let f2read = fs.readFile('./f2.txt');
    let f3read = fs.readFile('./f3.txt');

    f1read.then(cb1).catch((err) => console.log('Error: ' + err));
    f2read.then(cb2).catch((err) => console.log('Error: ' + err));
    f3read.then(cb3).catch((err) => console.log('Error: ' + err));
    ```
    Output:
    ```
    // random output (because of async nature)
    Hello from f2.txt
    Hello from f1.txt
    Hello from f3.txt
    ```

---

## # Sequential execution of promises
- Promise chaining is used to execute multiple promises in sequential order.

- i.e:
    ```javascript
    import fs from 'fs/promises';

    // callback functions
    function cb1(data){
        console.log(data + "");
        let f2read = fs.readFile('./f2.txt');
        return f2read;
    }

    function cb2(data){
        console.log(data + "");
        let f3read = fs.readFile('./f3.txt');
        return f3read;
    }

    function cb3(data){
        console.log(data + "");
    }
    let f1read = fs.readFile('./f1.txt');
    let f2read = fs.readFile('./f2.txt');
    let f3read = fs.readFile('./f3.txt');

    f1read.then(cb1).then(cb2).then(cb3).catch((err) => console.log('Error: ' + err));
    ```
    Output:
    ```
    Hello from f1.txt
    Hello from f2.txt
    Hello from f3.txt
    ```

---


