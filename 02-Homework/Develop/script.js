// Assignment Code
var generateBtn = document.querySelector("#generate");
var uppercase = ["A","B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var lowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var special = ["!", "@", "#", "$", "%", "^", "&", "*",];
var numeric = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
var possibleArray = "";
var charset = "";
var generatePassword = "";

window.onload = alert("Welcome, generate password")
// generateBtn.addEventListener("click", writePassword);
// Write password to the #password input
function generatePass() {
  var length = window.prompt("Your password must have 8-128 characters");
  if (!length || length < 8 || length >= 128) {
    return alert("Please Try Again");
    // generatePassword();
  }
// uppercase generator
  // var userUppercase = window.confirm("WOULD YOU LIKE UPPER CASE?");
  // if (userUppercase === true) {
  //   for (var x = 0; x < length; x++){
  //     var indexpossibility = Math.floor(Math.random() * uppercase.length);
  //     var charPossibility = uppercase[indexpossibility];
  //     possibleArray.push(charPossibility);
  //   }
  // }

  var confirmUpper = window.confirm("WOULD YOU LIKE UPPER CASE?");
  if (confirmUpper) {
    charset += uppercase
    console.log(charset)
  }
  
// lowercase generator for password
  // var userLowercase = window.confirm("would you like lowercase?");
  // if (userLowercase === true) {
  //   for (var x = 0; x < length; x++){
  //     var indexpossibility = Math.floor(Math.random() * lowercase.length);
  //     var charPossibility = lowercase[indexpossibility];
  //     possibleArray.push(charPossibility);
  //   }
  // }

  var confirmLower = window.confirm("would you like lowercase?");
  if (confirmLower) {
    charset += lowercase
    console.log(charset)
  }

// number generator for password
  // var userNumeric = window.confirm("Would you like Numbers?");
  // if (userNumeric === true) {
  //   for (var x = 0; x < length; x++){
  //     var indexpossibility = Math.floor(Math.random() * numeric.length);
  //     var charPossibility = numeric[indexpossibility];
  //     possibleArray.push(charPossibility);
  //   }

  var confirmNumeric = window.confirm("Would you like numbers?");
  if (confirmNumeric) {
    charset += numeric
    console.log(charset)
  }

// special character generator for password
  // var userSpecial = window.confirm("Would you like Special Characters?");
  // if (userSpecial === true) {
  //   for (var x = 0; x < length; x++){
  //     var indexpossibility = Math.floor(Math.random() * special.length);
  //     var charPossibility = special[indexpossibility];
  //     possibleArray.push(charPossibility);
  //   }

  var confirmSpecials = window.confirm("Would you like to use special character?");
  if (confirmSpecials) {
    charset += special
    console.log(charset)
  }

  if (!confirmUpper && !confirmLower && !confirmNumeric && !confirmSpecials){
    alert("you better choose one")
    generatePass()
  } 
  for (x = 0; x < length; x++) {
    generatePassword += charset.charAt(Math.floor(Math.random() * charset.length));
  }
    // console.log(possibleArray);

// generate the password
  //   for (var x = 0; x<passwordLength; x++) {
  //     var indexpossibility = Math.floor(Math.random() * possibleArray.length)
  //     var charPossibility = possibleArray[indexpossibility];
  //     result.push(charPossibility);
  //   }
  // }

  return generatePassword
  // var random = confirm(generatePass);
}

var generateBtn = document.querySelector("#generate");

function writePassword() {
  var password = generatePass();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}
// Add event listener to generate button

generateBtn.addEventListener("click", writePassword);




