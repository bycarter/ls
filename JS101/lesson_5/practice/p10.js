let arr = [['b', 'c', 'a'], [2, 11, -3], ['blue', 'black', 'green']];
let sortedArr = [];

arr.forEach(elem => {
  if (typeof elem[0] ==='number') {
    sortedArr.push(elem.slice().sort((a, b) => b - a));
  } else {
    sortedArr.push(elem.slice().sort((a, b) => {
      if (a < b) {
        return 1;
      }
      if (a > b) {
        return -1;
      }
      return 0;
    }))
  }
})

console.log(arr);
console.log(sortedArr);
