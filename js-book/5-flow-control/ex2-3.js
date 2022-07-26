
let rlSync = require('readline-sync');
let userNum = Number(rlSync.question('Enter num: '));

let evenOrOdd = (num) => num % 2 ? console.log('odd') : console.log('even')

let intUserNum = parseInt(userNum);
if (intUserNum === userNum) {
  evenOrOdd(userNum);
} else {
  console.log('Error: num is not an int');
}
