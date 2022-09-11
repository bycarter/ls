// input: string
// output: bool
// data s: array
// algo:
//  split chars into array
//  check if every char is upper case
//  return true if yes

function isUppercase(str) {
  return console.log(str.split('').every( item => item.toUpperCase() === item));
}

//  tests:
isUppercase('t');               // false
isUppercase('T');               // true
isUppercase('Four Score');      // false
isUppercase('FOUR SCORE');      // true
isUppercase('4SCORE!');         // true
isUppercase('');                // true
