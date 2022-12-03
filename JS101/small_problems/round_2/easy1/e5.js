const RL = require('readline-sync');

let bill = Number(RL.question('What is the bill? '));
let tip = Number(RL.question('What is the tip percentage? ')) / 100; // conv to hundreds
let tipAmount = tip * bill;
let total = tipAmount + bill;

console.log(`The tip is $${bill.toFixed(2)}`);
console.log(`The total is $${total.toFixed(2)}`);

