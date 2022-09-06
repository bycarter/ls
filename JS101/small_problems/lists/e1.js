// input: num
// output: num
// data s: array
// algo:
//  coerce datatype into string
//  split chars into array
//  coerce each char into a number
//  reduce all items into sum

function sum(num) {
  let temp = String(num).split('').reduce((prev, curr) => prev + Number(curr), 0);
  console.log(temp);
}

// tests:
sum(23);           // 5
sum(496);          // 19
sum(123456789);    // 45
