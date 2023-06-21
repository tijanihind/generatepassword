
# Secure Password Generator

The Secure Password Generator is a JavaScript program that generates secure passwords based on user-defined criteria. It provides a user-friendly interface to select password length and choose from different character types to include in the generated password.

## Features

- **Length Selection**: The user is prompted to enter the desired length of the password, which should be between 8 and 128 characters.

- **Character Type Selection**: The user is presented with a series of prompts to select the character types to include in the password: lowercase letters, uppercase letters, numeric digits, and special characters.

- **Validation**: The program validates the user's input to ensure the password length is within the valid range and at least one character type is selected. If the input is invalid, appropriate error messages are displayed.

- **Password Generation**: Once the user selects the desired password criteria, the program generates a password that meets the specified requirements. The password is a random combination of characters from the selected character types.

- **Display Password**: The generated password is displayed either in an alert box or written to the page, allowing the user to easily copy and use it.

## Screenshots

![Screenshot 1](./images/Screenshot%202023-06-21%20141426.png)
![Screenshot 2](./images/Screenshot%202023-06-21%20141500.png)
![Screenshot 3](./images/Screenshot%202023-06-21%20141531.png)

## Usage

1. Open the `index.html` file in a web browser.
2. Click the "Generate Password" button.
3. Follow the prompts to select the desired password length and character types.
4. Once all prompts are answered, the generated password will be displayed in the designated output area.

## Customization

If you wish to customize the character pools for each type of character (lowercase, uppercase, numeric, and special), you can modify the corresponding variables in the code. Simply update the `lowercaseChars`, `uppercaseChars`, `numericChars`, and `specialChars` variables with your preferred characters.

```javascript
// Define character pools based on selected criteria
var lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
var uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numericChars = "0123456789";
var specialChars = "!@#$%^&*()_+~`|}{[]\\:;?><,./-=";
