// time: 16 min
// Write a function that takes an array of integers and
// returns the two numbers that are closest together in
// value.
/*
in: array
out: array - 2 elems
ds: array
rules:
_ return the two numbers closest together in value
algo:
_ declare `arrOut` init []
_ declare `pairDiff`

_ iterate over all elements in array
__ for each element, iterate over the remaining elements

___ write first pair into `arrOut`
___ calc the difference and write to `pairDiff`
___ for each remaining iteration:
___ compare `newDiff` with `pairDiff`
___ if abs `newDiff`is < `pairDiff`,
____ reassign `arrOut` to current elemnts
____ reassign `pairDiff` to `newDiff`
*/
function closestNumbers(arrIn) {
  let arrOut = [];
  let pairDiff;

  for (let i = 0; i < arrIn.length; i++) {
    for(let j = i + 1; j < arrIn.length; j++) {
      let newDiff = Math.abs(arrIn[i] - arrIn[j])

      if (i === 0 && j === 1) {
        arrOut = [arrIn[i], arrIn[j]];
        pairDiff = newDiff;
        continue;
      }
      if (newDiff < pairDiff) {
        arrOut = [arrIn[i], arrIn[j]];
        pairDiff = newDiff;
      }
    }
  }
  return arrOut;
}



// Examples:

console.log(closestNumbers([5, 25, 15, 11, 20]));     // [15, 11]
console.log(closestNumbers([19, 25, 32, 4, 27, 16])); // [25, 27]
console.log(closestNumbers([12, 7, 17]));             // [12, 7]
