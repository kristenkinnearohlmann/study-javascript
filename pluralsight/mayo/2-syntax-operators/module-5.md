# Working with Logical Operators and Short-Ciruit Evaluation

## Truthy and Falsy
|True|False|
|---|---|
|Any variable with a value or a Boolean true|Any variable that = false, null, undefined, NaN, ""|

## Logical Operators
- And ```&&```
- Or ```||```
- Not ```!```

## Short Circuiting
- optimization for logical expressions
- bypasses subsequent expressions in ```&&``` or ```||``` based on truthy or falsy
- ```&&``` does this by false - if first expression returns false, the remaining expressions don't execute because the eval will remain false
- ```||``` does this by true - if first expression returns true, the remaining expressions don't execute becuase the eval will remain true

## Operator Precedence
1. Grouping (())
1. Not(!)
1. Multiplication (*)
1. Division (/)
1. Modulus (%)
1. Addition (+)
1. Subtraction (-)
1. Less than (<)
1. Less than or equal (<=)
1. Greater than (>)
1. Greater than or equal (>=)
1. Equal (=+)
1. Not equal (!=)
1. Strict equal (===)
1. Strict not equal (!==)
1. And (&&)
1. Or(||)
1. Assignment (=)