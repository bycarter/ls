let rlSync = require('readline-sync');
let age = Number(rlSync.question('How old are you? '));

console.log(`You are ${age} years old.`)

for (let i=1; i<5; i++) {
  let time = i*10;
  console.log(`In ${time} years, you will be ${time + age} years old`);
}
