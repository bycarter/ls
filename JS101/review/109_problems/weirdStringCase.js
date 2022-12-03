/*
in: string
out: string
rules:
_ capitalize each even character in each word

algo:
_ declare `arrayOfWords` init to `stringIn` split on ' '
_ declare `weirdWords` init []
_ iterate over each word in `arrayOfWords` as `word`
__ declare `weirdWord` init ''

___ iterate over index of chars in `word`
___ concat each letter to `weirdWord`, capitalizing every even index
___ push to `weirdWords`
_ return `weirdWords` joined with space
*/


function toWeirdCase(string){
  let arrayOfWords = string.split(' ');
  let weirdWords = [];

  for (let word of arrayOfWords) {
    let weirdWord = '';
    for (let index in word) {
      if (index % 2 === 0) {
        weirdWord += word[index].toUpperCase();
      } else {
        weirdWord += word[index];
      }
    }
    weirdWords.push(weirdWord);
  }
  return weirdWords.join(' ');
}
