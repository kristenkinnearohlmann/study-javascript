# Types and Operators

## Intro

## Numbers
- ```typeof``` will show the datatype of the value (ex. ```typeof varname```)
- standard operators
- can do all shortcuts from += to %=
- increment operator ```++``` in front of a variable adds 1 to the number; it can also go after the number, which causes the increment AFTER the line on which it appears
```
// Example of ++ before var
let price = 5;
showMessage(++price); // shows 6

// Example of ++ after var
let price = 5;
showMessage(price++); // shows 5
console.log(price); // shows 6
```
- decrement operator ```--``` acts the same way as the increment operator

## Operator Precedence
- remember your PEMDAS! use parens to be specific!
- recommends MDN for JS referencing
- [operator precedence chart](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_Precedence)

## Number Precision
- numbers are not always precise - remember!

## Negative Numbers
- if working with a negative number as well as subtracting, put the negative number in parentheses ```20 - (-2)```

## Strings
- to show reserved characters, like " and ', escape with a backslash
- check MDN for escape options under the String object
- backtick (`) allows for string interpolation; syntax for adding variables is ```${varname}```
- you can add returns into a backtick expression but will render without whitespace on a web page; it will show in the console

## Manipulating Strings
- concatenation is as expected, either + or +=
- need to include () to invoke methods
- check String methods to see what's available - MDN has a list for reference;properties available as well
- variable can change type depending on the operation that is taken on it (ex. a string message can become a number when checking the .length property)
- remember the string vs number concatenation work; adding a string to a number converts the number to a string implictly

## Converting
- convert number to string: use ```toString()``` method
- convert string to number: use ```Number.parseFloat()``` method
- NaN(!) if a non-numerical value starts a string to be converted; you can place the non-numeric values at the end of the string and they will be ignored because the parsing will stop at the non-numeric

## Booleans
- as expected from other languages
- can do ```!``` negation

## null and undefined
- values as the same as their names
- undefined: did not initialize variable or other value; set by JS (convention)
- null: set to no value; set by developer (convention)
- above lets us tell whether the developer has set the value or JS

## Objects and Symbols
- specify object as a variable equal to the contents of ```{}``` with properties: values included separated by commas
```
let person = {
    firstName: 'John',
    lastName: 'Adams'
};
```
- access properties through ```.``` notation
```
showMessage(person.firstName); // John
```
- symbol can be used as a property in an object; it remains hidden