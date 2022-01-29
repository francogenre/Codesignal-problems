/*
Given two cells on the standard chess board, determine whether they have the same color or not.

Example

For cell1 = "A1" and cell2 = "C3", the output should be
solution(cell1, cell2) = true.



For cell1 = "A1" and cell2 = "H3", the output should be
solution(cell1, cell2) = false.



Input/Output

[execution time limit] 4 seconds (js)

[input] string cell1

Guaranteed constraints:
cell1.length = 2,
'A' ≤ cell1[0] ≤ 'H',
1 ≤ cell1[1] ≤ 8.

[input] string cell2

Guaranteed constraints:
cell2.length = 2,
'A' ≤ cell2[0] ≤ 'H',
1 ≤ cell2[1] ≤ 8.

[output] boolean

true if both cells have the same color, false otherwise.

[JavaScript] Syntax Tips

// Prints help message to the console
// Returns a string
function helloWorld(name) {
    console.log("This prints to the console when you Run Tests");
    return "Hello, " + name;
}
*/

function solution(cell1, cell2) {
  var row1 = cell1[0].charCodeAt(0) - 65;
    var col1 = cell1[1] - 1;
    var row2 = cell2[0].charCodeAt(0) - 65;
    var col2 = cell2[1] - 1;
    var rowDiff = Math.abs(row1 - row2);
    var colDiff = Math.abs(col1 - col2);
    if(rowDiff === colDiff){
        return true;
    }else{
        return false;
    } 
}
