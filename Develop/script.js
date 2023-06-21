
// Function to generate a password
function generatePassword() {
  // Prompt for password criteria
  var length = parseInt(prompt("Enter the length of the password (8-128 characters):"));

  // Validate the length of the password
  if (isNaN(length) || length < 8 || length > 128) {
    alert("Invalid password length. Please enter a number between 8 and 128.");
    return ""; // Return an empty string
  }

  var includeLowercase = confirm("Include lowercase characters?");
  var includeUppercase = confirm("Include uppercase characters?");
  var includeNumeric = confirm("Include numeric characters?");
  var includeSpecial = confirm("Include special characters?");

  // Validate at least one character type is selected
  if (!includeLowercase && !includeUppercase && !includeNumeric && !includeSpecial) {
    alert("At least one character type must be selected.");
    return ""; // Return an empty string
  }

  // Define character pools based on selected criteria
  var lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
  var uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var numericChars = "0123456789";
  var specialChars = "!@#$%^&*()_+~`|}{[]\:;?><,./-=";

  // Generate the password based on selected criteria
  var password = "";
  var selectedChars = "";

  if (includeLowercase) {
    selectedChars += lowercaseChars;
  }

  if (includeUppercase) {
    selectedChars += uppercaseChars;
  }

  if (includeNumeric) {
    selectedChars += numericChars;
  }

  if (includeSpecial) {
    selectedChars += specialChars;
  }

  for (var i = 0; i < length; i++) {
    var randomIndex = Math.floor(Math.random() * selectedChars.length);
    password += selectedChars.charAt(randomIndex);
  }

  return password;
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
