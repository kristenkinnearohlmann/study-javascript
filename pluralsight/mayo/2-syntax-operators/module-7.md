# How to Determine Javascript Variable Data Types

## Data Types and Detection Methods
- built in types
   - primitives: boolean, null, undefined, number, string
   - objects (invoked with ```new```): Array, Error, Function, Object (wrapper around other datatypes), RegExp, - objects like primitives (invoked with ```new```): Boolean, Number, String - prefer to use the primitive before using the object

## The typeof Operator
- allows us to find the data type of the passed in expression
- example ```console.log(typeof "Hello")```

## Using the Constructor Property to Determine Type
- all objects inherit from Object
- Object has a constructor property which returns a reference to the object itself
- Object literals and primitives are cast to objects for display
- an internal representation of an object is returned as a string
- syntax
```Javascript
console.log(object.constructor.toString());
```

## Helper Functions for the Constructor Property
- create helper functions to show true/false to check an object type
   - example
   ```Javascript
   function isArray(value){
       return value.constructor.toString().indexOf("Array") > -1;
   }
   ```

## The instanceof Operator
- tests if an object inherits from the Object data type (the object is not a primitive)
- tests for a specific type of object or Object itself
- syntax
```Javascript
console.log(varName instanceof Object)
```

## Summary
- important to understand difference between primitives and Objects
- use primitives wherever possible; objects are slower to access and take up more memory
- typeof to check type, instanceof to check type of object
- constructor property can be used on both primitives and objects