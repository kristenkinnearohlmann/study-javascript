// use const because the value of the variable won't be reassigned, just the values within the array itself
const products = ['toilet paper','bottled water','sanitizer'];
console.log(products);

products[0] = 'paper towels';
console.log(products);

products.pop();
console.log(products);

products.push('bleach');
console.log(products);