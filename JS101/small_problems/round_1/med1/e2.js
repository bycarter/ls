// input: number, number
// output: number
// data s: array
// rules:
//  rotate the number of digits in `num1` by the number in `num2`
//  a rotation
//    cuts a subString of digits of len `num2' from right end of `num1`
//    removes the first char and appends to end
//    concatenates subStr back onto initial string
// algo:
//  map number into array
//  split array into subStrings where:
//    `subArr2` is the last `num2` chars from the right of array
//    `subArr1` is the rest of the chars
//  declare `temp`;
//  remove first char of `subArr2` and assign to `temp`
//  concat `temp` to end of `subArr2`
//  concat `subArr2` to end of `subArr1`
//  return `subArr1`

function rotateRightmostDigits(num1, num2) {
  if (num2 === 1) return console.log(String(num1));

  let numArr = String(num1).split('');
  let mid = numArr.length - num2;
  let subArr2 = numArr.slice(mid);
  let temp = subArr2.shift();
  subArr2.push(temp);

  return console.log(numArr.slice(0, mid).join('') + subArr2.join(''));
}

// tests:
rotateRightmostDigits(735291, 1);      // 735291
rotateRightmostDigits(735291, 2);      // 735219
rotateRightmostDigits(735291, 3);      // 735912
rotateRightmostDigits(735291, 4);      // 732915
rotateRightmostDigits(735291, 5);      // 752913
rotateRightmostDigits(735291, 6);      // 352917
