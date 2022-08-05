let rlSync = require('readline-sync');
let str1 = rlSync.question('Enter first string: ');
let str2 = rlSync.question('Enter second string: ');

let shortLongShort = (strOne, strTwo) => {
  let lenOne = strOne.length;
  let lenTwo = strTwo.length;

  if (lenOne > lenTwo) console.log(strTwo + strOne + strTwo);
  if (lenTwo > lenOne) console.log(strOne + strTwo + strOne);
}

shortLongShort(str1, str2);
