/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.

  Once you've implemented the logic, test your code by running
  - `npm run test-palindrome`
*/

function isPalindrome(str) {

  // originalString = str.toLowerCase();
  newStr = str.toLowerCase().replace(/[^a-zA-Z0-9]/g , '')
  reversedString = newStr.split("").reverse().join("")

  return reversedString.localeCompare(newStr) == 0

  // return true;
}

module.exports = isPalindrome;
