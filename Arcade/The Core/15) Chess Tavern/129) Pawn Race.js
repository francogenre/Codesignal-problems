/*
Pawn race is a game for two people, played on an ordinary 8 × 8 chessboard. The first player has a white pawn, the second one - a black pawn. Initially the pawns are placed somewhere on the board so that the 1st and the 8th rows are not occupied. Players take turns to make a move.

White pawn moves upwards, black one moves downwards. The following moves are allowed:

one-cell move on the same vertical in the allowed direction;
two-cell move on the same vertical in the allowed direction, if the pawn is standing on the 2nd (for the white pawn) or the 7th (for the black pawn) row. Note that even with the two-cell move a pawn can't jump over the opponent's pawn;
capture move one cell forward in the allowed direction and one cell to the left or to the right.


The purpose of the game is to reach the the 1st row (for the black pawn) or the 8th row (for the white one), or to capture the opponent's pawn.

Given the initial positions and whose turn it is, determine who will win or declare it a draw (i.e. it is impossible for any player to win). Assume that the players play optimally.

Example

For white = "e2", black = "e7", and toMove = 'w', the output should be
solution(white, black, toMove) = "draw";
For white = "e3", black = "d7", and toMove = 'b', the output should be
solution(white, black, toMove) = "black";
For white = "a7", black = "h2", and toMove = 'w', the output should be
solution(white, black, toMove) = "white".
Input/Output

[execution time limit] 4 seconds (js)

[input] string white

Coordinates of the white pawn in the chess notation.

[input] string black

Position of the black pawn in the same notation. It is guaranteed that white ≠ black.

[input] char toMove

'w' if it is the first player's turn, 'b' otherwise.

[output] string

"white", "black" or "draw" depending on the result of the game.

[JavaScript] Syntax Tips

// Prints help message to the console
// Returns a string
function helloWorld(name) {
    console.log("This prints to the console when you Run Tests");
    return "Hello, " + name;
}
*/

unction solution(white, black, toMove) {
let w = 8 - Number(white[1]);
  w -= white[1] === "2";
  let b = Number(black[1]) - 1;
  b -= black[1] == "7";
  if (
    Number(white[1]) >= Number(black[1]) ||
    Math.abs(white[0].charCodeAt(0) - black[0].charCodeAt(0)) > 1
  ) {
    if (w === b) return toMove == "w" ? "white" : "black";
    return w < b ? "white" : "black";
  }
  if (white[0] == black[0]) return "draw";
  if (white[1] == "2" && black[1] == "7")
    return toMove == "b" ? "white" : "black";
  if (white[1] != "2" && black[1] != "7")
    return ((Number(black[1]) - Number(white[1])) & 1) ^ (toMove == "b")
      ? "white"
      : "black";
  if (white[1] == "3" && black[1] == "7") return "black";
  if (white[1] === "2" && black[1] === "6") return "white";
  if (Math.abs(Number(white[1]) - Number(black[1])) & 1)
    return toMove == "w" ? "white" : "black";
  return toMove == "b" ? "white" : "black";
}
