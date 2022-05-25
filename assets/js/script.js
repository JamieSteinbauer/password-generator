var generateBtn = document.querySelector("#generate");

// arrays for specific characters
const myArrayUpper = Array.from(Array(26)).map((e,i) => i + 65);  
const alphabetUpper = myArrayUpper.map((x) => String.fromCharCode(x));

const myArrayLower = Array.from(Array(26)).map((e,i) => i + 97);
const alphabetLower = myArrayLower.map((x) => String.fromCharCode(x));

const myArrayNumeric = Array.from(Array(10)).map((e,i) => i + 48);
const numericArray = myArrayNumeric.map((x) => String.fromCharCode(x));

const myArraySpecial = Array.from(Array(15)).map((e,i) => i + 33);
const specialArray = myArraySpecial.map((x) => String.fromCharCode(x));

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// use user prompts to define variables
function generatePassword() {
  var results = "";
  var passwordLength = prompt("How long would you like your password to be? (8-128 characters)");
  var charQty = parseInt(passwordLength);
  if (charQty > 7 || charQty < 129) {
    var lowerCase = window.confirm("Do you want lowercase letters in your password?");
    var upperCase = window.confirm("Do you want uppercase letters in your password?");
    var numeric = window.confirm("Do you want numbers in your password?");
    var special = window.confirm("Do you want special characters in your password?");
  } else {
    window.alert("Invalid entry. Select a length between 8 and 128");
    return generatePassword;
  }

  //empty array to push selected characters into
  var arrayOfCharacters = [];

  if(lowerCase === true) {
    arrayOfCharacters.push(...alphabetLower);
  } 
  if(upperCase === true) {
    arrayOfCharacters.push(...alphabetUpper);
  }
  if(numeric === true) {
    arrayOfCharacters.push(...numericArray);
  }
  if(special === true) {
    arrayOfCharacters.push(...specialArray);
  }

  //if any are true, then return the results
  if(lowerCase || upperCase || numeric || special) {
    for (var i = 0; i < charQty; i++) {
      results += arrayOfCharacters[Math.floor(Math.random() * arrayOfCharacters.length)];
    }
    // if none are true, then return generatePassword to start over
  } else {
    window.alert("A minimum of one variable must be selected to generate a password")
    return generatePassword();
  }
  return results;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
