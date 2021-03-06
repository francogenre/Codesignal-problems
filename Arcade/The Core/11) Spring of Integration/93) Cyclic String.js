/*
You’re given a substring s of some cyclic string. What’s the length of the smallest possible string that can be concatenated to itself many times to obtain this cyclic string?

Where:

substring: A string that appears within another string. In other words, s is considered a substring of t if all the characters of s appear in t in the same order, with no other elements in between.

Examples:

cat is a substring of scatter rest is a substring of arrest implied is not a substring of simplified because there are other characters in between happy is not a substring of happiest because they contain different characters

cyclic string: We call a string cyclic if it can be obtained by concatenating another string to itself many times (for example, s2 = "abcabcabcabc..." is cyclic since it can be obtained from s1 = "abc" in such a way).

Example

For s = "cabca", the output should be cyclicString(s) = 3.

"cabca" is a substring of a cycle string "abcabcabcabc..." that can be obtained by concatenating “abc” to itself. Thus, the answer is 3.

Input/Output

[execution time limit] 4 seconds (js)

[input] string s

Guaranteed constraints:
3 ≤ s.length ≤ 15.

[output] integer

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

function cyclicString(s) {
  let arr = s.split("");
  for (let i = 1; i < arr.length; i++) {
    if (isSub(arr.slice(0, i), arr.slice(i))) {
      return i;
    }
  }
  return arr.length;
}

function isSub(sub, candidate) {
  for (let i = 0; i < candidate.length; i++) {
    if (candidate[i] !== sub[i % sub.length]) {
      return false;
    }
  }
  return true;
}
