// in : number
// out: string of a number
// tst: see below
// dts: array
// algo:
//  declare an object of key matched string digits
//  declare array and initialize to empty array
//  start loop while input number is > 1
//    find remainder dividing by 10, and unshift value into `numArr`
//    remove trailing decimal value
//  declare `strArr` and initialize to empty array
//  map values in `numArr` to string values in `DIGITS` into `strArr`
//  join values together with no delimiter (string of number)
//    
function integerToString(num) {
  const DIGITS = {
    0: '0', 1: '1', 2: '2', 3: '3', 4: '4', 5: '5', 6: '6', 7: '7', 8: '8', 9: '9',
  }
  if (num === 0) {
    console.log("0");
    return;
  }

  let numArr = [];
  while (num > 1) {;
    numArr.unshift(num % 10);
    num = Math.floor(num / 10);
  }
    let strResult = numArr.map( char => DIGITS[char]).join('');
  return console.log(strResult);
}
/*
function integerToSignedString(num) {
  if (num === 0) {
    console.log("0");
    return;
  }
  let sign = Math.sign(num);
*/


integerToString(4321);        // "4321"
integerToString(0);           // "0"
integerToString(5000);        // "5000"
integerToString(1234567890);  // "1234567890"
