# This keyword :

---

### # What is the this keyword?
- The JavaScript this keyword refers to the object it belongs to.
- It has different values depending on where it is used:
    - In a method, this refers to the owner object.
    - Alone, this refers to the global object.
    - In a function, this refers to the global object.
    - In a function, in strict mode, this is undefined.
    - In an event, this refers to the element that received the event.
    - Methods like call(), and apply() can refer this to any object.

---

### # this keyword in non-strict mode
- In non-strict mode, the value of this will always be a reference to an object.
- Which object it refers to depends on how the function was called (the object that made the call).
- Note: This will always be a reference to an object. In the global execution context (outside of any function), this refers to the global object whether in strict mode or not.

#### ## in nodejs environment

1. globally this refers to the global object
- i.e : 
    ```javascript
    console.log(this); // {}
    ```

2. in a function, this refers to the global object
- i.e : 
    ```javascript
    function myFunction() {
        console.log(this);
    }
    myFunction();
    }
    ```
- output :
    ```output
    Object [global] {
    global: [Circular],
    clearInterval: [Function: clearInterval],
    clearTimeout: [Function: clearTimeout],
    setInterval: [Function: setInterval],
    setTimeout: [Function: setTimeout] {
      [Symbol(nodejs.util.promisify.custom)]: [Function]
    },
    queueMicrotask: [Function: queueMicrotask],
    clearImmediate: [Function: clearImmediate],
    setImmediate: [Function: setImmediate] {
      [Symbol(nodejs.util.promisify.custom)]: [Function]
    }
    ```

3. in a object method, this refers to the owner object (object -> method -> this)
- i.e : 
    ```javascript
    let myObject = {
        prop1 : 'value1',
        myMethod: function() {
            console.log(this);
        }
    }
    myObject.myMethod();
    ```
- output :
    ```output
    { prop1: 'value1', myMethod: [Function: myMethod] }
    ```

4. in a object method and method inside a function, this refers to the global object (object -> method -> function -> this)
- i.e : 
    ```javascript
    let myObject = {
        prop1 : 'value1',
        myMethod: function() {
            function myFunction() {
                console.log(this);
            }
            myFunction();
        }
    }
    myObject.myMethod();
    ```
- output :
    ```output
    Object [global] {
    global: [Circular],
    clearInterval: [Function: clearInterval],
    clearTimeout: [Function: clearTimeout],
    setInterval: [Function: setInterval],
    setTimeout: [Function: setTimeout] {
      [Symbol(nodejs.util.promisify.custom)]: [Function]
    },
    queueMicrotask: [Function: queueMicrotask],
    clearImmediate: [Function: clearImmediate],
    setImmediate: [Function: setImmediate] {
      [Symbol(nodejs.util.promisify.custom)]: [Function]
    }
    ```

### ## in browser environment

1. globally this refers to the window object
- i.e : 
    ```javascript
    console.log(this); // Window {window: Window, self: Window, document: document, name: "", location: Location, …}
    ```

2. in a function, this refers to the window object
- i.e : 
    ```javascript
    function myFunction() {
        console.log(this);
    }
    myFunction();
    ```
- output :
    ```output
    Window {window: Window, self: Window, document: document, name: "", location: Location, …}
    ```

3. in a object method, this refers to the owner object (object -> method -> this)
- i.e : 
    ```javascript
    let myObject = {
        prop1 : 'value1',
        myMethod: function() {
            console.log(this);
        }
    }
    myObject.myMethod();
    ```
- output :
    ```output
    {prop1: "value1", myMethod: ƒ}
    ```

4. in a object method and method inside a function, this refers to the window object (object -> method -> function -> this)
- i.e : 
    ```javascript
    let myObject = {
        prop1 : 'value1',
        myMethod: function() {
            function myFunction() {
                console.log(this);
            }
            myFunction();
        }
    }
    myObject.myMethod();
    ```
- output :
    ```output
    Window {window: Window, self: Window, document: document, name: "", location: Location, …}
    ```


---

### # this keyword in strict mode
- In strict mode, when the call is not a method, this will be undefined, because strict mode does not allow default binding.

#### ## in nodejs environment

1. globally this refers to the global object
- i.e : 
    ```javascript
    'use strict';
    console.log(this); // {}
    ```

2. in a function, this refers to undefined
- i.e : 
    ```javascript
    'use strict';
    function myFunction() {
        console.log(this);
    }
    myFunction();
    ```
- output :
    ```output
    undefined
    ```

3. in a object method, this refers to the owner object (object -> method -> this)
- i.e : 
    ```javascript
    'use strict';
    let myObject = {
        prop1 : 'value1',
        myMethod: function() {
            console.log(this);
        }
    }
    myObject.myMethod();
    ```
- output :
    ```output
    { prop1: 'value1', myMethod: [Function: myMethod] }
    ```

4. in a object method and method inside a function, this refers to undefined (object -> method -> function -> this)
- i.e : 
    ```javascript
    'use strict';
    let myObject = {
        prop1 : 'value1',
        myMethod: function() {
            function myFunction() {
                console.log(this);
            }
            myFunction();
        }
    }
    myObject.myMethod();
    ```
- output :
    ```output
    undefined
    ```

### ## in browser environment

1. globally this refers to the window object
- i.e : 
    ```javascript
    'use strict';
    console.log(this); // Window {window: Window, self: Window, document: document, name: "", location: Location, …}
    ```

2. in a function, this refers to undefined
- i.e : 
    ```javascript
    'use strict';
    function myFunction() {
        console.log(this);
    }
    myFunction();
    ```
- output :
    ```output
    undefined
    ```

3. in a object method, this refers to the owner object (object -> method -> this)
- i.e : 
    ```javascript
    'use strict';
    let myObject = {
        prop1 : 'value1',
        myMethod: function() {
            console.log(this);
        }
    }
    myObject.myMethod();
    ```
- output :
    ```output
    {prop1: "value1", myMethod: ƒ}
    ```

4. in a object method and method inside a function, this refers to undefined (object -> method -> function -> this)
- i.e : 
    ```javascript
    'use strict';
    let myObject = {
        prop1 : 'value1',
        myMethod: function() {
            function myFunction() {
                console.log(this);
            }
            myFunction();
        }
    }
    myObject.myMethod();
    ```
- output :
    ```output
    undefined
    ```

---

### # this keyword in arrow function
- In arrow functions, this retains the value of the enclosing lexical context's this. In global code, it will be set to the global object.
- Arrow functions do not have their own this. The value of this inside an arrow function remains the same throughout the lifecycle of the function and is always bound to the value of this in the closest non-arrow parent function.
- Arrow functions are not suited as methods, and they cannot be used as constructors.
- Arrow functions do not have their own arguments object. Thus, in this example, arguments is simply a reference to the arguments of the enclosing scope:

---

### # in short :
- In non-strict mode, the value of this will always be a reference to an object.
- In strict mode, when the call is not a method, this will be undefined, because strict mode does not allow default binding.
- In arrow functions, this retains the value of the enclosing lexical context's this. In global code, it will be set to the global object.


