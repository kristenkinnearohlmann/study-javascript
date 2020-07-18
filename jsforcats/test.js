function makeMoreExciting(string) {
    return string + '!!!!'
}

function yellIt(string) {
    string = string.toUpperCase()
    string = makeMoreExciting(string)
}

console.log(yellIt("I fear no human"))

function logANumber(someNumber) {
    console.log(someNumber)
}
_.times(10, logANumber)

function measureLoopSpeed() {
    var count = 0
    function addOne() { count = count + 1 }

    // Date.now() returns a big number representing the number of milliseconds that have elapsed since Jan 01 1970
    var now = Date.now()

    // Loop until Date.now is 1000 milliseconds (1 second) or more into the future from when we started looping. On each loop, call addOne
    while (Date.now() - now < 1000) addOne()

    // Finally it has been >= 1000ms, so let's print out our total count
    console.log(count)
}

measureLoopSpeed()