// input: num
// output: array
// data s: array
// algo:
//  declare `arrOut` init []
//  declare `numGoesUp` init 1
//  start do loop
//   add `numGoesUp` to `arrOut`
//   increment `numGoesUp`
//   test case: `numGoesUp` < `numIn`
//  log `arrOut`

function sequence(numIn) {
  let arrOut = [];
  let numUp = 1;
  do {
    arrOut.push(numUp);
    numUp += 1;
  } while (numUp <= numIn);
  console.log(arrOut);
}
//  tests:
sequence(5);    // [1, 2, 3, 4, 5]
sequence(3);    // [1, 2, 3]
sequence(1);    // [1]
