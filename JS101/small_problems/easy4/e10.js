// input: string
// output: string
// data s: array
//algo:
// split string into array
// iterate through items
//  reverse first and last letter
//  map into a new array
// join into string with space between it

function swap(str) {
  let strArr = str.split(' ').map(word => word.split(''));
  let result = [];
  for (let wordArr of strArr) {
    if (wordArr.length === 1) {
      result.push(wordArr[0]);
      continue;
    }
    let firstLetter = wordArr.shift();
    let lastLetter = wordArr.pop();
    wordArr.push(firstLetter);
    wordArr.unshift(lastLetter);

    result.push(wordArr.join(''));
  }
  return console.log(result.join(' '));
}


// tests:
swap('Oh what a wonderful day it is');  // "hO thaw a londerfuw yad ti si"
swap('Abcde');                          // "ebcdA"
swap('a');                              // "a"
