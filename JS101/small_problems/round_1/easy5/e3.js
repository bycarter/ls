// input: array
// ouput: array of 2 arrays
// rules:
//  if odd place middle element in first array
// data s: array
// algo:
//  if even split array into two equal length arrays
//    insert split arrays into new array
//  if odd split half + middle in first array, the rest into second
//    insert split arrays into new array

function halvsies(arrIn) {
  let arrOut = [];
  let arrFirst = [];
  let arrSecond = [];

  if (arrIn.length % 2 !== 0) {
    arrFirst = arrIn.slice(0, Math.round(arrIn.length / 2));
    arrSecond = arrIn.slice(Math.round(arrIn.length / 2));
  } else {
    arrFirst = arrIn.slice(0, (arrIn.length / 2));
    arrSecond = arrIn.slice(arrIn.length / 2);
  }
  arrOut[0] = arrFirst;
  arrOut[1] = arrSecond;
  return console.log(arrOut);
}

// tests:
halvsies([1, 2, 3, 4]);       // [[1, 2], [3, 4]]
halvsies([1, 5, 2, 4, 3]);    // [[1, 5, 2], [4, 3]]
halvsies([5]);                // [[5], []]
halvsies([]);                 // [[], []]
