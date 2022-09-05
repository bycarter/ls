// input: none
// output: string
// rules:
//  randomly chose age from 20 - 120 (inclusive)
//  log to console
// data s: variable
// algo:
//  generage randome number between 20 - 120
//  concatenate that in string
//  log to console


function getRandom(min, max) {
  return Math.random() * (max - min) + min;
}

let age = Math.floor(getRandom(20, 121));

console.log(`Teddy is ${age} years old!!`);

