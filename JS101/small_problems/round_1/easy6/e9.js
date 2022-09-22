// input: string
// output: string
// algo:
//  split words into array
//  reverse array
//  join words into string

function reverseSentence(str) {
  if (str === '') return console.log('');
  console.log(str.split(' ').reverse().join(' '));
}

// tests:
reverseSentence('');                       // ""
reverseSentence('Hello World');            // "World Hello"
reverseSentence('Reverse these words');    // "words these Reverse"
