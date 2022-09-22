// input: string
// output: bool
// data s: array
// rules:
//  all characters matter
//  case matters
// algo:
//  declare `arr` initialize to []
//  declare `result` initialize to false
//  split string into chars and push into array
//  find length of array
//  iterate over array from both ends comparing furthest chars until at middle
//    check if first and last index are not equal
//      return false;
//  if all sets are equal return true

function isPalindrome(str) {
  return str === str.split('').reverse().join('');
}
function isRealPalindrome(str) {
  str = str.toLowerCase().replace(/[^a-z0-9]/g, '');
  return (console.log(isPalindrome(str)));
}


// tests:
isRealPalindrome('madam');               // true
isRealPalindrome('Madam');               // true (case does not matter)
isRealPalindrome("Madam, I'm Adam");     // true (only alphanumerics matter)
isRealPalindrome('356653');              // true
isRealPalindrome('356a653');             // true
isRealPalindrome('123ab321');            // false
