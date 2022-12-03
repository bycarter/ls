// does not work with huge strings
/*
in: 2 strings
out: bool
ds:
array
rules:
_ test if each letter in string2 is in string1
__ letters may only be used once

algo:
_ declare `letters` init as array of letters in `string1`

_ iterate over letters in `string2`
__ IF `letters` contains `letter`
___ remove `letter` from letters
__ ELSE, return false

_ return TRUE

*/
function scramble(str1, str2) {
  let letters = str1.split(``);
  
  for (let letter of str2) {
    let index = letters.indexOf(letter);
    if (index < 0) {
      return false;
    } else {
      letters[index] = 0;
    }
  }
  return true;
}

