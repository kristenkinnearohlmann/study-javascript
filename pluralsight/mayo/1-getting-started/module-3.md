# JS Beginnings

## Intro
- add JS to HTML
- multi JS files
- formatting code/whitespace
- detect/fix errors
- case sensitivity
- comment code

## Add to HTML
- this is code directly running from HTML
- enclose code in ```<script></script>```
- place ```<script></script>``` directly above ```</body>``` tag
- best practice is to have JS in its own file

## JS files
- separation of concerns, allows for team development
- can use separate files in multiple pages
- load via ```<script src="./filename.js"></script>```
- ```./``` convention is used in a lot of servers to represent current path > _I found this out working with vuepress!_
- libraries that span an entire project and don't rely on the web page can be declared at the top of the HTML file in the ```<head></head>``` section
- if you have scripts that are modifying the page itself, they need to be declared at the end of the file just above the ```</body>``` tag so all the HTML can load

## Formatting
- ignores whitespace even between symbols (ex. can tab the function name away from its args and it still works) but use with wisdom

## Errors
- use Console to find errors

## Case Sensitivity
- JS is case-sensitive
- camel-case is standard

## Comments
- single line comments: ```// Single line comment```
- multi-line comments: ```/* Multi */```