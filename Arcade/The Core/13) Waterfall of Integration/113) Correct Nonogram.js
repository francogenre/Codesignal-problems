/*
A nonogram is also known as Paint by Numbers and Japanese Crossword. The aim in this puzzle is to color the grid into black and white squares. At the top of each column, and at the side of each row, there are sets of one or more numbers which describe the runs of black squares in that row/column in exact order. For example, if you see 10 1 along some column/row, this indicates that there will be a run of exactly ten black squares, followed by one or more white squares, followed by a single black square. The cells along the edges of the grid can also be white.

You are given a square nonogram of size size. Its grid is given as a square matrix nonogramField of size (size + 1) / 2 + size, where the first (size + 1) / 2 cells of each row and and each column define the numbers for the corresponding row/column, and the rest size × size cells define the the grid itself.

Determine if the given nonogram has been solved correctly.

Note: here / means integer division.

Example

For size = 5 and

nonogramField = [["-", "-", "-", "-", "-", "-", "-", "-"],
                 ["-", "-", "-", "2", "2", "1", "-", "1"],
                 ["-", "-", "-", "2", "1", "1", "3", "3"],
                 ["-", "3", "1", "#", "#", "#", ".", "#"],
                 ["-", "-", "2", "#", "#", ".", ".", "."],
                 ["-", "-", "2", ".", ".", ".", "#", "#"],
                 ["-", "1", "2", "#", ".", ".", "#", "#"],
                 ["-", "-", "5", "#", "#", "#", "#", "#"]]
the output should be solution(size, nonogramField) = true;

For size = 5 and

nonogramField = [["-", "-", "-", "-", "-", "-", "-", "-"],
                 ["-", "-", "-", "-", "-", "1", "-", "-"],
                 ["-", "-", "-", "3", "3", "2", "5", "5"],
                 ["-", "-", "3", ".", ".", ".", "#", "#"],
                 ["-", "2", "2", "#", "#", "#", "#", "#"],
                 ["-", "-", "5", "#", "#", "#", "#", "#"],
                 ["-", "-", "5", "#", "#", "#", "#", "#"],
                 ["-", "-", "2", ".", ".", ".", "#", "#"]]
the output should be solution(size, nonogramField) = false.

There are three mistakes in the nonogram:

In the 5th (1-based) row there are numbers ["-", "2", "2"], so there should be two runs of 2 black squares separated by at least one white square. However, there is only one run of 5 black squares.
In the 6th column there are numbers ["-", "1", "2"], so there should be a run of exactly 1 black square, followed by one or more white squares, followed by another 2 black squares. However, there is a single run of 3 black squares not separated by white ones.
Finally, in the 4th row there are numbers ["-", "-", "3"], so there should be a single run of exactly 3 black squares. However, there is just a 2-square run in that row.
Input/Output

[execution time limit] 4 seconds (js)

[input] integer size

A positive integer, the size of the grid.

Guaranteed constraints:
5 ≤ size ≤ 10.

[input] array.array.string nonogramField

A square matrix of strings of size (size + 1) / 2 + size defining the puzzle field.
The first (size + 1) / 2 cells of each row and each column define the numbers for this row/column. If there is no number in the cell, its value is "-".
The remaining size × size cells define the grid, where string "#" denotes black cells and string "." denotes white ones.

Guaranteed constraints:
8 ≤ nonogramField.length ≤ 15,
nonogramField[i].length = nonogramField.length.

[output] boolean

true if the given nonogram is solved correctly and false otherwise.

[JavaScript] Syntax Tips

// Prints help message to the console
// Returns a string
function helloWorld(name) {
    console.log("This prints to the console when you Run Tests");
    return "Hello, " + name;
}
*/

function solution(size, nonogramField) {
let infoLength = Math.floor((size + 1) / 2);
  let correct = true;

  for (let i = infoLength; i < nonogramField.length; i++) {
    let row = [];
    let column = [];
    let nextC;
    let nextR;
    let k;
    let n;
    for (let j = 0; j < infoLength; j++) {
      nextC = nonogramField[j][i];
      nextR = nonogramField[i][j];
      if (nextC !== "-") {
        column.push(Number(nextC));
      }
      if (nextR !== "-") {
        row.push(Number(nextR));
      }
    }
    k = infoLength;
    while (correct && row.length) {
      n = row.shift();
      while (k < nonogramField.length && nonogramField[i][k] === ".") {
        k++;
      }
      if (
        n + k > nonogramField.length ||
        (n > 0 && k == nonogramField.length)
      ) {
        correct = false;
        break;
      }
      for (let h = 0; h < n; h++) {
        if (nonogramField[i][k] !== "#") {
          correct = false;
        }
        k++;
      }
      if (k !== nonogramField.length && nonogramField[i][k] === "#") {
        correct = false;
        break;
      }
    }
    while (correct && k < nonogramField.length) {
      if (nonogramField[i][k] === "#") {
        correct = false;
      }
      k++;
    }
    k = infoLength;
    while (correct && column.length) {
      n = column.shift();
      while (k < nonogramField.length && nonogramField[k][i] === ".") {
        k++;
      }
      if (
        n + k > nonogramField.length ||
        (n > 0 && k == nonogramField.length)
      ) {
        correct = false;
        break;
      }
      for (let h = 0; h < n; h++) {
        if (nonogramField[k][i] !== "#") {
          correct = false;
        }
        k++;
      }
      if (k !== nonogramField.length && nonogramField[k][i] === "#") {
        correct = false;
        break;
      }
    }
    while (correct && k < nonogramField.length) {
      if (nonogramField[k][i] === "#") {
        correct = false;
      }
      k++;
    }
    if (!correct) {
      break;
    }
  }
  return correct;
}
