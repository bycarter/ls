// return a new array with each number incremented by 1

let arr = [{ a: 1 }, { b: 2, c: 3 }, { d: 4, e: 5, f: 6 }];

let arr2 = arr.map(elem => {
  let newElem = {...elem};
  for (key in newElem) {
    newElem[key] += 1;
  }
  return newElem;
})

console.log(arr);
console.log(arr2);
