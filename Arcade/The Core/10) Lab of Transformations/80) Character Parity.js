/*
Given a character, check if it represents an odd digit, an even digit or not a digit at all.

Example

For symbol = '5', the output should be characterParity(symbol) = "odd";
For symbol = '8', the output should be characterParity(symbol) = "even";
For symbol = 'q', the output should be characterParity(symbol) = "not a digit".
Input/Output

[execution time limit] 4 seconds (js)

[input] char symbol

A symbol to check.

Guaranteed constraints:
symbol is guaranteed to be a UTF-8 symbol.

[output] string

[JavaScript (ES6)] Syntax Tips

1
2
3
4
5
6
// Prints help message to the console
// Returns a string
function helloWorld(name) {
console.log("This prints to the console when you Run Tests");
return "Hello, " + name;
}
*/

function characterParity(symbol) {
  let isDigit = /^\d{1}$/.test(symbol);
  let isEven;
  if (isDigit) {
    isEven = Number(symbol) % 2 === 0;
  }
  return isDigit ? isEven ? "even" : "odd" : "not a digit";
}
