// Assignment Code
var generateBtn = document.querySelector("#generate");


function generatePassword() {

console.log("Btn Clicked :)")
var passwordCharSet = '';
const key_strings = {
  lowercase: "abcdefghijklmnopqrstuvwxyz",
  uppercase: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
  numbers: "0123456789",
  symbols: "~`!@#$%^&*()_-+={[}]|\:;'<,>.?/",
}

var length = window.prompt("Length of password between 8 - 128 characters", "Enter Here")


if (!length) {
  alert("Enter a number to continue");
  return ""
}

else if (length < 8 || length > 128) {
  passwordCharSet = parseInt(
    alert(
      "Your password must be between 8 - 128 characters long. Please select a number"
    )
)
return ""
} 

 
var lowercase = window.confirm("Use lowercase letters?");
if (lowercase) {
  passwordCharSet += key_strings.lowercase;
  console.log("lowercase selected")
}


var uppercase = window.confirm("Use upper case letters?");
if (uppercase) {  
  passwordCharSet += key_strings.uppercase;
  console.log("uppercase selected")
};

var symbols = window.confirm ("Use symbols?");
if (symbols) {
  passwordCharSet += key_strings.symbols;
  console.log("symbols selected")
}

var numbers = window.confirm ("Use numbers?");
if (numbers) {
  passwordCharSet += key_strings.numbers;
  console.log("numbers selected")
};

if (lowercase == false && uppercase == false && symbols == false && numbers == false){
  alert ("Please select 1 option") 
  return ""
}

console.log(passwordCharSet)
var password = "";
for (let i = 0; i < length; i++) {
  password += passwordCharSet[Math.floor(Math.random() * passwordCharSet.length)]
  console.log (password)

  }

return password;
}

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
generateBtn.addEventListener("click", writePassword);