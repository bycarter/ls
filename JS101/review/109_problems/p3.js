// time: 34min
// Write a function named toWeirdCase that accepts a string,
// and returns the same sequence of characters with every
// 4th character in every second word converted to
// uppercase. Other characters should remain the same.
/*
in: string
out: string
rules:
_ convert every 4th char, in every 2nd word to Upper Case
_ assume -> strIn will always have >= 2 words
_ assume -> 2nd word will always have >= 4 chars
ds: array
algo:
_ split string into array of words
_ declare `strArrNew` init []
_ iterate over indexes in `strArr`
__ if `idx` 0 or even, push to `strArrNew`
__ if odd && char 4 esists

___ declare `upWord` init ''
___ loop over characters
____ concat each char to `upWord`, capitalizing every 4th


___ else if NO char 4
____ push unchanged elem to `strArrNew`

_ concat `strArrNew` with spaces and return
*/

function toWeirdCase(strIn) {
  let strArr = strIn.split(' ');
  let strArrNew = [];

  strArr.forEach((elem, idx, arr) => {
    if (idx === 0 || idx % 2 === 0) {
      strArrNew.push(elem);
      
    } else if (idx % 2 !== 0 && arr[idx].length >= 4) {
      let upWord = '';

      for (let idx = 0; idx < elem.length; idx++) {

        if ((idx + 1) % 4 === 0) {
          upWord += elem[idx].toUpperCase();
        } else {
          upWord += elem[idx];
        }
      }
      strArrNew.push(upWord);

    } else {
      strArrNew.push(elem);
    }
  });
  return strArrNew.join(' ');
}



// Examples:

console.log(
  toWeirdCase('Lorem Ipsum is simply dummy text of the printing world') ===
              'Lorem IpsUm is simPly dummy texT of the printing worLd');
console.log(
  toWeirdCase('It is a long established fact that a reader will be distracted') ===
              'It is a lonG established facT that a reader wilL be disTracTed');
console.log(toWeirdCase('aaA bB c') === 'aaA bB c');
console.log(
  toWeirdCase('Miss Mary Poppins word is supercalifragilisticexpialidocious') ===
              'Miss MarY Poppins worD is supErcaLifrAgilIstiCexpIaliDociOus');

// The tests above should print "true".
