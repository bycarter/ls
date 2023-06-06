/*

 */

class Anagram {
  constructor(strIn) {
    this.string = strIn;
  }
  match(words) {
    let that = this;
    function testCharMatch(stringIn) {
      stringIn = stringIn.toLowerCase();
      let baseString = that.string.toLowerCase();

      if (stringIn === baseString) return false;
      if (stringIn.length !== baseString.length) return false;
      for (let char of stringIn) {
        if (!baseString.includes(char) ||
          !(baseString.split('').filter(item => item === char).length ===
            stringIn.split('').filter(item => item === char).length)) {
          return false;
        }
      }
      return true;
    }
    let matches = [];
    for (let word of words) {
      if (testCharMatch(word)) {
        matches.push(word);
      }
    }
    return matches;
  }
}

// let a = new Anagram('abccddd');
// // console.log(a.string);
// console.log(a.match(['abccddd', 'baccddd']));

module.exports = Anagram;