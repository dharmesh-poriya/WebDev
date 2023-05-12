# Set Timeout and Set Interval

---

## Set Timeout
- The setTimeout() method calls a function or evaluates an expression after a specified number of milliseconds.
- The setTimeout() method returns an ID which can be used to remove the timer with the clearTimeout() method.

### Syntax
```javascript
setTimeout(function, milliseconds, param1, param2, ...)
```

### Example
```javascript
function myFunction(param1, param2) {
  console.log(param1 + " " + param2);
}
setTimeout(myFunction, 3000, "Hello", "World!"); // Hello World!
```

---

## Set Interval
- The setInterval() method calls a function or evaluates an expression at specified intervals (in milliseconds).
- The setInterval() method will continue calling the function until clearInterval() is called, or the window is closed.
- The ID value returned by setInterval() is used as the parameter for the clearInterval() method.

### Syntax
```javascript
setInterval(function, milliseconds, param1, param2, ...)
```

- i.e (simple interval)
    ```javascript
    function myFunction(param1, param2) {
    console.log(param1 + " " + param2);
    }
    setInterval(myFunction, 3000, "Hello", "World!"); // Hello World! (every 3 seconds)
    ```

- i.e (clear interval)
    ```javascript
    let counter = 0;
    let intervalID;
    function myFunction(param1, param2) {
        counter ++;
        console.log(`interval id: ${intervalID}, ${param1} ${param2}`);
        
        if(counter >= 5){
            clearInterval(intervalID);
        }
    }
    intervalID = setInterval(myFunction, 1000, "Hello", "Dharmesh!"); // Hello Dharmesh! (every 1 second)
    ```
    Output:
    ```
    interval id: 1, Hello Dharmesh!
    interval id: 1, Hello Dharmesh!
    interval id: 1, Hello Dharmesh!
    interval id: 1, Hello Dharmesh!
    interval id: 1, Hello Dharmesh!
    ```
    - Here, the interval id is same for all the 5 calls.
    - The interval id is used to clear the interval.

---


