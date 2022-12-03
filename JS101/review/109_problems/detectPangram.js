/*
in: string
out: bool
rules:
_ if sentence is a Pangram, return true
__ pangram contains every letter (case IRRESPECTIVE) at least once;
_ IGNORE spaces and puncutation
ds:
 array => hold all letters from string in
 obj => count of letters
 
algo:
_ declare `letters` init:
__ convert to lower case
__ split into array of characters
__ filter non-letter characters

_ declare `alphabet` init object of letters with value 0;


_ iterate over `letters`
__ increment `alphabet` key for each `letter`

_ declare `pangram` init `false`

_ iterate over values of `alphabet`
__ IF all values are truthy
___ reassign `pangram` to `true`

_ return `pangram`
*/

function isPangram(string){
  let letters = string.toLowerCase().split('').filter(char => char.match(/[a-z]/));
  let alphabet = {};
  
  'abcdefghijklmnopqrstuvwxyz'.split('').forEach(letter => {
    alphabet[letter] = 0;
  })
  
  for (let letter of letters) {
    alphabet[letter] += 1;
  }
  
  let pangram = Object.values(alphabet).every(value => value);
  
  return pangram;
  
}
