// input: string
// output: string
// data s: array
// rules:
//  double only consonants
// algo:
//  create CONST array of concen
//  split string into char array
//  iterate over chars
//   if char is consonant, double then copy to new arr
//   else copy once to new arr

function doubleConsonants(str) {
  const CONSONANTS = ['b', 'c', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'm', 'n', 'p', 'q', 'r', 's', 't', 'v', 'w', 'x', 'y', 'z'];
  if (str.length === 0) return "";

  return console.log(str.split('').map( item => CONSONANTS.includes(item) ? item + item : item ).join(''));
}

// tests:
doubleConsonants('String');          // "SSttrrinngg"
doubleConsonants('Hello-World!');    // "HHellllo-WWorrlldd!"
doubleConsonants('July 4th');        // "JJullyy 4tthh"
doubleConsonants('');                // ""
