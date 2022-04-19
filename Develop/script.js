var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function generatePassword() {
  var passwordLength = prompt("How long would you like your password to be? (8-128 characters)");
  var passwordLength = parseInt(passwordLength);
  if (passwordLength < 8 || passwordLength > 128) {
    alert("Password must be between 8 and 128 characters");
    return generatePassword();
  }
  else {
    return passwordLength;
  };
}

function chooseCharacters() {
  var characterTypes = [];
  var characterTypes = prompt("What character types would you like in your password? (lowercase, uppercase, numeric, special)");
  if (characterTypes === "lowercase") {
    var lowercase = "abcdefghijklmnopqrstuvwxyz";
    return lowercase;
  }
  else if (characterTypes === "uppercase") {
    var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    return uppercase;
  }
  else if (characterTypes === "numeric") {
    var numeric = "0123456789";
    return numeric;
  }
  else if (characterTypes === "special") {
    var special = "!@#$%^&*()_+";
    return special;
  }
  else {
    alert("You must choose at least one character type");
    return generatePassword();
  }
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
