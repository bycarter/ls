// input: string
// ouput: array
// data s: array
// algo:
//  declare arrOut init []
//  split string into array of words
//  map words into arrOut and concat a space and length

function wordLengths(str) {
  if (!str) return console.log([]);
  let arrOut = [];

  str.split(' ').map(word => arrOut.push(`${word} ${word.length}`));

  return console.log(arrOut);
}

// tests:
wordLengths('cow sheep chicken');
// ["cow 3", "sheep 5", "chicken 7"]

wordLengths('baseball hot dogs and apple pie');
// ["baseball 8", "hot 3", "dogs 4", "and 3", "apple 5", "pie 3"]

wordLengths("It ain't easy, is it?");
// ["It 2", "ain't 5", "easy, 5", "is 2", "it? 3"]

wordLengths('Supercalifragilisticexpialidocious');
// ["Supercalifragilisticexpialidocious 34"]

wordLengths('');      // []
wordLengths();        // []
