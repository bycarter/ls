class BeerSong {
  static verse(numIn) {
    // 99 - 2
    // 2 - 1
    // 1 - 0
    let [ upperNum1, upperNum2, lowerNum ] = [0, 0, 0];
    if (numIn > 1) {
      upperNum1 = String(numIn) + ' bottles';
      upperNum2 = String(numIn) + ' bottles';
      lowerNum =  numIn === 2 ? '1 bottle' : String(numIn - 1) + ' bottles';
    } else if (numIn === 1) {
      upperNum1 = '1 bottle';
      upperNum2 = '1 bottle';
      lowerNum = 'no more bottles';
    } else {
      return "No more bottles of beer on the wall, no more " +
        "bottles of beer.\nGo to the store and buy some " +
        "more, 99 bottles of beer on the wall.\n";
    }
    return `${upperNum1} of beer on the wall, ${upperNum2} of beer.\n` +
      `Take ${numIn === 1 ? 'it' : 'one'} down and pass it around, ${lowerNum} of beer ` +
      "on the wall.\n";
  }
  static verses(start, end) {
    let someVerses = '';
    for (let verseNum = start; verseNum >= end; verseNum--) {
      someVerses += this.verse(verseNum);
      if (verseNum !== end) {
        someVerses += "\n";
      }
    }
    return someVerses;
  }
  static lyrics() {
    return this.verses(99, 0);
  }
}

module.exports = BeerSong;
