# Study Javascript

Study projects for Javascript.

## Loops

### Nice loop explanation

- A loop is a structure in programming where the instructions are written once, but a computer can execute them multiple times
- Each execution of those instructions is called an iteration
- For loops (count-controlled loops) repeat for a specified number of times
- While loops (condition-controlled loops) repeat until a condition changes
- For each loops (collection-controlled loops) repeat for each item in a collection

## Boolean

### Falsy for JS

So which values are falsy— or evaluate to false when checked as a condition? The list of falsy values includes:

- 0
- Empty strings like "" or ''
- null which represent when there is no value at all
undefined which represent when a declared variable lacks a value
- NaN, or Not a Number

### Short Circuit

`let defaultName = username || 'Stranger';`
Because || or statements check the left-hand condition first, the variable defaultName will be assigned the actual value of username if is truthy, and it will be assigned the value of 'Stranger' if username is falsy. This concept is also referred to as short-circuit evaluation.

### Ternary Example
`isNightTime ? console.log('Turn on the lights!') : console.log('Turn off the lights!');`

### Else...If Example
```Javascript
let stopLight = 'yellow';
 
if (stopLight === 'red') {
  console.log('Stop!');
} else if (stopLight === 'yellow') {
  console.log('Slow down.');
} else if (stopLight === 'green') {
  console.log('Go!');
} else {
  console.log('Caution, unknown!');
}
```

### Switch Example
```Javascript
let groceryItem = 'papaya';
 
switch (groceryItem) {
  case 'tomato':
    console.log('Tomatoes are $0.49');
    break;
  case 'lime':
    console.log('Limes are $1.49');
    break;
  case 'papaya':
    console.log('Papayas are $1.29');
    break;
  default:
    console.log('Invalid item');
    break;
}
 
// Prints 'Papayas are $1.29'
```

### Function Tidbits

#### Function Declaration
A function declaration is a function that is bound to an identifier, or name. In the next exercise we’ll go over how to run the code inside the function body.

We should also be aware of the hoisting feature in JavaScript which allows access to function declarations before they’re defined. Since hoisting isn’t considered good practice, we simply want you to be aware of this feature.

#### Function Expression
Another way to define a function is to use a function expression. To define a function inside an expression, we can use the function keyword. In a function expression, the function name is usually omitted. A function with no name is called an anonymous function. A function expression is often stored in a variable in order to refer to it.
```JavaScript
const funcName = function(parm1,parm2) {
  return true;
};
```
To invoke a function expression, write the name of the variable in which the function is stored followed by parentheses enclosing any arguments being passed into the function.
```JavaScript
funcName(arg1,arg2);
```
Unlike function declarations, function expressions are not hoisted so they cannot be called before they are defined.

#### Arrow Functions
ES6 introduced arrow function syntax, a shorter way to write functions by using the special “fat arrow” () => notation.

Arrow functions remove the need to type out the keyword function every time you need to create a function. Instead, you first include the parameters inside the ( ) and then add an arrow => that points to the function body surrounded in { } like this:
```JavaScript
const funcName = (parm1, parm2) => {
  return true;
}
```

##### Concise Body Formatting
1. Parameter declaration
```JavaScript
// Zero parameters
const funcName = () => {};
// One parameter
const funcName = parm1 => {};
// Two or more parms
const funcName = (parm1,parm2) => {};
```
1. Function body
```JavaScript
// Single-line block with implicit return
const sumNumbers = number => number + number;
// Multi-line block
const sumNumbers = number => {
  const sum = number + number;
  return sum;
};
```
#### Setting functions to variables
- Don't include parentheses in the function name when setting to a variable => we want the function itself assigned to the variable, not the return value
- Invoke the variable with () to invoke the function that is stored in it
- JS functions are first-class objects and can contain methods and properties => ex. `console.log(functionVar.name) // returns name of original function`

#### Functions as parameters
-  A _higher-order function_ is a function that either accepts functions as parameters, returns a function, or both! 
- We call the functions that get passed in as parameters and invoked _callback functions_ because they get called during the execution of the higher-order function.

## Objects
for...in will execute a given block of code for each property in an object.