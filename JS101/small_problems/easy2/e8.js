//in: an array of primitives
//out: an array of every odd item
//ex: (below)
//ds: array
//algo:
//  create temp array
//  loop through argument starting at index 1, adding 2 to index value

// first method
let oddities1 = arr => {
  let tempArr = [];
  for (let idx = 0; idx < arr.length; idx += 2) {
    tempArr.push(arr[idx]);
  }
  return tempArr;
}
// second method
let oddities = arr => {
  let tempArr = [];
  for (let vals of arr) {
    tempArr.push(vals);
    arr.shift();
  }
  return tempArr;
}

console.log(oddities([2, 3, 4, 5, 6])); // logs [2, 4, 6]
console.log(oddities([1, 2, 3, 4, 5, 6])); // logs [1, 3, 5]
console.log(oddities(["abc", "def"])); // logs ['abc']
console.log(oddities([123])); // logs [123]
console.log(oddities([])); // logs []
