// input: number as `num`
// output: number
// data s: variable
// algo: 
//  declare `strNum` and initialize it to string type of `num`
//  check if num is odd length
//    if yes double the number and return it
//  declare `firstHalf` and initialize to 0;
//  declare `secondHalf` and initialize it to half of length of `strNum`
//  start loop while `secondHalf` < `strNum`.length
//    check condition char at index `firstHalf` is NOT equal to char at `secondHalf`
//      if yes retunr `num` * 2
//  return num

function twice(num) {
  let strNum = String(num);
  if (strNum.length % 2 !== 0) {
    return console.log(num * 2);
  }
  let firstHalf = 0;
  let secondHalf = strNum.length / 2;
  while (secondHalf < strNum.length) {
    if (strNum[firstHalf] !== strNum[secondHalf]) {
      return console.log(num * 2);
    }
    firstHalf += 1;
    secondHalf += 1;
  }
  return console.log(num);
}




// tests:
twice(37);          // 74
twice(44);          // 44
twice(334433);      // 668866
twice(444);         // 888
twice(107);         // 214
twice(103103);      // 103103
twice(3333);        // 3333
twice(7676);        // 7676
