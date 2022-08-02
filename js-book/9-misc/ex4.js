let lst1 = [1, 6, 3, 2];
let lst2 = [-1, -6, -3, -2];
let lst3 = [2, 2];

function findMax (list) {
  let max = list[0];
  for (let index in list) {
    if (index > 0) {
      if (list[index] > max) {
        max = list[index];
      }
    }
  }
  return max;
}

console.log(findMax(lst1));
console.log(findMax(lst2));
console.log(findMax(lst3));
