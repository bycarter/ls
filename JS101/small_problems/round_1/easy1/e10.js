/*
input: single number, int > 1
output: int number
ds: array to hold multiples
algo:
// sum all numbers from 1 to target/input (inclusive) that are multiples of 3 or 5.
// create array
// add all multiples of 3 to array
// iterate through increasing multiples of 5
// - check if multiple is in array
// - if not in array, add to array, otherwise skip
*/
// test cases
let tests = [2, 3, 5, 10, 1000];

function sumMulti(target) {
  let multiples = [];
  if (target < 3) {
    return 0;
  }
  for (let i = 3; i <= target; i += 3) {
    multiples.push(i);
  }
  for (let i = 5; i <= target; i += 5) {
    if (!multiples.includes(i)) {
      multiples.push(i);
    }
  }
  return multiples.reduce((prev, current) => prev + current);
}

for (let i in tests) {
  console.log(sumMulti(tests[i]));
}
