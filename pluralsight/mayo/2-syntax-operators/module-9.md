# Using the Powerful Spread Operator

## Copy a String to an Array Using Spread

- expands any 'iterable' such as string/array into a new array
- used for passing multiple arguments to a method
- syntax is `...`
- IE and Edge do not support spread
- on the right side of an equal sign (ex. `=...`)
```Javascript
let productNumber = "FR-R92B-58";
let values = [...productNumber]; // square brackets are used because the result is an array
//=> [
//  'F', 'R', '-', 'R',
//  '9', '2', 'B', '-',
//  '5', '8'
//]
```

## Copy an Array of Primitives Using Spread

- the normal array copy operation is to use `slice`, `spread` does the same work
```Javascript
let arr = [1,2,3];
let arr2 = arr.slice(0);
// same as
let arr = [1,2,3];
let arr2 = [...arr];
```
- new array is separate

## Copy an Array of Objects

- when using `spread` to copy an array of objects, you are copying pointers to the original objects, not the objects themselves - **NOTE**: Original array can be changed!
- objects are copied by reference

## Concatenate Two Arrays Together

- compare original to `spread` syntax
```Javascript
let allProducts = _products.concat(_newProducts);
// same as
let spProducts = [..._products, ..._newProducts];
```

## Using Spread to Pass Parameters to a Constructor

- enhance processing with `spread`
```Javascript
let dt = Date(2019, 10, 15);
// enhanced
let dateFields = [2019, 11, 15];
dt = new Date(...dateFields);
```

## Pass Parameters to a Function

- can be used with the `apply()` method; `apply()` takes an object and an array of arguments as parameters
- example passing arguments to a function
```Javascript
multipleParams(1,2,3);
// enhanced
let args = [1,2,3];
multipleParams(...args);
```

## Shallow Copy on Object Literals

- syntax - enclosed in curly braces because the result is an object
```Javascript
// given an object called product
let prod2 = {...product};
```
- similar to `object.assign`
- copy is by value - original object will not be affected

## Module and Course Summary

- `spread` simplifies code and is more concise
- `spread` can make your code harder to read and it isn't supported by all browsers yet