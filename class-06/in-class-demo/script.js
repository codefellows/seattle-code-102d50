// JAVASCRIIIIIIPT!

// Basic commands
// alert(); --> a pop-up box with a message
// console.log(); --> show some information in the developer console
// document.write(); --> put new content on the HTML page
// prompt(); --> get information from the user

// ------------------------------------------------------------------------
// What is a variable? A container for data/information

// 4 ways to declare a variable
// let <-- Yes
// const <-- Yes
// var <-- NO, not in 102
// (nothing) <-- NO, not in 102

// Example of declaring a CHANGEABLE VARIABLE
// Variables declared with the 'let' keyword can have their value REASSIGNED (changed)
let myName = 'Kassie';
document.write(myName);
// change the value
myName = 'Kassandra';
document.write(myName);

// CONSTANT VARIABLES CAN NOT BE REASSIGNED
const firstPet = "Hazel"
// firstPet = "Chelsea" <-- trying to reassign the value would give us an error and stop our JavaScript.

// ----------------------------------------------------

// TWO WAYS YOU CAN ASSIGN VALUE TO A VARIABLE
// declare a variable first
let num;
// then assign value to the variable
num = 42;

// OR...

// declare a variable AND assign it a value at the same time
let thisNum = 24;

// ----------------------------------------------------

// VARIABLE NAMING
// variable names are typically camel-cased
// each variable must have a unique identifier (name)
let myFavColor = 'rainbow';
let myOtherFavColor = 'yellow';

// ----------------------------------------------------

// DATA TYPES
// strings --> TEXT --> Surrounded in quotes: 'Kassie', '2', 'two'
// number --> 2, 42, 120
// boolean --> TRUE or FALSE

// ----------------------------------------------------

// prompt the user for information
let usersName = prompt("What is your name?");

// ----------------------------------------------------

// CONDITIONAL LOGIC
// basic structure of conditional logic
// if (this is true){execute the code in these brackets}
// if (this is true){
//  execute the code in these brackets
// } else if (this is true instead of the previous one) {
//  execute the code in these brackets
// } else {for ANYTHING else not previously specified, execute the code in these brackets}

if (usersName == 'Kassie'){
  document.write("Hiya teach!!!!!");
} else if (usersName == 'Justin'){
  document.write("TA's are AMAZING");
} else if (usersName == 'Kjell'){
  document.write("TA's are AMAZING");
} else {
  document.write("Welcome to my page y'all!");
}

// This next line will only happen after the conditional logic is done executing.
document.write("        I like turtles");

// An example of how you can turn a variable's value to all lowercase <-- extra!!!!
// let usersName = 'KASSIE'
// usersName = usersName.toLowerCase();
// console.log('kassie' == usersName); 