// input: string
// output: object
// rules:
//  list num of chars of lower case
//  list num of chars of upper case
//  list num of non-alphabetical chars
// algo:
//  declare `objOut` init to {};
//  declare `lower` = 0;
//  declare `upper` = 0;
//  declare `other` = 0;
//
//  split string into array of chars
//  count lower, upper, and other chars
//  increment corresponding vars
//
//  add properties to object with values of counting vars

function letterCaseCount(str) {
  let objOut = {};
  objOut.lowercase = str.replace(/[^a-z]/g, '').length;
  objOut.uppercase = str.replace(/[^A-Z]/g, '').length;
  objOut.neither = str.length - objOut.lowercase - objOut.uppercase;

  console.log(objOut);
}
// tests:
letterCaseCount('abCdef 123');  // { lowercase: 5, uppercase: 1, neither: 4 }
letterCaseCount('AbCd +Ef');    // { lowercase: 3, uppercase: 3, neither: 2 }
letterCaseCount('123');         // { lowercase: 0, uppercase: 0, neither: 3 }
letterCaseCount('');            // { lowercase: 0, uppercase: 0, neither: 0 }
