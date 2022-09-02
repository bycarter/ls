// in : number
// out: string of repeating 1 and 0 of length equal to input num
// tst: below
// dat: string
// alg: loop num times and write alternating 1 or 0

function stringy(num) {
  let temp = '';
  for (let n = 1; n <= num; n++) {
    n % 2 !== 0 ? temp += '1' : temp += '0';
  }
  console.log(temp);
}


stringy(6);    // "101010"
stringy(9);    // "101010101"
stringy(4);    // "1010"
stringy(7);    // "1010101"
