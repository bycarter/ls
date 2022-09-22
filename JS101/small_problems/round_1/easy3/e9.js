/*
// input: string of mixed characters, `str`
// output: string of only alphabetic chars
// data s: array
// algo:
//  declare `result` and initialize it to empty array
//  declare `word` and initialize it to ''
//  iterate through characters in `str`
//  if character is alphabetic, write to `word`
//  else 
//  join `result` with ' '
//  log to console
*/

function cleanUp(str) {
  let result = [];
  let word = '';
  for (let val = 0; val < str.length; val++) {
    if (str[val].match(/[a-z]/i)) {
      word += str[val];
    } else {
      if (word.length > 0) {
        result.push(word);
        word = '';
      }
    }
  }
  console.log(result.join(' '));
}

// tests:
cleanUp("---What's my +*& line?");    // " what s my line "
