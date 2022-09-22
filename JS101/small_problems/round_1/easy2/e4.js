/*
input: number
output: number, sqr of number
tests: [3, 5]
data s: none
algo:
// return the result of number ^2
*/
let tests = [[3, 5], [7, 7]];

function mult(num1, num2) {return num1 * num2};
function square(num) {return mult(num, num)};

for (let i in tests) {
  for (let j in tests[i]) {
    console.log(square(tests[i][j]));
  }
}

