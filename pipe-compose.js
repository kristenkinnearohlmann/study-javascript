// https://medium.com/free-code-camp/pipe-and-compose-in-javascript-5b04004ac937
// https://ramdajs.com/
const R = require('ramda')

getName = (person) => person.name
uppercase = (string) => string.toUpperCase()
get6Characters = (string) => string.substring(0,6)
reverse = (string) => string
    .split('')
    .reverse()
    .join('')

console.log(reverse(get6Characters(uppercase(getName({ name: 'Buckethead'} )))))

console.log(
    R.pipe(
        getName,
        uppercase,
        get6Characters,
        reverse
    )({ name: 'Washington'} )
)

// compose is pipe in the other direction
console.log(
    R.compose(
        reverse,
        get6Characters,
        uppercase,
        getName
    )({ name: 'Washington' })
)