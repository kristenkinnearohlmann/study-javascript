# Program Flow

## if()
- use the triple ```===``` for JS comparisons > absolute "identically equal"
- use ```!==``` to check for JS inequality "not identically equal"
- code block is code existing between {}

## Truthy and Falsy
- JS quirks for falsy: 0, "", '', null, undefined, NaN
- Js quirks for truthy: everything not falsy, "0", '0'
- always round numbers due to numerical precision (ex. 1.2 + 1.3 !== 2.4) because 2.4 is actually 2.4000000004); enclose a number or numerical expression in parentheses to make it an object so you can access the method ```toFixed()``` then convert back to a number with a ```+``` before the parens (+(1.1 + 1.3).toFixed(2)), the plus sign leaves the value as-is but signifies it as a number
- **TL;DR** always convert floating point numbers to a fixed amount of decimal places to compare with a literal
- ```+``` is a simple way to convert a string from ```toFixed``` back to a number

## if...else
- JS stacks if...else
```
if {

}
else {

}
```
- JS uses ```else if```
- {} are not required if a single statement is used but it is a best practice to use them!
- you can use multiple ```else if``` statements

## Comparing === and ==
- ```==``` will let JS convert types which can cause bugs
- ```===``` is a **JS best practice** to ensure type and value are compared
- ```===``` read as "strictly equal to" or "identically equal to"
- negation is the same idea ```!===``` is strict by type and value

## Ternary!!
- shortcut for simple ```if...else``` statements
- syntax: ```// (condition) ? true-statement :  false-statement```
- functions can be in the true and false statements
```
let price = 20;

(price > 10) ? showMessage('expensive') : showMessage('cheap');
```
- parens are not required around the condition statement but helpful

## Block scope using ```let```
- exists between open and close {}
- if declared by ```let``` or ```const``` within the block only applies to that block
- encapsulates code and doesn't leak outside block
- **issue** ```var``` allows for leaks outside the block - always use ```let``` or ```const```

## Looping with for()
- standard ```for``` configuration > declare variable with ```let```, conditional, increment
- remember to check whether you want <= or < or >= or >
- infinite loop!!! Trying to reload or refresh doesn't kill the script. You can close/reopen browser but the server could still be executing the code. You would need to restart the server after the offending code is fixed.

## Looping with while()
- standard ```while``` configuration > declare var, ```while(condition)```, statements
- according to teacher, ```i``` is used to denote variable because it could stand for index or iterator
- avoid infinite loops!

## Looping with do...while()
- always executes at least once!
- standard ```do...while``` > declare var,```do```, statements,```while (condition)```