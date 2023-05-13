# Flatten an Object

---

### # What is flattening an object?
- Flattening an object means to convert a nested object into a single level object.
- For example, if we have an object like this:
    ```javascript
    const obj = {
        a: 1,
        b: {
            c: 2,
            d: 3,
            e: {
                f: 4
            }
        }
    }
    ```
    - Then flattening this object will result in:
    ```javascript
    const obj = {
        a: 1,
        b_c: 2,
        b_d: 3,
        b_e_f: 4
    }
    ```
- This is a very common problem in Javascript and is asked in many interviews.

### # What is the use of flattening an object?
- Flattening an object is useful when we want to send the object to a server or store it in a database.
- Because the server or database will not be able to store the nested object.
- So we need to flatten the object before sending it to the server or storing it in a database.

### # How to flatten an object?
- There are many ways to flatten an object.
- recursive code of flattening an object:
    ```javascript
    const flattenObject = (obj, parent, res = {}) => {
        for(let key in obj){
            const prop_name = parent ? parent + '_' + key : key;
            
            if(typeof obj[key] == 'object'){
                flattenObject(obj[key],prop_name,res);
            }else{
                res[prop_name] = obj[key];
            }
        }
        return res;
    };
        
    const person = {
        'name' : 'Dharmesh Poriya',
        'role' : 'SDE',
        'address' : {
            'city' : 'Surat',
            'state' : 'Gujarat',
            'country' : 'India'
        }
    }
        
    let ans = flattenObject(person);
    console.log(ans)
    ```
    - Output:
        ```javascript
        {
            name: 'Dharmesh Poriya',
            role: 'SDE',
            address_city: 'Surat',
            address_state: 'Gujarat',
            address_country: 'India'
        }
        ```
