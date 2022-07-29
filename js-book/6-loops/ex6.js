rlSync = require('readline-sync');
numIn = rlSync.question('Enter a number: ');

const fact = (num) => {
  let fNum = num;
  for (let i = num - 1; i > 0; i--) {
    fNum *= i;
  }
  console.log(fNum);
}

console.log('fact function: ');
fact(numIn);

const rFact = (rNum) => {
  if (rNum < 2) return rNum;
  return rNum * rFact(rNum -1);
}

console.log('rFact function: ');
console.log(rFact(numIn));
