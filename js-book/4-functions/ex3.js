let rlSync = require('readline-sync');

let multiply = (num1, num2) => console.log(num1 * num2);
let n1 = Number(rlSync.question('Enter first operand: '));
let n2 = Number(rlSync.question('Enter second operand: '));

multiply(n1, n2);
