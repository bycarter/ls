// input: 2 arrays
// output: array, sorted ascending numerical order
// data s: array
// rules:
//  multiply all combinations of items in each array
// algo:
//   declare `productArr` init []
//     iterate over arr1
//       iterate over arr2
//         multiply arr1 item by each arr2 item
//         push product into `productArr`
//         repeat for all items in arr1
//    sort `productArr`

function compareNumericalAscending(a, b) {
  if (a < b) {
    return -1;
  }
  if (a > b) {
    return 1;
  }
  return 0;
}

function comp2(a, b) {
  return a - b;
}
function multiplyAllPairs(arr1, arr2) {
  let prodArr = [];
  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr2.length; j++) {
      prodArr.push(arr1[i] * arr2[j]);
    }
  }
  //prodArr.sort(compareNumericalAscending);
  prodArr.sort(comp2);
  console.log(prodArr);
}


// tests:
multiplyAllPairs([2, 4], [4, 3, 1, 2]);    // [2, 4, 4, 6, 8, 8, 12, 16]
