// input: number, user enters 6x
// output: string
// data s: array
// algo:
//  user enters 6 numbers
//  first 5 numbers are stored in array `arr`
//  if 6th number is included in array, log true

let rl = require('readline-sync');
let arr = [];

for (let num = 1; num < 6; num++) {
  let time = {1: '1st', 2: '2nd', 3: '3rd', 4: '4th', 5: '5th'};
  arr.push(rl.question(`Enter the ${time[num]} number: `));
}

let last = rl.question('Enter the last number: ');

console.log(`The number ${last} ${arr.includes(last) ? 'appears' : 'does not appear'} in ${arr.join()}.`);
