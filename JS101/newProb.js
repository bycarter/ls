/*
in: array of strings
out: array of strings
rules:
  - find longest substring of vowels for each element in array
  - return array of elements sorted:
  -- first in decreasing order of qualifying substring length
  -- then by order of appearance in `arrIn`
  implicit:
  - empty strings are placed at end
  - y is not a vowel
ds:
- (use this section if needed)

algo:
- declare `copyArr` init to argument
- declare `stringSubstringLenMap` init []

- iterate over each element in `arrIn`
- declare `longestSub` init 0
-- iterate over all substrings
--- IF substring is ( all vowels ) AND ( longer than `longestSub` )
---- REASSIGN `longestSub` to current substring len
--- PUSH [element, `longestSub`] to `stringSubstringLenMap`

- declare `sortedStrings` init []
- SORT `stringSubstringLenMap` in descending order
- iterate over `stringSubstringLenMap`

- declare `currentHighestString` init to return value of filter below
-- filter `stringSubstringLenMap` to only include elements with length equal to current elements len
--- IF filter returns an array of a single element
---- PUSH string to `sortedStrings`
--- ELSE iterate over `copyArr`
---- MAP `currentHighestString` to only include first element of each subarray
---- IF `currentHighestString` includes element being iterated over AND `sortedStrings` != include
----- PUSH to `sortedStrings`
----- CONTINUE

- return `sortedStrings`
 */
function sortStringsByVowels(arrIn) {
  let copyArr = arrIn;
  let stringSubstringLenMap = [];

  for (let str of copyArr) {
    let longestSub = 0;

    for (let idx = 0; idx < str.length; idx++) {
      for (let jdx = idx + 1; jdx < str.length + 1; jdx++) {
        let substr = str.slice(idx, jdx).split('');

        if (substr.every(char => char.match(/[aeiou]/gi))) {
          if (substr.length > longestSub) {
            longestSub = substr.length;
          }
        }
      }
    }
    stringSubstringLenMap.push([str, longestSub]);
  }
  let sortedStrings = [];
  stringSubstringLenMap.sort((a, b) => b[1] - a[1]);

  for (let subArr of stringSubstringLenMap) {
    let currentHighestStringArr = stringSubstringLenMap.filter(elem => {
      return elem[1] === subArr[1];
    });
    if (currentHighestStringArr.length === 1) {
      sortedStrings.push(subArr[0]);
    } else {
      let substrings = currentHighestStringArr.map(elem => elem[0]);
      for (let str of copyArr) {
        if (substrings.includes(str) && !sortedStrings.includes(str)) {
         sortedStrings.push(str);
        }
      }
    }
  }
  return sortedStrings;
}

console.log(sortStringsByVowels(["aa","eee","oo","iiii"]))//,["iiii","eee","aa","oo"]);
console.log(sortStringsByVowels(["a","e","ii","ooo","u"]))//,["ooo","ii","a","e","u"]);
console.log(sortStringsByVowels( ["ioue","ee","uoiea"]))// , ["uoiea", "ioue","ee"]);
console.log(sortStringsByVowels( ["high","day","boot"]))// , ["boot","high","day"]);
console.log(sortStringsByVowels(["none","uuu","Yuuuge!!"]))// , ["uuu","Yuuuge!!","none"]);
console.log(sortStringsByVowels(["AIBRH","","YOUNG","GREEEN"]))// , ["GREEEN","AIBRH","YOUNG",""]);
console.log(sortStringsByVowels(["jyn","joan","jimmy","joey"]))// , ["joan","joey","jimmy","jyn"]);
console.log(sortStringsByVowels(["uijijeoj","lkjlkjww2","iiutrqy"]))//// , ["iiutrqy","uijijeoj","lkjlkjww2"]);
console.log(sortStringsByVowels(["how about now","a beautiful trio of"]))// , ["a beautiful trio of","how about now"]);
console.log(sortStringsByVowels(["every","bataux","is","waaaay","loose"]))// , ["waaaay","bataux","loose","every","is"]);
