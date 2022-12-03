// time: 15m, 34 sec
/*
Take the number 735291 and rotate it by one digit to the left, getting 352917. Next, keep the first digit fixed in place and rotate the remaining digits to get 329175. Keep the first two digits fixed in place and rotate again to get 321759. Keep the first three digits fixed in place and rotate again to get 321597. Finally, keep the first four digits fixed in place and rotate the final two digits to get 321579. The resulting number is called the maximum rotation of the original number.

in: int
out: int
rules:
_ rotate to left
_ hold elem 1, rotate the rest left
_ hold elem 2, rotate the rest left
_ iterate through end in like manner
algo:
_ if len is 1, return len

_ declare `arrInt` init to split string of `int`
_ start loop for len - 1 iterations, using `num` as variable
_ on each iteration, hold `num` digits and rotate the rest
_ rotation:
__ declare `digit`, init to elem at index `num` removed from `arrInt`
__ concat `digit` to end of `arrInt`

_ join `arrInt` into single string, coerce to number, and return
*/

function maxRotation(int) {
  if (String(int).length === 1) return console.log(int);

  let arrInt = String(int).split('');

  for (let num = 0; num < arrInt.length - 1; num++) {
    let digit = arrInt.splice(num, 1)[0];
    arrInt.push(digit);
  }

  return console.log(Number(arrInt.join('')));

}



maxRotation(735291);          // 321579
maxRotation(3);               // 3
maxRotation(35);              // 53
maxRotation(105);             // 15 -- the leading zero gets dropped
maxRotation(8703529146);      // 7321609845
