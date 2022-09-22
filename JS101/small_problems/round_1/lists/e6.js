// input: str
// output: array of palindromic substrings
// rules:
//  list all substrings
//  arange them first by starting letters index, then by size
//  filter for only palindromic substrings
// data s: array
// algo:
//  create array of substrings
//  declare `palArr` init []
//  declare `allSubstr` init return value of `substrings`
//  filter `allSubstr` for palindromes
//    loop over `allSubstr`
//      iterate through each substring
//      if palindrome, push to `palArr`

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
  return arrOut;
}
function palindromes(str) {
  let palArr = [];
  let allSubstr = substrings(str);
  for (let substr of allSubstr) {
    if (substr.length < 2) {
      continue;
    } else if (substr === substr.split('').reverse().join('')) {
      palArr.push(substr);
    }
  }
  console.log(palArr);
}

//  tests:
palindromes('abcd');       // []
palindromes('madam');      // [ "madam", "ada" ]

palindromes('hello-madam-did-madam-goodbye');
// returns
// [ "ll", "-madam-", "-madam-did-madam-", "madam", "madam-did-madam", "ada",
//   "adam-did-mada", "dam-did-mad", "am-did-ma", "m-did-m", "-did-", "did",
//   "-madam-", "madam", "ada", "oo" ]

palindromes('knitting cassettes');
// returns
// [ "nittin", "itti", "tt", "ss", "settes", "ette", "tt" ]
