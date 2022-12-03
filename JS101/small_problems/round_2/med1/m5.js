/*
Write a function that takes a sentence string as an argument and returns that string with every occurrence of a "number word" — 'zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine' — converted to its corresponding digit character.

in: string
out: string
rules:
_ convert each 'number word' to corresponding number
_ if number word has trailing symbol, preserve symbol in setence
_ assume, all number words are lower case

algo:
_ declare `numWordKey` init to array of number words in order 0-9
_ declare `tempStr` init to `strIn`;
_ iterate over values in `numWordKey`
__ replace all occurances with index of value in `numWordKey`
__ reassign `tempStr` to return from `replaceAll`

_ return `tempStr`

*/

function wordToDigit(strIn) {
  let numWordKey = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
  let tempStr = strIn;

  for (let numWord of numWordKey) {
    tempStr = tempStr.replaceAll(numWord, String(numWordKey.indexOf(numWord)));
  }
  return console.log(tempStr);
}


wordToDigit('Please call me at five five five one two three four. Thanks.');
// "Please call me at 5 5 5 1 2 3 4. Thanks."
