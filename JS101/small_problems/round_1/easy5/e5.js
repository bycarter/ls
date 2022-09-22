// input: 2 arrays
// output: array
// ds: array
// rules:
//  combine arrays alternating input
// algo:
//  iterate over length of array
//  copy item from `arr1` then `arr2`
//  return array

function interleave(arr1, arr2) {
  let arrOut = [];
  for (let index in arr1) {
    arrOut.push(arr1[index]);
    arrOut.push(arr2[index]);
  }
  return console.log(arrOut);
}



//  test:
interleave([1, 2, 3], ['a', 'b', 'c']);    // [1, "a", 2, "b", 3, "c"]
