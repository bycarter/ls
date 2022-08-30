const RL = require('readline-sync');

function secondLast(str) {
  let arr = str.split(' ');
  return arr[arr.length - 2];
}
let userIn = RL.question('Enter string: ');

console.log(secondLast(userIn));
