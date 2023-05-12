# Objects

---

## # How to create an object in Javascript
- there are three ways to create an object in Javascript
    - using object literal
    - using constructor function and new keyword
    - using Object.create() method

### ## Using object literal
- object literal is a comma separated list of name-value pairs wrapped in curly braces
- the name part is a string, followed by a colon, followed by the value
- the value can be any Javascript value, including array literal, function literal, and object literal
- the simplest way to create an empty object is using object literal
- the following code creates an empty object
```javascript
var emptyObject = {};
```

- the following code creates an object with three properties
    ```javascript
    var person = {
        firstName: "John",
        lastName: "Doe",
        age: 50
    };
    ```

- the following code creates an object with three properties and one method
    ```javascript
    var person = {
        firstName: "John",
        lastName: "Doe",
        age: 50,
        fullName: function() {
            return this.firstName + " " + this.lastName;
        }
    };
    ```

### ## Using constructor function and new keyword
- the following code creates an empty object
    ```javascript
    var emptyObject = new Object();
    ```

- the following code creates an object with three properties
    ```javascript
    var person = new Object();
    person.firstName = "John";
    person.lastName = "Doe";
    person.age = 50;
    ```

- the following code creates an object with three properties and one method
    ```javascript
    function Student(firstName,lastName,rollNo){
        this.FirstName = firstName;
        this.LastName = lastName;
        this.RollNo = rollNo;
        
        this.greet = function(){
            return `Hello ${this.FirstName}!!`;
        }
    }

    const s1 = new Student('Dharmesh','Poriya',007);
    const s2 = new Student('John','Doe',120);

    console.log(s1); // Student { FirstName: 'Dharmesh', LastName: 'Poriya', RollNo: 7, greet: [Function] }
    console.log(s2); // Student { FirstName: 'John', LastName: 'Doe', RollNo: 120, greet: [Function] }
    console.log(s1.greet()); // Hello Dharmesh!!
    console.log(s2.greet()); // Hello John!!

    ```

### ## Using Object.create() method
- the following code creates an empty object
    ```javascript
    var emptyObject = Object.create(null);
    ```

- the following code creates an object with three properties
    ```javascript
    var person = Object.create(null);
    person.firstName = "John";
    person.lastName = "Doe";
    person.age = 50;
    ```

- the following code creates an object with three properties and one method
    ```javascript
    var person = Object.create(null);
    person.firstName = "John";

    person.lastName = "Doe";
    person.age = 50;
    person.fullName = function() {
        return this.firstName + " " + this.lastName;
    };
    ```

## # How to access properties of an object in Javascript
- there are two ways to access properties of an object in Javascript
    - using dot notation
    - using bracket notation

### ## Using dot notation
- the following code accesses the firstName property of the person object using dot notation
    ```javascript
    var person = {
        firstName: "John",
        lastName: "Doe",
        age: 50
    };
    console.log(person.firstName); // John
    ```

### ## Using bracket notation
- the following code accesses the firstName property of the person object using bracket notation
    ```javascript
    var person = {
        firstName: "John",
        lastName: "Doe",
        age: 50
    };
    console.log(person["firstName"]); // John
    ```