const allCaps = (str) => {
  str.length > 10 ? console.log(str.toUpperCase()) : console.log(str);
}

rlSync = require('readline-sync');
strIn = rlSync.question('Enter a string: ');

allCaps(strIn);
