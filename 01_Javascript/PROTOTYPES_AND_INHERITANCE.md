# Prototypes and Prototypical Inheritance

---

## Prototypes

- Every object has a prototype
- Prototype is an object itself
- All objects inherit their properties and methods from their prototype
- When you create an object, you can specify its prototype
- When you create an object using an object literal, its prototype is `Object.prototype`
- When you create an object using a constructor function, its prototype is `ConstructorFunctionName.prototype`
- When you create an object using `Object.create()`, its prototype is the object passed as an argument to `Object.create()`

### Example

```javascript
    // Object literal
    var person = {
        firstName: "John",
        lastName: "Doe",
        age: 50,
        fullName: function() {
            return this.firstName + " " + this.lastName;
        }
    };

    console.log(person.__proto__); // Object {}
    console.log(person.__proto__ === Object.prototype); // true
    console.log(person.__proto__.__proto__); // null

    // Constructor function
    function Student(firstName,lastName,rollNo){
        this.FirstName = firstName;
        this.LastName = lastName;
        this.RollNo = rollNo;
        
        this.greet = function(){
            return `Hello ${this.FirstName}!!`;
        }
    }

    const s1 = new Student('Dharmesh','Poriya',007);

    console.log(s1.__proto__); // Student {}
    console.log(s1.__proto__ === Student.prototype); // true
    console.log(s1.__proto__.__proto__); // Object {}

    // Object.create()
    const person = {
        isHuman: false,
        printIntroduction: function() {
            console.log(`My name is ${this.name}. Am I human? ${this.isHuman}`);
        }
    };

    const me = Object.create(person);

    console.log(me.__proto__); // Object {}
    console.log(me.__proto__ === person); // true
    console.log(me.__proto__.__proto__); // null
```

---

## Prototypical Inheritance
- Inheritance is a mechanism in which one object acquires all the properties and behaviors of a parent object
- Inheritance allows us to reuse existing code
- Inheritance is a concept in OOPs
- Inheritance is implemented in Javascript using prototypes
- In Javascript, every object has a prototype

### Example :
```javascript
var person1 = {
    firstName: "John",
    lastName: "Doe",
    age: 50,
    fullName: function() {
        return this.firstName + " " + this.lastName;
    }
};
var person2 = {
    firstName: "Mary",
    lastName: "Doe",
};
console.log(person2.__proto__)
person2.__proto__ = person1;
console.log(person2.firstName); // Mary
console.log(person2.lastName); // Doe
console.log(person2.age); // 50
console.log(person2.fullName()); // Mary Doe
console.log(person2) // { firstName: 'Mary', lastName: 'Doe' }
console.log(person2.__proto__) // { firstName: 'John', lastName: 'Doe', age: 50, fullName: [Function: fullName] }
console.log(person2.__proto__.__proto__) // {}
```

---

## Prototype Chain
- When you access a property or a method of an object, Javascript engine first looks for that property or method in the object itself   
- If it doesn't find the property or method in the object, it looks for it in the object's prototype
- If it doesn't find the property or method in the object's prototype, it looks for it in the prototype of the object's prototype
- This process continues until the property or method is found or until the prototype of the object is null
- This chain of objects is called the prototype chain

---

## Prototype Property
- Every function in Javascript has a prototype property
- The prototype property is an object
- The prototype property is used to add properties and methods to an object

---

## Inheritance using class
- In ES6, class is a new way to create objects and deal with inheritance
- In ES6, class is a syntactical sugar over constructor function and prototype
- In ES6, class is not a new object-oriented inheritance model

### Example:
```javascript
class Person {
    constructor(firstName, lastName, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }

    fullName() {
        return this.firstName + " " + this.lastName;
    }
}

class Student extends Person {
    constructor(firstName, lastName, age, rollNo) {
        super(firstName, lastName, age);
        this.rollNo = rollNo;
    }

    greet() {
        return `Hello ${this.firstName}!!`;
    }
}

const s1 = new Student('Dharmesh','Poriya',20,007);
const s2 = new Student('John','Doe',23,120);

console.log(s1); // Student { firstName: 'Dharmesh', lastName: 'Poriya', age: 20, rollNo: 7 }
console.log(s2); // Student { firstName: 'John', lastName: 'Doe', age: 23, rollNo: 120 }
console.log(s1.greet()); // Hello Dharmesh!!
console.log(s2.greet()); // Hello John!!
console.log(s1.fullName()); // Dharmesh Poriya
console.log(s2.fullName()); // John Doe
```

