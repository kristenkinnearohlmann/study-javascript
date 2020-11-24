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