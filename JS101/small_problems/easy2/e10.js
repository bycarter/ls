// in : string of a signed number
// out: number with appropriate sign
// tst: see below
// dts: array
// algo:
//  create variable 'sign' which holds positive number 1
//  if string[0] contains sign, store in 'sign' by multiplying by 1/-1
//    and unshift/splice sign out
//  pass unsigned string into stringToInteger() function
//  return product of sign and stringToInteger()

function stringToInteger(str) {
  const DIGITS = {
    0: 0, 1: 1, 2: 2, 3: 3, 4: 4, 5: 5, 6: 6, 7: 7, 8: 8, 9: 9,
  }
  let numArr = str.split('').map(char => DIGITS[char]);
  let result = 0;
  numArr.forEach( num => (result = (result * 10) + num));
  return result;
}
function stringToSignedInteger(str) {
  let sign = 1;
  if (str[0] === '-') {
    sign = -1;
    str = str.substring(1);
  } else if (str[0] === '+') {
    str = str.substring(1);
  }
  let result = stringToInteger(str);
  result *= sign;
  console.log(result);
}
stringToSignedInteger('-12345');
stringToSignedInteger('+12345');
stringToSignedInteger('12345');

/*
console.log(stringToSignedInteger("4321") === 4321); // logs true
console.log(stringToSignedInteger("-570") === -570); // logs true
console.log(stringToSignedInteger("+100") === 100); // logs true
*/
