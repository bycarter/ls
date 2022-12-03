/*
in: num
out: num
rules:
_ sum all unique multiples of 3 or 5 from 0 to `number`
ds:
  array to hold multiples

algo:
_ declare `multiples` init []
_ iterate over all numbers up to `number`
__ IF multiple of 3 or 5 AND not already included in `multiples`,
___ push to `multiples`

_ return sum of all elements in `multiples`

*/
function solution(number){
  let multiples = [];
  
  for (let num = 3; num < number; num++) {
    if ((num % 3 === 0) || (num % 5 === 0)) {
        multiples.push(num);
    }
  }
  return multiples.reduce((a, b) => a + b, 0);
}
