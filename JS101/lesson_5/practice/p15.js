// input: array of objects
// output: array of objs
// data s: array
// rules:
//  return an array of objects containing only even nums
// algo:
//  declare `arr2` init []
//  iterate over `arr`
//  acess inner array in each object element
//    extract object keys
//    iterate over every object property
//      -> check if every value in each property is even
//    IF true, push object to `arr2`

let arr = [
  { a: [1, 2, 3] },
  { b: [2, 4, 6], c: [3, 6], d: [4] },
  { e: [8], f: [6, 10] },
];

let arr2 = arr.filter(obj => {
  return Object.values(obj).every(subArr => {
    return subArr.every(num => num % 2 === 0);
  });
});

// tests:
console.log(arr)
console.log(arr2)
