/*
in: num
out: string (type of num)
rules:
- if negative, throw error
- IF Aliquot sum:
-- equal to `num` -> perfect
-- greate than `num` -> abundant
-- less than `num` -> deficient

 */

class PerfectNumber {
  static classify(num) {
    if (num < 0) throw new Error;
    function calcAliquot(num) {
      let aliquot = 0;
      for (let ct = num - 1; ct > 0; ct--) {
        if (num % ct === 0) {
          aliquot += ct;
        }
      }
      return aliquot;
    }
    let aliquot = calcAliquot(num);
    if (aliquot > num) {
      return 'abundant';
    } else if (aliquot < num) {
      return 'deficient';
    } else {
      return 'perfect';
    }
  }
}

module.exports = PerfectNumber;