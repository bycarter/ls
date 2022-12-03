/*
declare `strOut` init ''
loop for `numIn` times
_ on odd iterations concat '1' to `strOut`, even '0'
*/
function stringy(num) {
  let strOut = '';
  for (let i = 1; i <= num; i++) {
    if (i % 2 !== 0) {
      strOut += '1';
    } else {
      strOut += '0';
    }
  }
  console.log(strOut);
}

stringy(6);    // "101010"
stringy(9);    // "101010101"
stringy(4);    // "1010"
stringy(7);    // "1010101"
