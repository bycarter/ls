
// Q1
// Can we assign values passed the current end of an array?
// Yes.  The values in between are undefined

// Q2
// let str1 = "Come over here!"; // true
// let str2 = "What's up, Doc?"; // false

function testEx(str) {
  if (str[str.length - 1] === '!') {
    console.log('yes');
  } else if (str[str.length - 1] !== '!') {
    console.log('no');
  } else {
    console.log('broken');
  }
}
//testEx(str1);
//testEx(str2);
// ~~~~~~~~~> Other Solution
// if (str.endsWith('!');

// Q3
// let ages = { Herman: 32, Lily: 30, Grandpa: 402, Eddie: 10 };
// check if object includes 'Spot' in keys
// Object.keys(ages).includes('Spot');
// ~~~~~~~~~> Other Solution
// ages.hasOwnProperty('Spot')

// Q4
//let munstersDescription = "the Munsters are CREEPY and Spooky.";
// => The munsters are creepy and spooky.
//let newString = munstersDescription[0].toUpperCase() + munstersDescription.substring(1).toLowerCase();
//console.log(newString);

//Q5
//true
//false

// Q6
// let ages = { Herman: 32, Lily: 30, Grandpa: 5843, Eddie: 10 };
// let additionalAges = { Marilyn: 22, Spot: 237 };
// let allAges = Object.assign(ages, additionalAges);
// console.log(allAges);

// Q7
// let str1 = "Few things in life are as important as house training your pet dinosaur.";
// let str2 = "Fred and Wilma have a pet dinosaur named Dino.";
// function findWord(str, word) {
//  if (str.replaceAll('.', '').split(' ').includes(word)) {
//    return 'Has Dino';
//  }
//  return 'No Dino'
//}
//let a = 'Dino';
//console.log(findWord(str1, a));
//console.log(findWord(str2, a));

// Q8
//let flintstones = ["Fred", "Barney", "Wilma", "Betty", "Bambam", "Pebbles"];
//flinstones[flinstones.length] = 'Dino';

// Q9
// flinstones.push('new', 'more');
// flinstones = flinstones.concat(['new', 'more']);

// Q10
let advice = "Few things in life are as important as house training your pet dinosaur.";
let arrA = advice.split(' ')
let nAdvice = '';
for (let i = 0; arrA[i] !== 'house'; i++) {
  nAdvice += arrA[i] + ' ';
}
console.log(nAdvice);
