// input: number
// output: number
// algo: 
//  coerce number to string
//  split into array of chars
//  reverse array
//  join into string
//  coerce into number

function reverseNumber(num) {
  console.log(Number(String(num).split('').reverse().join('')));
}

// tests:
reverseNumber(12345);    // 54321
reverseNumber(12213);    // 31221
reverseNumber(456);      // 654
reverseNumber(12000);    // 21 -- Note that leading zeros in the result get dropped!
reverseNumber(1);        // 1
