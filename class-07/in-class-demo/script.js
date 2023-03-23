// // JAVASCRIIIIIIPT!

// FUNCTION BASICS

//Structure of function DECLARATION (the way you'll do it in 102)
// function addTwoNumbers(parameters){code to execute}

// I'm declaring a function here (creating a command)
function addTwoNumbers(number1, number2){
  document.write(number1 + number2);
  return number1 + number2;
}

// Parameters live in parenthesis - this is extra information the function will expect
// A return statement is how you can get information out of a function

// ------------------------------------------------------------------------

// Invoking/calling/using a command by name
addTwoNumbers(1, 4);

// You can also see where I'm using this function in the HTML, lines 44 & 79

// ------------------------------------------------------------------------

// If I want to access the result of a function, I need to store it in a new variable
let myNewNumber = addTwoNumbers(10, 10); // myNewNumber holds the value of 20 returned from the function

// ------------------------------------------------------------------------

// Example of a function EXPRESSION <-- you'll also use this way later, but not in 102
// let myFunction = function(){
//   execute this code; 
// }

// ------------------------------------------------

function greetUser(){
  let usersName = prompt("What is your name?");
  console.log(usersName);
  
  if (usersName == ""){
    usersName = prompt("That's nothing, please put in your name!");
  } else if (usersName == 'Kassie'){
    document.write("Hiya teach!!!!!");
  } else if (usersName == 'Justin'){
    document.write("TA's are AMAZING");
  } else if (usersName == 'Kjell'){
    document.write("TA's are AMAZING");
  } else {
    document.write("Welcome to my page y'all!");
  }
  return usersName;
}

let theirName = greetUser();
console.log(theirName);


// let sum = addTwoNumbers(1, 4); // 5
// addTwoNumbers(19, 60); // 79
// addTwoNumbers("hello", "world"); // helloworld || hello-world || hello+world || error?
// addTwoNumbers("19", 19); // Same as above?
// addTwoNumbers(19, "hello"); // Same as above?

// addTwoNumbers(42, 42);