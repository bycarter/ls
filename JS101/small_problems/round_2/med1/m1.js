// 16 min, 42 sec

// Write a function that rotates an array by moving the first element to the end of the array. Do not modify the original array.

// -> If the input is not an array, return `undefined`.
// -> If the input is an empty array, return an empty array.

/*
in: array (verify)
out: array
ds: [1, 2, 3] -> [2, 3, 1]
rules:
_ assume input cannot be nested more than 2 layers
_ assume both arrays may contain shared references

algo:
_ if `arrIn` is empty, return `[]`
_ if `arrIn` is not array, return `undefined`

_ declare `arrOut` init to copy of elements 2 -> end
_ declare `arrInFirstElem` init to copy of `arrIn` elem 1
_ concat `arrInFirstElem` to end of `arrOut`
_ return `arrOut`
*/

function rotateArray(arrIn) {
  if (!Array.isArray(arrIn)) return undefined;
  if (arrIn.length === 0) return [];

  let arrOut = arrIn.slice(1);
  let arrInFirstElem = arrIn.slice(0, 1)[0];
  arrOut.push(arrInFirstElem);
  
  return console.log(arrOut);
}



rotateArray([7, 3, 5, 2, 9, 1]);       // [3, 5, 2, 9, 1, 7]
rotateArray(['a', 'b', 'c']);          // ["b", "c", "a"]
rotateArray(['a']);                    // ["a"]
rotateArray([1, 'a', 3, 'c']);         // ["a", 3, "c", 1]
rotateArray([{ a: 2 }, [1, 2], 3]);    // [[1, 2], 3, { a: 2 }]
rotateArray([]);                       // []

// return `undefined` if the argument is not an array
rotateArray();                         // undefined
rotateArray(1);                        // undefined


// the input array is not mutated
let array = [1, 2, 3, 4];
rotateArray(array);                    // [2, 3, 4, 1]
console.log(array);                    // [1, 2, 3, 4]
