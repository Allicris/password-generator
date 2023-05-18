//This variable would take the data from the prompts to create a new password
var passwordOptions = [];
//Set the password length input to be no less than 8 or greater than 128 characters
var passwordLength = 8;
//Created Array's for all uppercase,lowercase, numbers and special characters and include it in the prompt
var specialCharacters = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "+", "-", "=", "{", "}", "|", ":", ";", "<", ">", "?", "/", "`", "~"];
var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function prompts() {
  //This function turns the number into a string
  passwordLength = parseInt(prompt("How many characters would you like your password to have?"));
//isNan makes sure that we are selecting a number not a character or a letter, the password is set to not be greater than 128 or less than 8
  if (passwordLength === isNaN || passwordLength > 128 || passwordLength < 8) {
    alert("Your password must be a number between 8 - 128.");
    return false;
  }
//prompting
  if (confirm("Would you like your password to have special characters?")) {
    passwordOptions = passwordOptions.concat(specialCharacters)
  }
  if (confirm("Would you like your password to have lower-case letters?")) {
    passwordOptions = passwordOptions.concat(lowerCase)
  }

  if (confirm("Would you like your password to have upper-case letters?")) {
    passwordOptions = passwordOptions.concat(upperCase)
  }

  if (confirm("Would you like your password to have numbers?")) {
    passwordOptions = passwordOptions.concat(numbers)
  }
  return true;
}

// This generates a random password based on the password length 
function generatePassword() {
var password = "";
for(var i = 0; i < passwordLength; i++) {
  var randomCharacter = Math.floor(Math.random()  * passwordOptions.length)
  password = password + passwordOptions[randomCharacter];
}
return password;
}
  //Took the data from the password generated, if all the criteria was met and included it in the return so it could display the generated password
function writePassword() {
  var truePrompts = prompts();
  
  if (truePrompts) {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
// Writes password to the #password input
  passwordText.value = password;
  }
}


