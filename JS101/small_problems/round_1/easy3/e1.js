// in: string of chars with duplicate letters
// out: string with consecutive duplicates removed
// test: moved to end
// ds: string
// algo:
// create temp variable
// iterate over chars in argument
// write first char to temp
// if second equals last char in temp, continue
// else add char to end

function crunch(arg) {
  let temp = '';
  for (const val of arg) {
    if ((temp.length === 0) || (temp[temp.length - 1] !== val)) {
      temp += val;
    }
  }
  return console.log(temp);
}
crunch('ddaaiillyy ddoouubbllee');    // "daily double"
crunch('4444abcabccba');              // "4abcabcba"
crunch('ggggggggggggggg');            // "g"
crunch('a');                          // "a"
crunch('');                           // ""
