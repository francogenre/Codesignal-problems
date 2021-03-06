/*
Implement the missing code, denoted by ellipses. You may not modify the pre-existing code.
Given a string s, determine if it is a subsequence of a given string t.

Example

For t = "CodeSignal" and s = "CoSi", the output should be
solution(t, s) = true;

For t = "CodeSignal" and s = "cosi", the output should be
the output should be
solution(t, s) = false.

Input/Output

[execution time limit] 4 seconds (js)

[input] string t

A string consisting of English letters, whitespace characters (' '), digits and punctuation marks (".,?!=*+-").

Guaranteed constraints:
0 ≤ t.length ≤ 500.

[input] string s

A string consisting of English letters, whitespace characters (' '), digits and punctuation marks (".,?!=*+-").

Guaranteed constraints:
0 ≤ s.length ≤ 50.

[output] boolean

true if the s is a subsequence of t, false otherwise.

[JavaScript] Syntax Tips

// Prints help message to the console
// Returns a string
function helloWorld(name) {
    console.log("This prints to the console when you Run Tests");
    return "Hello, " + name;
}
*/

function solution(t, s) {
  var pattern = "";
  for (var i = 0; i < s.length; i++) {
    pattern += '.';
  }
  var re = new RegExp(pattern);
  return re.test(t);
}
