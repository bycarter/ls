/*
in: string (decimal number)
out: num (octal equivalent)
rules:
- convert each base-10 to base-8 (octal)
-- alph/alphanum -> 0
-- 6789, 9, 8 -> 0
--- IF contains '9' ERROR


methods:
- `toDecimal` - convert to decimal and return
 */

class Octal {
  constructor(strOctal) {
    this.strOctal = strOctal;
  }
  _validateOctal() {
    let oct = this.strOctal;
    if (oct.match(/[a-z89]/i)) {
     return false;
    }
    return true;
  }
  toDecimal() {
    if(this._validateOctal()) {
      let oct = this.strOctal;
      let decimal = [];
      for (let idx in oct) {
        decimal.push(oct[oct.length - idx - 1]*(8**idx));
      }
      console.log(decimal);
      return decimal.reduce((curr, elem) => curr + elem);
    }
    return 0;
  }
}


module.exports = Octal;


let o = new Octal('10');

console.log(o.toDecimal());

