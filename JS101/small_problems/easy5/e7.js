// input: 2 arrays
// output: array
// data s: array
// algo:
// declare `arrOut` initialize to []
// iterate over length of arrIn1
//  push product of arrIn1 and arrIn2 at current index
// return arrOUt

function multiplyList(arr1, arr2) {
  let arrOut = [];
  for (let index in arr1) {
    arrOut.push(arr1[index] * arr2[index]);
  }
  return console.log(arrOut);
}


// tests:
multiplyList([3, 5, 7], [9, 10, 11]);    // [27, 50, 77]
