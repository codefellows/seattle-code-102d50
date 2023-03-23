// // JAVASCRIIIIIIPT!

function greetUser() {
  let usersName = prompt("What is your name?");
  console.log(usersName);

  if (usersName == "") {
    usersName = prompt("That's nothing, please put in your name!");
  } else if (usersName == 'Kassie') {
    document.write("Hiya teach!!!!!");
  } else if (usersName == 'Justin') {
    document.write("TA's are AMAZING");
  } else if (usersName == 'Kjell') {
    document.write("TA's are AMAZING");
  } else {
    document.write("Welcome to my page y'all!");
  }
  return usersName;
}

function guessColor() {
  let userResponse = prompt("What's my fav color?");

  while (userResponse.toUpperCase() != 'YELLOW') {
    userResponse = prompt("Nope! Guess again. What's my fav color?");
  }

  document.write("You guessed my favorite color! It's yellow!");
}

function displayTux() {
  let tuxPics = prompt("How many Tux's do you wanna see?");

  for (let i = 0; i < tuxPics; i++) {
    document.write("<p class='tux-tags'>TUX WUZ HERE</p>");
  }
}