# Understanding ```'this'``` in JavaScript

## Introduction to ```'this'```

- Used in other OOP languagues
- Always refers to an object in which the current code is running
- Sometimes the object can be changed
- JS is running within the global window object; outputting to the console as a single statement will tell you that
- If within an object literal, it will refer to the object; ex. declaring a fullName function in an object to return a concatenated firstName and lastName
- If using a constructor function to create an object, it will refer to the instance in which it is running

## ```'this'``` in Global and Function Scope

- inside method, refers to owner object
- in a function, refers to global object
- in event, element that rcvd the events
- call()/apply methods refer to the object passed
- ```'use strict'``` affects ```this```
   - in the example, until ```'use strict'``` is uncommented, the ```this``` object leaks through to the global scope
   - to get the global(window) object when invoking ```'use strict'```, reference the object explicitly
   ```Javascript
   console.log(window.toString());
   ```

## ```'this'``` in Event Handlers

- if adding JS to a specific HTML entity, ```this``` will refer to the thing it is attached to

## ```'this'``` in an Object Literal

- occurs when referencing ```this``` in creating an object literal
```Javascript
function objLiteral() {
   let product =  {
      "productId": 680,
      "name": 'Product 1',
      "standardCost": 115.99,
      "listPrice": 125.99,
      grossProfit: function () {
         return (this.listPrice - this.standardCost).toLocaleString('en-US', {
         style: 'currency', currency: 'USD'
         });
      }
   };
}
```

## ```'this'``` with ```call()`` and ```apply()``` Methods

- ```apply()``` allows you to pass arguments in addition to the object literal
- ```this``` will refer to the properties of the object literal passed in even though the method is defined in one product and not the other
- `call()` allows you to call a method from within an object definition on a specific object, parameters passed separate by comma after the object
- `apply()` allows you to call a method from within an object definition on a specific object, parameters passed by array after the object

## ```'this'``` in Constructor Functions

- ```this``` seems most clear in this scenario because the objects are explicit

## Summary

- scope determines value of ```this```
   - Global object (window)
   - HTML element
   - Method owner
- ```'use strict'``` makes ```this``` undefined in functions
- what is passed to ```call()```/```apply()``` methods becomes ```this```
- constructor function owner is ```this```