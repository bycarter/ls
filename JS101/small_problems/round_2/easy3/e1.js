
function crunch(str) {
  if (str.length < 2) return console.log(str);
  let strOut = str.split('').filter((elem, idx, arr) => {
    return elem !== arr[idx - 1];
  }).join('');
  return console.log(strOut);
}



crunch('ddaaiillyy ddoouubbllee');    // "daily double"
crunch('4444abcabccba');              // "4abcabcba"
crunch('ggggggggggggggg');            // "g"
crunch('a');                          // "a"
crunch('');                           // ""
