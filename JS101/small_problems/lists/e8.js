// input: 2d array
// output: array
// data s: array
// rules:
//  list each element in inner array at index 0 for index 1 times
// algo:
//  iterate through array
//  add each element at 0 for 1 times

// TODO - refactor map and use new method / logic
function buyFruit(arr) {
  let temp = arr.flat();
  let arrOut = [];
  for (let i = 0; i < temp.length; i += 2) {
    for (let j = 0; j < temp[i + 1]; j+= 1) {
      arrOut.push(temp[i]);
    }
  }
  return arrOut;
}

// tests:
console.log(buyFruit([['apple', 3], ['orange', 1], ['banana', 2]]));
// returns ["apple", "apple", "apple", "orange", "banana", "banana"]
