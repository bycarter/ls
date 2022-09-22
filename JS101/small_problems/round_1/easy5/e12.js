// input: string
// ouput: num
// data s: variables & arithmatic
// algo:
//  split string on ':'
//  check if arr[0] is 24
//   yes, return "00:00"
//  return `arrOut[0]` * 60 + `arrOut[1]`

function arrTime(str) {
  return str.split(':').map( item => Number(item) );
}

function afterMidnight(str) {
  let arr = arrTime(str);
  if (arr[0] === 24) return 0;
  return (arr[0] * 60) + arr[1];
}
function beforeMidnight(str) {
  let arr = arrTime(str);
  if (arr[0] === 24 || (arr[0] === 0 && arr[1] === 0)) return 0;
  return ((24 - arr[0] -1) * 60) + (60 - arr[1]);
}

// tests:
console.log(afterMidnight("00:00") === 0);
console.log(beforeMidnight("00:00") === 0);
console.log(afterMidnight("12:34") === 754);
console.log(beforeMidnight("12:34") === 686);
console.log(afterMidnight("24:00") === 0);
console.log(beforeMidnight("24:00") === 0);
