/*
input: two numbers
output: number, two args multiplied
tests: [3, 5]
data s: none
algo:
// return the result of them multiplied
*/
let tests = [[3, 5], [7, 7]];

function mult(num1, num2) {return num1 * num2};

for (let i in tests) {
  console.log(mult(tests[i][0], tests[i][1]));
}
