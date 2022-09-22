// input: array of nums
// output: num
// data s: array
// rules:
//  add each leading subsequence of numbers
//  return total sum
// algo:
//  iterate through array
//  on each iteration sum all elements up to current index
//  add item to `temp holding

function sumOfSums(numArr) {
  return numArr.reduce( (prev, curr, idx, arr) => prev + (curr * (arr.length - idx)), 0);
}

// tests:
console.log(sumOfSums([3, 5, 2]));        // (3) + (3 + 5) + (3 + 5 + 2) --> 21
console.log(sumOfSums([1, 5, 7, 3]));     // (1) + (1 + 5) + (1 + 5 + 7) + (1 + 5 + 7 + 3) --> 36
console.log(sumOfSums([4]));              // 4
console.log(sumOfSums([1, 2, 3, 4, 5]));  // 35
