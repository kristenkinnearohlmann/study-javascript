# Objects and the DOM

## Intro
- document object model DOM

## Object Properties
- syntax to create an object
```
let person = {};
```
- an object with properties
```
let person = {
    name: "John",
    age: 32,
    partTime: false
};
```
- object within objects
- access properties with dot notation
- can change the contents of an object property with normal assignment or via key notation
```
normal assignment
person.age = 33;

//via key
person['age'] = 44;
```
- symbol syntax - use inside an object to hide information; advanced concept with use cases for HR, plugins, etc; a private kind of property
```
let mySymbol = Symbol();
let person = {
    name: 'John',
    age: 32,
    partTime: false,
    [mySymbol]: 'secretInformation'
};
```

## Methods
- functions that get attached to objects
- example syntax
```
let person = {
    name: 'John',
    age: 32,
    partTime: false,
    showInfo: function(realAge) {
        showMessage(this.name + ' is ' + realAge);
    }
};

person.showInfo(34);
```
- need to use ```this``` keyword to access properties and methods within the current object, as shown above - the mysterious ```this```!

## Passing Objects to Functions
- source of problems and bugs, need to be careful!
- pass by reference when using an object so we can change the values of the properties

## Standard Built-In Objects
- MDN page [https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects)
- you can access anything on the .prototype for Date objects, just use the method portion
- example syntax with Date()
```
let now = new Date();
showMessage(now.toDateString());
```
- Math methods examples
```
showMessage(Math.abs(-42));
showMessage(Math.random());
```
- look for methods with a "thumbs down" symbol, which are deprecated (sadly, String.blink() is one such method)
- String methods examples
```
let s = 'Hello';
showMessage(s.charAt(0));
```
- Number methods examples

## Document Object Model (DOM)
- web page is built of objects - the DOM
- in the examples in the utils.js:
  - ```document``` is an object with method ```getElementById```
  - ```getElementById``` returns an object that has the property ```textContent```
  - MDN page [https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model](https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model)
  - DOM interfaces are objects than can be worked with
  - ```Element``` is a tag in the HTML markup

## Styling DOM Elements
- normally done by CSS, Less or Sass, but sometimes will do through JS
- MDN page [https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement)
- ```GetElementById``` returns an ```HTMLElement``` object
- ```style``` property takes CSS
- can't have dashes in names in JS, so CSS properties with dashes convert to camel case (ex. font-weight to fontWeight)
- syntax example
```
const header = document.getElementById('message');

header.style.color = '#00F';
header.style.fontWeight = '100';
```
## Detecting Button Clicks
- simple action to detect in JS
- adding function argument to ```addEventListener``` is an anonymous function (function without a name)
- can execute any code we like
- syntax example
```
const button = document.getElementById('see-review');

button.addEventListener('click',function() {
    console.log('click');
});
```

## Showing and Hiding DOM Elements
- example
```
const button = document.getElementById('see-review');

button.addEventListener('click',function() {
    const review = document.getElementById('review');

    if (review.classList.contains('d-none')) {
        review.classList.remove('d-none');
        button.textContent = 'Close Review';
    } else {
        review.classList.add('d-none');
        button.textContent = 'See Review';
    }
    
});
```
