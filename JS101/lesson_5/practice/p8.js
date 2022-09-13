// Using the forEach method, write some code to output:
// all vowels from the strings in the arrays. Don't use a for or while loop.

let obj = {
  first: ['the', 'quick'],
  second: ['brown', 'fox'],
  third: ['jumped'],
  fourth: ['over', 'the', 'lazy', 'dog'],
};

let allVowels = '';

for (let i in obj) {
  obj[i].forEach(elem => {
    allVowels += elem.match(/[aeiou]/g).join('');
  })
}
console.log(allVowels);
