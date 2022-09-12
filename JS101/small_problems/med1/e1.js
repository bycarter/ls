// input: array
// output: array
// rules:
//  if input is not array, return undefined
//  if input is empty array, return empty array
//  assume all arrays are plain and not complex
// algo:
//  check if input is an array, if not return `undefined`
//  check if input is empty, if yes return []
//
//  declare `serialArrIn` and init to serialized `arrIn`
//  declare `arrOut` and init to parsed `serialArrIn`
//  declare `firstElement` and init to first elment of `arrOut`
//    use `.shift`
//  return `arrOut`.push(`firstElement`) // => add first elm to end

function rotateArray(arrIn) {
  if (!Array.isArray(arrIn)) return console.log(undefined);
  if (!arrIn.length) return console.log([]);

  let serialArrIn = JSON.stringify(arrIn);
  let arrOut = JSON.parse(serialArrIn);
  let firstElement = arrOut.shift();

  arrOut.push(firstElement);
  
  return console.log(arrOut);
}

// tests:
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
console.log(array);                                 // [1, 2, 3, 4]
