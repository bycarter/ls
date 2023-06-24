/*
in: number
out: string(roman numeral)
rules:
- convert numbers between 1 - 3000 to roman numberal

algo:
- determine multiples

helper functions
- thousands

- hundreds

- tens

- ones

main
- SET `stringNum` init to string `numIn`
- SET `arrStringNum` init to split `stringNum`
- SET `multiple` init to let of `arrStringNum`

 */

class RomanNumeral {
  constructor(numIn) {
    this.num = numIn;
  }
  toRoman() {
    const arrStringNum = String(this.num).split('').reverse();
    const multiple = arrStringNum.length;
    console.log({num: this.num, arrStringNum, multiple})
    function thousands(numIn) {
      let map = ['', 'M', 'MM', 'MMM'];
      return map[numIn];
    }
    function hundreds(numIn) {
      let map = ['', 'C', 'CC', 'CCC', 'CD', 'D', 'DC', 'DCC', 'DCCC', 'CM'];
      return map[numIn];
    }
    function tens(numIn) {
      let map = ['', 'X', 'XX', 'XXX', 'XL', 'L', 'LX', 'LXX', 'LXXX', 'XC'];
      return map[numIn];
    }
    function ones(numIn) {
      let map = ['', 'I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX'];
      return map[numIn];
    }
    let romanNumeral = '';
    for (let idx = multiple -1; idx >= 0; idx--) {
      let currentDigit = arrStringNum[idx];
      console.log({idx, currentDigit})
      switch(String(idx)) {
        case '3':
          romanNumeral += thousands(currentDigit);
          break;
        case '2':
          romanNumeral += hundreds(currentDigit);
          break;
        case '1':
          romanNumeral += tens(currentDigit);
          break;
        case '0':
          romanNumeral += ones(currentDigit);
          break;
      }
    }
    return romanNumeral;
  }
}

let rn = new RomanNumeral(1);
console.log(rn.toRoman());

module.exports = RomanNumeral;