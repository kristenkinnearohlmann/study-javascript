# All about the Switch Statement

## Intro

## Swith
- use instead of multiple ```if...else``` statements
- use case statements to compare to expression in swith(exp)
- need to use the ```break``` statement to avoid fall through
- ```default``` for final catch
- syntax
```
switch(<expression>) {
    case <expression 1>:
    // Statements(s);
    break;
    case <expression 2>:
    // Statements(s);
    break;
    default: // If no other case is matched
    // Statement(s);
    break;
}
```
- ```default``` can be placed anywhere within the ```switch`` statement (!) > too weird, I'll be putting mine at the bottom to concur with other languages
- good, JS convention is to have default at the bottom
- example
```
<!DOCTYPE html>
<html>
    <head>
        <title>Switch Statement Samples</title>
    </head>

    <body>
        <button onclick="simpleSwitch();">Simple Switch Sample</button>
        <script>
            function simpleSwitch() {
                let productId = 3;

                switch(productId) {
                    case 1:
                        console.log("Product 1");
                        break;
                    case 2:
                        console.log("Product 2");
                        break;
                    default:
                        console.log("Unknown product");
                        break;
                }
            }
        </script>
    </body>
</html>
```

## Multiple Case Statements and Forget a Break
- you can use multiple case statements and allow the fall-through if desired
- example
```
<!DOCTYPE html>
<html>
    <head>
        <title>Switch Statement Samples</title>
    </head>

    <body>
        <button onclick="multipleCase();">Multiple Case Statements</button>
        <br>
        <button onclick="forgetABreak();">Forget a Break</button>
        <script>
            function multipleCase(){
                let color = "Red";

                switch (color) {
                    case "Red":
                    case "Pink":
                        console.log("The color is red");
                        break;
                    case "Blue":
                    case "Light Blue":
                    case "Dark Blue":
                        console.log("The color is blue");
                        break;
                    case "Gray":
                    case "Grey":
                        console.log("The color is grey");
                        break;
                    default:
                        console.log("Unknown color");
                        break;
                }
            }

            function forgetABreak() {
                let productId = 2;

                switch(productId) {
                    case 1:
                        console.log("HL Road Frame - Black, 58");
                        break;
                    case 2:
                        console.log("Sport-100 Helmet, Red");
                    case 3:
                        console.log("Mountain Bike Socks, M");
                        break;
                    default:
                        console.log("Unknown product");
                        break;
                }
            }
        </script>
    </body>
</html>
```

## Switch Uses Strict Comparison
- type and value must match for the case statement
- example
```
<!DOCTYPE html>
<html>
    <head>
        <title>Switch Statement Samples</title>
    </head>

    <body>
        <button onclick="strictComparison();">Strict Comparison</button>
        <script>
            function strictComparison() {
                let productId = "2"; // set to string

                switch(productId) {
                    // case expressions are numeric
                    case 1:
                        console.log("HL Road Frame - Black, 58");
                        break;
                    case 2:
                        console.log("Sport-100 Helmet, Red");
                        break;
                    case 3:
                        console.log("Mountain Bike Socks, M");
                        break;
                    default:
                        console.log("Unknown product");
                }
            }
        </script>
    </body>
</html>
```

## Block-level Scope Issue with Switch Statements
- switch statement itself is a block but each set of statements in a case is not UNLESS enclosed with {}
- in the example, JS can see all the declarations of the ```message``` variable because the statements are not enclosed to be a block - a SyntaxError is thrown
- example
```
<!DOCTYPE html>
<html>
    <head>
        <title>Switch Statement Samples</title>
    </head>

    <body>
        <button onclick="blockScopeProblem();">Block scope problem</button>
        <br>
        <button onclick="blockScopeFix();">Block scope fix</button>
        <script>
            // function blockScopeProblem() {
            //     let productId = 2;

            //     switch(productId) {
            //         case 1:
            //             let message = "HL Road Frame - Black, 58";
            //             console.log(message);
            //             break;
            //         case 2:
            //             let message = "Sport-100 Helmet, Red";
            //             console.log(message);
            //             break;
            //         case 3:
            //             let message = "Mountain Bike Socks, M";
            //             console.log(message);
            //             break;
            //         default:
            //             let message = "Unknown product";
            //             console.log(message);
            //             break;
            //     }
            // }

            function blockScopeFix() {
                let productId = 2;

                switch(productId) {
                    case 1: {
                        let message = "HL Road Frame - Black, 58";
                        console.log(message);
                        break;
                    }
                    case 2: {
                        let message = "Sport-100 Helmet, Red";
                        console.log(message);
                        break;
                    }
                    case 3: {
                        let message = "Mountain Bike Socks, M";
                        console.log(message);
                        break;
                    }
                    default: {
                        let message = "Unknown product";
                        console.log(message);
                        break;
                    }
                }
            }            
        </script>
    </body>
</html>
```