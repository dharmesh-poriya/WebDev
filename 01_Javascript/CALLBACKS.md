# Callbacks in Javascript

---

## What is a callback?
- A callback is a function passed as an argument to another function.
- A callback function can run after another function has finished.

---

## # Synchrounous callback
- A synchronous callback is a callback function that is executed synchronously, i.e., at the same time as the caller.

- i.e :

    ```javascript
    console.log('Initial');

    function greeting(msg) {
    console.log(msg);
    }

    function details(name, callback) {
        let msg = `Hello ${name}`;
        callback(msg);
    }

    console.log('Hello!!');
    details('Dharmesh', greeting);
    console.log('Bye');
    ```
    Output:
    ```
    Initial
    Hello!!
    Hello Dharmesh
    Bye
    ```

---

## # Asynchronous callback
- A asynchronous callback is a callback function that is executed asynchronously, i.e., later in the program's execution.

- i.e :

    ```javascript
    console.log('Initial');

    function greeting(msg) {
    console.log(msg);
    }

    function details(name, callback) {
        let msg = `Hello ${name}`;
        callback(msg);
    }

    console.log('Hello!!');
    setTimeout(details, 1000, 'Dharmesh', greeting);
    console.log('Bye');
    ```
    Output:
    ```
    Initial
    Hello!!
    Bye
    Hello Dharmesh
    ```
    - Here, the callback function is executed after 1 second.

### # Callback hell
- Callback hell is a phenomenon that afflicts a JavaScript developer when he tries to execute multiple asynchronous operations one after the other.
- i.e :

    ```javascript
    function getRecipe() {
        setTimeout(() => {
            const recipeID = [523, 883, 432, 974];
            console.log(recipeID);

            setTimeout((id) => {
                const recipe = {
                    title: 'Fresh tomato pasta',
                    publisher: 'Dharmesh'
                };
                console.log(`${id}: ${recipe.title}`);

                setTimeout(publisher => {
                    const recipe2 = {
                        title: 'Italian Pizza',
                        publisher: 'Dharmesh'
                    };
                    console.log(recipe);
                }, 1500, recipe.publisher);

            }, 1500, recipeID[2]);

        }, 1500);
    }
    getRecipe();
    ```
    Output:
    ```
    [523, 883, 432, 974]
    432: Fresh tomato pasta
    {title: "Fresh tomato pasta", publisher: "Dharmesh"}
    ```
    - Here, we have to wait for the first callback to finish before we can move on to the next one.
    - This is called callback hell.

---

### Visualizing callback

<!-- ![Visualizing callback](./assets/async_js/04_callback.gif) -->

![Visualizing callback](./assets/async_js/04_01_callback.gif)