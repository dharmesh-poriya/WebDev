# All about Comparison Operators and Truthy/Falsy Values

---

## Comparison Operators
- Comparison operators are used to compare two values.
- All comparison operators return a boolean value (true or false).
- Comparison operators are used in logical statements to determine equality or difference between variables or values.
- there are 8 comparison operators in JavaScript:
  - `==`	Equal to
  - `===`	Equal value and equal type
  - `!=`	Not equal
  - `!==`	Not equal value or not equal type
  - `>`	Greater than
  - `<`	Less than
  - `>=`	Greater than or equal to
  - `<=`	Less than or equal to

- difference between `==` and `===`
    - `==` and `!=` are equal to `===` and `!==` respectively, but they don't check the type of the value.
    - `===` and `!==` are strict equality operators, they check the type of the value.

    - i.e:
        ```javascript
        1 == '1' // true
        1 === '1' // false
        ```
- **Note:** 
  - `==` and `!=` are equal to `===` and `!==` respectively, but they don't check the type of the value.
  - `===` and `!==` are strict equality operators, they check the type of the value.
  - `>` and `<` are greater than and less than operators, they are used to compare numbers.
  - `>=` and `<=` are greater than or equal to and less than or equal to operators, they are used to compare numbers.

---

## Truthy and Falsy Values
- In JavaScript, a truthy value is a value that is considered true when encountered in a Boolean context. All values are truthy unless they are defined as falsy (i.e., except for false, 0, -0, 0n, "", null, undefined, and NaN).
- Falsy values are values that are considered false when encountered in a Boolean context.

- i.e:
    ```javascript
    function checkTruthyFalsy(val){
        let ans = val ? 'truthy' : 'falsy';
        console.log(val,ans);
    }

    checkTruthyFalsy(0.1)
    ```

| Truthy Values | Falsy Values |
| ------------- | ------------ |
| true          | false        |
| number other than zero    | 0|
| "0"           | ""           |
| "false"       | null         |
| "null"        | undefined    |
| "undefined"   | NaN          |
| "NaN"         |              |
| -1            |              |
| Infinity      |              |
| -Infinity     |              |
| []            |              |
| {}            |              |
| function(){}  |              |
| ...           |              |

