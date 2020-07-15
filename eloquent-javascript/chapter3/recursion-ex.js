// example from Eloquent
function power(base, exponent) {
    console.log(`Start of power function. Base is ${base} and exponent is ${exponent}`);
    if (exponent == 0) {
        console.log(`Exponent 0 case. Base is ${base} and exponent is ${exponent}`);
        return 1;
    } else {
        console.log(`Expression executed is ${base * power(base, exponent -1)}`);
        return base * power(base, exponent -1);
    }
}
console.log(power(2,3));

// example from https://www.javascripttutorial.net/javascript-recursive-function/
function countDown(fromNumber) {
    console.log(fromNumber);
    let nextNumber = fromNumber - 1;
    if (nextNumber > 0) {
        countDown(nextNumber);
    }
}

countDown(3);