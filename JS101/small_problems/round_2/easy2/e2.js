const RL = require('readline-sync');

let uName = RL.question('What is your name? ');

function greet(nameIn) {
  if (nameIn[nameIn.length - 1] === '!') {
    console.log(`HELLO ${nameIn.trim().toUpperCase()}. WHY ARE WE SCREAMING?`);
  } else { 
    console.log(`Hello ${nameIn}`);
  }
}

greet(uName);
