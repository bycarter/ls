// time 13m, 46s
/*
Write a function that takes a string and returns an object containing the following three properties:

-> the percentage of characters in the string that are lowercase letters
-> the percentage of characters that are uppercase letters
-> the percentage of characters that are neither

You may assume that the string will always contain at least one character.

in: str
out: obj
algo:
split string into array of chars `strArr`
find len of `strArr`, assign to `strLen`

filter lower case chars into array `lowerChars`
find len of `lowerChars`, assign to `lowerLen`
filter upper case chars into array `upperChars`
find len of `upperChars`, assign to `upperLen`

calc percent of lower, upper, and other, assign to `lowerP`, `upperP`, and `otherP`

declare `statObj` and initialize with each calculated value
return `statObj`
*/
function letterPercentages(strIn) {
  const PERCENTAGE_MULTIPLIER = 100;
  let strArr = strIn.split('');
  let strLen = strArr.length;

  let lowerChars = strArr.filter(elem => elem.match(/[a-z]/g));
  let lowerLen = lowerChars.length;
  let upperChars = strArr.filter(elem => elem.match(/[A-Z]/g));
  let upperLen = upperChars.length;

  let [lowerP, upperP, otherP] = [lowerLen/strLen, upperLen/strLen, (strLen-lowerLen-upperLen)/strLen];
  
  let statObj = {
    lowercase: String((lowerP*PERCENTAGE_MULTIPLIER).toFixed(2)),
    uppercase: String((upperP*PERCENTAGE_MULTIPLIER).toFixed(2)),
    neither: String((otherP*PERCENTAGE_MULTIPLIER).toFixed(2))
  }
  return console.log(statObj);
  
}

letterPercentages('abCdef 123');
// { lowercase: "50.00", uppercase: "10.00", neither: "40.00" }

letterPercentages('AbCd +Ef');
// { lowercase: "37.50", uppercase: "37.50", neither: "25.00" }

letterPercentages('123');
// { lowercase: "0.00", uppercase: "0.00", neither: "100.00" }
