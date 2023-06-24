/*
in: string
out: score
rules:
- empty string = 0
- escape chars = 0
- null = 0
- ignore case
 */

class Scrabble {
  constructor(wordIn) {
    this.word = wordIn;
  }

  score() {
    let context = this;
    if (context.word === null) return 0;
    let key = {
      'a': 1, 'e': 1, 'i': 1, 'o': 1, 'u': 1, 'l': 1, 'n': 1,
      'r': 1, 's': 1, 't': 1, 'd': 2, 'g': 2, 'b': 3, 'c': 3,
      'm': 3, 'p': 3, 'f': 4, 'h': 4, 'v': 4, 'w': 4, 'y': 4,
      'k': 5, 'j': 8, 'x': 8, 'q': 10, 'z': 10,
    }
    let sumScore = 0;
    let word = context.word.trim().toLowerCase();
    for (let char of word) {
      sumScore += key[char];
    }
    return sumScore;
  }
  static score(secondWord) {
    return (new Scrabble(secondWord)).score();
  }
}


module.exports = Scrabble;