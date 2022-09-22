// input: array of ints
// output: num
// data s: array
// algo:
//  decl `sum` init to 0
//  iterate over array
//   add each item to `sum`
//  log floor of `sum` divided by arr length

function average(arr) {
  let sum = arr.reduce((curr, prev) => curr + prev);
  return console.log(Math.floor(sum / arr.length));
}
  

// tests:
average([1, 5, 87, 45, 8, 8]);       // 25
average([9, 47, 23, 95, 16, 52]);    // 40
