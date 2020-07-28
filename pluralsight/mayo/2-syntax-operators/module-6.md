# Utilizing JavaScript Exception Handling

## Try, Catch, and Finally Blocks
- basic syntax
```
try {
    // Some code that could fail
}
catch (error) {
    // Do something with the error
}
finally {
    // This code always runs
}
```
- JS errors always have a ```name``` and ```message``` property

## Throw a Custom Error Object
- JS errors may not be descriptive enough
- you can throw your own custom error
- create an object with at least 2 properties: ```message```and ```name```
- syntax (remember, ```throw``` is an object here, so needs trailing ```;```)
```
throw {
    "name":"Name of error",
    "message":"Message of error"
};
```

## Detect the Error Type
- types of errors built into JS
|Error Type|Descr|
|---|---|
|ReferenceError||
|RangeError||
|TypeError||
|URIError||
|SyntaxError||
|EvalError*|For backwards compatibility, seen in older code|

## Summary