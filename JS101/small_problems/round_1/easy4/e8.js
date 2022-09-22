// input: string
// output: object
// data s: object
// algo:
//  declare `arr` initialize with split words from string
//  declare `wordObj` initialize to {}
//  iterate over words in `arr`
//    get word length
//    check if key exists
//      if no, initialize value to 1
//      if yes, increment value by 1
//  return object

function wordSizes(str) {
  if (str.length === 0) {
    return console.log({});
  }
  let arr = str.split(' ');
  let wordObj = {};

  for (let word of arr) {
    let len = word.length;
    wordObj.hasOwnProperty(len) ? wordObj[len] += 1 : wordObj[len] = 1;
  }
  return console.log(wordObj);
}


// tests:
wordSizes('Four score and seven.');                       // { "3": 1, "4": 1, "5": 1, "6": 1 }
wordSizes('Hey diddle diddle, the cat and the fiddle!');  // { "3": 5, "6": 1, "7": 2 }
wordSizes("What's up doc?");                              // { "2": 1, "4": 1, "6": 1 }
wordSizes('');                                            // {}
