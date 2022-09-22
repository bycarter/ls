// input: num
// output: string
// algo:
//  declare arrOut init to []
//  convert to string
//  split string into chars
//  map to `arrOut`

function digitList(num) {
  return console.log(String(num).split('').map(item => Number(item)));
}

// tests:
digitList(12345);       // [1, 2, 3, 4, 5]
digitList(7);           // [7]
digitList(375290);      // [3, 7, 5, 2, 9, 0]
digitList(444);         // [4, 4, 4]
