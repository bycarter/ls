let numbers1 = [1, 3, 5, 7, 9, 11];
let numbers2 = [];
let numbers3 = [2, 4, 6, 8];

const findNum = (arr) => {
  arr.forEach(num => {
    if (num === 3) {
      // return true; // why doesn't this work?
      console.log('true');
    }
  })
}

console.log(findNum(numbers1));
console.log(findNum(numbers2));
console.log(findNum(numbers3));
