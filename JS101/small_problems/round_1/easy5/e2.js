// input: 2 arrays
// output: array
// data s: array
// rules:
//  no duplicate values, even if in input arrays
// algo:
//  declare `arr` initialize to []
//  loop through each array
//  copy to `arr` if not already present
//  return `arr`

function union(arr1, arr2) {
  let arrOut = [];
  for (let item of arr1) {
    if (!arrOut.includes(item)) arrOut.push(item);
  }
  for (let item of arr2) {
    if (!arrOut.includes(item)) arrOut.push(item);
  }

  return console.log(arrOut);
}


// tests:
union([1, 3, 5], [3, 6, 9]);    // [1, 3, 5, 6, 9]
