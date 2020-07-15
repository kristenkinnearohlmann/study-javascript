# Using Math and Comparison Operators

## Intro
- operators
  - standard math operators
  - ```**``` exponentation (ex. ```2**3 // 8```)
  - increment ```++``` and decrement ```--```
    - when the operator is placed **after** the variable, the variable is assigned the current value, then the increment/decrement occurs
    - when the operator is placed **before** the variable, the value is incremented/decremented, then assigned to the variable
- examples
```
<!DOCTYPE html>
<html>
    <head>
    </head>
    <body>
        <button onclick="mathSample();">Math</button>
        <script>
            'use strict';
        
        // Math Operators
        function mathSample() {
            let price = 200;
            let result = 0;

            console.log(`price = ${price.toString()}`);

            // Addition
            result = price + 100;
            console.log(`price + 100 = ${result.toString()}`);

            // Subtraction
            result = price - 10;
            console.log(`price - 10 = ${result.toString()}`);

            // Multiplication
            result = price * 2;
            console.log(`price * 2 = ${result.toString()}`);

            // Division
            result = price / 2;
            console.log(`price / 2 = ${result.toString()}`);

            // Exponentation
            result = price ** 2;
            console.log(`price ** 2 = ${result.toString()}`);

            // Modulus
            result = price % 3;
            console.log(`price % 3 = ${result.toString()}`);

            // Increment
            result = price++;
            console.log(`result = price++ = ${result.toString()}`);
            console.log(`price = ${price.toString()}`);
            result = ++price;
            console.log(`result = ++price = ${result.toString()}`);

            // Decrement
            result = price--;
            console.log(`result = price-- = ${result.toString()}`);
            console.log(`price = ${price.toString()}`);
            result = --price;
            console.log(`result = --price = ${result.toString()}`);
        }
        </script>
    </body>
</html>
```

## Plus Sign with Strings and Numbers
- plus sign is an overloaded method
  - for string, concatenation
  - for numbers, addition
  - if mixed types (strings and numbers), concatenation
- **trick**: convert string numbers to numbers by putting a plus sign in front of the string and enclose in parentheses for visual clarity (ex. ```(+stringValue)```)
- examples
```
<!DOCTYPE html>
<html>
    <head>
    </head>
    <body>
        <button onclick="plusSignSample();">Plus sign with Numbers and String</button>

        <script>
            // Plus sign with Numbers and Strings
            function plusSignSample() {
                let price = 200;
                let stringValue = "100";
                let result = 0;

                console.log(`price = ${price.toString()}`);

                result = price + stringValue;
                console.log(`result (number + stringValue) = ${result.toString()}`);

                result = price + (+stringValue);
                console.log(`result (number + (+stringValue)) = ${result.toString()}`);
            }

        </script>
    </body>
</html>
```

## Assignment Operators
- standard items
- examples
```
<!DOCTYPE html>
<html>
    <head>
    </head>
    <body>
        <button onclick="assignmentSample();">Assignment</button>
        <script>       
        // Assignment Operators
        function assignmentSample() {
            let price = 200;

            console.log(`price = ${price.toString()}`);

            // Addition
            price += 100;
            console.log(`price += 100 = ${price.toString()}`);

            // Subtraction
            price -= 100;
            console.log(`price -= 100 = ${price.toString()}`);

            // Multiplication
            price *= 2;
            console.log(`price *= 2 = ${price.toString()}`);

            // Division
            price /= 2;
            console.log(`price /= 2 = ${price.toString()}`);

            // Exponentation
            price **= 2;
            console.log(`price **= 2 = ${price.toString()}`);

            // Modulus
            price %= 3;
            console.log(`price %= 3 = ${price.toString()}`);
        }
        </script>
    </body>
</html>
```

## Comparison Operators
- items
  - standard ones
  - **equal in value** ```==```
  - **equal in value and type*** ```===```
  - **not equal in value** ```!=```
  - **not equal in value and type** ```!==```
- ternary operator review (**I love the ternary operator!!**)
- too tired to copy example except the less standard ones :)
```
console.log("10" == 10); // true
console.log("10" === 10); // false

console.log("10" != 10); // false
console.log("10" !== 10); // true

console.log("10" === 10 ? 'equal in type and value' : 'not equal in type or value')
```

## ```'use strict```
- **you should always be using this statement**
- ignored by older browsers
- forces all variables to be declared
- mistyped variable names can be created globally scoped without this declaration
- rules enforced
  - can't use a variable without declaring it first
  - can't use reserved words as variables (ex. ```eval```, ```arguments``` can't be used as variables)
  - can't delete a variable (ex. this will not execute ```delete result;```)
  - can't delete a function (ex. this will not execute ```delete useStrictSample;```)