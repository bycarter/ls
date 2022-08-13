let rlSync = require('readline-sync');

console.log('Welcome to Calculator!');
let numIn1 = Number(rlSync.question('Enter first num: '));
let numIn2 = Number(rlSync.question('Enter second num: '));


console.log(`Your numbers are ${numIn1} and ${numIn2}.`);
console.log();
console.log('*** OPERATION MENU ***')
console.log('1. Addition')
console.log('2. Subtraction')
console.log();
let opt = rlSync.question('Enter an option: ');

let result = 777;
if (opt == 1) {
  result = add(numIn1, numIn2);
} else if (opt == 2) {
  result = sub(numIn1, numIn2);
} else {
  console.log('Invalid opteration entered');
}
console.log(`The result is ${result}.`);

function add(num1, num2) {return num1 + num2};
function sub(num1, num2) {return num1 - num2};
function mul(num1, num2) {return num1 * num2};

