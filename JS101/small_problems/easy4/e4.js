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
  let arr = str.split('');
  let len = arr.length;

  for (let a = 0; a < (len / 2); a++) {
    let z = len - 1 - a;
    if (arr[a] !== arr[z]) {
      return console.log(false);
    }
  }
  return console.log(true);
}


// tests:
isPalindrome('madam');               // true
isPalindrome('Madam');               // false (case matters)
isPalindrome("madam i'm adam");      // false (all characters matter)
isPalindrome('356653');              // true
