rlSync = require('readline-sync');
numIn = rlSync.question('Enter a number: ');

const fact = (num) => {
  let fNum = num;
  for (let i = num - 1; i > 0; i--) {
    fNum *= i;
  }
  console.log(fNum);
}

fact(numIn);
