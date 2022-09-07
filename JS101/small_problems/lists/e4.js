// input: str
// output: array of strings
// rules:
//  each substring should begin with first letter of string
//  arange the substrings shortest to longest
// data s: array
// algo:
//  slice string into array of chars
//  declare `arrOut` init []
//  iterate over length of array
//    join elements from 0 to current iteration index
//    push to `arrOut`
//  return `arrOut`

function leadingSubstrings(str) {
  let arrOut = [];
  for (let i = 1; i <= str.length; i++) {
    arrOut.push(str.slice(0, i));
  }
  return console.log(arrOut);
}

//  tests:
leadingSubstrings('abc');      // ["a", "ab", "abc"]
leadingSubstrings('a');        // ["a"]
leadingSubstrings('xyzzy');    // ["x", "xy", "xyz", "xyzz", "xyzzy"]
