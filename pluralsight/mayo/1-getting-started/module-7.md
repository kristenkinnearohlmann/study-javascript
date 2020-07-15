# Functions

## Intro
- a block of code that's named
- use the name or a variable to set to the function to execute code
- most code will be a function
- if code is in global scope, it's limited and wouldn't be reusable

## Function Basics
- a block of a code with a name
- can be called repeatedly
- syntax of function declaration
```
function funcName() {
   // function body
   console.log('in a function');
}
```

## Function Expressions
- declare an expression and immediately store it in a variable
- syntax of function expressions
```
let fn = function() {

}
fn(); // calls the function
```
- best practice to give the function a name to help with debugging; can't be called directly if set to a variable name

## Passing Information to Functions
- add parameters to function declaration
- can pass multiple args separated by commas
- if you don't supply value for all the parms, they will be set as undefined
- always be sure that you set the parms accurately

## Function Return Values
- ```return``` keyword
- if a function does not have a ```return``` statement, it implicitly returns ```undefined```

## Function Scope
- functions have their own scope, the parms and local variables only exist in that function and sub-functions
- **values disappear once function/sub-functions run**
- out of scope
- can encapsulate code and not leak values
- functions have access to the entire outer scope
- nested functions > functions within a function
- always be aware of function scope esp. if using the same variable names in multiple places
- functions within functions is very common in JS

## Using Functions to Modify Web Pages
- ```document``` refers to the whole web page