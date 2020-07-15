# Arrays

## Intro
- hold multiple objects or values

## Creating and Initializing Arrays
- syntax
```
let values = [];
let values = [1, 2, 3]; // 3 elements, preferred way
let values = Array.of(1, 2, 3);
```
- arrays are not built-in objects, so you can't use ```typeof``` to determine; use ```Array.isArray(var)```
- MDN page [https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)

## Accessing Array Items
- syntax
```
let values = ['a','b','c'];
console.log(values[0]);
```
- if you try to access an index out of range, ```undefined``` is returned
- change values through bracket notation ```values[0] = 'aaa';```; this works even if array is set as a ```const```?

## Manipulating Arrays
- generally done with methods
- ```push``` syntax - you can pass multiple, comma-separated values in a ```push``` call
```
const values = ['a','b','c'];
values.push('d');
console.log(values); // a b c d

const values = ['a','b','c'];
values.push('d','e',f');
console.log(values); // a b c d e f
```
- ```pop``` syntax - takes last element of array
```
const values = ['a','b','c'];
const last = values.pop();
console.log(last); // 'c'
```
- ```shift``` syntax - moves the entire array left to get first element off the array
```
const values = ['a','b','c'];
const first = values.shift();
console.log(first); // a
```
- ```unshift``` syntax - opposite of ```shift```, add element to the front by moving array right; you can pass multiple, comma-separated values in a ```unshift``` call
```
const values = ['b','c'];
values.unshift('a');
console.log(values); // a b c
```

## ```slice()``` and ```splice()```
- ```slice``` creates new array based on slice of an original array; original array remains the same; if called with no arguments, a copy of the array is made > handy!
```
const values = ['a','b','c'];
const newValues = values.slice(1,2); // args: start of slice, end of slice; end of slice not included in results
console.log(newValues); // b
```
- ```splice``` used to insert/delete elements within the array
```
// delete
// splice(idx, deleteCount)
const values = ['a','b','c'];
values.splice(1,1); // args: index of element to handle, number of items; removes the items at those position(s)
console.log(values); // a c

// add
// splice(idex, deleteCount, newItems)
const values = ['a','b','c'];
values.splice(1,0,'foo'); // args: index of element to start inserting/deleting - the value is added before this index as the new version of the index, number of items to delete, item(s) to add
console.log(values); // a foo b c
console.log(values.splice(1,1,'hello')); // a hello c
```

## Array Searching and Looping
- ```indexOf``` syntax
```
const values = ['a','b','c'];
console.log(values.indexOf('c')); // 2
console.log(values.indexOf('d')); // -1 (doesn't exist, used because ```undefined``` could be an element in the array)
```
- ```filter``` syntax - creates new array
```
const values = ['a','b','c'];
const set = values.filter(function(item) { // uses a function expression
    return item > 'b';
});
console.log(set); // c
```
- ```find``` syntax - creates new array, similar to filter, but finds first item that matches the criteria
```
const values = ['a','bbb','c'];
const found = values.find(function(item) { // uses a function expression
    return item.length > 1;
});
console.log(found); // bbb
```
- ```forEach``` syntax - preferred to be used over looping if each item of the array needs to be passed to the function - yay!!
```
const values = ['a','b','c'];
values.forEach(function(item) { // uses a function expression
    console.log(item);
});
// a b c
```

## Arrays in the DOM
- common to use arrays in the DOM
- ```getElementsByClassName``` will get items that can be stored in an array (since classes are used on multiple tags); the return type is not officially an array but can be used like one
- example code
```
const containers = document.getElementsByClassName('container');
// containers[2].classList.add('d-none'); // hides boots container
// containers[3].classList.add('d-none'); // hides stories that comes after trail review
// containers[0].classList.add('d-none'); // hides heading with logo
console.log(containers);
```