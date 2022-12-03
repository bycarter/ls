// time 15m
// Write a function that takes one argument, an array of
// integers. The function should return minimum sum of 5
// consecutive numbers in the array. If the array contains
// less than 5 elements, the function should return null.
/*
in: arr
out: number OR null
rules:
_ return null if len < 5
_ return minimum sum of 5
_ assumption, do not mutate input arr
algo:
_ test len < 5, if yes return null

_ declar `minSum`
_ iterate over each consecutive 5 element subarray
_ sum elements
__ if first iteration, assign to `minSum`
__ else assign to `minSum` IF < current `minSum` value

_ return `minSum`
*/
function minimumSum(arrIn) {
  if (arrIn.length < 5) return null;

  let minSum;
  for (let i = 0; i < (arrIn.length - 4); i++) {
    if (i === 0) {
      minSum = arrIn.slice(i, i + 5).reduce((a, b) => a + b, 0);
    }
    let newSum = arrIn.slice(i, i + 5).reduce((a, b) => a + b, 0);
    if (newSum < minSum) {
      minSum = newSum;
    }
  }
  return minSum;
}



// Examples:

console.log(minimumSum([1, 2, 3, 4]) === null);
console.log(minimumSum([1, 2, 3, 4, 5, -5]) === 9);
console.log(minimumSum([1, 2, 3, 4, 5, 6]) === 15);
console.log(minimumSum([55, 2, 6, 5, 1, 2, 9, 3, 5, 100]) === 16);
console.log(minimumSum([-1, -5, -3, 0, -1, 2, -4]) === -10);

// The tests above should each log "true".
