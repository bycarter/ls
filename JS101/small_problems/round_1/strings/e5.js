// input: string
// output: string
// data s: array
// algo: 
//  split string into array
//  if char is upper, map to lower
//  if char is lower, map to lower

function swapCase(str) {
  let arrOut = [];
  str.split('').map( char => {
    if (char.match(/[A-Z]/g)) {
      return arrOut.push(char.toLowerCase());
    } else if (char.match(/[a-z]/g)) {
      return arrOut.push(char.toUpperCase());
    } else {
      return arrOut.push(char);
    }
  });
  console.log(arrOut.join(''));
}

// tests:
swapCase('CamelCase');              // "cAMELcASE"
swapCase('Tonight on XYZ-TV');      // "tONIGHT ON xyz-tv"
