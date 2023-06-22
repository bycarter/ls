/*
Class Series:
- in: num (str)

slices:
- in: num (seq len); `subLen`
- out: array of arrs
- rules:
-- find all substrings of len `subLen`
-- if `subLen` longer than class-num, throw error

_validateNums
in: numStr, `subLen`
out: bool
rules:
-- if `subLen` longer than `numStr`, throw error
-- else return true


 */

class Series {
  constructor(sequence) {
    this.sequence = sequence;
  }
  slices(subLen) {
    this._validateInput(subLen);
    let subArrs = [];
    for (let idx = 0; idx + subLen <= this.sequence.length; idx++) {
      subArrs.push(this.sequence.slice(idx, idx + subLen).split('').map(str => Number(str)));
    }
    return subArrs;
  }
  _validateInput(subLen) {
    if (subLen > this.sequence.length) {
      throw new Error();
    }
  }
}

module.exports = Series;
