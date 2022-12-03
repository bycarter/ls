const RL = require('readline-sync');

let num = Number(RL.question('Please enter an integer greater than 0: '));
let op = RL.question('Enter "s" to compute the sum, or "p" to compute the product. ');

let total = 1;
if (num === 1) return print(op, num, total);

for (let i = 2; i <= num; i++) {
  if (op === 's') total += i;
  else total *= i;
}

print(op, num, total);

function print(opIn, numIn, totIn) {
  console.log(`The ${opIn === 's' ? 'sum' : 'product'} of the integers between 1 and ${numIn} is ${totIn}`);
}
