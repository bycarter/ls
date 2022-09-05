// input: numbers `age`, `yearRetires` from user
// output: string
// data s: variable
// algo:
//  creat Date object
//  set `currentYear`
//  prompt user for `age`
//  prompt user for `retiredAge`
//  declare `yearsLeft` and initialize to subtract `age` from `retiredAge`
//  interpolate date into message

let rl = require('readline-sync');
let date = new Date();
let currentYear = date.getFullYear();

let age = rl.question('What is your age? ');
let retiredAge = rl.question('At what age would you like to reture? ');
let yearsLeft = retiredAge - age;

console.log(`It\'s ${currentYear}. You will retire in ${currentYear + yearsLeft}.`);
console.log(`You only have ${yearsLeft} years of work to go!`);
