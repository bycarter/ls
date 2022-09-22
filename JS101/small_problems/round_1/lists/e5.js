// input: str
// output: array of substrings
// rules:
//  list all substrings
//  arange them first by starting letters index, then by size
// data s: array
// algo:
//  declare `arrOut` init []
//  iterate over length of array
//    slice elements from loop index to end
//    declare `substrArr' init to [];
//    feed into `leadingSubstrings`
//    iterate over `substrArr`
//      push each item into `arrOut`
//  return `arrOut`

function leadingSubstrings(str) {
  let arrOut = [];
  for (let i = 1; i <= str.length; i++) {
    arrOut.push(str.slice(0, i));
  }
  return arrOut;
}
function substrings(str) {
  let arrOut = [];
  for (let i = 0; i < str.length; i++) {
    let subArr = leadingSubstrings(str.slice(i));
    subArr.forEach( item => arrOut.push(item) );
  }
  return console.log(arrOut);
}

//  tests:
substrings('abcde');

/* returns
[ "a", "ab", "abc", "abcd", "abcde",
  "b", "bc", "bcd", "bcde",
  "c", "cd", "cde",
  "d", "de",
  "e" ]
*/
