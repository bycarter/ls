// input: array of numbers
// output: array of numbers
// data s: array
// algo:
//  copy first item to new array
//  use reduce function to add two array values and push to new array
//  iterate through array

function runningTotal(arr) {
  if (arr.length === 0) {
    return console.log([]);
  }
  let runTot = [arr[0]];
  for (let idx = 1; idx < arr.length; idx++) {
    runTot[idx] = runTot[idx - 1] + arr[idx]
  }
  return console.log(runTot);
}

runningTotal([2, 5, 13]);             // [2, 7, 20]
runningTotal([14, 11, 7, 15, 20]);    // [14, 25, 32, 47, 67]
runningTotal([3]);                    // [3]
runningTotal([]);                     // []2
