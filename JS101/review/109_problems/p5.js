// Write a function that takes a string as an argument and
// returns the character that occurs least often in the
// given string. If there are multiple characters with the
// same lowest number of occurrences, then return the one
// that appears first in the string. When counting
// characters, consider uppercase and lowercase versions to
// be the same.
/*
in: str
out: char
rules:
_ return char with lowest occurance
_ ignore case
__ if multiple ties, chose that with first occurance
ds: array & object

algo:
_ declare `charArr` init to all lower case chars in `strIn`
_ declare `charObj`, init {};
declare `minChar`
declare `minCharVal` init Infinify

_ iterate over elements in `charArr`
__ if not a key in `charObj`, init to frequency of occurance in `charArr`

_ iterate over keys in object
__ if key's value is < `minCharVal`,
___ reassign `minChar` and `minCharVal`

_ return `minChar`
*/
function leastCommonChar(strIn) {
  let charArr = strIn.toLowerCase().split('');
  let charObj = {};
  let minChar;
  let minCharVal = Infinity;

  charArr.forEach(char => {
    if (!charObj.hasOwnProperty(char)) {
      charObj[char] = charArr.filter(elem => elem === char).length;
    }
  })
  for (let char in charObj) {
    if (charObj[char] < minCharVal) {
      minChar = char;
      minCharVal = charObj[char];
    }
  }
  return minChar;
}




// Examples:

console.log(leastCommonChar("Hello World") === "h");
console.log(leastCommonChar("Peter Piper picked a peck of pickled peppers") ===
                            "t");
console.log(leastCommonChar("Mississippi") === "m");
console.log(leastCommonChar("Happy birthday!") === ' ');
console.log(leastCommonChar("aaaaaAAAA") === 'a');

// The tests above should each log "true".
