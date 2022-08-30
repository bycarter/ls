// Q1
/*let advice = "Few things in life are as important as house training your pet dinosaur.";
let newAdvice = advice.replaceAll('important', 'urgent');
console.log(advice);
console.log(newAdvice); */
/*
// Q2
let numbers = [1, 2, 3, 4, 5];
console.log(numbers);
console.log(numbers.slice().reverse());
console.log(numbers);

console.log('part 2');
console.log(numbers); // [ 5, 4, 3, 2, 1 ]
console.log([...numbers].sort((num1, num2) => num2 - num1));
console.log(numbers);

console.log('bonus');
*/
// Q3
/*
let numbers = [1, 2, 3, 4, 5, 15, 16, 17, 95, 96, 99];

let number1 = 8;  // false
let number2 = 95; // true
console.log(numbers.includes(number1));
console.log(numbers.includes(number2));
*/
// Q4
/*
let famousWords = "seven years ago...";
console.log('Four score and ' + famousWords);
let allWords = ''
console.log(allWords.concat('Four score and ', famousWords));
*/
// Q5
/*
let arr = [1, 2, 3, 4, 5];
arr.splice(2, 1);
console.log(arr);
*/
// Q6
/*
let flinstones = ["Fred", "Wilma"];
let extra = ["Barney", "Betty"];
let more = ["Bambam", "Pebbles"];

flinstones = [...flinstones, ...extra, ...more];
console.log(flinstones);
*/
// Q7
/*
let flintstones = { Fred: 0, Wilma: 1, Barney: 2, Betty: 3, Bambam: 4, Pebbles: 5 };
Object.entries(flinstones).filter( pair => pair[0] === 'Barney' ).shift();
*/
// Q8
/*
Array.isArray(arr);
*/
// Q9
/*
let title = "Flintstone Family Members";
let spaces = Math.floor((40 - title.length) / 2);
title.padStart(spaces + title.length);
*/
// Q10
let statement1 = "The Flintstones Rock!";
let statement2 = "Easy come, easy go.";
