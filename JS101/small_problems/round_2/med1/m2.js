// 17 min, 34 sec
/*
Write a function that rotates the last count digits of a number. 
To perform the rotation, move the first of the digits that you want to rotate to the end and shift the remaining digits to the left.

in: 2x numbers
out: number
ds & rules:
_ if `ct` is 1, return `numIn`
_ if `ct` is 2, swap positions of last 2 elements
_ if `ct` is 3 or more, rotate as before the last `ct` digits of `numIn`
_ assume `ct` is not longer than len of `numIn`

algo:
_ guards
__ if `ct` is 1, return `numIn`

_ declare `numArr` init to `numIn` coerced to string, split into array
_ declare `digit` init to removed elem at index of `numArr` length - `ct`
_ concat `digit` to end of `numArr`
_ join elements of `numArr` into single string
_ coerce `numArr` to number data type
_ return `numArr`

*/

function rotateRightmostDigits(numIn, ct) {
  if (ct === 1) return console.log(numIn);

  let numArr = String(numIn).split('');
  let digit = numArr.splice(numArr.length - ct, 1)[0];
  numArr.push(digit);

  return console.log(Number(numArr.join('')));
}

rotateRightmostDigits(735291, 1);      // 735291
rotateRightmostDigits(735291, 2);      // 735219
rotateRightmostDigits(735291, 3);      // 735912
rotateRightmostDigits(735291, 4);      // 732915
rotateRightmostDigits(735291, 5);      // 752913
rotateRightmostDigits(735291, 6);      // 352917
