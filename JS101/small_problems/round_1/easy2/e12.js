// in : number
// out: string of a number
// tst: see below
// dts: array
// algo:
//  check if input `num` is 0, and return '0' if it is
//  declare `sign` and initialize the return of `Math.sign(num)`
//  creat conditional
//    if sign is '1' assign `sign` to ''
//    else if sign is '-1' assign `sign to '-'
//  return sign + return value of `integerToString(num)`
//    
function integerToString(num) {
  const DIGITS = {
    0: '0', 1: '1', 2: '2', 3: '3', 4: '4', 5: '5', 6: '6', 7: '7', 8: '8', 9: '9',
  }
  let numArr = [];
  while (num > 1) {;
    numArr.unshift(num % 10);
    num = Math.floor(num / 10);
  }
    let strResult = numArr.map( char => DIGITS[char]).join('');
  return strResult;
}
function signedIntegerToString(num) { 
  if (num === 0) {
    console.log("0");
    return;
  }
  let sign = Math.sign(num);
  sign === -1 ? sign = '-' : sign = '';

  return sign + integerToString(num);
}

console.log(signedIntegerToString(4321) === "+4321");
console.log(signedIntegerToString(-123) === "-123");
console.log(signedIntegerToString(0) === "0");
