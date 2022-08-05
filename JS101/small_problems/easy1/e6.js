let rlSync = require('readline-sync');

let numIn = parseInt(rlSync.question('Please enter an integer greater than 0: '));
let opt = rlSync.question('Enter "s" to compute the sum, or "p" to compute the product. ');

while (opt !== 's' && opt !== 'p') {
  console.log('Invalid entry...');
  opt = rlSync.question('Enter "s" to compute the sum, or "p" to compute the product. ');
}

let calc = (num, op) => {
  let result = 0;
  if (op === 's') {
    for (let i=1; i <= num; i++) {
      result += i;
    }
  } else {
    result = 1;
    for (let i=1; i <= num; i++) {
      result *= i;
    }
  }
  return result;
}

console.log(calc(numIn, opt));
