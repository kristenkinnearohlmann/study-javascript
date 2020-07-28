# The Difference Between for/in and for/of loops

## for/in statement - works on a single object
- Mozilla: "The for...in statement iterates over all enumerable properties of an object that are keyed by strings (ignoring ones keyed by Symbols)..."
- iterates over the elements of an object (properties and methods)
- returns the ```key``` (property/method name)
- can access the value with ```object[key]```
- **nota bene**: I saw the teacher was double quoting the object keys. In JS, you don't have to do this but in JSON you do. I'm keeping the example as-is from the coursework but will commit this difference to memory.
- the ```in``` keyword states: iterate over the collection of properties and methods inside this literal object and return each key to me
- example
```
<!DOCTYPE html>
<html>
    <head>
    </head>
    <body>
        <button onclick="forinSample();">for/in sample</button>

        <script>
            'use strict';

            // Using a for/in loop
            function forinSample() {
                let product = {
                    "productId": 680,
                    "name": "HL Road Frame - Black, 58",
                    "productNumber": "FR-R92B-58",
                    "color": "Black",
                    "standardCost": 1059.31,
                    "listPrice": 1431.50,
                    calculateGrossProfit: function () {
                        return this.listPrice = this.standardCost;
                    }
                };

                for (const key in product) {
                    console.log(`${key}=${product[key]}`)
                }
            }
        </script>
    </body>
</html>
```

## for/of statement - works on an iterable object
- Mozilla: "The for...of statement creates a loop iterating over iterable objects, including: built-in String, Array, array-like objects..."
- iterates iterable objects (array, string, etc)
- returns the object for each iteration
- the ```of``` keyword states: iterate over the iterable object, each time through the loop place the object into the variable
- example with array
```
<!DOCTYPE html>
<html>
    <head>
    </head>
    <body>
        <button onclick="forofSample();">for/in sample</button>

        <script>
            'use strict';

            let _products = [
                {
                    "productId": 680,
                    "name": "HL Road Frame - Black, 58",
                    "productNumber": "FR-R92B-58",
                    "color": "Black",
                    "standardCost": 1059.31,
                    "listPrice": 1431.50
                },
                {
                    "productId": 707,
                    "name": "Sport-100 Helmet, Red",
                    "productNumber": "HL-U509-R",
                    "color": "Red",
                    "standardCost": 13.08,
                    "listPrice": 34.99
                },
                {
                    "productId": 709,
                    "name": "Mountain Bike Socks, M",
                    "productNumber": "SO-B909-M",
                    "color": "White",
                    "standardCost": 3.3963,
                    "listPrice": 9.50
                }         
            ];

            // Using a for/of loop
            function forofSample() {
                for (const item of _products) {
                    console.log(JSON.stringify(item));
                }
            }

        </script>
    </body>
</html>
```
- example with string, these can be treated as iterable objects
```
<!DOCTYPE html>
<html>
    <head>
    </head>
    <body>
        <button onclick="loopStringSample();">Looping over a string</button>

        <script>
            'use strict';

            // Looping over a string
            function loopStringSample() {
                let productName = "HL Road Frame - Black, 58";
                let letters = "";

                for (const char of productName) {
                    letters += char;
                }
                console.log(letters);
            }
        </script>
    </body>
</html>
```

## ```break``` and ```continue```
- ```break```: leave a loop early, don't execute any remaining statements
- ```break``` example
```
<!DOCTYPE html>
<html>
    <head>
    </head>
    <body>
        <button onclick="breakSample();">break</button>

        <script>
            'use strict';

            let _products = [
                {
                    "productId": 680,
                    "name": "HL Road Frame - Black, 58",
                    "productNumber": "FR-R92B-58",
                    "color": "Black",
                    "standardCost": 1059.31,
                    "listPrice": 1431.50
                },
                {
                    "productId": 707,
                    "name": "Sport-100 Helmet, Red",
                    "productNumber": "HL-U509-R",
                    "color": "Red",
                    "standardCost": 13.08,
                    "listPrice": 34.99
                },
                {
                    "productId": 709,
                    "name": "Mountain Bike Socks, M",
                    "productNumber": "SO-B909-M",
                    "color": "White",
                    "standardCost": 3.3963,
                    "listPrice": 9.50
                }         
            ];

            // Use the break statement
            function breakSample() {
                for (const item of _products) {
                    if (item.standardCost < 20) {
                        break;
                    }
                    console.log(JSON.stringify(item));
                }
            }

        </script>
    </body>
</html>
```
- ```continue```: go to next iteration of a loop, bypassing any code below the continue
- ```continue``` example
```
<!DOCTYPE html>
<html>
    <head>
    </head>
    <body>
        <button onclick="continueSample();">continue</button>

        <script>
            'use strict';

            let _products = [
                {
                    "productId": 680,
                    "name": "HL Road Frame - Black, 58",
                    "productNumber": "FR-R92B-58",
                    "color": "Black",
                    "standardCost": 1059.31,
                    "listPrice": 1431.50
                },
                {
                    "productId": 707,
                    "name": "Sport-100 Helmet, Red",
                    "productNumber": "HL-U509-R",
                    "color": "Red",
                    "standardCost": 13.08,
                    "listPrice": 34.99
                },
                {
                    "productId": 709,
                    "name": "Mountain Bike Socks, M",
                    "productNumber": "SO-B909-M",
                    "color": "White",
                    "standardCost": 3.3963,
                    "listPrice": 9.50
                }         
            ];

            // Use the continue statement
            function continueSample() {
                for (const item of _products) {
                    if (item.standardCost > 1000) {
                        continue;
                    }
                    console.log(JSON.stringify(item));
                }
            }

        </script>
    </body>
</html>
```

## Labeled Statement
- define a location to "goto" like old BASIC
- **STILL A BAD IDEA, NOT RECOMMENDED!!**
- presented so you can recognize this in older code
- a label is a word followed by a colon
- **AVOID LABELED STATEMENTS AT ALL COSTS!!**
- Don't create spaghetti code, you should always be able to refactor your code so you don't have to use labels
- example for recognitiion
```
<!DOCTYPE html>
<html>
    <head>
    </head>
    <body>
        <button onclick="labelSample();">Labeled statement</button>

        <script>
            'use strict';

            // NOTE: I don't recommend use of labels as this leads to spaghetti code
            function labelSample() {
                even:
                for (let index = 1; index <= 10; index++) {
                    if (index % 2 == 1) {
                        continue even;
                    }
                    console.log(index);
                }
            }
        </script>
    </body>
</html>
```