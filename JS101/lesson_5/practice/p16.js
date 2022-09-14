// input: array
// output: object
// data s: array
// rules:
//  create an object were:
//    the key is the first item in `arr`
//    the value is the second
// algo:
//  declare objOut = [];
//  iterate over each element in `arr`
//  define property of `objOut` with the two values in arr

let arr = [['a', 1], ['b', 'two'], ['sea', {'c': 3}], ['D', ['a', 'b', 'c']]];
let objOut = {};
arr.forEach(elem => {
  objOut[elem[0]] = elem[1];
});

// tests:
console.log(arr);
console.log(objOut);
// { a: 1, b: 'two', sea: { c: 3 }, D: [ 'a', 'b', 'c' ] }
