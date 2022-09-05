// input: array
// output: array
// data s: array
// algo:
//  declare `tempArr` init splice all but last element
//  start loop while tempArr length is not 0
//   remove last element from `tempArr`
//   add element back to `arrIn`

function reverse(arrIn) {
  if (arrIn < 2) return arrIn;
  let tempArr = arrIn.splice(0, (arrIn.length -1));

  while (tempArr.length !== 0) {
    arrIn.push(tempArr.pop());
  }
  return arrIn;
}

// tests:
let list = [1, 2, 3, 4];
let result = reverse(list);
console.log(result); // logs [4,3,2,1]
console.log(list === result); // logs true

let list1 = ["a", "b", "c", "d", "e"];
let result1 = reverse(list1);
console.log(result1); // logs  ["e", "d", "c", "b", "a"]
console.log(list1 === result1); // logs true

let list2 = ["abc"];
let result2 = reverse(list2);
console.log(result2); // logs  ["abc"]
console.log(list2 === result2); // logs true

let list3 = [];
let result3 = reverse(list3);
console.log(result3); // logs []
console.log(list3 === result3); // logs true
