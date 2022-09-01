// inp: a string of numbers
// out: the string converted to a number
// exa: below
// das: an array of individual string characters
// alg: 
//   create temp var
//   create array of chars
//   compare each char with array of numbers
//   if match, concatenat to temp var
//   return temp var

let nums = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

function stringToInteger(str) {
  let tempNum = 0;
  let len = str.length;

  for (let vals in str) {
    for (let num of nums) {
      if (num == str[vals]) {
        len -= 1;
        tempNum += (num * (10 ** len));
        console.log(`vals: ${vals}  num: ${num}  tempNum: ${tempNum}`);
      }
    }
  }
  return tempNum;
}

console.log(stringToInteger("4321") === 4321); // logs true
console.log(stringToInteger("570") === 570); // logs true
console.log(stringToInteger("4321")); // logs true
console.log(stringToInteger("570")); // logs true
