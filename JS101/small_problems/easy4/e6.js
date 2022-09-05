// input: number
// output: bool
// data s: variable
// algo:
//  convert number to string
//  test if string === split reverse join

function isPalindromicNumber(num) {
  strNum = String(num);
  return console.log(strNum === strNum.split('').reverse().join(''));
}

isPalindromicNumber(34543);        // true
isPalindromicNumber(123210);       // false
isPalindromicNumber(22);           // true
isPalindromicNumber(5);            // true
