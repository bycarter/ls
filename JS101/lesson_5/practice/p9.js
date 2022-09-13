let arr = [['b', 'c', 'a'], [2, 11, -3], ['blue', 'black', 'green']];
let sortedArr = [];

arr.forEach(elem => {
  if (typeof elem[0] ==='number') {
    sortedArr.push(elem.slice().sort((a, b) => a - b));
  } else {
    sortedArr.push(elem.slice().sort());
  }
})

console.log(arr);
console.log(sortedArr);
