const rlSync = require('readline-sync');

function prompt(message) {
  console.log(`=> ${message}`);
}
function add(num1, num2) {
  return Number(num1) + Number(num2);
}
function sub(num1, num2) {
  return Number(num1) - Number(num2);
}
function mul(num1, num2) {
  return Number(num1) * Number(num2);
}
function div(num1, num2) {
  return Number(num1) / Number(num2);
}
function invalidNumber(number) {
  return number.trimStart() === '' || Number.isNaN(Number(number));
}
prompt('Welcome to Calculator!');
prompt("What's the first number?");
let numIn1 = rlSync.question();
while (invalidNumber(numIn1)) {
  prompt("Hmm... that doesn't look like a valid number.");
  numIn1 = rlSync.question();
}
prompt("What's the second number?");
let numIn2 = rlSync.question();
while (invalidNumber(numIn2)) {
  prompt("Hmm... that doesn't look like a valid number.");
  numIn1 = rlSync.question();
}

prompt(`Your numbers are ${numIn1} and ${numIn2}.`);
prompt();
prompt('*** OPERATION MENU ***');
prompt('1. Addition');
prompt('2. Subtraction');
prompt('3. Multiplication');
prompt('4. Subtraction');
let opt = rlSync.question('Enter an option: ');
while (!['1', '2', '3', '4'].includes(opt)) {
  prompt('Must choose 1, 2, 3, or 4');
  opt = rlSync.question();
}

let result;
switch (opt) {
  case '1':
    result = add(numIn1, numIn2);
    break;
  case '2':
    result = sub(numIn1, numIn2);
    break;
  case '3':
    result = mul(numIn1, numIn2);
    break;
  case '4':
    result  = div(numIn1, numIn2);
    break;
}

prompt(`The result is ${result}.`);

