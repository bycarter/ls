// input: num 2x
// output: array
// data s: array
// algo:
//  declare `arrOut` init []
//  create guard clause
//   if count is 0, return `arrOut` empty
//  start loop of times count
//   multipy `numIn` * `numIteration` and add to `arrOut`

function sequence(count, numIn) {
  let arrOut = [];
  if (count === 0) return console.log(arrOut);

  for (let idx = 1; idx <= count; idx++) {
    arrOut.push(numIn * idx);
  }
  console.log(arrOut);
}

// tests:
sequence(5, 1);          // [1, 2, 3, 4, 5]
sequence(4, -7);         // [-7, -14, -21, -28]
sequence(3, 0);          // [0, 0, 0]
sequence(0, 1000000);    // []
