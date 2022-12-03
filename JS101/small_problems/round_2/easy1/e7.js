/*
algo:
  check if len of `str1` is > `str2`
    if yes display `str1` + `str2` + str1`
  else, display oposite concatenation
*/

function shortLongShort(str1, str2) {
  if (str1.length < str2.length) {
    return console.log(str1 + str2 + str1);
  }
  return console.log(str2 + str1 + str2);
}

shortLongShort('abc', 'defgh');    // "abcdefghabc"
shortLongShort('abcde', 'fgh');    // "fghabcdefgh"
shortLongShort('', 'xyz');         // "xyz"
