var generateBtn = document.querySelector("#generate");
const specialcharacters = "!$#%@&*()"
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

generateBtn.addEventListener("click", writePassword);

function generatePassword() {
    var passwordLength = prompt("Please enter the number of characters you want for you new password.  It must be more than 12 but less than 128.");
  
    var numbers = confirm("Do you want numbers in your password?");
  
    var lowerCases = confirm("Do you want lowercases in your password?");
  
    var upperCases = confirm("Do you want uppercases in your password?");
  
    var special = confirm("Do you want special characters in your password?");

    var minimumCount = 0;

    var minimumNumbers = "";
  var minimumLowerCases = "";
  var minimumUpperCases = "";
  var minimumSpecialCharacters = "";

  var functionArray = [
    function getNumbers() {
      return String.fromCharCode(Math.floor(Math.random() * 10 + 48));
    },

    function getLowerCases() {
      return String.fromCharCode(Math.floor(Math.random() * 26 + 97));
    },

    function getUpperCases() {
      return +String.fromCharCode(Math.floor(Math.random() * 26 + 65));
    },

    function getSpecialCharacters() {
      return specialCharacters(Math.floor(Math.random() * specialCharacters.length));
    }

  ];
  if (numbers === true) {
    minimumNumbers = functionArray[0];
    minimumCount++;

  }

  if (lowerCases === true) {
    minimumLowerCases = functionArray[1];
    minimumCount++;

  }

  if (upperCases === true) {
    minimumUpperCases = functionArray[2];
    minimumCount++;

  }

  if (special === true) {
    minimumSpecialCharacters = functionArray[3];
    minimumCount++;

  }

  var randomPasswordGenerated = "";

  for (let i = 0; i < (parseInt(passwordLength) - minimumCount); i++) {
    var randomNumberPicked = Math.floor(Math.random() * 4);

    randomPasswordGenerated += functionArray[randomNumberPicked]();

  }

  randomPasswordGenerated += minimumNumbers;
  randomPasswordGenerated += minimumLowerCases;
  randomPasswordGenerated += minimumUpperCases;
  randomPasswordGenerated += minimumSpecialCharacters;


  return randomPasswordGenerated;

}