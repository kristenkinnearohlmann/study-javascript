# Scope and Hoisting

## Intro
- need to be fully aware of these concepts
- backwards compatible with its earlier versions
- did not need to declare variables in earlier versions

## Global Scope
- global scope and function scope are the 2 scopes
- the area where you can access a variable
- global scope is actually the sum total of all your JS files
- "polluting the global scope" occurs when you have too many variables being declared globally (outside functions); it's the accumulation of each JS file's globally declared variables
- solution pattern is to create a ```const app = {};``` object to hold the variables for a particular file
```
//global scope
const app = {
    productId: 12345,
    userName: 'Joe',
    orderNumber: 789
};

function showProductId() {
    // function scope
    // it can look outward to global scope for the variable
    console.log(app.productId);
}

showProductId();
```
- you can have many functions in the global scope, but have only one ```app``` object to hold needed variables

## Function Scope
- when a variable is declared within the function itself, it has function scope
- can't be accessed outside the function it is declared in
- the same holds true for parameters
- if an inner function references a variable that isn't declared within it, it will look at its outer function for a declaration there; it will continue looking all the way out to the global scope
- example
```
function showProductId() {
    let productId = 12345;

    function fix() {
        
        console.log(`in fix: ${productId}`)
    }

    fix();
    console.log(`in showProductId: ${productId}`);
}


showProductId();
```

## var and Hoisting
- hoisting means that the identifier will be set to undefined when a file is executed rather than throwing a good error
- better definition of **hoisting variables** from Google: 
  - JS default behavior of moving declarations to the top - a variable can be used before it is declared
  - using ```let``` or ```const``` doesn't allow for this because they are not hoisted
  - JS hoists declarations not initializations (ex. given ```var y = 7``` only the ```var y``` portion is hoisted so the value is lost)
- **hoisting functions** will hoist the entire function if it is a function declaration
```
showProductId();

function showProductId() {
    console.log(123);
}
```
- JS files are executed after 2 passes which is why hoisting works
  - first, JS engine will detect functions
  - second, JS will execute top down
- **tl;dr** hoisting is ok for function declarations, but always declare variables with ```let``` or ```const``` (avoid ```var```) so you don't get breakage from hoisting

## Undeclared Variables and Strict Mode
- early JS versions let you use variables without declaring them
- if a keyword isn't used in the declaration, the variables is being declared on the object ```window``` (refers to window of browser, many variables used to be placed there - no dumping grounds!)
- add ```'use strict';``` to ensure no issues exist - can be used both globally and locally
```
'use strict';

productId = 5678;

console.log(productId); // results in a ReferenceError
```
- ```'use strict';``` is implied in modules and classes