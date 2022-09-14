// input: array
// output: array
// data s: array
// rules:
//  sort the array so that the sub-arrays are ordered based on the sum of their odd numbers
//  sort in ascending order
// algo:
//  declare `arr2` init to copy of `arr` with slice
//  sort with callback using filter only odd and reduce to sum

let arr = [[1, 6, 7], [1, 5, 3], [1, 8, 3]];
let arr2 = arr.slice();

function sumOdd(arrIn) {
  return arrIn.filter(elem => elem % 2 !== 0).reduce((acc, cur) => acc + cur);
}

arr2.sort((a, b) => sumOdd(a) - sumOdd(b));


//  tests:
console.log(arr);
console.log(arr2);
