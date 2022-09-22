// input: array of strings
// output: string
// data s: array
// algo:
//  declare `arrOut` init []
//  iterate through strings
//    split string into array of chars
//    filter chars to exclude vowels
//    join chars back into a string
//    map into `arrOut`
//  return `arrOut`

function removeVowels(arr) {
  let arrOut = [];
  arrOut = arr.map( item => {
    return item.split('').filter( char => !'aeiou'.includes(char.toLowerCase()) ).join('');
  });
  return console.log(arrOut);
}

// tests:
removeVowels(['abcdefghijklmnopqrstuvwxyz']);         // ["bcdfghjklmnpqrstvwxyz"]
removeVowels(['green', 'YELLOW', 'black', 'white']);  // ["grn", "YLLW", "blck", "wht"]
removeVowels(['ABC', 'AEIOU', 'XYZ']);                // ["BC", "", "XYZ"]
