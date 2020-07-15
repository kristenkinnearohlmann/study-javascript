# Variables and Constants

## Intro
- stores single pieces of info
- define variable
- declaring
- naming
- errors
- changing values
- constants
- ```var``` keyword - no longer a best practice

## What?
- data is stored in computer memory, the variable helps to reference rather than the very long address in memory
- declaring the variable

## Declaring
- use ```let``` keyword
- best practice to end line of code with semicolon

## Using ```let```
- best practice to declare variables with single ```let``` then spaced onto separate lines
```Javascript
let price = 49.99,
    name = 'Hiking Boots',
    discounted = false;
```

## Naming
- any word except keywords
- start with _, $ or a letter
- followed by zero or more _, $, letter or number
- be brief but descriptive
- camel case ```accountNumber```
- ```_``` usually denotes a private variable ```_accountNumber```
- $ are discouraged in variable names but is valid
- dunder notation ```__proto```, usually reserved

## Errors
- "lexically bound" refers to keyword
- you can create a variable without assignment but it can create unexpected errors, usually undefined
- best practice is to declare a variable and set its value

## Changing Values
- normal assignment rules as with other languages

## Constants
- clues developers that something is not supposed to change
- use ```const``` in place of ```let``` to declare
- need to set constant to a value
- there is no best practice to declare in all caps - beware!

## ```var```
- ```let``` and ```const``` have replaced ```var```, relatively new code
- you don't get errors you expect (ex. using ```var``` to declare, you can reference a variable before declaring it and no error generates)
