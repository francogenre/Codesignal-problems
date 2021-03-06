/*
Given an array of integers, replace all the occurrences of with .elemToReplacesubstitutionElem

Example

For , , and , the output should be
.inputArray = [1, 2, 1]elemToReplace = 1substitutionElem = 3arrayReplace(inputArray, elemToReplace, substitutionElem) = [3, 2, 3]

Input/Output

[execution time limit] 4 seconds (js)

[input] array.integer inputArray

Guaranteed constraints:
,
.0 ≤ inputArray.length ≤ 1040 ≤ inputArray[i] ≤ 109

[input] integer elemToReplace

Guaranteed constraints:
.0 ≤ elemToReplace ≤ 109

[input] integer substitutionElem

Guaranteed constraints:
.0 ≤ substitutionElem ≤ 109

[output] array.integer

[JavaScript] Syntax Tips

// Prints help message to the console
// Returns a string
function helloWorld(name) {
    console.log("This prints to the console when you Run Tests");
    return "Hello, " + name;
}
*/

function arrayReplace(inputArray, elemToReplace, substitutionElem) {
for (let i = 0; i < inputArray.length; i++) {
        if (inputArray[i] === elemToReplace) {
            inputArray[i] = substitutionElem;
        }
    }
    return inputArray;
}
