// Inside the parentheses, you put the condition in which to keep running the loop.
//So this means, as long as the condition is true, the loop will continue. 
// While loop will check the condition first
let password = "turbo";
let userGuess = "";

while (userGuess != password) {
    userGuess = prompt("Please enter your password");
}
alert("Login Successful");


// This code will run at least once and then check condition after 
// do while is very effective 
// 5*4*3*2*1
let factorial = 1;
let number = 5;
let orignal = number;

do {

    factorial = factorial * number;
    number--;

} while (number > 0);

console.log(orignal + " factorial is " + factorial);
// While loop example
let text = "";
let i = 0;
while (i < 10) {
    text += "\n The number is " + i;
    i++
}
console.log(text);

// Do while example
let sentence = "";
let j = 0;
do {
    sentence += "\n The number is " + j;
    j++;
} while (j < 10);
console.log(sentence);
