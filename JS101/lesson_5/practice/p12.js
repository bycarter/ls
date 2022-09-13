// input: nested arr
// ouput: nested arr

let arr = [[2], [3, 5, 7], [9], [11, 15, 18]];
let arr2 = [];
/*
arr.forEach(elem => {
  if (elem.length === 1) {
    if (elem[0] % 3 === 0) {
      arr2.push(elem);
    } else {
      arr2.push([]);
    }
  } else {
    arr2.push(elem.filter(item => item % 3 === 0));
  }
})
*/
arr2 = arr.map(elem => elem.filter(num => num % 3 === 0));

console.log(arr);
console.log(arr2);
