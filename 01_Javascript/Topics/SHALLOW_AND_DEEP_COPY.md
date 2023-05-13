# Shallow and Deep copy in array and object

---
- normally, when we assign an array or object to another variable, it creates a reference to the original array or object. So, if we change the new variable, the original array or object will be changed too. This is called shallow copy.
- i.e: 
    ```javascript
    let arr = ['cricket', 'foot ball', 'tennis']
    let copyarr = arr;

    copyarr[1] = 'basket ball'

    console.log('old arr',arr);
    console.log('copy arr',copyarr);
    ```

---

## # Shallow copy
- Shallow copy is a bit-wise copy of an object. A new object is created that has an exact copy of the values in the original object. If any of the fields of the object are references to other objects, just the reference addresses are copied i.e., only the memory address is copied.
- Shallow copy is not a recursive copy. It means that only the address of the nested objects is copied, not the entire object itself. Thus, shallow copy is not suitable for nested objects.
- Shallow copy is faster than deep copy.
- in short, Shallow copy is a one level copy. It creates a new object and then copies the nonstatic fields of the current object to the new object. If the field is a value type, a bit-by-bit copy of the field is performed. If the field is a reference type, the reference is copied but the referred object is not; therefore, the original object and its clone refer to the same object.


### ## Shallow copy in array

- i.e (simple example using spread operator):
    ```javascript
    let arr = ['cricket', 'foot ball', 'tennis']
    let copyarr = [...arr];

    copyarr[1] = 'basket ball'

    console.log('old arr',arr);
    console.log('copy arr',copyarr);
    ```
    Output:
    ```
    old arr [ 'cricket', 'foot ball', 'tennis' ]
    copy arr [ 'cricket', 'basket ball', 'tennis' ]
    ```

- i.e (using spread operator):
    ```javascript
    let arr = ['cricket', 'foot ball', 'tennis', { 'name' : 'Dharmesh', 'age' : '19'}]
    let copyarr = [...arr];
    copyarr[1] = 'basket ball';
    copyarr[3].name = 'John';
    console.log('old arr',arr);
    console.log('copy arr',copyarr);
    ```
    Output:
    ```
    old arr [ 'cricket', 'foot ball', 'tennis', { name: 'John', age: '19' } ]
    copy arr [ 'cricket', 'basket ball', 'tennis', { name: 'John', age: '19' } ]
    ```
    - in above example, we can see that the object inside the array is changed in both the arrays. This is because, spread operator only copies the first level of the array. It does not copy the nested objects.

- i.e (using slice method):
    ```javascript
    let arr = ['cricket', 'foot ball', 'tennis', { 'name' : 'Dharmesh', 'age' : '19'}]
    let copyarr = arr.slice();
    copyarr[1] = 'basket ball';
    copyarr[3].name = 'John';
    console.log('old arr',arr);
    console.log('copy arr',copyarr);
    ```
    Output:
    ```
    old arr [ 'cricket', 'foot ball', 'tennis', { name: 'John', age: '19' } ]
    copy arr [ 'cricket', 'basket ball', 'tennis', { name: 'John', age: '19' } ]
    ```

- i.e (Array.from() method):
    ```javascript
    let arr = ['cricket', 'foot ball', 'tennis', { 'name' : 'Dharmesh', 'age' : '19'}]
    let copyarr = Array.from(arr)
    copyarr[1] = 'basket ball';
    copyarr[3].name = 'John';
    console.log('old arr',arr);
    console.log('copy arr',copyarr);
    ```
    Output:
    ```
    old arr [ 'cricket', 'foot ball', 'tennis', { name: 'John', age: '19' } ]
    copy arr [ 'cricket', 'basket ball', 'tennis', { name: 'John', age: '19' } ]
    ```
### ## Shallow copy in object

- i.e (using spread operator):
    ```javascript
    let obj = { 'name' : 'Dharmesh', 'age' : '19', 'arr' : ['AA','BB','CC']}
    let copyobj = {...obj};
    copyobj.name = 'John';
    copyobj.arr[1] = 'DD';
    console.log('old obj',obj);
    console.log('copy obj',copyobj);
    ```
    Output:
    ```
    old obj { name: 'Dharmesh', age: '19', arr: [ 'AA', 'DD', 'CC' ] }
    copy obj { name: 'John', age: '19', arr: [ 'AA', 'DD', 'CC' ] }
    ```

- i.e (using Object.assign() method):
    ```javascript
    let obj = { 'name' : 'Dharmesh', 'age' : '19', 'arr' : ['AA','BB','CC']}
    let copyobj = Object.assign({},obj);
    copyobj.name = 'John';
    copyobj.arr[1] = 'DD';
    console.log('old obj',obj);
    console.log('copy obj',copyobj);
    ```
    Output:
    ```
    old obj { name: 'Dharmesh', age: '19', arr: [ 'AA', 'DD', 'CC' ] }
    copy obj { name: 'John', age: '19', arr: [ 'AA', 'DD', 'CC' ] }
    ```
    - in above example, we can see that the array inside the object is changed in both the objects. This is because, Object.assign() method only copies the first level of the object. It does not copy the nested objects.

---

## # Deep copy
- Deep copy is a process in which the copying process occurs recursively. It means first constructing a new collection object and then recursively populating it with copies of the child objects found in the original. In case of deep copy, a copy of object is copied in other object. It means that any changes made to a copy of object do not reflect in the original object.
- Deep copy is a recursive copy. It means that it copies all values and nested objects of the original object. Thus, a deep copy of an object is recursively created and populated with copies of all nested objects.
- Deep copy is slower than shallow copy.
- in short, Deep copy is a copy of the object and its values in a new memory location. If the field is a value type, a bit-by-bit copy of the field is performed. If the field is a reference type, a new copy of the referred object is performed. The original object and its clone refer to two different objects.

### ## Deep copy in array

- i.e (using JSON.parse() and JSON.stringify() method):
    ```javascript
    let arr = ['cricket', 'foot ball', 'tennis', { 'name' : 'Dharmesh', 'age' : '19'}]
    let copyarr = JSON.parse(JSON.stringify(arr));
    copyarr[1] = 'basket ball';
    copyarr[3].name = 'John';
    console.log('old arr',arr);
    console.log('copy arr',copyarr);
    ```
    Output:
    ```
    old arr [ 'cricket', 'foot ball', 'tennis', { name: 'Dharmesh', age: '19' } ]
    copy arr [ 'cricket', 'basket ball', 'tennis', { name: 'John', age: '19' } ]
    ```
    - in above example, we can see that the object inside the array is changed in only one array. This is because, JSON.parse() and JSON.stringify() method copies the nested objects too.

### ## Deep copy in object

- i.e (using JSON.parse() and JSON.stringify() method):
    ```javascript
    let obj = { 'name' : 'Dharmesh', 'age' : '19', 'arr' : ['AA','BB','CC']}
    let copyobj = JSON.parse(JSON.stringify(obj));
    copyobj.name = 'John';
    copyobj.arr[1] = 'DD';
    console.log('old obj',obj);
    console.log('copy obj',copyobj);
    ```
    Output:
    ```
    old obj { name: 'Dharmesh', age: '19', arr: [ 'AA', 'BB', 'CC' ] }
    copy obj { name: 'John', age: '19', arr: [ 'AA', 'DD', 'CC' ] }
    ```
    - in above example, we can see that the array inside the object is changed in only one object. This is because, JSON.parse() and JSON.stringify() method copies the nested objects too.
