/*
input : an array of strings, and an object with two attributes
output: a string greeting
tests : see below
data s: none
algo  :
// create name variable
// iterate over array
// - join values with single space
// - assign to name
// return string-greeting using interpolation of name and obj attributes
*/

let testArr = ["Paul", "\"Mushroom\"", "Stamets"];
let testObj = { title: "Master", occupation: "Mycologist" };

let greeting = (arr, obj) => {
  let name = arr.join(' ');
  return `Hello, ${name}! Nice to have a ${obj.title} ${obj.occupation} around!`
}
console.log(greeting(testArr, testObj));
