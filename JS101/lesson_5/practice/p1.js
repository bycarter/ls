// input: array of number stirngs
// output: sorted array of number strings
// rules:
//    sort numbers from largest to smallest
// algo:
//  declare `arrNum` init to mapped elements from `arr` coerced to Numbers
//  sort `arrNum`
//    callback should return 'b - a'
//  return map of `arrNum` with elements coerced to string

function callback(a, b) {
  return b - a;
}

function sortNumStr(nStr) {
  let arrNum = nStr.map(e => Number(e));
  arrNum.sort(callback);
  
  return arrNum.map(e => String(e));
}
 
// tests:
let arr = ['10', '11', '9', '7', '8'];
console.log(arr);
console.log(sortNumStr(arr));
