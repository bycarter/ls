// time ~ 10 min

// Given an array of numbers, for each number, find out how
// many numbers in the array are smaller than it. When
// counting numbers, only count unique values. That is, if a
// given number occurs multiple times in the array, it
// should only be counted once.
/*
in: arr
out: arr
rules:
_ return array of count of numbers lower than number at that index
_ don't count multiples of lower numbers
algo:
_ copy `arrIn` to `fullArr`
_ declare `onceArr`
_ iterate over `fullArr` if `onceArr` doesn't include `elem`, push to `onceArr`

_ declare `countArr`

__ call `map` on `fullArr` with `elem` as param, 
___call `filter` on `onceArr`, if `fElem` <  `elem`

_ return `countArr`

*/
function smallerNumbersThanCurrent(arrIn) {
  let fullArr = [...arrIn];
  let onceArr = [];
  
  fullArr.forEach(elem => {
    if (!onceArr.includes(elem)) {
      onceArr.push(elem);
    }
  });

  let countArr = fullArr.map(elem => {
    return onceArr.filter(fElem => fElem < elem).length;
  });

  return countArr;
}

// Examples:

console.log(smallerNumbersThanCurrent([8, 1, 2, 2, 3])); // [3, 0, 1, 1, 2]
console.log(smallerNumbersThanCurrent(
  [1, 4, 6, 8, 13, 2, 4, 5, 4])); // [0, 2, 4, 5, 6, 1, 2, 3, 2]
console.log(smallerNumbersThanCurrent([7, 7, 7, 7])); // [0,0,0,0]
console.log(smallerNumbersThanCurrent([6, 5, 4, 8])); // [2, 1, 0, 3]
console.log(smallerNumbersThanCurrent([1])); // [0]
