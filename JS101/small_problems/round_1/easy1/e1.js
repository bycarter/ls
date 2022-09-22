let rlSync = require('readline-sync');
let input = rlSync.question('Enter a num: ');

let isOdd = (num) => num % 2 === 0 ? false : true;

console.log(isOdd(input));
