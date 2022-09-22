// input: string
// output: string
// data s: array
// algo:
//  split string into array of words `arrWords`
//  split words in array into subarray of chars
//  declare `arrOut` init []
//  iterate over `arrWords`
//   if length of item is greater than 4
//    reverse it
//   join it
//   push it to `arrWords`
//  join `arrWords`

function reverseWords(str) {
  let arrWords = str.split(' ').map( item => item.split('') );
  let arrOut = [];

  arrWords.forEach( word => {
    if (word.length > 4) {
      word.reverse();
    }
    arrOut.push(word.join(''));
  });

  console.log(arrOut.join(' '));
}

//  tests:
reverseWords('Professional');             // "lanoisseforP"
reverseWords('Walk around the block');    // "Walk dnuora the kcolb"
reverseWords('Launch School');            // "hcnuaL loohcS"
