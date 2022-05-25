var generateBtn = document.querySelector("#generate");

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

  var arrayOfCharacters = [];

  if(lowerCase === true) {
    arrayOfCharacters.push(...alphabetUpper);
  } 
  if(upperCase === true) {
    arrayOfCharacters.push(...alphabetLower);
  }
  if(numeric === true) {
    arrayOfCharacters.push(...numericArray);
  }
  if(special === true) {
    arrayOfCharacters.push(...specialArray);
  }

  if(lowerCase || upperCase || numeric || special) {
    for (var i = 0; i < charQty; i++) {
      results += arrayOfCharacters[Math.floor(Math.random() * arrayOfCharacters.length)];
    }
  } else {
    window.alert("A minimum of one variable must be selected to generate a password")
    return generatePassword();
  }
}

// function chooseCharacters() {
//   var characterTypesArr = [];
//   var characterTypes = prompt("What character types would you like in your password? (lowercase, uppercase, numeric, special)");
//   if (characterTypes === "lowercase") {
//     var lowercase = window.confirm("abcdefghijklmnopqrstuvwxyz");
//     return lowercase;
//   }
//   else if (characterTypes === "uppercase") {
//     var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
//     return uppercase;
//   }
//   else if (characterTypes === "numeric") {
//     var numeric = "0123456789";
//     return numeric;
//   }
//   else if (characterTypes === "special") {
//     var special = "!@#$%^&*()_+";
//     return special;
//   }
//   else {
//     alert("You must choose at least one character type");
//     return generatePassword();
//   }
// }

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
