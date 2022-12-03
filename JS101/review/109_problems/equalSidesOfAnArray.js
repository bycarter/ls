/*
in: array of numbers
out: num (index)
rules:
_ find index where sum of numbers on either side are equal
__ exclude number at said index
__ if NONE, return -1
_ if array

algo:
_ iterate over array
__ sum both sides
__ IF equal, return index

_ return -1

*/

function findEvenIndex(arr) {
  if (arr.slice(1).reduce((a, b) => a + b, 0) === 0) {
    return 0;
  }
  for (let idx = 1; idx < arr.length; idx++) {
    let left = arr.slice(0, idx).reduce((a, b) => a + b, 0);
    let right = arr.slice(idx + 1).reduce((a, b) => a + b, 0);
    if (left === right) return idx;
  }
  return -1;
}
