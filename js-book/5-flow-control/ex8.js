rlSync = require('readline-sync');
numIn = rlSync.question('Enter a number: ');

const numRange = (number) => {
    if (number >=0 && number <= 50) {
      console.log(`${number} is between 0 and 50`);
    } else if (number > 50 && number <= 100) {
      console.log(`${number} is between 50 and 100`);
    } else if (number > 100) {
      console.log(`${number} is greater than 100`);
    } else if (number < 0) {
      console.log(`${number} is less than 0`);
  }
}

numRange(numIn);
