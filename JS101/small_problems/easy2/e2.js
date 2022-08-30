/*
input: string
output: string, greeting
data s: none
tests:
let tests = ['dave', 'dave!', ''];
algo:
// check if argument is empty
// - if yes, print 'WHO ARE YOU ?!'
// check if last char === '!'
// - if yes, print 'HELLO name. WHY ARE WE SCREAMING?'
// else interpolate string into 'Hello NAME.'
*/
const RL = require('readline-sync');

userInput = RL.question('What is your name? ');

if (userInput === '') {
  console.log('WHO ARE YOU?!');
} else if (userInput[userInput.length - 1] === '!') {
  console.log(`HELLO ${userInput.slice(0, -1).toUpperCase()}. WHY ARE WE SCREAMING?`);
} else {
  console.log(`Hello ${userInput}.`);
}
