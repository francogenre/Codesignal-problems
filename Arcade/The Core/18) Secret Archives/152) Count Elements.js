/*
You've been invited to a job interview at a famous company that tests programming challenges. To evaluate your coding skills, they have asked you to parse a given problem's input given as an inputString string, and count the number of primitive type elements within it.

The inputString can be either a primitive type variable or an array (possibly multidimensional) that contains elements of the primitive types.
A primitive type variable can be:

an integer number;
a string, which is surrounded by " characters (note that it may contain any character except ");
a boolean, which is either true or false.
Return the total number of primitive type elements inside inputString.

Example

For inputString = "[[0, 20], [33, 99]]", the output should be
solution(inputString) = 4;
For inputString = "[ "one", 2, "three" ]", the output should be
solution(inputString) = 3;
For inputString = "true", the output should be
solution(inputString) = 1;
For inputString = "[[1, 2, [3]], 4]", the output should be
solution(inputString) = 4.
Input/Output

[execution time limit] 4 seconds (js)

[input] string inputString

Correct input of a given problem.

Guaranteed constraints:
2 ≤ inputString.length ≤ 60.

[output] integer

The total number of primitive type elements within the input.

[JavaScript] Syntax Tips

// Prints help message to the console
// Returns a string
function helloWorld(name) {
    console.log("This prints to the console when you Run Tests");
    return "Hello, " + name;
}
*/

let count = 0;
    let i = 0;
    while (i < inputString.length) {
        if (inputString[i] === '"') {
            i++;
            while (inputString[i] !== '"') {
                i++;
            }
        } else if (inputString[i] === '[') {
            i++;
            while (inputString[i] !== ']') {
                if (inputString[i] === '"') {
                    i++;
                    while (inputString[i] !== '"') {
                        i++;
                    }
                } else if (inputString[i] === ',') {
                    i++;
                } else {
                    i++;
                }
            }
        } else if (inputString[i] === ',') {
            i++;
        } else {
            i++;
        }
        count++;
    }
    return count;
}
