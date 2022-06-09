function sum(a, b) {
    return a + b;
}

console.log(sum(10, 10));

function multiplication(a, b) {
    return a * b;
}
console.log(multiplication(10, 10));

function subtraction(a, b) {
    return (a - b);
}
console.log(subtraction(10, 2));


function module(a, b) {
    return (a % b);
}

console.log(module(13, 5))

const storeValue = multiplication(15, 6);

console.log(storeValue);

const valueNumber = sum(20, 4);

console.log(valueNumber);

function division(a, b) {
    return a / b;
}
console.log(division(15, 5));

const valueDivision = division(25, 5);

console.log(valueDivision);

// If you give a function a name that's going to be passed it as a input to another function which is called callback

// If you use a function there no need to use the arrow
// If one or more functions it says that the return value is undefined unless you put the return keyword
setTimeout(function () {
    console.log("Msg show late")
}, 2000);


// If you have one line of code you should drop the curly braces and we can drop a semi colon if there is one line of code
// The arrow functions assumes that is the return value
setTimeout(() => console.log("Data is show"), 3000);
// The arrow function if you want to use more than one line of code you have the curly braces back 
setTimeout(() => {
    console.log("Data is show");
    console.log("Data is show");
}, timeout);


// If you use an arrow function there no need to use the function keyword
setTimeout(() => {
    console.log("Msg show very late")
    console.log("Msg two also show very late")
}, 4000);

