let rlSync = require('readline-sync');
let bill = parseFloat(rlSync.question('What is the bill? '));
let tipP = parseFloat(rlSync.question('What is the tip percentage? '));
let tipVal = bill * (tipP/100);
let tot = bill + tipVal;

console.log();
console.log(`The tip is $${tipVal.toFixed(2)}`);
console.log(`The total is $${tot.toFixed(2)}`); 
