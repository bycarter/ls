let evenOrOdd = (num) => num % 2 ? console.log('odd') : console.log('even');
let rlSync = require('readline-sync');
let userNum = rlSync.question('Enter num: ');

evenOrOdd(userNum);
