/*
Given a positive integer number and a certain length, we need to modify the given number to have a specified length. We are allowed to do that either by cutting out leading digits (if the number needs to be shortened) or by adding 0s in front of the original number.

Example

For number = 1234 and width = 2, the output should be integerToStringOfFixedWidth(number, width) = "34";
For number = 1234 and width = 4, the output should be integerToStringOfFixedWidth(number, width) = "1234";
For number = 1234 and width = 5, the output should be integerToStringOfFixedWidth(number, width) = "01234".
Input/Output

[execution time limit] 4 seconds (js)

[input] integer number

A non-negative integer.

Guaranteed constraints:
0 ≤ number ≤ 109.

[input] integer width

A positive integer representing the desired length.

Guaranteed constraints:
1 ≤ width ≤ 50.

[output] string

The modified version of number as described above.
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

function solution(number, width) {
 return ("0".repeat(width) + number).substr(-width);
}
