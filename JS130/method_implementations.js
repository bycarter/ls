// forEach implementation
function forEach(arrIn, callback, thisArg) {
  for (let i = 0; i < arrIn.length; i++) {
    callback.call(thisArg, arrIn[i], i, arrIn);
  }
}


// filter implementation
function filter(arr, callback) {
  let arrOut = []
  for (let i = 0; i < arr.length; i++) {
    if (callback(arr[i])) {
      arrOut.push(arr[i]);
    }
  }
  return arrOut;
}
// let numbers = [1, 2, 3, 4, 5];
// console.log(filter(numbers, number => number > 3)); // => [ 4, 5 ]
// console.log(filter(numbers, number => number < 0)); // => []
// console.log(filter(numbers, () => true));           // => [ 1, 2, 3, 4, 5 ]
//
// let values = [1, "abc", null, true, undefined, "xyz"];
// console.log(filter(values, value => typeof value === "string"));
// => [ 'abc', 'xyz' ]


// map implementation
function map(arr, callback) {
  let arrOut = [];
  for (let i = 0; i < arr.length; i++) {
    arrOut.push(callback(arr[i]));
  }
  return arrOut;
}
// let numbers = [1, 2, 3, 4, 5];
// console.log(map(numbers, number => number * 3));  // => [ 3, 6, 9, 12, 15 ]
// console.log(map(numbers, number => number + 1));  // => [ 2, 3, 4, 5, 6 ]
// console.log(map(numbers, () => false));
// // => [ false, false, false, false, false ]
//
// let values = [1, "abc", null, true, undefined, "xyz"];
// console.log(map(values, value => String(value)));
// // => [ '1', 'abc', 'null', 'true', 'undefined', 'xyz' ]


// reduce implementation
function reduce(arr, callback, initialVal = arr[0]) {
  let accumulator = initialVal;
  for (let i = 0; i < arr.length; i++) {
    accumulator = callback(accumulator, arr[i]);
  }
  return accumulator;
}
// let numbers = [1, 2, 3, 4, 5];
// console.log(reduce(numbers, (accum, number) => accum + number));   // => 15
// console.log(reduce(numbers, (prod, number) => prod * number));     // => 120
// console.log(reduce(numbers, (prod, number) => prod * number, 3));  // => 360
// console.log(reduce([], (accum, number) => accum + number, 10));    // => 10
// console.log(reduce([], (accum, number) => accum + number));
// // => undefined
//
// let stooges = ["Mo", "Larry", "Curly"];
// console.log(reduce(stooges, (reversedStooges, stooge) => {
//   reversedStooges.unshift(stooge);
//   return reversedStooges;
// }, []));
// // => ["Curly", "Larry", "Mo"]


// using reduce to filter elements
// function filterReducer(accumulator, elem, currentIdx) {
//   if (elem > 2) {
//     accumulator.push(elem);
//   }
//   return accumulator;
// }
// let numbers = [1, 2, 3, 4, 5];
//
// // another
// function filt(arr, callback) {
//   return arr.reduce((acc, elem) => {
//     if (callback(elem)) {
//       acc.push(elem);
//     }
//     return acc;
//   }, [])
// }
// console.log(numbers.reduce(filterReducer, []))


// using reduce to map