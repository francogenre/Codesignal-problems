/*
John has always had trouble remembering chess game positions. To help himself with remembering, he decided to store game positions in strings. He came up with the following position notation:

The notation is built for the current game position row by row from top to bottom, with '/' separating each row notation;
Within each row, the contents of each square are described from the leftmost column to the rightmost;
Each piece is identified by a single letter taken from the standard English names ('P' = pawn, 'N' = knight, 'B' = bishop, 'R' = rook, 'Q' = queen, 'K' = king);
White pieces are designated using upper-case letters ("PNBRQK") while black pieces use lowercase ("pnbrqk");
Empty squares are noted using digits 1 through 8 (the number of empty squares from the last piece);
Empty lines are noted as "8".
For example, for the initial position (shown in the picture below) the notation will look like this:

"rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR"



After the white pawn moves from e2 to e4, the notation will be as follows:

"rnbqkbnr/pppppppp/8/8/4P3/8/PPPP1PPP/RNBQKBNR"

John has written down some positions using his notation, and now he wants to rotate the board 90 degrees clockwise and see what notation for the new board would look like. Help him with this task.

Example

For notation = "rnbqkbnr/pppppppp/8/8/4P3/8/PPPP1PPP/RNBQKBNR", the output should be
solution(notation) = "RP4pr/NP4pn/BP4pb/QP4pq/K2P2pk/BP4pb/NP4pn/RP4pr".

The notation corresponds to the initial position with one move made (white pawn from e2 to e4).
After rotating the board, it will look like this:



So, the notation of the new position is "RP4pr/NP4pn/BP4pb/QP4pq/K2P2pk/BP4pb/NP4pn/RP4pr".

Input/Output

[execution time limit] 4 seconds (js)

[input] string notation

Game position in John's notation. It is guaranteed that notation is correct, but not guaranteed that it represents a valid game position.

Guaranteed constraints:
15 ≤ notation.length ≤ 71.

[output] string

Notation for the position of the game board, rotated 90 degrees clockwise.

[JavaScript] Syntax Tips

// Prints help message to the console
// Returns a string
function helloWorld(name) {
    console.log("This prints to the console when you Run Tests");
    return "Hello, " + name;
}
*/

function solution(notation) {
  let rows = notation.split('/');
  let newRows = [];
  for (let i = 0; i < rows.length; i++) {
    let row = rows[i];
    let newRow = '';
    for (let j = row.length - 1; j >= 0; j--) {
      newRow += row[j];
    }
    newRows.push(newRow);
  }
  return newRows.join('/');
}
