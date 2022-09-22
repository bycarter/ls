// input: string
// output: string
// data s: array
// algo:
//  split string into array
//  declare caseSwitch init 0
//  iterate over array
//  cap every other letter with map to new arr

function staggeredCase(str) {
  let arrOut = [];
  let caseSwitch = 0;
  str.split('').forEach((char) => {
    if (char.match(/[^a-z]/gi)) {
      arrOut.push(char);
    } else if (caseSwitch === 0) {
      caseSwitch = 1;
      arrOut.push(char.toUpperCase());
    } else {
      caseSwitch = 0;
      arrOut.push(char.toLowerCase());
    }
  });
  return console.log(arrOut.join(''));
}
// tests:
staggeredCase('I Love Launch School!');        // "I LoVe lAuNcH ScHoOl!"
staggeredCase('ALL_CAPS');                     // "AlL_CaPs"
staggeredCase('ignore 77 the 4444 numbers');   // "IgNoRe 77 ThE 4444 nUmBeRs"
