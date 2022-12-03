/*
in: string
out: number
ds: object
rules:
_ count frequency of all letters and numbers
_ return count of characters with frequency > 1
__ IGNORE case
algo:
_ declare `frequency` init {}
_ declare `lowerText` init to copy of `text` in lower case

_ iterate over all characters in `lowerText`
__ IF `char` DOES NOT exists in `frequency`
___ initialize property to 1
__ ELSE increment property `char` by 1

_ return count of properties with value > 1
*/

function duplicateCount(text){
  let frequency = {};
  let lowerText = text.toLowerCase();
  
  for (let char of lowerText) {
    if (!frequency[char]) {
      frequency[char] = 1;
    } else {
      frequency[char] += 1;
    }
  }
  return Object.values(frequency).filter(value => value > 1).length;
}
